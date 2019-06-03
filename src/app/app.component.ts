import { Component } from '@angular/core';
import { Card } from '../assets/models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //////////////////////////////////
  //          ATTRIBUTE
  //////////////////////////////////

  /** Inits a new card object  */
  public cardInfo: Card;

  /** Edits an existing card object  */
  public cardInfoEdited: Card;

  /** Holds the boolean value of the modal state */
  public modalOpen: boolean;

  /** Holds the modal role */
  public modalRole: string;

  //////////////////////////////////
  //          MODAL
  //////////////////////////////////

  /**
   * Holds the state of the modal
   * @param state - array that holds the value of the modal display
   * and the modal role
   */
  public displayModal(state) {
    this.modalOpen = state[0];
    this.modalRole = state[1];
  }

  /**
   * Holds the state of the modal
   * @param state - boolean that holds the value of the modal display
   */
  public closeModal(state) {
    this.modalOpen = state;
  }

  //////////////////////////////////
  //          CARD
  //////////////////////////////////

  /**
   * Gets the card info from the modal
   * @param cardInfo - info from the newly created card
   */
  public getsCardInfo(cardInfo) {
    this.cardInfo = cardInfo;
  }
  
  /**
   * Gets the card info from the edit modal
   * @param cardInfoEdited - info edited from the edited card
   */
  public getsCardInfoEdited(cardInfoEdited) {
    this.cardInfoEdited = cardInfoEdited;
  }

}
