/* tslint:disable */
import { Injectable } from '@angular/core';
import { Card } from '../../models/Card';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Card: Card,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
