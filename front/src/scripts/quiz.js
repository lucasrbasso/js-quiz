const questions = [];
const quizId = localStorage.getItem('@JsQuiz:quizId');
var count = 0;
var correctAnswer = '';
var score = 0;

if (count === 0) {
  fetch(`http://localhost:3000/questions/quiz/${quizId}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
    }),
  })
    .then((response) => response.json())
    .then((allQuestions) => {
      let flag = 0;
      allQuestions.map((fragment) => {
        questions.push(fragment);
        if (flag === 0) {
          fetch(`http://localhost:3000/answers/question/${fragment.id}`, {
            method: 'GET',
            headers: new Headers({
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json; charset=utf-8',
            }),
          })
            .then((response) => response.json())
            .then((answer) => {
              document.getElementsByClassName('Answer1')[0].innerText =
                answer[0].optionA;
              document.getElementsByClassName('Answer2')[0].innerText =
                answer[0].optionB;
              document.getElementsByClassName('Answer3')[0].innerText =
                answer[0].optionC;
              document.getElementsByClassName('Answer4')[0].innerText =
                answer[0].optionD;
            });

          fetch(`http://localhost:3000/questions/${fragment.id}`, {
            method: 'GET',
            headers: new Headers({
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json; charset=utf-8',
            }),
          })
            .then((response) => response.json())
            .then((question) => {
              document.getElementsByClassName(
                'QuestionNumber'
              )[0].innerHTML = `${count + 1})`;
              document.getElementsByClassName('Question')[0].innerText =
                question.question;

              correctAnswer = question.answer;
            });

          flag = 1;
        }
      });
    });

  fetch(`http://localhost:3000/quizzes/${quizId}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
    }),
  })
    .then((response) => response.json())
    .then((quiz) => {
      document.getElementsByClassName('Logo')[0].innerHTML = quiz.title;
    });
}

const selectAnswer = (option) => {
  const buttons = document.getElementsByClassName('AnswerButton');
  buttons[0].setAttribute('disabled', true);
  buttons[1].setAttribute('disabled', true);
  buttons[2].setAttribute('disabled', true);
  buttons[3].setAttribute('disabled', true);

  if (option === correctAnswer) {
    document.getElementById(option).style.backgroundColor = '#2e8b57';
    score += 1;
    count += 1;

    setTimeout(() => {
      document.getElementById(option).style.backgroundColor = '#fff';
      newQuestionRequest(count);
      buttons[0].removeAttribute('disabled');
      buttons[1].removeAttribute('disabled');
      buttons[2].removeAttribute('disabled');
      buttons[3].removeAttribute('disabled');
    }, 1750);
  } else {
    document.getElementById(option).style.backgroundColor = '#c85a6b';
    document.getElementById(correctAnswer).style.backgroundColor = '#2e8b57';
    count += 1;

    setTimeout(() => {
      document.getElementById(option).style.backgroundColor = '#fff';
      document.getElementById(correctAnswer).style.backgroundColor = '#fff';
      newQuestionRequest(count);
      buttons[0].removeAttribute('disabled');
      buttons[1].removeAttribute('disabled');
      buttons[2].removeAttribute('disabled');
      buttons[3].removeAttribute('disabled');
    }, 1750);
  }
};

const newQuestionRequest = (index) => {
  if (count < 3) {
    fetch(`http://localhost:3000/answers/question/${questions[index].id}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      }),
    })
      .then((response) => response.json())
      .then((answer) => {
        document.getElementsByClassName('Answer1')[0].innerText =
          answer[0].optionA;
        document.getElementsByClassName('Answer2')[0].innerText =
          answer[0].optionB;
        document.getElementsByClassName('Answer3')[0].innerText =
          answer[0].optionC;
        document.getElementsByClassName('Answer4')[0].innerText =
          answer[0].optionD;
      });

    correctAnswer = questions[index].answer;

    document.getElementsByClassName('QuestionNumber')[0].innerHTML = `${
      count + 1
    })`;
    document.getElementsByClassName('Question')[0].innerText =
      questions[index].question;
  } else {
    Swal.fire({
      title: "<span style='color: #fff'>" + 'Parab??ns!' + '</span>',
      html:
        "<span style='color: #fff'>" +
        `Voc?? acertou ${score} ${score === 1 ? 'pergunta' : 'perguntas'}` +
        '</span>',
      imageUrl: '../assets/trophy.png',
      background: '#121214',
      imageHeight: 200,
      imageAlt: 'Trof??u',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      confirmButtonColor: '#d53f8c',
      confirmButtonText: 'Voltar',
    }).then(() => {
      window.location.replace('/topic');
    });
  }
};
