import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
   
  questions=[];
  answer=false;
  num=0;
  points=0;

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.start();
  }

  start(){

    this.questions=[];
    this.quizService.getQuiz().subscribe(async res => {
      let quiz=res['results'];

      quiz.forEach(element => {
        element.incorrect_answers.push(element.correct_answer);
        // it give wrong ans always 4th one we should shuffle it 
        element.incorrect_answers.sort(()=>.5-Math.random());
        
      });
//
      this.questions=await quiz;
      this.num=0;
      this.points=0;

    });
  }
  checkAnswer(correct_answer:string,your_answer:string){

         this.answer=correct_answer == your_answer ? true : false;
         this.answer ? this.points +=10 : this.points -=1;
         this.num < this.questions.length? this.num +=1 : null;


  }
  

}
