import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from '../../assets/models/card.model';
import {CardItem} from '../classes/card-item';

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

  public modalCreation: boolean;
  public errorDisplay: boolean = false;

  public create: Card;
  public card: Card = new CardItem(
    0, '',''
  );

  //////////////////////////////////
  //          CONSTRUCTOR
  //////////////////////////////////

  constructor() { }

  ngOnInit() {
    this.modalOpen = false;

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
    this.create = this.mapCard(cardInfoParameters);
    this.cardInfo.emit(this.create);
    this.closeModal();
  }

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

  //////////////////////////////////
  //          CLOSES THE MODAL
  //////////////////////////////////
  public closeModal() {
    this.modalOpen = false;
    this.isModalClose.emit(this.modalOpen)
  }

}