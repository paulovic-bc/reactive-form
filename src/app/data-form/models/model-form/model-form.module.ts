import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelFormModule {
  push(value: any) {
    throw new Error('Method not implemented.');
  }
  id!:number;
  nome?: string;
  email?: string;
  cpf?: string;
  tell?: string;
  end?: string;
  cep?: string;

}
