import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  startQuiz(){
    this.router.navigate(['/examform']);
  }

}
