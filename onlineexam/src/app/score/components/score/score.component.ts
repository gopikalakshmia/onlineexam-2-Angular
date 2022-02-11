import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
correct:number=0;
wrong:number=0;
pass:boolean;
  constructor(private router:Router) {
    if(this.router.getCurrentNavigation()?.extras.state){
      let score=this.router.getCurrentNavigation()?.extras.state;
      
      if(score){
        let scoreDetails=score['data'];
        console.log(scoreDetails);
        this.correct=scoreDetails.correct;
        this.wrong=scoreDetails.wrong;
        if(this.correct>2)
          this.pass=true;
          else
          this.pass=false;
          
        
      }
   }
  }

  ngOnInit(): void {
    
     
    }
  


}
