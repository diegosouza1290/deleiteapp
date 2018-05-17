import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable()
export class AnimalService {

  private lista: Array<Animal> = new Array<Animal>();

  constructor() { }

  public read(): Array<Animal> {
    return this.lista;
  }

  create(animal: Animal) {
    this.lista.push(animal);
  }
}