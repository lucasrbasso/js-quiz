-- This is an empty migration.
SET @UUID_topics_2 = UUID();
SET @UUID_quizzes_2_1 = UUID();
SET @UUID_questions_2_1_1 = UUID();
SET @UUID_answers_2_1_1 = UUID();
SET @UUID_questions_2_1_2 = UUID();
SET @UUID_answers_2_1_2 = UUID();
SET @UUID_questions_2_1_3 = UUID();
SET @UUID_answers_2_1_3 = UUID();
SET @UUID_quizzes_2_2 = UUID();
SET @UUID_questions_2_2_1 = UUID();
SET @UUID_answers_2_2_1 = UUID();
SET @UUID_questions_2_2_2 = UUID();
SET @UUID_answers_2_2_2 = UUID();
SET @UUID_questions_2_2_3 = UUID();
SET @UUID_answers_2_2_3 = UUID();

SET @UUID_topics_3 = UUID();
SET @UUID_quizzes_3_1 = UUID();
SET @UUID_questions_3_1_1 = UUID();
SET @UUID_answers_3_1_1 = UUID();
SET @UUID_questions_3_1_2 = UUID();
SET @UUID_answers_3_1_2 = UUID();
SET @UUID_questions_3_1_3 = UUID();
SET @UUID_answers_3_1_3 = UUID();
SET @UUID_quizzes_3_2 = UUID();
SET @UUID_questions_3_2_1 = UUID();
SET @UUID_answers_3_2_1 = UUID();
SET @UUID_questions_3_2_2 = UUID();
SET @UUID_answers_3_2_2 = UUID();
SET @UUID_questions_3_2_3 = UUID();
SET @UUID_answers_3_2_3 = UUID();




-- topico 2
INSERT INTO topics
  (id, description, image_url, title)
VALUES
  (@UUID_topics_2, "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>.", "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png", "CSS");
-- quiz 1
INSERT INTO quizzes
  (id, topic_id, title, image_url, level)
VALUES
  (@UUID_quizzes_2_1, @UUID_topics_2, "Perguntas gerais", "https://i.pinimg.com/originals/a7/fa/4e/a7fa4e360d42be8e2230acbc3a02b8b9.jpg", 1);

-- question 1
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_2_1_1, @UUID_quizzes_2_1, "O que significa CSS?" , "https://marquesfernandes.com/wp-content/uploads/2020/04/pankaj-patel-6JVlSdgMacE-unsplash.jpg", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_2_1_1, @UUID_questions_2_1_1, "Cascading Style Sheets" , "Creative Dogs Sheets", "Colorful Style Sheets", "Computer Style Sheets");

-- question 2
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_2_1_2, @UUID_quizzes_2_1, "Qual é o HTML correto para se referir a uma folha de estilo externa?" , "https://docplayer.com.br/docs-images/71/65430078/images/6-1.jpg", "optionB");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_2_1_2, @UUID_questions_2_1_2, "<link rel='folhaDeEstilo' type='folha/texto' href='estilo.css'>" , "<link rel='stylesheet' type='text/css' href='estilo.css'>", "<style src='estiloDogao.css'>", "<dog auau='estiloDogao.css'>");

-- question 3
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_2_1_3, @UUID_quizzes_2_1, "Onde em um documento HTML é o lugar correto para se referir a uma folha de estilo externa?" , "https://blog.vandersonguidi.com.br/wp-content/uploads/2014/01/html5_css3.png", "optionD");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_2_1_3, @UUID_questions_2_1_3, "Na tag <img>" , "Na tag <dog>", "Na tag <body>", "Na tag <head>");


-- quiz 2
INSERT INTO quizzes
  (id, topic_id, title, image_url, level)
VALUES
  (@UUID_quizzes_2_2, @UUID_topics_2, "Tags e parametros do CSS", "https://i.workana.com/wp-content/uploads/2018/11/css-1.jpg", 1);

-- question 1
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_2_2_1, @UUID_quizzes_2_2, "Qual é a atributo para definir CSS inline no html" , "https://www.jonathanmoreira.com.br/imgs/CSS.jpg", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_2_2_1, @UUID_questions_2_2_1, "style" , "styles", "class", "cachorro");

-- question 2
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_2_2_2, @UUID_quizzes_2_2, "Qual sintaxe está correta no CSS" , "https://kinsta.com/wp-content/uploads/2016/09/combine-external-css-1.png", "optionC");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_2_2_2, @UUID_questions_2_2_2, "{dog;color:black;}" , "{dog;color=black;", "body{color:black;}", "dog:color=black;");

-- question 3
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_2_2_3, @UUID_quizzes_2_2, "Como inserir comentários no arquivo CSS" , "valor 2", "optionB");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_2_2_3, @UUID_questions_2_2_3, "// dog comentario //" , "/* dog comentario */", "'dog comentario'", "// dog");






-- topico 3
INSERT INTO topics
  (id, description, image_url, title)
VALUES
  (@UUID_topics_3, "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "JavaScript");
-- quiz 1
INSERT INTO quizzes
  (id, topic_id, title, image_url, level)
VALUES
  (@UUID_quizzes_3_1, @UUID_topics_3, "Conhecimentos gerais", "https://i.morioh.com/2020/02/12/71b41185a613.jpg", 2);

-- question 1
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_3_1_1, @UUID_quizzes_3_1, "Dentro de qual elemento HTML colocamos o JavaScript?" , "https://www.topgadget.com.br/wp-content/uploads/2020/09/html-css-js-1.jpg", "optionB");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_3_1_1, @UUID_questions_3_1_1, "<dog>" , "<script>", "<javascript>", "<js>");

-- question 2
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_3_1_2, @UUID_quizzes_3_1, "Como fazer uma soma de dois numeros em Javascript" , "https://kbase.com.br/novo/wp-content/uploads/2019/06/linguagem-JavaScript.jpg", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_3_1_2, @UUID_questions_3_1_2, "num1+num2" , "2+-2", "dog/+dog", "num1+num2+num3");

-- question 3
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_3_1_3, @UUID_quizzes_3_1, "Como escrever 'Olá mundo' em uma caixa de alerta" , "valor 2", "optionD");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_3_1_3, @UUID_questions_3_1_3, "console.log('Olá mundo')" , "msg('Olá mundo')", "dog('Olá mundo')", "alert('Olá mundo')");


-- quiz 2
INSERT INTO quizzes
  (id, topic_id, title, image_url, level)
VALUES
  (@UUID_quizzes_3_2, @UUID_topics_3, "Verifique os JavaScript", "http://wbruno.com.br/wp-content/uploads/2013/04/Captura-de-Tela-2013-04-11-%C3%A0s-10.47.44.png", 3);

-- question 1
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_3_2_1, @UUID_quizzes_3_2, "Verifique a expressão javascript da imagem e selecione o resultado" , "https://pbs.twimg.com/media/EUXzAv1UwAQrKGA.jpg", "optionB");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_3_2_1, @UUID_questions_3_2_1, "1" , "11", "5", "dog?");

-- question 2
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_3_2_2, @UUID_quizzes_3_2, "Qual resultado será printado console.log(true!=((1+2)==(3*1)))" , "https://oportaln10.com.br/wp-content/uploads/2019/01/javascript.jpg", "optionA");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_3_2_2, @UUID_questions_3_2_2, "false" , "true", "DOGZÃOOO", "verdadeiro");

-- question 3
INSERT INTO questions
  (id, quiz_id, question, image_url, answer)
VALUES
  (@UUID_questions_3_2_3, @UUID_quizzes_3_2, "Pra que serve o white()?" , "https://thepracticaldev.s3.amazonaws.com/i/lttbg063fwbkgoaxm9w1.png", "optionD");

INSERT INTO answers
  (id, question_id, optionA, optionB, optionC, optionD)
VALUES
  (@UUID_answers_3_2_3, @UUID_questions_3_2_3, "É uma estrutura de condição" , "É uma estrutura de estilo", "É uma estrutura de um cachorro", "É uma estrutura de repetição");