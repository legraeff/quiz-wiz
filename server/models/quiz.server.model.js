import mongoose from 'mongoose';

var Schema = mongoose.Schema({
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
          answerText: String,
          pontuation: [
            {
            }
          ]
        }
      ]
    }
  ],
  resultOptions: [
    {
      key: String,
      resultImagePath: String,
      title: String,
      text: String
    }
  ]
});

export default mongoose.model('Quiz', Schema);
