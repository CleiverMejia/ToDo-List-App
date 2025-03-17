import { NgModule } from '@angular/core';
import { DataService } from './services/data/data.service';
import { ItemTaskComponent } from '@components/item-task/item-task.component'
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const COMPONENTS = [ItemTaskComponent];

const PROVIDERS = [DataService];

const IMPORTS = [CommonModule ,IonicModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  exports: [...COMPONENTS]
})
export class SharedModule { }
