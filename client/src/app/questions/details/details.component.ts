import { CreateSurveyService } from './../../services/create-survey.service';
import { Questions } from './../../models/questions';
import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title: string;
  ques: Questions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private createSurveyService: CreateSurveyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    // console.log(this.title + "-------------------");
    this.ques = new Questions();

    this.activatedRoute.params.subscribe(params => {
      this.ques.id = params.id;
    });

    if (this.title === 'Edit Question') {
      this.getQuestion(this.ques);
    }
  }

  private getQuestion(question: Questions): void {
    this.createSurveyService.getQuestion(question).subscribe(data => {
      this.ques = data.ques;
    });
  }

   onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Add Question':
      this.createSurveyService.addQuestion(this.ques).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/questions/addques']);
        } else {
          this.flashMessage.show('Add Question Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/questions/addques']);
        }
      });
      break;

      case 'Edit Question':
      this.createSurveyService.editQuestion(this.ques).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/questions/addques']);
        } else {
          this.flashMessage.show('Edit Question Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/questions/addques']);
        }
      });
      break;
    }
  }

}

