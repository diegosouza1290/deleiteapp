import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Lote } from '../../models/lote';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editarlote',
  templateUrl: './editarlote.html'
})
export class EditarLote {

  public id: string;
  public lote = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('lotes');
    this.id = navParams.get('id');
    db.doc<Lote>('lotes/' + this.id).valueChanges().subscribe((_a) => {
      this.lote = _a;
    })
  }

  salvar(form: NgForm) {

    let descricaolote: string = form.value.descricaolote;
    let user = this.authService.getUser();

    this.db.doc("lotes/" + this.id).update({ descricaolote: descricaolote })
      .then(() => {
        this.navCtrl.pop();
      })
  }
}