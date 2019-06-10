import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, MaterialModule],
  declarations: [ContactComponent]
})
export class ContactModule {}
