import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroAnimal } from '../cadastroanimal/cadastroanimal';
import { Animal } from '../../models/animal';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App, MenuController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { EditarAnimal } from '../editaranimal/editaranimal';
import { AuthService } from '../.././providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { HomePage } from '../homepage/homepage';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-listaanimal',
  templateUrl: './listaanimal.html'
})
export class ListaAnimal {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();
    this.lista = db.collection('animais', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public cadastroanimal(): void {
    this.navCtrl.push(CadastroAnimal);
  }

  public editaranimal(id: string): void {
    this.asCtrl.create({
      buttons: [

        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("animais/" + id).delete();
          }
        },

        {
          text: "Editar",
          handler: () => {
            this.navCtrl.push(EditarAnimal, { id: id });
          }
        },

        {
          text: "Cancelar",
          role: 'cancel',
        }
      ]
    }).present();
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

