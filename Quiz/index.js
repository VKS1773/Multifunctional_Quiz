var question=[
    {
        q:"Who is the leader of Mittal Mitra Mandali",
        a:"Kashish",
        b:"vikash",
        c:"Suman",
        d:"All who present in group",
        ans:"d",
        opt1:"a",
        opt2:"c"
    },
    {
        q:"Who is the leader of Mittal Mitra Mandali",
        a:"Kashish",
        b:"vikash",
        c:"Suman",
        d:"All who present in group",
        ans:"d",
        opt1:"a",
        opt2:"c"

    },
    {
        q:"Who is the leader of Mittal Mitra Mandali",
        a:"Kashish",
        b:"vikash",
        c:"Suman",
        d:"All who present in group",
        ans:"d",
        opt1:"a",
        opt2:"c"
    }
];

// ************** defaults ***************
$("#QuizBox").hide();
$("#restartQuiz").hide();
$("#nextQuestion").hide();

//  ************** start quiz ***************
var pname="";
var cid="";
var points=0;
var count=0;
var len=question.length;
$("#startQuizBtn").click(function(){
    pname=$("#playerName").val();
    $("#QuizBox").show();
    $("#startQuiz").hide();
    if(pname!="")
    {
        $("#chnagePlayerName").text(pname);
    }
    loadQuestion();
    startTime();

});

// ********* Loadquestionfunction *******************

function loadQuestion(){
    $("#q").text(question[count].q);
    $("#a").val(question[count].a);
    $("#b").val(question[count].b);
    $("#c").val(question[count].c);
    $("#d").val(question[count].d);
    $("#questionNo").text(`Question: ${count+1}/${len}`)
}

// ********* Loadquestionfunction *******************

 $(".opt").click(function(){
     cid=$(this).attr("id");
     if(cid==question[count].ans)
     {
        $(this).css("background","green");
        points++;
        $("#points").text(`Points: ${points}`);

     }
     else
     {
        $(this).css("background","red");
        $("#"+question[count].ans).css("background","green").fadeOut().fadeIn();
    }
    $(".opt").prop("disabled","true");
    $("#nextQuestion").show()

 })

//  **************** next button ********************
 $("#nextQuestion").click(function(){
     count++;
     $(".opt").css("background","");
     $(".opt").prop("disabled","");
     if(count>=len)
     {
        $("#QuizBox").hide();
        $("#restartQuiz").show();
        $("#finalPoints").text(`Final Points: ${points}`);

     }
     else{
        loadQuestion();
     }
     $("#nextQuestion").hide()

    
 })

//  **************** restart quiz ******************

 $("#restartQuizBtn").click(function(){
    $("#QuizBox").show();
    $("#restartQuiz").hide();
    resetQuiz();
    loadQuestion();
    startTime();
    $("#lifeLine").prop("disabled","");
    
 })

 //*********** reset quiz********************************
 function resetQuiz(){
    count=0;
    points=0;
    clearInterval(quiztime);
    $("#time").text("00:00")
    $("#points").text(`Points: 0`);
    $("#questionNo").text(`Question: ${count+1}/${len}`)

 }
 //******** timer **********
 var totalmins=0;
 var convertedtosecs=0;
 var remainingmins=0;
 var quiztime="";

 function startTime(){
    totalmins=2;
    convertedtosecs=60*totalmins;
    function timer(){
        convertedtosecs--;
        remainingmins=Math.floor(convertedtosecs/60);
        remainingsecs=convertedtosecs%60;
        if(remainingmins<=9 && remainingmins>=0)
        {
            remainingmins="0"+remainingmins;
        }
        if(remainingsecs<=9 && remainingsecs>=0)
        {
            remainingsecs="0"+remainingsecs;
        }
        $("#time").text(`${remainingmins}:${remainingsecs}`);
        if(convertedtosecs==0)
        {
            clearInterval(quiztime);
            $("#QuizBox").hide();
            $("#restartQuiz").show();

        }
    }
    quiztime=setInterval(timer,1000);
 }
 //****** lifeLine ******
 $("#lifeLine").click(function(){
    $("#"+question[count].opt1).val("");
    $("#"+question[count].opt2).val("");
    $("#"+question[count].opt1).prop("disabled","true");
    $("#"+question[count].opt2).prop("disabled","true");
    $("#lifeLine").prop("disabled","true");
 })

 


