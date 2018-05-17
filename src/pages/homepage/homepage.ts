import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../.././providers/auth/auth-service';
import { CadastroAnimal } from '../cadastroanimal/cadastroanimal';
import { CadastroPropriedade } from '../cadastropropriedade/cadastropropriedade';
import { CadastroProducao } from '../cadastroproducao/cadastroproducao';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html'
})

export class HomePage {

  public lista: Observable<any[]>;
  public lista1: Observable<any[]>;
  public lista2: Observable<any[]>;
  public id: string;
  public contador: number;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public asCtrl: ActionSheetController, public auth: AuthService, public afAuth: AngularFireAuth, private authService: AuthService, private navParams: NavParams) {
    let user = auth.getUser();
    this.id = navParams.get('id');
    this.lista = db.collection('animais', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.lista1 = db.collection('propriedades', ref => ref.where('uid', '==', user.uid)).valueChanges();
    this.lista2 = db.collection('producao', ref => ref.where('uid', '==', user.uid)).valueChanges();
  }

  public contaLeite(){
    this.contador =+ this.contador;
  }

}