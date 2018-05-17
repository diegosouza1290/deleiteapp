import { Injectable } from '@angular/core';
import { Producao } from '../models/producao';

@Injectable()
export class ProducaoService {

  private lista: Array<Producao> = new Array<Producao>();

  constructor() { }

  public read(): Array<Producao> {
    return this.lista;
  }

  create(producao: Producao) {
    this.lista.push(producao);
  }
}