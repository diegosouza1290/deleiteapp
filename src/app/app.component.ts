import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaAnimal } from '../pages/listaanimal/listaanimal';
import { SigninPage } from '../pages/signin/signin';
import { ListaLote } from '../pages/listalote/listalote';
import { ListaRaca } from '../pages/listaraca/listaraca';
import { ListaCategoria } from '../pages/listacategoria/listacategoria';
import { ListaVacinas } from '../pages/listavacinas/listavacinas';
import { ListaProducao } from '../pages/listaproducao/listaproducao';
import { ListaDespesas } from '../pages/listadespesas/listadespesas';
import { NavController } from 'ionic-angular';
import { ListaPropriedade } from '../pages/listapropriedade/listapropriedade';
import { HomePage } from '../pages/homepage/homepage';
import { Tabs } from '../pages/tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth) {
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = Tabs;

      } else {
        this.rootPage = SigninPage;

      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}