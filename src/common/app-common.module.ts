import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './forms/input.component/input.component';
import { InputGroupComponent } from './forms/input-group.component/input-group.component';
import { SwitcherComponent } from './forms/switcher.component/switcher.component';
import { CheckboxComponent } from './forms/checkbox.component/checkbox.component';
import { RadioComponent } from './forms/radio.component/radio.component';



@NgModule({
  declarations: [
    InputComponent,
    InputGroupComponent,
    SwitcherComponent,
    CheckboxComponent,
    RadioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    InputGroupComponent,
    SwitcherComponent,
    CheckboxComponent,
    RadioComponent
  ]
})
export class AppCommonModule { }
