-- This is an empty migration.

SET @UUID_topics_1 = "3e1c3c75-ebc1-4898-8e94-dc225db53593";
SET @UUID_quizzes_1_1 = "7d63ad30-d239-467d-9101-14caf8657048";
SET @UUID_questions_1_1_1 = "d592b5eb-f8e4-4a48-a941-d803e34a8099";
SET @UUID_answers_1_1_1 = "4d48cf3c-04f7-4654-b5ba-7566dd3f6bcf";
SET @UUID_questions_1_1_2 = "caca34db-ea4c-4c68-801b-5bb1bb84329d";
SET @UUID_answers_1_1_2 = "ab4e9d6f-a647-4c63-b188-816c17ed03ec";
SET @UUID_questions_1_1_3 = "4c38f0df-8e98-4d3b-b2d5-78668196132b";
SET @UUID_answers_1_1_3 = "eddea979-229c-49f0-b47d-bb529bb9a837";
SET @UUID_quizzes_1_2 = "2efc304d-e70d-44b5-9b61-43109a7abd49";
SET @UUID_questions_1_2_1 = "911a9e4e-ebf0-4b04-9d10-aaf265b770af";
SET @UUID_answers_1_2_1 = "9de31c66-9c36-452d-bc02-dca1e74e0705";
SET @UUID_questions_1_2_2 = "b162ce0e-0475-4c3f-8fbd-1bd34c7b3a0f";
SET @UUID_answers_1_2_2 = "0348eb03-81e8-4c3e-b8ff-7c55900a8397";
SET @UUID_questions_1_2_3 = "839705a6-1532-40f1-90bf-3b36623ef73b";
SET @UUID_answers_1_2_3 = "1276538a-b318-4375-8508-d82d4844516b";


SET @UUID_topics_2 = "436426da-972e-4404-8fd3-ccc0eaad7d81";
SET @UUID_quizzes_2_1 = "81a12c17-207a-47b8-9c8a-036211650153";
SET @UUID_questions_2_1_1 = "bc5a3993-86dc-417a-946b-6c34f93b5805";
SET @UUID_answers_2_1_1 = "b65d76d6-0da6-4459-93c3-e5c2e2f5897c";
SET @UUID_questions_2_1_2 = "b4a1b3eb-d70b-4c74-9c59-2b70b3884edf";
SET @UUID_answers_2_1_2 = "04b3abb7-2d82-4ea7-9179-4ad42340c414";
SET @UUID_questions_2_1_3 = "fb15e248-b8ed-4c52-b90e-79053a91d124";
SET @UUID_answers_2_1_3 = "5171e332-9f56-469b-b06c-5eba2ad29b83";
SET @UUID_quizzes_2_2 = "87407c28-11e3-48ae-b830-a2f9316c1a1a";
SET @UUID_questions_2_2_1 = "d9a5ee2e-2ddd-46d3-b23d-7aeb611d9867";
SET @UUID_answers_2_2_1 = "edab6508-3ba0-47b8-a114-66bc4ef1abdb";
SET @UUID_questions_2_2_2 = "a6efbf72-7f9a-4159-95c4-48d86b565942";
SET @UUID_answers_2_2_2 = "0c415286-cb77-4532-82b0-31bb7769b684";
SET @UUID_questions_2_2_3 = "17c03397-ea90-49dc-a6bf-9342389d2e5a";
SET @UUID_answers_2_2_3 = "951b7d9b-0328-4f4b-9280-f025cf209e7b";

SET @UUID_topics_3 = "ceb1c760-91bc-49f6-8323-080b479dcba4";
SET @UUID_quizzes_3_1 = "310570dc-4739-4f33-a462-e15c29f4f5f7";
SET @UUID_questions_3_1_1 = "610574e2-1710-4539-8e55-7138f5e650d8";
SET @UUID_answers_3_1_1 = "6fb0130c-fd29-4a62-96b5-9349ea940620";
SET @UUID_questions_3_1_2 = "9b46e6e7-1828-4470-be3d-6fabcb09ca5f";
SET @UUID_answers_3_1_2 = "43ff1ae3-62da-466e-93f0-44131f17d91b";
SET @UUID_questions_3_1_3 = "88283c40-bf87-4fe7-97fe-3ffdeec4a3b9";
SET @UUID_answers_3_1_3 = "6488cd35-e0c9-4283-8925-ef3fd82e9ad9";
SET @UUID_quizzes_3_2 = "41343e3b-b55e-411f-8779-f34004be7c01";
SET @UUID_questions_3_2_1 = "4e9fb0e5-ca14-4176-8b97-4ca9d46b6e7a";
SET @UUID_answers_3_2_1 = "66433b18-ddbf-4bf6-8b8b-bd4794891a25";
SET @UUID_questions_3_2_2 = "0383b559-1826-4573-9431-b6f1fc515d98";
SET @UUID_answers_3_2_2 = "6047a520-5415-49c1-9190-a7a8b2db3d89";
SET @UUID_questions_3_2_3 = "451c2653-cb4c-4d96-8ecd-e8e5a3ca7164";
SET @UUID_answers_3_2_3 = "acaeefb1-2d90-4a85-8da0-f98e134b239f";

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