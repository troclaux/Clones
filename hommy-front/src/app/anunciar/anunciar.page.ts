import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController} from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.page.html',
  styleUrls: ['./anunciar.page.scss'],
})
export class AnunciarPage implements OnInit {

  announceForm: FormGroup;

  photo: SafeResourceUrl;

  constructor(public formbuilder: FormBuilder, public toastController: ToastController, private sanitizer: DomSanitizer) { 
    this.announceForm = this.formbuilder.group({
      title: [null, [Validators.required, Validators.maxLength(100),]],
      people: [null, [Validators.required, Validators.max(99)]],
      bedrooms: [null, [Validators.required, Validators.max(99)]],
      beds: [null, [Validators.required, Validators.max(99)]],
      bathrooms: [null, [Validators.required, Validators.max(99)]],
      photo: [null]
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Anuncio criado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

}
