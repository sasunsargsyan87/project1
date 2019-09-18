import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  questions = [
    {
      question: 'When you were little, what did you want to be when you grow up?',
      answer1: 'Programmer',
      answer2: 'President of USA',
      answer3: 'Killer',
      trueAnswer: 'Programmer'
    },

  {
    question: 'If you got stuck in the elevator and was forced to listen to only one song, which would it be??',
    answer1: 'Its My Life',
    answer2: 'La-la-fa',
    answer3: 'Maybe I Maybe You',
    trueAnswer: 'Its My Life'
  },

  {
    question: 'What was your worst job?',
    answer1: 'Angular Programmer',
    answer2: 'President of Armenia',
    answer3: 'Boss of Mafia',
    trueAnswer: 'President of Armenia'
  },

  {
    question: 'If you could live anywhere, where would it be?',
    answer1: 'Florencia',
    answer2: 'Yerevan',
    answer3: 'Los-Angeles',
    trueAnswer: 'Yerevan'
  },

  {
    question: 'Which drink you like',
    answer1: 'Water',
    answer2: 'Cofee',
    answer3: 'Milk',
    trueAnswer: 'Cofee'
  },

  {
    question: 'Where you go out with your friend...?',
    answer1: 'Cafe',
    answer2: 'University',
    answer3: 'Cinema',
    trueAnswer: 'Cinema'
  }

];





  constructor() { }
}
