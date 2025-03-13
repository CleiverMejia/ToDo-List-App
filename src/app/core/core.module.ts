import { NgModule } from '@angular/core';

import { environment } from '@enviroment/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = environment.firebaseConfig;

@NgModule({
  providers: [
    provideFirebaseApp(() =>
      initializeApp(firebaseConfig)
    ),
    provideFirestore(() => getFirestore())
  ]
})
export class CoreModule { }