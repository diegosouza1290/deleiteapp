import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroRaca } from '../cadastroraca/cadastroraca';
import { Raca } from '../../models/raca';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App, MenuController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../.././providers/auth/auth-service';
import { EditarRaca } from '../editarraca/editarraca';

@Component({
  selector: 'app-listaraca',
  templateUrl: './listaraca.html'
})
export class ListaRaca {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();

    this.lista = db.collection('racas', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public menu(): void {
    this.navCtrl.push(Menu)
  }

  public cadastroraca(): void {
    this.navCtrl.push(CadastroRaca);
  }

  public editarraca(id: string): void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("racas/" + id).delete();
          }
        },

        {
          text: "Editar",
          handler: () => {
            this.navCtrl.push(EditarRaca, { id: id });
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