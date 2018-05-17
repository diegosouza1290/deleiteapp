import { Injectable } from '@angular/core';
import { Propriedade } from '../models/propriedade';

@Injectable()
export class PropriedadeService {

  private lista: Array<Propriedade> = new Array<Propriedade>();

  constructor() { }

  public read(): Array<Propriedade> {
    return this.lista;
  }

  create(propriedade: Propriedade) {
    this.lista.push(propriedade);
  }
}