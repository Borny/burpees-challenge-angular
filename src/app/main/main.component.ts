import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, } from '@angular/core';
import { Card } from '../../assets/models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

  //////////////////////////////////
  //          ATTRIBUTE
  //////////////////////////////////
  @Input() modalOpen: boolean;
  @Input() cardInfo: Card;

  @Output() isModalOpen: EventEmitter<any> = new EventEmitter();
  @Output() setModalRole: EventEmitter<any> = new EventEmitter();

  public cards: Card[] = [];
  public modalRole: string;

  private modalOpens: boolean;

  //////////////////////////////////
  //          CONSTRUCTOR
  //////////////////////////////////
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes['cardInfo'].isFirstChange()){
      this.createCard(this.cardInfo);
    }
  }

  ngOnInit() {
    this.cards;
  }

  //////////////////////////////////
  //          OPEN MODAL 
  //////////////////////////////////
  public openModalTrigger() {
    this.isModalOpen.emit(this.modalOpens = true);
    this.setModalRole.emit(this.modalRole = 'creation');
  }

  //////////////////////////////////
  //          CREATE CARD
  //////////////////////////////////
  private createCard(cardInfo) {
    this.cards.push(cardInfo)
  }

}
