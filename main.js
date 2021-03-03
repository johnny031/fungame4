let count = 0;
let names = [];
let dict = {};
let playing = false;
let current_player = 0;
let current_words = -1;
let player_number = 1;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

$("#add_player").on("click", function() {
    $("#input_div").append("<div class='d" + player_number + "'><input type='text' name='n'><button class='icon_button b" + player_number + "' onclick='delete_button(" + player_number + ")'><i class='fas fa-times-circle'></i></button><br></div>");
    $(".d"+player_number).hide().show(250);
    player_number++;
});
function delete_button(player_number){
    $(".d" + player_number).hide(250);
    setTimeout(() => {
      $(".d" + player_number).remove();
    }, 250);
}

function start() {
  let invalid = false;
  $('#input_div input[type="text"]').each(function() {
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
  $('input[name^="n"]').each(function() {
    names.push($(this).val());
  });
  $(".setting_div").hide();
  $(".board_div").show();
  shuffle(words);
  for (let i = 0; i < names.length; i++) {
    var tr = document.createElement("tr");
    var td_name = document.createElement("td");
    td_name.innerHTML = names[i];
    td_name.className = "name" + i;
    var td_btn = document.createElement("td");
    var btn_minus = document.createElement("button");
    var icon_minus = document.createElement("i");
    var div_score = document.createElement("div");
    var btn_plus = document.createElement("button");
    var icon_plus = document.createElement("i");

    td_btn.style.position = "relative";
    btn_minus.className = "minus";
    icon_minus.className = "icon_minus fas fa-minus " + i;
    div_score.innerHTML = 0;
    div_score.className = "score" + i;
    btn_plus.className = "plus";
    icon_plus.className = "icon_plus fas fa-plus " + i;

    btn_minus.append(icon_minus);
    btn_plus.append(icon_plus);
    td_btn.append(btn_minus);
    td_btn.append(div_score);
    td_btn.append(btn_plus);

    tr.append(td_name);
    tr.append(td_btn);
    $("#score_board").append(tr);
  }
  $("#current_player").html($(".name0").html());
}

function new_round() {
  dict = {};
  $("#checking_list").html("");
  $("#check").prop("disabled", true);
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
  if (current_player == names.length) {
    current_player = 0;
  }
  $("#current_player").html($(".name" + current_player).html());
  Object.entries(dict).forEach(([key, value]) => {
    var li = document.createElement("li");
    li.innerHTML = key + " - " + value;
    $("#checking_list").append(li);
  });
  $("#check").prop("disabled", false);
}

document.addEventListener("click", event => {
  const element = event.target;
  if (element.className.slice(0, 10) === "icon_minus") {
    var adjust_minus = $(".score" + element.className.slice(-1)).html();
    adjust_minus--;
    $(".score" + element.className.slice(-1)).html(adjust_minus);
  } else if (element.className.slice(0, 9) === "icon_plus") {
    var adjust_plus = $(".score" + element.className.slice(-1)).html();
    adjust_plus++;
    $(".score" + element.className.slice(-1)).html(adjust_plus);
  } else if (playing == true && element.className.slice(0, 3) === "btn") {
    if (!isNaN(element.className.slice(-1))) {
      //if the class name is end with a number
      dict[words[current_words]] = $(
        ".name" + element.className.slice(-1)
      ).html();
      var score_to_plus = $(".score" + element.className.slice(-1)).html();
      score_to_plus++;
      $(".score" + element.className.slice(-1)).html(score_to_plus);

      var score_to_host = $(".score" + current_player).html();
      score_to_host++;
      $(".score" + current_player).html(score_to_host);
    }
    current_words++;
    $("#words").html(words[current_words]);
  }
});

function startTimer(duration) {
  var timer = duration,
    seconds;
  var interval = setInterval(function() {
    seconds = parseInt(timer % 60, 10);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    $("#time").text(seconds);

    if (--timer < -1) {
      alert("時間到！");
      clearInterval(interval);
      clear_round();
      $("#time").text("60");
    }
  }, 1000);
}
$(".btn_skip").on("click", function() {
  var score_to_deduct = $(".score" + current_player).html();
  score_to_deduct--;
  $(".score" + current_player).html(score_to_deduct);
  dict[words[current_words]] = "跳過";
});

function return_to_zero() {
  $('div[class^="score"]').each(function() {
    $(this).html(0);
  });
}

function adjust() {
  $(".minus, .plus").toggle();
}

function check() {
  $("#checking_list").toggle();
}
