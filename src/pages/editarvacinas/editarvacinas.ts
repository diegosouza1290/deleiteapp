import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Vacinas } from '../../models/vacinas';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editarvacinas',
  templateUrl: './editarvacinas.html'
})
export class EditarVacinas {

  public id: string;
  public vacina = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('vacinas');
    this.id = navParams.get('id');
    db.doc<Vacinas>('vacinas/' + this.id).valueChanges().subscribe((_a) => {
      this.vacina = _a;
    })
  }

  salvar(form: NgForm) {

    let descricaovm: string = form.value.descricaovm;
    let tipo: string = form.value.tipo;
    let user = this.authService.getUser();

    this.db.doc("vacinas/" + this.id).update({ descricaovm: descricaovm, tipo: tipo })
      .then(() => {
        this.navCtrl.pop();
      })
  }

}