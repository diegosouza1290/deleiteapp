import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { CadastroLote } from '../cadastrolote/cadastrolote';
import { Lote } from '../../models/lote';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App, MenuController } from 'ionic-angular';
import { Menu } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../.././providers/auth/auth-service';
import { EditarLote } from '../editarlote/editarlote';

@Component({
  selector: 'app-listalote',
  templateUrl: './listalote.html'
})
export class ListaLote {

  public lista: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService) {
    let user = auth.getUser();
    this.lista = db.collection('lotes', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public menu(): void {
    this.navCtrl.push(Menu)
  }

  public cadastrolote(): void {
    this.navCtrl.push(CadastroLote);
  }

  public editarlote(id: string): void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: 'destructive',
          handler: () => {
            this.db.doc("lotes/" + id).delete();
          }
        },

        {
          text: "Editar",
          handler: () => {
            this.navCtrl.push(EditarLote, { id: id });
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