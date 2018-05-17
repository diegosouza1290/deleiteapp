import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Despesas } from '../../models/despesas';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editardespesas',
  templateUrl: './editardespesas.html'
})
export class EditarDespesas {

  public id: string;
  public despesas = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('despesas');
    this.id = navParams.get('id');
    db.doc<Despesas>('despesas/' + this.id).valueChanges().subscribe((_a) => {
      this.despesas = _a;
    })
  }

  salvar(form: NgForm) {

    let despesa: string = form.value.despesa;
    let data: Date = new Date();
    let descricaodp: string = form.value.descricaodp;
    let valor: string = form.value.valor;
    let user = this.authService.getUser();

    this.db.doc("despesas/" + this.id).update({ despesa: despesa, data: data, descricaodp: descricaodp, valor: valor })
      .then(() => {
        this.navCtrl.pop();
      })
  }

}