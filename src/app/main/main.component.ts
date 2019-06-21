import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, } from '@angular/core';
import { Card } from '../../assets/models/card.model';
import { CardService } from '../services/card.service';

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
  @Input() cardInfoEdited: Card;

  @Output() isModalOpen: EventEmitter<any[]> = new EventEmitter();
  @Output() setModalRole: EventEmitter<any> = new EventEmitter();

  /** Constante variables */
  private readonly CREATION = 'creation';
  private readonly EDITION = 'edition';
  private editedCard: Card;
  private infoEdited: Card;

  /** Inits the cards */
  public cards: Card[] = [];

  /** Holds the state of the modal role : 'creation' | 'edition' */
  public modalRole: string;

  /** Wether or not the modal is displayed  */
  private modalOpens: boolean;

  //////////////////////////////////
  //          CONSTRUCTOR
  //////////////////////////////////
  constructor(private cardService: CardService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardInfo'] && !changes['cardInfo'].isFirstChange()) {
      this.cardInfo
      this.createCard(this.cardInfo)
    } else if (changes['cardInfoEdited'] && !changes['cardInfoEdited'].isFirstChange()) {
      this.editCard(this.cardInfoEdited);
      this.cardService.editCard(this.infoEdited);
    }
  }

  ngOnInit() {
    this.displayCards();
  }

  //////////////////////////////////
  //          OPEN MODAL 
  //////////////////////////////////
  public openModalTrigger() {
    this.isModalOpen.emit([this.modalOpens = true, this.modalRole = this.CREATION]);
  }

  //////////////////////////////////
  //          CREATE CARD
  //////////////////////////////////
  private createCard(cardInfo) {
    this.cards.push(cardInfo);
    this.cardService.createCard(cardInfo);
  }

  //////////////////////////////////
  //          EDIT CARD
  //////////////////////////////////
  public openEditModal(event) {
    this.editedCard = event.target.parentNode.parentNode;
    this.isModalOpen.emit([this.modalOpens = true, this.modalRole = this.EDITION]);
  }

  private editCard(infoEdited) {
    this.cards.map(card => {
      if (card.id.toString() === this.editedCard.id.toString()) {
        card.id = this.editedCard.id;
        card.time = infoEdited.time;
        card.set = infoEdited.set;
        this.infoEdited = card;
      }
    })
  }

  //////////////////////////////////
  //          DISPLAY CARD
  //////////////////////////////////
  /**
   * displays the cards gotten from the card service
   */
  private displayCards() {
    return this.cardService.getCards().then((data: Card[]) => { this.cards = data })
  }

}
