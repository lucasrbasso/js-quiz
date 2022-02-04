var topics = [];
var quizzes = [];

fetch('http://localhost:3000/topics/', {
  method: 'GET',
  headers: new Headers({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
    'Content-Type': 'application/json; charset=utf-8',
  }),
})
  .then((response) => response.json())
  .then((allTopics) => {
    let countId = 1;
    allTopics.map((topic) => {
      topics.push(topic);
      document.getElementsByClassName(`box${countId}`)[0].innerText =
        topic.title;
      countId += 1;
    });
  })
  .catch(console.error);

const selectTopic = (index) => {
  document.getElementsByClassName('can_be_hidden')[0].remove();
  document.getElementsByClassName('can_be_hidden')[0].remove();

  document.getElementsByClassName('Title')[0].innerText =
    'Escolha um dos quizzes';

  fetch(`http://localhost:3000/quizzes/topic/${topics[index].id}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
      'Content-Type': 'application/json; charset=utf-8',
    }),
  })
    .then((response) => response.json())
    .then((allQuizzes) => {
      allQuizzes.map((quiz) => {
        var newDiv = document.createElement('div');
        newDiv.innerHTML = quiz.title;
        newDiv.classList.add('Box');
        newDiv.onclick = () => {
          localStorage.setItem('@JsQuiz:quizId', quiz.id);
          window.location.replace('quiz.html');
        };

        const newSpan = document.createElement('span');
        newSpan.innerHTML = `Level ${quiz.level}`;
        newSpan.classList.add('Level');

        let srcImg;
        if (quiz.level === 1) {
          srcImg =
            'https://img.icons8.com/ios-filled/50/000000/low-connection.png';
        } else if (quiz.level === 2) {
          srcImg =
            'https://img.icons8.com/metro/26/000000/medium-connection.png';
        } else if (quiz.level === 3) {
          srcImg =
            'https://img.icons8.com/ios-filled/50/000000/medium-connection.png';
        } else {
          srcImg =
            'https://img.icons8.com/ios-filled/50/000000/high-connection.png';
        }

        const newImg = document.createElement('img');
        newImg.src = srcImg;
        ('https://img.icons8.com/ios-filled/50/000000/low-connection.png');
        newImg.classList.add('Image');

        document.getElementById('QuizSection').appendChild(newDiv);
        newDiv.appendChild(newSpan);
        newSpan.appendChild(newImg);
      });
    });
};
