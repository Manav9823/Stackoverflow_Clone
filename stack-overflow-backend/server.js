const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const questions = [];
const answers = [];

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.post('/questions', (req, res) => {
  const question = req.body;
  questions.push(question);
  res.json({ message: 'Question posted successfully', question });
});

app.get('/answers', (req, res) => {
  res.json(answers);
});

app.post('/answers', (req, res) => {
  const answer = req.body;
  answers.push(answer);
  res.json({ message: 'Answer posted successfully', answer });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
