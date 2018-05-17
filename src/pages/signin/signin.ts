import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/auth';
import { AuthService } from '../../providers/auth/auth-service';
import { SignupPage } from '../signup/signup';
import { SigninWithEmailPage } from '../signinwithemail/signinwithemail';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { ListaAnimal } from '../listaanimal/listaanimal';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SigninWithEmailPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  signIn() {
    if (this.form.form.valid) {
      this.authService.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(ListaAnimal);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido!');
          } else if (error.code == 'auth/user-disabled') {
            toast.setMessage('Usuário desativado!');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('Usuário não encontrado!');
          } else if (error.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é válida!');
          }
          toast.present();
        });
    }
  }
}