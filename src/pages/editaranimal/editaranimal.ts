import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Animal } from '../../models/animal';
import { Lote } from '../../models/lote';
import { Raca } from '../../models/raca';
import { Propriedade } from '../../models/propriedade';
import { Categoria } from '../../models/categoria';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-editaranimal',
  templateUrl: './editaranimal.html'
})
export class EditarAnimal {

  public id: string;
  public animal = {}
  public lotes: Observable<Lote[]>
  public racas: Observable<Raca[]>
  public categorias: Observable<Categoria[]>
  public propriedades: Observable<Propriedade[]>
  public ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private navCtrl: NavController, private navParams: NavParams, public authService: AuthService, private auth: AuthService) {
    this.lotes = db.collection<Lote>('lotes').valueChanges();
    this.racas = db.collection<Raca>('racas').valueChanges();
    this.categorias = db.collection<Categoria>('categorias').valueChanges();
    this.propriedades = db.collection<Propriedade>('propriedades').valueChanges();
    this.ref = db.collection('animais');
    this.id = navParams.get('id');
    db.doc<Animal>('animais/' + this.id).valueChanges().subscribe((_a) => {
      this.animal = _a;
    })
  }

  salvar(form: NgForm) {

    let nome: string = form.value.nome;
    let nascimento: Date = form.value.nascimento;
    let lote: string = form.value.lote;
    let raca: string = form.value.raca;
    let categoria: string = form.value.categoria;
    let propriedade: string = form.value.propriedade;
    let user = this.authService.getUser();

    this.db.doc("animais/" + this.id).update({ nome: nome, nascimento: nascimento, lote: lote, raca: raca, categoria: categoria, propriedade: propriedade })
      .then(() => {
        this.navCtrl.pop();
      })
  }
}