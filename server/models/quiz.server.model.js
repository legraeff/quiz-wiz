import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  created: {
    type: Date, default: Date.now
  },
  thumbnail: {
    thumbnailImage: String,
    title: String
  },
  title: {
    text: String,
    titleImage: String
  },
  questions: [
    {
      questionId: String,
      questionTitle: String,
      answers: [
        {
          answerId: String,
          answerImagePath: String,
          answerTitle: String,
          pontuation: [{}]
        }
      ]
    }
  ],
  resultOptions: [
    {
      resultKey: String,
      resultTitle: String,
      resultText: String
    }
  ]
});

export default mongoose.model('Quiz', Schema);
