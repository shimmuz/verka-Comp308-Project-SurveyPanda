import { CreateSurveyService } from './../../services/create-survey.service';
import { Questions } from './../../models/questions';
import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addques',
  templateUrl: './addques.component.html',
  styleUrls: ['./addques.component.css']
})
export class AddquesComponent implements OnInit {
  ques: Questions[];
  constructor(
    private createSurveyService: CreateSurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ques = new Array<Questions>();
    this.displayQuestions();
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')){
      this.router.navigate(['/questions/addques']);
    }
  }

  displayQuestions(): void{
    this.createSurveyService.getList().subscribe(data => {
      if (data.success) {
        this.ques = data.questions;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }
}
