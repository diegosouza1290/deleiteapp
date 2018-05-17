import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../../models/animal';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Lote } from '../../models/lote';
import { Raca } from '../../models/raca';
import { Propriedade } from '../../models/propriedade';
import { Categoria } from '../../models/categoria';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../providers/auth/auth-service';

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastroanimal.html'
})
export class CadastroAnimal {

  public id: string;
  public lotes: Observable<Lote[]>
  public racas: Observable<Raca[]>
  public categorias: Observable<Categoria[]>
  public propriedades: Observable<Propriedade[]>
  public ref: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public navCtrl: NavController, public authService: AuthService, public auth: AuthService, private navParams: NavParams) {
    this.id = navParams.get('id');
    let user = this.authService.getUser();
    this.lotes = db.collection<Lote>('lotes', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.racas = db.collection<Raca>('racas', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.categorias = db.collection<Categoria>('categorias', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.propriedades = db.collection<Propriedade>('propriedades', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.ref = db.collection('animais');
  }

  salvar(form: NgForm) {

    let nome: string = form.value.nome;
    let nascimento: Date = form.value.nascimento;
    let lote: string = form.value.lote;
    let raca: string = form.value.raca;
    let categoria: string = form.value.categoria;
    let propriedade: string = form.value.propriedade;
    let user = this.authService.getUser();

    //let animal: Animal = new Animal(nome, nascimento, lote, raca, categoria, vacinas);

    this.ref.add({ nome: nome, nascimento: nascimento, lote: lote, raca: raca, categoria: categoria, propriedade: propriedade, uid: user.uid }).then((_ref) => {
      this.db.doc("animais/" + _ref.id).update({ id: _ref.id })
    }).then(() => {
      this.navCtrl.pop();
    })

  }

  ngOnInit() {

  }

}