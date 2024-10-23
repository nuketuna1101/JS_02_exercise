var number = 0;
var guessedNumber = 0;

document.addEventListener('DOMContentLoaded', function() {
    initSettings();
});

function initSettings(){
    hideInputContainer();
}

// ======================
// start-button 누를 시
// ======================
function startGame(){
    hideStartButton();
    makeRandNum();
    showNumber();
    setTimer();
}

// number : 맞춰야 할 난수 생성 : 1000~9999 범위
function makeRandNum(){
    while(true){
        number = Math.floor(10000 * Math.random());     
        if (number >= 1000 && number <= 9999)   break;
    }
    console.log(number);
}

// 맞춰야할 숫자 제시
function showNumber() {
    setDisplayContent(number);
}

// 타이머 1초 간격 업데이트
function setTimer(){
    var timer_content = document.getElementById('timer-content');
    var timeLeft = 3.0;
    timer_content.textContent = '남은 시간:  ' + timeLeft + '초';
    var interval = setInterval(function () {
        timeLeft--;
        timer_content.textContent = '남은 시간:  ' + timeLeft + '초';      
        if (timeLeft <= 0) {
            clearInterval(interval);
            hideDisplayContent();
            hideTimerContent();
            showInputContainer();
        }
    }, 1000);
}

// ======================
// submit-button 누를 시
// ======================
function submitNumber(){
    hideInputContainer();
    setGuessedNumber();
    judgeNumber();
}

// 사용자 입력으로 예상 숫자 설정
function setGuessedNumber(){
    var input_content = document.getElementById('input-content');
    guessedNumber = input_content.value;
}

// 맞는지 틀린지 판정
function judgeNumber(){
    if (number == guessedNumber) {
        console.log("RESULT: TRUE");
        setDisplayContent("정답입니다!");
    }
    else {
        console.log("RESULT: FALSE");
        setDisplayContent("오답입니다. 정답은 " + number + "입니다.");
    }
}



// ======================
// HTML 요소 보이기 숨기기
// ======================


function showInputContainer(){
    var input_container = document.getElementById('input-container');
    //input_container.style.display = 'block';
    input_container.style.visibility = 'visible';
}

function hideInputContainer(){
    var input_container = document.getElementById('input-container');
    //input_container.style.display = 'none';
    input_container.style.visibility = 'hidden';
}

function showStartButton(){
    var start_button = document.getElementById('start-button');
    //input_container.style.display = 'block';
    start_button.style.visibility = 'visible';
}

function hideStartButton(){
    var start_button = document.getElementById('start-button');
    //input_container.style.display = 'none';
    start_button.style.visibility = 'hidden';
}

function setDisplayContent(_display_content){
    var display_content = document.getElementById('display-content');
    display_content.textContent = _display_content;
    showDisplayContent();
}

function showDisplayContent(){
    var display_content = document.getElementById('display-content');
    display_content.style.visibility = 'visible';
}

function hideDisplayContent(){
    var display_content = document.getElementById('display-content');
    display_content.style.visibility = 'hidden';
}

function showTimerContent(){
    var timer_content = document.getElementById('timer-content');
    timer_content.style.visibility = 'visible';
}

function hideTimerContent(){
    var timer_content = document.getElementById('timer-content');
    timer_content.style.visibility = 'hidden';
}