import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producao } from '../../models/producao';
import { Lote } from '../../models/lote';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../providers/auth/auth-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cadastroproducao',
  templateUrl: './cadastroproducao.html'
})

export class CadastroProducao {

  public id: string;
  public lotes: Observable<Lote[]>
  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService, private navParams: NavParams) {
    this.id = navParams.get('id');
    let user = this.authService.getUser();
    this.lotes = db.collection<Lote>('lotes', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.ref = db.collection('producao');
  }

  salvar(form: NgForm) {

    let lote: string = form.value.lote;
    let data: string = new Date().toLocaleDateString();
    let litroleite: string = form.value.litroleite;
    let user = this.authService.getUser();

    this.ref.add({ lote: lote, data: data, litroleite: litroleite, uid: user.uid }).then((_ref) => {
      this.db.doc("producao/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

}