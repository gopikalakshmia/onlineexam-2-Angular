import { Quesmodel } from './../../../models/question/quesmodel';
import { QuestionService } from './../../../services/question/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent implements OnInit {
 Questions: Quesmodel[];
  questionform!: FormGroup;
  correctAnswer:number=0;
  wrongAnswer:number=0;

  constructor( public form:FormBuilder,private questionservice:QuestionService,private router:Router) {
    this.questionform=new FormGroup({});
      
   }

  ngOnInit(): void {

    this.getQuestion();
  

  }

  getQuestion(){
    this.questionservice.getQuestion().subscribe(
      (que)=>
      {this.Questions=que;
        this.Questions.forEach(q=>{
          if(this.questionform!=undefined){
            this.questionform.addControl(q.question.toString(),new FormControl(""));
          }})},
      (err)=>console.log(err),
      ()=>console.log("Done")
    );
  }
  submit(){

    this.Questions.forEach(q=>
      {
        if(q.correct_answers.answer_a_correct=="true"){
          if(q.answers.answer_a==(this.questionform.get(q.question)?.value)){
            console.log("correct answer");
            this.correctAnswer++;
            console.log(q.correct_answers.answer_a_correct);
          }
          else
          this.wrongAnswer++;
        }
        else if(q.correct_answers.answer_b_correct=="true"){
          if(q.answers.answer_b==(this.questionform.get(q.question)?.value)){
            console.log("correct answer");
            this.correctAnswer++;
            console.log(q.correct_answers.answer_b_correct);
          }
          else
          this.wrongAnswer++;
        }
        else if(q.correct_answers.answer_c_correct=="true"){
          if(q.answers.answer_c==(this.questionform.get(q.question)?.value)){
            console.log("correct answer");
            this.correctAnswer++;
            console.log(q.correct_answers.answer_c_correct);
          }
          else
          this.wrongAnswer++;
        }
        else if(q.correct_answers.answer_d_correct=="true"){
          if(q.answers.answer_d==(this.questionform.get(q.question)?.value)){
            console.log("correct answer");
            console.log(q.correct_answers.answer_d_correct);
            this.correctAnswer++;
          }
          else
          this.wrongAnswer++;
        }}
    )

    //alert("No: of Correct Answer"+this.correctAnswer +" No:of Wrong answers :"+this.wrongAnswer);
   let score={correct:this.correctAnswer,wrong:this.wrongAnswer};
   let navigationscore:NavigationExtras={
     state:{
       data:score
     }
   };
       
    this.router.navigate(['/score'],navigationscore);
    
  }

}
