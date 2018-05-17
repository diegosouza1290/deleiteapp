import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Raca } from '../../models/raca';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editarraca',
  templateUrl: './editarraca.html'
})
export class EditarRaca {

  public id: string;
  public raca = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('racas');
    this.id = navParams.get('id');
    db.doc<Raca>('racas/' + this.id).valueChanges().subscribe((_a) => {
      this.raca = _a;
    })
  }

  salvar(form: NgForm) {

    let descricaoraca: string = form.value.descricaoraca;
    let user = this.authService.getUser();

    this.db.doc("racas/" + this.id).update({ descricaoraca: descricaoraca })
      .then(() => {
        this.navCtrl.pop();
      })
  }
}