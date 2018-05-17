import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/auth';
import { AuthService } from '../../providers/auth/auth-service';
import { ListaAnimal } from '../listaanimal/listaanimal';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    if (this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

      this.authService.createUser(this.user)
        .then((user: any) => {
          user.sendEmailVerification();

          toast.setMessage('Usuário cadastrado com sucesso!');
          toast.present();

          this.navCtrl.setRoot(ListaAnimal);
        })
        .catch((error: any) => {
          if (error.code == 'auth/email-already-in-use') {
            toast.setMessage('O e-mail informado já está em uso!');
          } else if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail informado não é valido!');
          } else if (error.code == 'auth/operation-not-allowed') {
            toast.setMessage('Não está habilitado criar usuários!');
          } else if (error.code == 'auth/weak-password') {
            toast.setMessage('A senha digitada é muito fraca!');
          }
          toast.present();
        });
    }
  }

}