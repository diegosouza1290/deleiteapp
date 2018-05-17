import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Propriedade } from '../../models/propriedade';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastropropriedade',
  templateUrl: './cadastropropriedade.html'
})
export class CadastroPropriedade {

  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService) {
    this.ref = db.collection('propriedades');
  }

  salvar(form: NgForm) {

    let propriedadenome: string = form.value.propriedadenome;
    let responsavel: string = form.value.responsavel;
    let municipio: string = form.value.municipio;
    let area: string = form.value.area;
    let user = this.authService.getUser();

    this.ref.add({ propriedadenome: propriedadenome, responsavel: responsavel, municipio: municipio, area: area, uid: user.uid }).then((_ref) => {
      this.db.doc("propriedades/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

  ngOnInit() {

  }

}