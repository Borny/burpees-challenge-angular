import { Injectable } from '@angular/core';
import { CardApi, Card } from 'sdk';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private cardApi: CardApi) { }

  public getCards() {
    return this.cardApi.find<Card>().toPromise();
  }

  public createCard(cardInfo) {
    let data = new Card(cardInfo);
    data.day = cardInfo.day;
    data.time = cardInfo.time;
    data.set = cardInfo.set;

    return this.cardApi.create<Card>(data).toPromise();
  }

  public editCard(cardInfoEdited){
    return this.cardApi.updateAttributes<Card>(cardInfoEdited.id, cardInfoEdited).toPromise()
  }

}
