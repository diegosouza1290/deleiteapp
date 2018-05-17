import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroVacinas } from '../cadastrovacinas/cadastrovacinas';
import { Vacinas } from '../../models/vacinas';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App, MenuController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../.././providers/auth/auth-service';
import { EditarVacinas } from '../editarvacinas/editarvacinas';

@Component({
  selector: 'app-listavacinas',
  templateUrl: './listavacinas.html'
})
export class ListaVacinas {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();

    this.lista = db.collection('vacinas', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public menu(): void {
    this.navCtrl.push(Menu)
  }

  public cadastrovacinas(): void {
    this.navCtrl.push(CadastroVacinas);
  }

  public editarvacinas(id: string): void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("vacinas/" + id).delete();
          }
        },

        {
          text: "Editar",
          handler: () => {
            this.navCtrl.push(EditarVacinas, { id: id });
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