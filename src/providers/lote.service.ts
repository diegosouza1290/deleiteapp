import { Injectable } from '@angular/core';
import { Lote } from '../models/lote';

@Injectable()
export class LoteService {

  private lista: Array<Lote> = new Array<Lote>();

  constructor() { }

  public read(): Array<Lote> {
    return this.lista;
  }

  create(lote: Lote) {
    this.lista.push(lote);
  }
}