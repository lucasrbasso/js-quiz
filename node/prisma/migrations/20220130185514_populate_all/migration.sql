-- This is an empty migration.

SET @UUID_topics_1 = UUID();
SET @UUID_quizzes_1_1 = UUID();
SET @UUID_questions_1_1_1 = UUID();
SET @UUID_answers_1_1_1 = UUID();
SET @UUID_questions_1_1_2 = UUID();
SET @UUID_answers_1_1_2 = UUID();
SET @UUID_questions_1_1_3 = UUID();
SET @UUID_answers_1_1_3 = UUID();
SET @UUID_quizzes_1_2 = UUID();
SET @UUID_questions_1_2_1 = UUID();
SET @UUID_answers_1_2_1 = UUID();
SET @UUID_questions_1_2_2 = UUID();
SET @UUID_answers_1_2_2 = UUID();
SET @UUID_questions_1_2_3 = UUID();
SET @UUID_answers_1_2_3 = UUID();

-- topico 1
INSERT INTO topics
  (id, description, image_url, title)
VALUES
  (@UUID_topics_1, "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "HTML");
-- quiz 1
INSERT INTO quizzes
  (id, topic_id, title, image_url, level)
VALUES
  (@UUID_quizzes_1_1, @UUID_topics_1, "HTML Tags", "https://i.pinimg.com/474x/25/a2/e9/25a2e9393c2fdf34523a904f299015e6.jpg", 1);

-- question 1
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_1_1_1, @UUID_quizzes_1_1, "Pra que serve uma div?" , "https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/divTag.png", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_1_1_1, @UUID_questions_1_1_1, "É um container genérico para conteúdo de fluxo" , "É um texto genérico para conteúdo de fluxo", "É uma tag genérico para conteúdo de fluxo", "É um cachorro genérico para conteúdo de fluxo");

-- question 2
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_1_1_2, @UUID_quizzes_1_1, "Pra que serve um span?" , "https://www.freecodecamp.org/news/content/images/2021/09/span-tag.png", "optionB");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_1_1_2, @UUID_questions_1_1_2, "É usado para mostrar imagem" , "É usada para agrupar conteúdo semelhante para que todos possam ser estilizados juntos.", "É usado para ser um texto clicavel", "É usado para um cachorro");

-- question 3
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_1_1_3, @UUID_quizzes_1_1, "Pra que serve um img?" , "https://923619.smushcdn.com/2322851/wp-content/uploads/2021/01/image-26-600x298.png", "optionC");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_1_1_3, @UUID_questions_1_1_3, "É utilizado para inserir musicas em uma página HTML" , "É utilizado para inserir cachorros em uma página HTML", "É utilizado para inserir imagens em uma página HTML", "É utilizado para inserir textos em uma página HTML");


-- quiz 2
INSERT INTO quizzes
  (id, topic_id, title, image_url, level)
VALUES
  (@UUID_quizzes_1_2, @UUID_topics_1, "Tags Semanticas", "https://miro.medium.com/max/1838/1*NjJoYvshr5Jyj4HMu0aXnA.jpeg", 2);

-- question 1
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_1_2_1, @UUID_quizzes_1_2, "Pra que serve a tag <article>" , "https://www.computerhope.com/jargon/h/article.png", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_1_2_1, @UUID_questions_1_2_1, "É usado quando precisamos declarar um conteúdo que não precisa de outro para fazer sentido em um documento HTML" , "É usado quando precisamos declarar um cachorro", "É usado quando precisamos declarar um conteúdo que precisa de outro para fazer sentido em um documento HTML", "Não existe a tag article");

-- question 2
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_1_2_2, @UUID_quizzes_1_2, "Pra que serve a tag <header>" , "https://i.ytimg.com/vi/iJ0eiApzgP8/hqdefault.jpg", "optionD");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_1_2_2, @UUID_questions_1_2_2, "É utilizado para representar o cachorro de um documento ou seção declarado no HTML." , "é utilizado para representar a imagem de um documento no HTML.", "É utilizado para representar o textos destacados no HTML.", "É utilizado para representar o cabeçalho de um documento ou seção declarado no HTML. ");

-- question 3
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_1_2_3, @UUID_quizzes_1_2, "O que é a tag <time>" , "https://codebridgeplus.com/wp-content/uploads/html-time-tag.png", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_1_2_3, @UUID_questions_1_2_3, "É utilizado para representar datas" , "É utilizado para representar cachorros", "É utilizado para representar textos", "É utilizado para representar imagens");
