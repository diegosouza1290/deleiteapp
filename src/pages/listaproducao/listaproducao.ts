import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroProducao } from '../cadastroproducao/cadastroproducao';
import { Producao } from '../../models/producao';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App, MenuController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../.././providers/auth/auth-service';
import { EditarProducao } from '../editarproducao/editarproducao';

@Component({
  selector: 'app-listaproducao',
  templateUrl: './listaproducao.html'
})

export class ListaProducao {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();
    this.lista = db.collection('producao', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public menu(): void {
    this.navCtrl.push(Menu)
  }

  public cadastroproducao(): void {
    this.navCtrl.push(CadastroProducao);
  }

  public editarproducao(id: string): void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("producao/" + id).delete();
          }
        },

        {
          text: "Cancelar",
          role: 'cancel',
        }
      ]
    }).present();
  }
}