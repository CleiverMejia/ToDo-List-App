import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data/data.service';

const PROVIDERS = [DataService];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...PROVIDERS]
})
export class SharedModule { }
