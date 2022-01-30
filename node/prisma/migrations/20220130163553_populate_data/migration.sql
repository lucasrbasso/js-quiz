-- This is an empty migration.

DECLARE idTopics nvarchar(100);
DECLARE idQuizes nvarchar(100);
DECLARE idQuestions nvarchar(100);

INSERT INTO topics (id, description, image_url, title) VALUES ("jawduiahwd-2394nfs","valor 1", "valor 2","valor 3");
SET @idTopics = LAST_INSERT_ID();

INSERT INTO quizes (id, topic_id, title, image_url, level) VALUES ("3ijdhso-apdshurhws",@idTopics, "valor 2","valor 3", 1);
SET @idQuizes = LAST_INSERT_ID();

INSERT INTO questions(id, quiz_id, question, image_url, answer) VALUES  ("20dhso-apdshurhws",@idQuizes, "valor 1" ,"valor 2","valor 3");
SET @idQuestions = LAST_INSERT_ID();

INSERT INTO answers(id, question_id, optionA, optionB, optionC, optionD) VALUES  ("3ijdhso-apdeufws",@idQuestions, "valor 1" ,"valor 2","valor 3","valor 4");