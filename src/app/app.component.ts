import { Component } from '@angular/core';
import { Card} from '../assets/models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cardInfo: Card[] = []
  public modalOpen: boolean;

  /**
   * Holds the state of the modal
   * @param state - boolean that holds the value of the modal display
   */
  public displayModal(state) {
    this.modalOpen = state;
  }

  /**
   * Holds the state of the modal
   * @param state - boolean that holds the value of the modal display
   */
  public closeModal(state) {
    this.modalOpen = state;
  }

  /**
   * Gets the card info from the modal
   * @param cardInfo - info from the newly created card
   */
  public getsCardInfo(cardInfo) {
    this.cardInfo = cardInfo;
  }

}
