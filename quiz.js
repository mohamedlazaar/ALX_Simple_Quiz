function checkAnswer() {
    // Function body

    const correctAnswer= "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;    console.log(userAnswer)
    let feedback = document.getElementById('feedback');
    if(userAnswer === correctAnswer){
        
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent ="That's incorrect. Try again!"
    }
}

let btn = document.getElementById('submit-answer');
btn.addEventListener('click', checkAnswer)
