document.addEventListener('DOMContentLoaded', function(){
    var FAQ = document.querySelector('.faqArea');
    var questionsAnswers = FAQ.querySelectorAll('.q_aSection');
    
    questionsAnswers.forEach(function(questionAnswer){
        var question = questionAnswer.querySelector('.question');
        var answer = questionAnswer.querySelector('.answer');
        var questionArrow = question.querySelector('.arrowIcon');
        
        question.addEventListener('click', function(){
            
            var activeAnswer = document.querySelector('.active');
            answer.classList.toggle('active');
            if(activeAnswer != null){
                activeAnswer.classList.remove('active');
           }
            
           var activeArrow = document.querySelector('.open');
            questionArrow.classList.toggle('open');
            if(activeArrow != null){
                activeArrow.classList.remove('open');
           }

           var activeQuestion = document.querySelector('.bold');
            question.classList.toggle('bold');
            if(activeQuestion != null){
                activeQuestion.classList.remove('bold');
           }

        })
    })
});