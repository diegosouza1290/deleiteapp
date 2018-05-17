import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable()
export class CategoriaService {

  private lista: Array<Categoria> = new Array<Categoria>();

  constructor() { }

  public read(): Array<Categoria> {
    return this.lista;
  }

  create(categoria: Categoria) {
    this.lista.push(categoria);
  }
}