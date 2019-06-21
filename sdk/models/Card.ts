/* tslint:disable */

declare var Object: any;
export interface CardInterface {
  "day": string;
  "time": string;
  "set": string;
  "id"?: any;
}

export class Card implements CardInterface {
  "day": string;
  "time": string;
  "set": string;
  "id": any;
  constructor(data?: CardInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Card`.
   */
  public static getModelName() {
    return "Card";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Card for dynamic purposes.
  **/
  public static factory(data: CardInterface): Card{
    return new Card(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Card',
      plural: 'Cards',
      path: 'Cards',
      idName: 'id',
      properties: {
        "day": {
          name: 'day',
          type: 'number'
        },
        "time": {
          name: 'time',
          type: 'string'
        },
        "set": {
          name: 'set',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
