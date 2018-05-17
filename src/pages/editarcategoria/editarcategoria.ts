import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.html'
})
export class EditarCategoria {

  public id: string;
  public categoria = {}
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.ref = db.collection('categorias');
    this.id = navParams.get('id');
    db.doc<Categoria>('categorias/' + this.id).valueChanges().subscribe((_a) => {
      this.categoria = _a;
  })
  }

    salvar(form: NgForm) {

    let descricaocategoria: string = form.value.descricaocategoria;
    let user = this.authService.getUser();

    this.db.doc("propriedades/" + this.id).update({ descricaocategoria: descricaocategoria })
      .then(() => {
        this.navCtrl.pop();
      })
  } 
}