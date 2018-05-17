import { Injectable } from '@angular/core';
import { Despesas } from '../models/despesas';

@Injectable()
export class DespesasService {

  private lista: Array<Despesas> = new Array<Despesas>();

  constructor() { }

  public read(): Array<Despesas> {
    return this.lista;
  }

  create(despesas: Despesas) {
    this.lista.push(despesas);
  }
}