import questions_all from './questions.js';

let quiz_form = document.getElementById("quiz-form");
let questions_div = document.querySelector(".questions");
let score = 0;
let passing = 50;   // Percent
let name = '';
let question_count = 5;
let questions = [];
let timer;
let time_per_questions = 150;
let timeObj = {
    minute: 0,
    second: 0
}

quiz_form.addEventListener('submit', function(e){
    e.preventDefault();
    checkResult();
    showResult();
});

function checkResult(){
    questions.forEach(function(question,index){
        let ans = document.querySelector("input[name=answer"+ index +"]:checked");
        //console.log(ans);
        if(ans===null){
            //alert('All answers should be answered. Please try again.');
            return true;
        }
        if(question.answer == ans.value){
            score++;
        }
    });
}


document.querySelector(".start-quiz").addEventListener('click',function(e){
    e.preventDefault();
    name = document.getElementById('name').value;
    if(!name){
        alert('Please enter your name.');
        return;
    }
    document.querySelector(".begin-quiz-container").classList.add('hide-modal');
    selectQuestions();
    renderQuestion(questions);
    startTimer();
});

document.querySelector(".retry-quiz-pass").addEventListener('click',function(e){
    e.preventDefault();
    
    document.querySelector(".success-quiz-container").classList.add('hide-modal');
    selectQuestions();
    renderQuestion(questions);
    startTimer();
});

document.querySelector(".retry-quiz-fail").addEventListener('click',function(e){
    e.preventDefault();
    
    document.querySelector(".failure-quiz-container").classList.add('hide-modal');
    selectQuestions();
    renderQuestion(questions);
    startTimer();
});


function startTimer(){
    clearInterval(timer);
    timeObj.minute = parseInt(time_per_questions*question_count/60);
    timeObj.second = (time_per_questions*question_count)%60;
    document.querySelector(".timer-container .time").innerHTML = timeObj.minute+':'+timeObj.second;
    timer = setInterval(()=>{
        if(timeObj.second>0){
            timeObj.second--;
        }else{
            if(timeObj.minute>0){
                timeObj.minute--;
                timeObj.second = 59;
            }else{
                checkResult();
                showResult();
            }
        }

        document.querySelector(".timer-container .time").innerHTML = timeObj.minute+':'+timeObj.second;

    },1000);
}

function showResult(){
    if((score*100/questions.length) > passing){
        document.querySelector('.failure-quiz-container').classList.add('hide-modal');
        document.querySelector('.success-quiz-container').classList.remove('hide-modal');
        document.querySelector('.success-message').innerHTML = 'Congratulations, '+name;
        document.querySelector('.score-message-pass').innerHTML = 'You Scored : '+score+'/'+questions.length;
    }else{
        document.querySelector('.success-quiz-container').classList.add('hide-modal');
        document.querySelector('.failure-quiz-container').classList.remove('hide-modal');
        document.querySelector('.score-message-fail').innerHTML = 'You Scored : '+score+'/'+questions.length;
    }
}

function selectQuestions(){
    let set = [];
    questions = [];
    for(let i=0; i<question_count; ){
        let index = Math.floor(Math.random()*questions_all.length);
        if(!set.find(x => x==index)){
            questions.push(questions_all[index]);
            set.push(index);
            i++;
        }
    }
}

function renderQuestion(quests){
    let html = '';
    let count = 1;
    quests.forEach(function(quest, index){
        html += `
                    <div class="quiz-container">
                        <div class="question-number">Q.${count}.</div>
                        <div class="quiz-sub-container">
                            <div class="question">
                                ${quest.title}
                            </div>
                            <div class="options">
                                <div class="option">
                                    <span class="option-select">
                                        <span>a.</span>
                                        <span><input type="radio" name="answer${index}" value="0"  ></span>
                                    </span>
                                    <span class="scramble-option">${generateOptionHTML(quest.options[0])}</span>
                                </div>
                                <div class="option">
                                    <span class="option-select">
                                        <span>b.</span>
                                        <span><input type="radio" name="answer${index}" value="1" ></span>
                                    </span>
                                    <span class="scramble-option">${generateOptionHTML(quest.options[1])}</span>
                                </div>
                                <div class="option">
                                    <span class="option-select">
                                        <span>c.</span>
                                        <span><input type="radio" name="answer${index}" value="2"  ></span>
                                    </span>
                                    <span class="scramble-option">${generateOptionHTML(quest.options[2])}</span>
                                </div>
                                <div class="option">
                                    <span class="option-select">
                                        <span>d.</span>
                                        <span><input type="radio" name="answer${index}"  value="3" ></span>
                                    </span>
                                    <span class="scramble-option">${generateOptionHTML(quest.options[3])}</span>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        count++;
    });

    questions_div.innerHTML = html;

}

function generateOptionHTML(text){
    let html = '';
    Array.from(text).forEach((letter,index) => {
        if(index%2==0){
            html += '<span class="even-ch">'+letter+'</span>';
            
        }else{
            html += '<span class="odd-ch hide-ch">'+letter+'</span>';
            
        }
    });
    return html;
}

function vibrator(){
    setInterval(() => {
        document.querySelectorAll('.even-ch').forEach(ele => {
            ele.classList.toggle('hide-ch');
        });
        document.querySelectorAll('.odd-ch').forEach(ele => {
            ele.classList.toggle('hide-ch');
        });
    }, 15);
}

vibrator();