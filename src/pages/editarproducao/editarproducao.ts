import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Producao } from '../../models/producao';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editarproducao',
  templateUrl: './editarproducao.html'
})
export class EditarProducao {

  public id: string;
  public producao = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('producao');
    this.id = navParams.get('id');
    db.doc<Producao>('producao/' + this.id).valueChanges().subscribe((_a) => {
      this.producao = _a;
    })
  }

  salvar(form: NgForm) {

    let lote: string = form.value.lote;
    let data: Date = new Date();
    let litroleite: string = form.value.litroleite;
    let user = this.authService.getUser();

    this.db.doc("producao/" + this.id).update({ lote: lote, data: data, litroleite: litroleite })
      .then(() => {
        this.navCtrl.pop();
      })
  }

}