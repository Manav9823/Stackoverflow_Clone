const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const question: { title: string, body: string, tags: string[], answers:string[] } = { title: '', body: '', tags: [], answers:[] };

// interface answer {
//   id: number;
//   text: string;
//   status: string;
// }

// interface Question {
//   id: number;
//   title: string;
//   body: string;
//   tags: string[];
//   answers: answer[];
// }

const question = []

// const question = {
//   id: number,
//   title: string,
//   body: string,
//   tags: [],
//   answers: { id: number,
//              text: string,
//              status: string}
// }



app.get('/questions', (req, res) => {
  console.log('manav 12')
  res.json(question);
});

app.post('/questions', (req, res) => {
  console.log('maanva 23')
  const questions = req.body;
  console.log(questions)
  // if(questions.answers.text === ''){
  //   questions.answers = []
  //   question.push(questions)
  // }
  question.push(questions)
  console.log('maanv')
  console.log(question)
  res.json({ message: 'Question posted successfully', question });
});


app.post('/answers', (req , res) => {
  console.log('hiii')
  // console.log(req)
  const answer = req.body
  console.log(answer) 
  // const newAnswer = {
  //   id : 
  //   text : 
  //   status : ''
  // }
  // let quesObj = question.find(element => element.id === answer.id)
  console.log(question)
  console.log(question.answers)
  console.log('mamavn')
  question[req.body.id - 1] = req.body
  // console.log(quesObj)
  // console.log('manav') 
  // question.answers = question.answers || []
  // quesObj.answers.push(req.body.answers[req.body.answers.length])
  // question.answers.push(req.body.answers[req.body.answers.length + 1])
  // console.log('hiii', quesObj)
  console.log(question)
  // answers.push(answer);
  res.json({ message: 'Answer posted successfully', answer });
});

// Assume you have a router set up for questions and answers

// Update answer status
app.put('/updateAnswer/:questionId/:ansId', (req, res) => {
  console.log('in put')
  const questionId = req.params.questionId;
  const answerId = req.params.ansId;
  const accepted = req.body.Accepted;
  console.log('in put 2')
  // true for accepted, false for rejected

  // Update the answer status in your data storage
  // This is a simplified example, you'd usually update a database in a real app
  // For simplicity, let's assume questions and answers are stored in an array
  console.log(questionId)
  console.log(answerId)
  console.log(question)
  const questions = question.find(q => q.id == questionId);
  console.log(questions)
  if (questions) {
    const answer = questions.answers.find(a => a.id == answerId);
    console.log('maanv', answer)
    if (answer) {
      console.log('in ans ')
      // Update the answer's status
      // Here, you might update a database with the new status
      // For simplicity, we'll update the answer directly in the array
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
