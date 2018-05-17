import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vacinas } from '../../models/vacinas';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastrovacinas',
  templateUrl: './cadastrovacinas.html'
})
export class CadastroVacinas {

  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService) {
    this.ref = db.collection('vacinas');
  }

  salvar(form: NgForm) {

    let descricaovm: string = form.value.descricaovm;
    let tipo: string = form.value.tipo;
    let user = this.authService.getUser();

    this.ref.add({ descricaovm: descricaovm, tipo: tipo, uid: user.uid }).then((_ref) => {
      this.db.doc("vacinas/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

}