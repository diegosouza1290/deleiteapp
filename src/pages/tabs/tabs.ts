import { Component, OnInit } from '@angular/core';
import { HomePage } from '../homepage/homepage';
import { ListaAnimal } from '../listaanimal/listaanimal';
import { Menu } from '../menu/menu';
import { ListaProducao } from '../listaproducao/listaproducao';
import { ListaDespesas } from '../listadespesas/listadespesas';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html'
})
export class Tabs {

  rootPage: any = HomePage;

  tab1 = HomePage;
  tab2 = ListaAnimal;
  tab3 = ListaDespesas;
  tab4 = Menu;

  constructor() { }

}