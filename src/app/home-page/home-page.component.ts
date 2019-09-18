import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionsService} from '../questions.service';
import {AnswersStorageService} from "../answers-storage.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    form: FormGroup;
    questions = [];
    userAnswer = [];
    selectedAnswer = '';
    contact = [];
    newEmail = '';
    newPhoneNumber = '';
    flag = false;
    flag2 = true;
    flag3 = false;
    flag6 = false;
    flag7 = false;
    red = 'red';
    green = 'green';
    black = 'black';
    i: number;
    count;
    timeLeft: number = 20;
    interval;
    answers = [];

  constructor(private questionsService: QuestionsService, private answersStorageService: AnswersStorageService) { }
  radioChangeHandeler(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.questions.length; k++){
      if (this.selectedAnswer === this.questions[k].answer1 || this.selectedAnswer === this.questions[k].answer2 || this.selectedAnswer === this.questions[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
   }
  ngOnInit() {
    this.questions = this.questionsService.questions;
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])),
     });
  }

  print() {
    window.print();
  }

  onSubmit() {
    if (this.newEmail !== '' && this.newPhoneNumber !== '') {
    this.contact.push({
      email: this.newEmail,
      phoneNumber: this.newPhoneNumber
    });
     this.newEmail = '';
     this.newPhoneNumber = '';
      }
       this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0 || this.verify()){
        this.form.disable();
        this.verify();
      }
    }, 1000);
    this.flag = !this.flag;

  }

  getColor(i) {
      if ( this.questions[i].trueAnswer === this.questions[i].answer1 && this.flag6) {
        return this.green;
      }
      if (this.questions[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.questions[i].trueAnswer && this.flag6 ){
      return this.red;
    }
      if(this.questions[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.questions[i].trueAnswer && this.flag6 ) {
      return this.black;
    }
  }
  getColor1(i) {
    if ( this.questions[i].trueAnswer === this.questions[i].answer2 && this.flag6) {
      return this.green;
    }
    if (this.questions[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.questions[i].trueAnswer && this.flag6 ){
      return this.red;
    }
    if(this.questions[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.questions[i].trueAnswer && this.flag6) {
      return this.black;
    }
  }
  getColor2(i) {
    if ( this.questions[i].trueAnswer === this.questions[i].answer3 && this.flag6) {
      return this.green;
    }
    if (this.questions[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.questions[i].trueAnswer && this.flag6){
      return this.red;
    }
    if (this.questions[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.questions[i].trueAnswer && this.flag6) {
      return this.black;
    }
  }
  verify() {

    this.count = 0;
    for (let j = 0; j < this.userAnswer.length; j++){
      if (this.userAnswer[j] === this.questions[j].trueAnswer)
        this.count ++;
    }


    const c = ({
      Contacts: this.contact,
      year: new Date(),
      Result: '6/' + this.count,
      'When you were little, what did you want to be when you grow up?': this.userAnswer[0],
      ' If you got stuck in the elevator and was forced to listen to only one song, which would it be?': this.userAnswer[1],
      'What was your worst job?': this.userAnswer[2],
      'If you could live anywhere, where would it be?': this.userAnswer[3],
      'Which drink you like': this.userAnswer[4],
      'Where you go out with your friend...?': this.userAnswer[5],
    });

    this.answersStorageService.verify(c).subscribe((data) =>{
      this.answers.push(data);
      this.newEmail = '';
      this.newPhoneNumber = '';

    });

    this.flag6 = !this.flag6;
    this.flag3 = !this.flag3;
    this.form.disable();
    this.flag2 = false;
    this.flag7 = !this.flag7;
    clearInterval(this.interval);
    return this.count;

    }

  }



