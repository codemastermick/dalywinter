import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../../firebaseconfig';

import { MaterialModule } from '../../material/material.module';
import { TestimonialsRoutingModule } from './testimonials-routing.module';

import { TestimonialsComponent } from './testimonials.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TestimonialsRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [TestimonialsComponent],
  providers: [AngularFirestoreModule]
})
export class TestimonialsModule {}
