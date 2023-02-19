let count = 0;
let names = [];
let dict = {};
let playing = false;
let current_player = 0;
let current_words = -1;
let player_number = 1;
let interval;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function add_player(area) {
  $(`.${area}`).append(`
  <div class="d${player_number}">
    <input type="text" name="n" class="${0}">
    <button class="icon_button b${player_number}" onclick="delete_button(${player_number})">
    <i class="fas fa-times-circle"></i>
    </button>
    <br>
  </div>
  `);
  $(".d" + player_number).hide().show(250);
  player_number++;
}

function delete_button(player_number){
    $(".d" + player_number).hide(250);
    setTimeout(() => {
      $(".d" + player_number).remove();
    }, 250);
}

function start() {
  let invalid = false;
  $('input[type="text"]').each(function() {
    if ($(this).val() === "") {
      alert("玩家名稱請勿空白");
      invalid = true;
      return false;
    }
  });
  if (invalid) {
    return false;
  }
  $('input[name^="n"]').each(function() {
    count++;
  });
  if(count < 3 || count  > 10) {
    alert("遊戲人數需介於3至10人之間");
    count = 0;
    return false;
  }
  render_players_names ()
  $(".setting_div").remove();
  $(".board_div").show();
  shuffle(words);
  render_score_board()
  $("#current_player").html($(".name0").html());
}

function render_players_names () {
  names = []
  $('input[name^="n"]').each(function() {
    names.push([$(this).val(), this.className]);
  });
}

function render_score_board() {
  $("#score_board").html("")
  for (let i = 0; i < names.length; i++) {
    $("#score_board").append(`
    <tr>
      <td class="name${i}">${names[i][0]}</td>
      <td style="position: relative;">
        <button class="minus">
          <i class="icon_minus fas fa-minus ${i}"></i>
        </button>
        <div class="score${i}">${names[i][1]}</div>
        <button class="plus">
          <i class="icon_plus fas fa-plus ${i}"></i>
        </button>
      </td>
    </tr>
    `);
  }
}

function new_round() {
  dict = {};
  $("#checking_list").html("");
  $("#check").prop("disabled", true);
  $("#adjust_players_btn").prop("disabled", true);
  playing = true;
  $("#round_start_button").prop("disabled", true);
  $(".playing_div").show();
  current_words++;
  $("#words").html(words[current_words]);
  for (let i = 0; i < names.length; i++) {
    if (i !== current_player) {
      var btn = document.createElement("button");
      btn.innerHTML = $(".name" + i).html();
      btn.className = "btn" + i;
      $("#button_div").append(btn);
    }
  }
  startTimer(59);
}

function clear_round() {
  playing = false;
  $("#round_start_button").prop("disabled", false);
  $(".playing_div").hide();
  $("#button_div").html("");
  current_player++;
  if (current_player >= names.length) {
    current_player = 0;
  }
  $("#current_player").html(names[current_player][0]);
  Object.entries(dict).forEach(([key, value]) => {
    var li = document.createElement("li");
    li.innerHTML = key + " - " + value;
    $("#checking_list").append(li);
  });
  $("#check").prop("disabled", false);
  $("#adjust_players_btn").prop("disabled", false);
}

document.addEventListener("click", event => {
  const element = event.target;
  let index = element.className.slice(-1)
  if (element.className.slice(0, 10) === "icon_minus") {
    let adjust_minus = $(".score" + index).html();
    adjust_minus--;
    $(".score" + index).html(adjust_minus);
    names[index][1]--
  } else if (element.className.slice(0, 9) === "icon_plus") {
    let adjust_plus = $(".score" + index).html();
    adjust_plus++;
    $(".score" + index).html(adjust_plus);
    names[index][1]++
  } else if (playing == true && element.className.slice(0, 3) === "btn") {
    if (!isNaN(index)) {
      //if the class name is end with a number
      dict[words[current_words]] = $(
        ".name" + index
      ).html();
      var score_to_plus = $(".score" + index).html();
      score_to_plus++;
      $(".score" + index).html(score_to_plus);
      names[index][1]++

      var score_to_host = $(".score" + current_player).html();
      score_to_host++;
      $(".score" + current_player).html(score_to_host);
      names[current_player][1]++
    }
    current_words++;
    $("#words").html(words[current_words]);
  }
});

function startTimer(duration) {
  var timer = duration,
    seconds;

  interval = setInterval(function() {
    seconds = parseInt(timer % 60, 10);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    $("#time").text(seconds);

    if (--timer < -1) {
      alert("時間到！");
      enter_next_round()
    }
  }, 1000);
}
$(".btn_skip").on("click", function() {
  var score_to_deduct = $(".score" + current_player).html();
  score_to_deduct--;
  $(".score" + current_player).html(score_to_deduct);
  names[current_player][1]--
  
  dict[words[current_words]] = "跳過";
});

$(".quit_btn").on("click", function() {
  if(!confirm("確定放棄此輪？")) {
    return false
  }
  enter_next_round()
});

$("#adjust_players_btn").on("click", function() {
  $(this).prop("disabled", true);
  for (let i = 0; i < names.length; i++) {
    $(".adjust_players_input_div").append(`
    <div class="d${i}">
      <input type="text" name="n" value="${names[i][0]}" class="${names[i][1]}">
      <button class="icon_button b${i}" onclick="delete_button(${i})">
      <i class="fas fa-times-circle"></i>
      </button>
      <br>
    </div>
    `)
  }
  $(".adjust_players_div").fadeIn()
});

$(".confirm_adjust_players").on("click", function() {
  let invalid = false;
  count = 0
  $('input[type="text"]').each(function() {
    if ($(this).val() === "") {
      alert("玩家名稱請勿空白");
      invalid = true;
      return false;
    }
  });
  if (invalid) {
    return false;
  }
  $('input[name^="n"]').each(function() {
    count++;
  });
  if(count < 3 || count  > 10) {
    alert("遊戲人數需介於3至10人之間");
    count = 0;
    return false;
  }
  render_players_names()
  render_score_board()
  $(".adjust_players_div").fadeOut()
  setTimeout(() => {
    $(".adjust_players_input_div").html("")
  }, 400);
  if (current_player >= names.length) {
    current_player = 0
  }
  $("#current_player").html(names[current_player][0])
  $("#adjust_players_btn").prop("disabled", false);
});

function enter_next_round() {
  clearInterval(interval);
  clear_round();
  $("#time").text("60");
}

function adjust() {
  $(".minus, .plus").toggle();
}

function check() {
  $("#checking_list").toggle();
}
