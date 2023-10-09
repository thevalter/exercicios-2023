import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  showFullCard: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  CardExpanded() {
    console.log('foi');
    this.showFullCard = !this.showFullCard;
  }


}
