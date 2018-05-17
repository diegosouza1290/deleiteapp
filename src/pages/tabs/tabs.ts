import { Component, OnInit } from '@angular/core';
import { HomePage } from '../homepage/homepage';
import { ListaAnimal } from '../listaanimal/listaanimal';
import { Menu } from '../menu/menu';
import { ListaProducao } from '../listaproducao/listaproducao';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html'
})
export class Tabs {

  rootPage: any = HomePage;

  tab1 = HomePage;
  tab2 = ListaProducao;
  tab3 = ListaAnimal;
  tab4 = Menu;

  constructor() { }

}