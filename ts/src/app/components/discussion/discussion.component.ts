import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
})
export class DiscussionComponent implements OnInit {
  showForm = false;
  formSend = false;

  constructor() {}

  ngOnInit(): void {}

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  newTopic(): void {
    this.showForm = true;
    this.formSend = false;
  }

  sendForm(event: Event): void {
    event?.preventDefault();
    this.formSend = true;
  }
}