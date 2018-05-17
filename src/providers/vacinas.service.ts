import { Injectable } from '@angular/core';
import { Vacinas } from '../models/vacinas';

@Injectable()
export class VacinasService {

  private lista: Array<Vacinas> = new Array<Vacinas>();

  constructor() { }

  public read(): Array<Vacinas> {
    return this.lista;
  }

  create(vacinas: Vacinas) {
    this.lista.push(vacinas);
  }
}