var question = [
  {
    q: "1.What is first name of JavaScript?",
    a: "Mocha",
    b: "Typescript",
    c: "LiveScript",
    d: "None of the above",
    ans: "a",
    opt1: "b",
    opt2: "d",
  },
  {
    q: "2.Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    ans: "a",
    opt1: "b",
    opt2: "d",
  },
  {
    q: "3.Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statements",
    c: "Giving the warning",
    d: "None of the above",
    ans: "b",
    opt1: "a",
    opt2: "c",
  },
  {
    q: "4.Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "all of the above",
    ans: "d",
    opt1: "a",
    opt2: "c",
  },
  {
    q: "5.The function and var are known as:-",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    ans: "c",
    opt1: "a",
    opt2: "d",
  },
  {
    q: "6.Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    ans: "d",
    opt1: "a",
    opt2: "c",
  },
  {
    q: "7.In the JavaScript, which one of the following is not considered as an error:",
    a: "Missing the semicolumn",
    b: "Syntax error",
    c: "Division by zero",
    d: "Missing of Bracket",
    ans: "c",
    opt1: "a",
    opt2: "b",
  },
  {
    q: "8.Which of the following number object function returns the value of the number?",
    a: "toString()",
    b: "valueOf()",
    c: "toLocaleString()",
    d: "toPrecision()",
    ans: "b",
    opt1: "a",
    opt2: "c",
  },
  {
    q: "9.Choose the correct snippet from the following to check if the variable a is not equal the NULL:",
    a: "if(a!==null)",
    b: "if (a!)",
    c: "if(a!null)",
    d: "if(a!=null)",
    ans: "a",
    opt1: "b",
    opt2: "c",
  },
  {
    q: "10.In JavaScript, what will be used for calling the function definition expression:",
    a: "Function prototype",
    b: "Function literal",
    c: "Function calling",
    d: "Function declaration",
    ans: "b",
    opt1: "a",
    opt2: "c",
  },
];

// ************** defaults ***************
$("#QuizBox").hide();
$("#restartQuiz").hide();
$("#nextQuestion").hide();

//  ************** start quiz ***************
var pname = "";
var cid = "";
var points = 0;
var count = 0;
var len = question.length;
$("#startQuizBtn").click(function () {
  pname = $("#playerName").val();
  $("#QuizBox").show();
  $("#startQuiz").hide();
  if (pname != "") {
    $("#chnagePlayerName").text(pname);
  }
  loadQuestion();
  startTime();
});

// ********* Loadquestionfunction *******************

function loadQuestion() {
  $("#q").text(question[count].q);
  $("#a").val(question[count].a);
  $("#b").val(question[count].b);
  $("#c").val(question[count].c);
  $("#d").val(question[count].d);
  $("#questionNo").text(`Question: ${count + 1}/${len}`);
}

// ********* Loadquestionfunction *******************

$(".opt").click(function () {
  cid = $(this).attr("id");
  if (cid == question[count].ans) {
    $(this).css("background", "green");
    points++;
    $("#points").text(`Points: ${points}`);
  } else {
    $(this).css("background", "red");
    $("#" + question[count].ans)
      .css("background", "green")
      .fadeOut()
      .fadeIn();
  }
  $(".opt").prop("disabled", "true");
  $("#nextQuestion").show();
});

//  **************** next button ********************
$("#nextQuestion").click(function () {
  count++;
  $(".opt").css("background", "");
  $(".opt").prop("disabled", "");
  if (count >= len) {
    $("#QuizBox").hide();
    $("#restartQuiz").show();
    $("#finalPoints").text(`Final Points: ${points}`);
  } else {
    loadQuestion();
  }
  $("#nextQuestion").hide();
});

//  **************** restart quiz ******************

$("#restartQuizBtn").click(function () {
  $("#QuizBox").show();
  $("#restartQuiz").hide();
  resetQuiz();
  loadQuestion();
  startTime();
  $("#lifeLine").prop("disabled", "");
});

//*********** reset quiz********************************
function resetQuiz() {
  count = 0;
  points = 0;
  clearInterval(quiztime);
  $("#time").text("00:00");
  $("#points").text(`Points: 0`);
  $("#questionNo").text(`Question: ${count + 1}/${len}`);
}
//******** timer **********
var totalmins = 0;
var convertedtosecs = 0;
var remainingmins = 0;
var quiztime = "";

function startTime() {
  totalmins = 2;
  convertedtosecs = 60 * totalmins;
  function timer() {
    convertedtosecs--;
    remainingmins = Math.floor(convertedtosecs / 60);
    remainingsecs = convertedtosecs % 60;
    if (remainingmins <= 9 && remainingmins >= 0) {
      remainingmins = "0" + remainingmins;
    }
    if (remainingsecs <= 9 && remainingsecs >= 0) {
      remainingsecs = "0" + remainingsecs;
    }
    $("#time").text(`${remainingmins}:${remainingsecs}`);
    if (convertedtosecs == 0) {
      clearInterval(quiztime);
      $("#QuizBox").hide();
      $("#restartQuiz").show();
    }
  }
  quiztime = setInterval(timer, 1000);
}
//****** lifeLine ******
$("#lifeLine").click(function () {
  $("#" + question[count].opt1).val("");
  $("#" + question[count].opt2).val("");
  $("#" + question[count].opt1).prop("disabled", "true");
  $("#" + question[count].opt2).prop("disabled", "true");
  $("#lifeLine").prop("disabled", "true");
});
