import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  // Fermer la fenêtre de connexion

  dismissLogin() {
    this.modalController.dismiss();
  }

  // Lorsque vous appuyez sur le bouton Enregistrer, la modale de connexion disparaît et la modale d'enregistrement s'ouvre.

  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  // Permet de se connecter et de rediriger l'utilisateur une fois connecter vers la page list

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      _data => {
        this.alertService.presentToast("Connexion réussi");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/list');
      }
    );
  }
}
