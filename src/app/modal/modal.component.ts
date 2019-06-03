import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from '../../assets/models/card.model';
import { CardItem } from '../classes/card-item';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  //////////////////////////////////
  //          ATTRIBUTE
  //////////////////////////////////
  @Input() modalOpen: boolean;
  @Input() modalRole: string;

  @Output() isModalClose: EventEmitter<any> = new EventEmitter();
  @Output() cardInfo: EventEmitter<any> = new EventEmitter();
  @Output() cardInfoEdited: EventEmitter<any> = new EventEmitter();

  public modalCreation: boolean;

  private cardCreated: Card;
  private editedInfo: Card;

  public card: Card = new CardItem(
    0, '', ''
  );

  //////////////////////////////////
  //          CONSTRUCTOR
  //////////////////////////////////

  constructor() { }

  ngOnInit() {
    this.modalOpen = false;
    this.modalRole = 'creation';
  }

  //////////////////////////////////
  //          CREATE CARD
  //////////////////////////////////
  /**
   * Gets the value from the modal inputs
   * @param day - day numner
   * @param time - time to complete the set
   * @param set - unbroken or multiple sets
   */
  public createCard(day, time, set) {
    const cardInfoParameters = [day, time, set];
    this.cardCreated = this.mapCard(cardInfoParameters);
    this.cardInfo.emit(this.cardCreated);
    this.closeModal();
  }

  //////////////////////////////////
  //          EDIT THE CARD
  //////////////////////////////////
  public editCard(day, time, set) {
    const cardInfoParameters = [day, time, set];
    this.editedInfo = this.mapCardEdited(cardInfoParameters);
    this.cardInfoEdited.emit(this.editedInfo);
    this.closeModal();
  }

  //////////////////////////////////
  //          MAP CARD
  //////////////////////////////////
  /**
   * Mapping the values retrieved from the modal based on a Card model
   * @param cardInfo - values from the modal inputs
   * @returns an array with the mapped card info
   */
  private mapCard(cardInfo) {
    return {
      id: cardInfo[0],
      time: cardInfo[1],
      set: cardInfo[2]
    }
  }

  /**
   * Mapping the values retrieved from the modal based on a Card model
   * @param cardInfoEdited - values from the modal inputs
   * @returns an array with the mapped card info
   */
  private mapCardEdited(cardInfoEdited) {
    return {
      id: cardInfoEdited[0],
      time: cardInfoEdited[1],
      set: cardInfoEdited[2]
    }
  }

  //////////////////////////////////
  //          CLOSES THE MODAL
  //////////////////////////////////
  public closeModal() {
    this.isModalClose.emit(this.modalOpen = false)
  }

}