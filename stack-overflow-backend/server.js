const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const question = [];


app.get('/questions', (req, res) => {
  res.json(question);
});

app.post('/questions', (req, res) => {
  const questions = req.body;
  question.push(questions);
  res.json({ message: 'Question posted successfully', question });
});

app.post('/login', (req, res)=> {
  const value = req.body.answer;
  console.log(req.body.answer)
  console.log(value);
  if(value !== ''){
    res.json({ message: 'Logined successfully'});
  }else {
    res.status(404).json({ message: 'Answer not found' });
  }
})


app.post('/answers', (req , res) => {

  const answer = req.body
  question[req.body.id - 1] = req.body
  res.json({ message: 'Answer posted successfully', answer });
});


app.put('/updateAnswer/:questionId/:ansId', (req, res) => {
  const questionId = req.params.questionId;
  const answerId = req.params.ansId;
  const accepted = req.body.Accepted;

  const questions = question.find(q => q.id == questionId);
  if (questions) {
    const answer = questions.answers.find(a => a.id == answerId);
    if (answer) {

      answer.status = accepted ? 'Accepted' : 'Rejected';

      res.json({ message: 'Answer status updated successfully', answers: question.answers });
    } else {
      res.status(404).json({ message: 'Answer not found' });
    }
  } else {
    res.status(404).json({ message: 'Question not found' });
  }
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
