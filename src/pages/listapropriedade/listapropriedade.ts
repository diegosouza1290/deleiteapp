import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../.././providers/auth/auth-service';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { CadastroPropriedade } from '../cadastropropriedade/cadastropropriedade';
import { EditarPropriedade } from '../editarpropriedade/editarpropriedade';

@Component({
  selector: 'app-listapropriedade',
  templateUrl: './listapropriedade.html'
})
export class ListaPropriedade {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();

    this.lista = db.collection('propriedades', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }


  public menu(): void {
    this.navCtrl.push(Menu)
  }

  public cadastropropriedade(): void {
    this.navCtrl.push(CadastroPropriedade);
  }

  public editarpropriedade(id: string): void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("propriedades/" + id).delete();
          }
        },

        {
          text: "Editar",
          handler: () => {
            this.navCtrl.push(EditarPropriedade, { id: id });
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



