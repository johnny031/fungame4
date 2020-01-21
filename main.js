var dict = [];
var playing = false;
var current_player = 0;
var current_words = -1;
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function input_show() {
  var numbers = $("#number").val();
  if (numbers < 3 || numbers > 15) {
    alert("遊戲人數需介於3至15人之間");
    return false;
  } else {
    $("#number_button").prop("disabled", true);
  }
  $("#names_title").show();
  $("#start_button").show();
  for (let i = 0; i < numbers; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.name = "n";
    input.className = i;
    input.style.display = "block";
    input.style.margin = "10px";
    input.style.padding = "5px";
    $("#input_div").append(input);
  }
}

function start() {
  var empty = false;
  $('#input_div input[type="text"]').each(function() {
    if ($(this).val() === "") {
      alert("玩家名稱請勿空白");
      empty = true;
      return false;
    }
  });
  if (empty == true) {
    return false;
  }
  $(".setting_div").hide();
  $(".board_div").show();
  shuffle(words);
  $('input[name^="n"]').each(function() {
    dict.push($(this).val());
  });
  for (let i = 0; i < $("#number").val(); i++) {
    var tr = document.createElement("tr");
    var td_name = document.createElement("td");
    td_name.innerHTML = dict[i];
    td_name.className = "name" + i;
    var td_score = document.createElement("td");
    td_score.innerHTML = 0;
    td_score.className = "score" + i;
    tr.append(td_name);
    tr.append(td_score);
    $("#score_board").append(tr);
  }
  $("#current_player").html($(".name0").html());
}

function new_round() {
  playing = true;
  $("#round_start_button").prop("disabled", true);
  $(".playing_div").show();
  current_words++;
  $("#words").html(words[current_words]);
  for (let i = 0; i < $("#number").val(); i++) {
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
  if (current_player == $("#number").val()) {
    current_player = 0;
  }
  $("#current_player").html($(".name" + current_player).html());
}

document.addEventListener("click", event => {
  const element = event.target;
  if (playing == true && element.className.slice(0, 3) === "btn") {
    current_words++;
    $("#words").html(words[current_words]);
    if (!isNaN(element.className.slice(-1))) {
      //if the class name is end with a number
      var score_to_plus = $(".score" + element.className.slice(-1)).html();
      score_to_plus++;
      $(".score" + element.className.slice(-1)).html(score_to_plus);

      var score_to_host = $(".score" + current_player).html();
      score_to_host++;
      $(".score" + current_player).html(score_to_host);
    }
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
});

function return_to_zero() {
  $('td[class^="score"]').each(function() {
    $(this).html(0);
  });
}
