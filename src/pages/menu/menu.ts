import { Component, OnInit } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { ListaAnimal } from '../listaanimal/listaanimal';
import { ListaLote } from '../listalote/listalote';
import { ListaRaca } from '../listaraca/listaraca';
import { ListaCategoria } from '../listacategoria/listacategoria';
import { ListaVacinas } from '../listavacinas/listavacinas';
import { NavController } from 'ionic-angular';
import { ListaPropriedade } from '../listapropriedade/listapropriedade';
import { ListaProducao } from '../listaproducao/listaproducao';
import { ListaDespesas } from '../listadespesas/listadespesas';
import { SigninPage } from '../signin/signin';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html'
})

export class Menu {
  constructor(app: App, menu: MenuController, public navCtrl: NavController, public afAuth: AngularFireAuth) {
    menu.enable(true);
  }

  public listaanimal(): void {
    this.navCtrl.push(ListaAnimal);
  }

  public listalote(): void {
    this.navCtrl.push(ListaLote);
  }

  public listacategoria(): void {
    this.navCtrl.push(ListaCategoria);
  }

  public listaraca(): void {
    this.navCtrl.push(ListaRaca);
  }

  public listavacinas(): void {
    this.navCtrl.push(ListaVacinas);
  }

  public listapropriedade(): void {
    this.navCtrl.push(ListaPropriedade);
  }

  public listaproducao(): void {
    this.navCtrl.push(ListaProducao);
  }

  public listadespesas(): void {
    this.navCtrl.push(ListaDespesas);
  }

  public logout(): void {
    this.afAuth.auth.signOut()
      .then(() => {
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      })
  }

}
