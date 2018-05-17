import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Despesas } from '../../models/despesas';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastrodespesas',
  templateUrl: './cadastrodespesas.html'
})
export class CadastroDespesas {

  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService) {
    this.ref = db.collection('despesas');
  }

  salvar(form: NgForm) {

    let despesa: string = form.value.despesa;
    let data: Date = new Date();
    let descricaodp: string = form.value.descricaodp;
    let valor: string = form.value.valor;
    let user = this.authService.getUser();

    this.ref.add({ despesa: despesa, data: data, descricaodp: descricaodp, valor: valor, uid: user.uid }).then((_ref) => {
      this.db.doc("despesas/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

  ngOnInit() {
  }

}