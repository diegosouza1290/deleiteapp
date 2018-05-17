import { Injectable } from '@angular/core';
import { Raca } from '../models/raca';

@Injectable()
export class RacaService {

  private lista: Array<Raca> = new Array<Raca>();

  constructor() { }

  public read(): Array<Raca> {
    return this.lista;
  }

  create(raca: Raca) {
    this.lista.push(raca);
  }
}