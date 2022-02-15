import { Quesmodel } from './../../../models/question/quesmodel';
import { QuestionService } from './../../../services/question/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  currentQue:number=0;
  queLoaded:Promise<boolean>;
  currentQuestion:Quesmodel;
  currentAns:string;
  selectedQA:
  Array<{Q:string,
  A:string}>;
  count:number=0;
  submitVisibility:boolean=false;
  nextVisibility:boolean=true;
  qdisplay:boolean[]=[false,false,false,false,false,false,false,false,false,false];

  

  constructor( public form:FormBuilder,private questionservice:QuestionService,private router:Router) {
    this.questionform=new FormGroup({});
    console.log("constructor");
    this.selectedQA=[];
      
   }

  ngOnInit(): void {

    this.questionservice.getQuestion().subscribe(
      (que)=>
      {
        this.Questions=que;
        console.log("got questions");
       this.next();
        this.queLoaded=Promise.resolve(true);
        
        
        
      },
      (err)=>console.log(err),
      ()=>{console.log("Done");
      
      }
    );
    console.log("ngoninit");
    //this.getQuestion();
  

  }

  next(){
    if(this.currentAns==""&&this.currentQue>0){
      console.log("the question not answered");
      console.log(this.currentAns);
      console.log(this.currentQue);
      alert("Please answer the question");
    }
    else{

      if(this.currentQue>0){
        this.selectedQA.push({Q:this.Questions[this.currentQue-1].question,A:this.currentAns});
        console.log(this.selectedQA);
       
        }
        if(this.currentQue >=9){
          this.submitVisibility=true;
          this.nextVisibility=false;
        }
        this.currentQuestion=this.Questions[this.currentQue];
        if(this.currentQue==1){
          this.questionform.reset();
          this.questionform.addControl(this.Questions[this.currentQue].question.toString(),new FormControl("",Validators.required));
          this.currentAns="";
        }
        else
        { this.questionform.addControl(this.Questions[this.currentQue].question.toString(),new FormControl("",Validators.required));
        this.currentAns="";
      }
      this.currentQue=this.currentQue+1;
    }
   
  }
  answersSave(ans:string){
    this.currentAns=ans;
    this.qdisplay[this.currentQue-1]=true;
    console.log(this.qdisplay);
  }

  submit(){
    this.selectedQA.push({Q:this.Questions[this.currentQue-1].question,A:this.currentAns});
    console.log(this.selectedQA);
    let i=0;
    console.log(this.questionform);
    let unfilled=0;
    this.qdisplay.forEach(q=>{
      if(q){
        unfilled++;
      }
    }
      )
      console.log(unfilled);

      if(unfilled==10){

    this.Questions.forEach(q=>
      {
        if(q.correct_answers.answer_a_correct=="true"){
          if(q.answers.answer_a==(this.selectedQA[i].A)){
            console.log("a correct answer");
            console.log(q.answers.answer_a);
            console.log((this.selectedQA[i].A));
            this.correctAnswer++;
            console.log(q.correct_answers.answer_a_correct);
          }
          else
          this.wrongAnswer++;
        }
        else if(q.correct_answers.answer_b_correct=="true"){
          if(q.answers.answer_b==(this.selectedQA[i].A)){
            console.log("b correct answer");
            console.log(q.answers.answer_b);
            console.log((this.selectedQA[i].A));
            this.correctAnswer++;
            console.log(q.correct_answers.answer_b_correct);
          }
          else
          this.wrongAnswer++;
        }
        else if(q.correct_answers.answer_c_correct=="true"){
          if(q.answers.answer_c==(this.selectedQA[i].A)){
            console.log("c correct answer");
            console.log(q.answers.answer_c);
            console.log((this.selectedQA[i].A));
            this.correctAnswer++;
            console.log(q.correct_answers.answer_c_correct);
          }
          else
          this.wrongAnswer++;
        }
        else if(q.correct_answers.answer_d_correct=="true"){
          if(q.answers.answer_d==(this.selectedQA[i].A)){
            console.log("d correct answer");
            console.log(q.answers.answer_a);
            console.log((this.selectedQA[i].A));
            console.log(q.correct_answers.answer_d_correct);
            this.correctAnswer++;
          }
          else
          this.wrongAnswer++;
        }
        i=i+1;
        
      }
     
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
  else{
    alert("please answer all questions");
  }
    
  }



}
