const questions = [];
const quizId = localStorage.getItem('@JsQuiz:quizId');
var count = 0;
var correctAnswer = '';
var score = 0;

if (count === 0) {
  fetch(`http://localhost:3000/questions/quiz/${quizId}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
      'Content-Type': 'application/json; charset=utf-8',
    }),
  })
    .then((response) => response.json())
    .then((allQuestions) => {
      let flag = 0;
      allQuestions.map((fragment) => {
        questions.push(fragment);
        console.log(fragment);
        if (flag === 0) {
          fetch(`http://localhost:3000/answers/question/${fragment.id}`, {
            method: 'GET',
            headers: new Headers({
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
              'Content-Type': 'application/json; charset=utf-8',
            }),
          })
            .then((response) => response.json())
            .then((answer) => {
              console.log('answer', answer);
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
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
      'Content-Type': 'application/json; charset=utf-8',
    }),
  })
    .then((response) => response.json())
    .then((quiz) => {
      document.getElementsByClassName('Logo')[0].innerHTML = quiz.title;
    });
}

const selectAnswer = (option) => {
  if (option === correctAnswer) {
    document.getElementById(option).style.backgroundColor = '#2e8b57';
    score += 1;
    count += 1;

    setTimeout(() => {
      document.getElementById(option).style.backgroundColor = '#fff';
      newQuestionRequest(count);
    }, 1750);
  } else {
    document.getElementById(option).style.backgroundColor = '#c85a6b';
    document.getElementById(correctAnswer).style.backgroundColor = '#2e8b57';
    count += 1;

    setTimeout(() => {
      document.getElementById(option).style.backgroundColor = '#fff';
      document.getElementById(correctAnswer).style.backgroundColor = '#fff';
      newQuestionRequest(count);
    }, 1750);
  }
};

const newQuestionRequest = (index) => {
  if (count < 3) {
    fetch(`http://localhost:3000/answers/question/${questions[index].id}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
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
    // adicionar toast com numero de acertos

    setTimeout(() => {
      window.location.replace('topic.html');
    }, 1500);
  }
};
