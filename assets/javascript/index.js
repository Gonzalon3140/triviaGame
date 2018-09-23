$(document).ready(function () {
    let timeRemaining = 10
    let timeRemainingInterval
    let correct = 0;
    let incorrect = 0;
    let questionNumber = 0;


    let questions = [{
            question: 'What is the name of the actor who played " Sam Rothstein" in the movie Casino?',
            correctAnswer: 'Robert De Niro',
            options: ['Woody Harrelson', 'Robert De Niro', 'Colin Firth', 'Keanu Reeves'],
        },
        {
            question: 'In what year was Back to the Future released into theater\'s?',
            correctAnswer: '1985',
            options: ['1987', '1984', '1985', '1981'],
        },
        {
            question: 'Name the film that has grossed the most profit ever?',
            correctAnswer: 'Gone with the Wind',
            options: ['Avatar', 'Gone with the Wind', 'Titanic', 'Star Wars'],
        },
        {
            question: 'How did Jack Dawson win his ticket aboard the Titanic?',
            correctAnswer: 'A poker game',
            options: ['A poker game', 'A car race', 'wrestling match', 'a drinking contest'],
        },
        {
            question: 'What is the name of the Dark Lord in Lord of the Rings?',
            correctAnswer: 'Sauron',
            options: ['Sauruman', 'Balrog', 'Sauron', 'Feanor'],
        },
        {
            question: 'Name a movie that Leonardo Di Caprio played in?',
            correctAnswer: 'What\'s Eating Gilbert Grape',
            options: ['The Lincoln Lawyer', 'Lost In Space', 'Dazed and Confused', 'What\'s Eating Gilbert Grape'],
        },
        {
            question: 'Name a movie that Tom Hanks has starred in ?',
            correctAnswer: 'Joe Vs the Volcano',
            options: ['Joe Vs the Volcano', 'The Free State of Jones', ' K-9', 'Patriot Games'],
        },
        {
            question: 'What was the name of the Character played by Keanu Reeves in the movie The Matrix?',
            correctAnswer: 'Neo',
            options: ['Jack Traven', 'Johnny Utah ', 'Neo', 'John Wick'],
        },
        {
            question: 'What Movie is considered to be a "Spaghetti Western" movie?',
            correctAnswer: 'For a Few Dollars More',
            options: ['The Ballad of Little Jo ', 'Cat Ballou', 'The Magnificent Seven', 'For a Few Dollars More'],
        },
    ];


    function startGame() {

        correct = 0;
        incorrect = 0;
        questionNumber = 0;
        updateDom()

    }

    function resetInterval() {
        timeRemaining = 15;
        $("#timer").text(timeRemaining)
        if (timeRemainingInterval) {
            clearInterval(timeRemainingInterval)
        }
        timeRemainingInterval = setInterval(function () {
            if (timeRemaining <= 0) {
                alert('Times Up');
                questionNumber++
                incorrect++
                checkGameStatus()
                updateDom()
            }
            timeRemaining--
            $("#timer").text(timeRemaining)
        }, 2000);
    }

    function updateDom() {
        $('#question').text(questions[questionNumber].question)
        $('#option0').text(questions[questionNumber].options[0])
        $('#option1').text(questions[questionNumber].options[1])
        $('#option2').text(questions[questionNumber].options[2])
        $('#option3').text(questions[questionNumber].options[3])
        resetInterval()
    }

    function checkGameStatus() {
        if (questionNumber > questions.length - 1) {
            $("#status").text(" You Scored " + correct + 'Correct')
            startGame()
            return
        } else {
            return
        }
    }

    $('.options').on('click', function () {
        console.log(this.innerText);
        console.log(questions[questionNumber].correctAnswer)
        if (questions[questionNumber].correctAnswer === this.innerText) {
            alert("you are correct")
            questionNumber++
            correct++
            checkGameStatus()
            updateDom()
        } else {
            alert('Sorry Wrong Answer');
            questionNumber++
            incorrect++
            checkGameStatus()
            updateDom()
        }
    })


    startGame()

    $('#startGame').on('click', function () {
        $('.hide').css('visibility', "visible");
        startGame();
    })
});