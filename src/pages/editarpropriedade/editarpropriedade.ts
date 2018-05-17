import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Propriedade } from '../../models/propriedade';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editarpropriedade',
  templateUrl: './editarpropriedade.html'
})
export class EditarPropriedade {

  public id: string;
  public propriedade = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('propriedades');
    this.id = navParams.get('id');
    db.doc<Propriedade>('propriedades/' + this.id).valueChanges().subscribe((_a) => {
      this.propriedade = _a;
    })
  }

  salvar(form: NgForm) {

    let propriedadenome: string = form.value.propriedadenome;
    let responsavel: string = form.value.responsavel;
    let municipio: string = form.value.municipio;
    let area: string = form.value.area;
    let user = this.authService.getUser();

    this.db.doc("propriedades/" + this.id).update({ propriedadenome: propriedadenome, responsavel: responsavel, municipio: municipio, area: area })
      .then(() => {
        this.navCtrl.pop();
      })
  }
}