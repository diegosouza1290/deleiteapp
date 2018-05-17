import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from '../../models/categoria';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastrocategoria.html'
})
export class CadastroCategoria {
  
  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService) {
    this.ref = db.collection('categorias');
  }

  salvar(form: NgForm) {

    let descricaocategoria: string = form.value.descricaocategoria;
    let user = this.authService.getUser();

    this.ref.add({ descricaocategoria: descricaocategoria, uid: user.uid }).then((_ref) => {
      this.db.doc("categorias/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

  ngOnInit() {

  }

}