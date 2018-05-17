import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Raca } from '../../models/raca';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastroraca',
  templateUrl: './cadastroraca.html'
})
export class CadastroRaca {

  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService) {
    this.ref = db.collection('racas');
  }

  salvar(form: NgForm) {

    let descricaoraca: string = form.value.descricaoraca;
    let user = this.authService.getUser();

    this.ref.add({ descricaoraca: descricaoraca, uid: user.uid }).then((_ref) => {
      this.db.doc("racas/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

}