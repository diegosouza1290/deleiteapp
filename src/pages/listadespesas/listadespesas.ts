import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroDespesas } from '../cadastrodespesas/cadastrodespesas';
import { Despesas } from '../../models/despesas';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App, MenuController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../.././providers/auth/auth-service';
import { EditarDespesas } from '../editardespesas/editardespesas';

@Component({
  selector: 'app-listadespesas',
  templateUrl: './listadespesas.html'
})
export class ListaDespesas {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();
    this.lista = db.collection('despesas', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public menu(): void {
    this.navCtrl.push(Menu)
  }

  public cadastrodespesas(): void {
    this.navCtrl.push(CadastroDespesas);
  }

  public editardespesas(id: string): void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("despesas/" + id).delete();
          }
        },

        {
          text: "Editar",
          handler: () => {
            this.navCtrl.push(EditarDespesas, { id: id });
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