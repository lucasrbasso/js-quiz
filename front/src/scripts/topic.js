var topics = [];
var quizzes = [];
var sectionsLength = 0;

fetch('http://localhost:3000/topics/', {
  method: 'GET',
  headers: new Headers({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdGUuY29tIiwiaWQiOiIyMzEyOWRjZS05MzM4LTQzN2EtOGRlYS1jYjI0NTEwZWE5Y2QiLCJpYXQiOjE2NDM5MzA0ODcsImV4cCI6MTY0NDM2MjQ4Nywic3ViIjoiMjMxMjlkY2UtOTMzOC00MzdhLThkZWEtY2IyNDUxMGVhOWNkIn0.wSpy6Yomx-n2B5E9VWneokhjlFc-Gu8UJDiF4fSzLqI`,
    'Content-Type': 'application/json; charset=utf-8',
  }),
})
  .then((response) => response.json())
  .then((allTopics) => {
    sectionsLength = allTopics.length;
    let section;
    allTopics.map((topic, index) => {
      topics.push(topic);
      if ((index + 1) % 2 !== 0) {
        const newSection = document.createElement('section');
        newSection.classList.add('can_be_hidden');
        newSection.classList.add('Section');
        section = newSection;

        const newDiv = document.createElement('div');
        newDiv.classList.add('Box');
        newDiv.classList.add(`box${index + 1}`);
        newDiv.innerHTML = topic.title;
        newDiv.onclick = () => {
          selectTopic(index);
        };

        document.getElementsByClassName('Content')[0].appendChild(newSection);
        section.appendChild(newDiv);
      } else {
        const newDiv = document.createElement('div');
        newDiv.classList.add('Box');
        newDiv.classList.add(`box${index + 1}`);
        newDiv.innerHTML = topic.title;
        newDiv.onclick = () => {
          selectTopic(index);
        };

        section.appendChild(newDiv);
      }
    });
    const newDiv = document.createElement('div');
    newDiv.classList.add('Box');
    newDiv.classList.add('newTopics');
    newDiv.classList.add(`box${allTopics.length}`);
    newDiv.innerHTML = 'Mais em Breve...';

    section.appendChild(newDiv);
  })
  .catch(console.error);

const navigateToPreviousPage = () => {
  document.getElementsByClassName('QuizzesSection')[0].remove();

  const length = sectionsLength % 2 === 0 ? sectionsLength : sectionsLength - 1;

  for (let i = 0; i < length; i++) {
    document
      .getElementsByClassName('can_be_hidden')
      [i].classList.remove('hidden');
  }
};

const selectTopic = (index) => {
  const length = sectionsLength % 2 === 0 ? sectionsLength : sectionsLength - 1;

  for (let i = 0; i < length; i++) {
    document.getElementsByClassName('can_be_hidden')[i].classList.add('hidden');
  }

  const newSection = document.createElement('section');
  newSection.classList.add('QuizzesSection');
  newSection.classList.add('Section');
  newSection.setAttribute('id', 'QuizSection');

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
        newDiv.classList.add('BoxQuiz');
        newDiv.onclick = () => {
          localStorage.setItem('@JsQuiz:quizId', quiz.id);
          window.location.replace('/quiz');
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

        document.getElementsByClassName('Content')[0].appendChild(newSection);
        newSection.appendChild(newDiv);
        newDiv.appendChild(newSpan);
        newSpan.appendChild(newImg);
      });
      newButton = document.createElement('button');
      newButton.classList.add('BackButton');
      newButton.onclick = navigateToPreviousPage;
      newButton.innerHTML = 'Voltar';

      newSection.appendChild(newButton);
    });
};
