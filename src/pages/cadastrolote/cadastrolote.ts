import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lote } from '../../models/lote';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastrolote.html'
})
export class CadastroLote {

  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService) {
    this.ref = db.collection('lotes');
  }

  salvar(form: NgForm) {

    let descricaolote: string = form.value.descricaolote;
    let user = this.authService.getUser();

    this.ref.add({ descricaolote: descricaolote, uid: user.uid }).then((_ref) => {
      this.db.doc("lotes/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

}