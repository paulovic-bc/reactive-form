import { ModelFormModule } from './models/model-form/model-form.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  LeadForm : FormGroup;
  ListDados: ModelFormModule[]=[];


  ngOnInit(): void {

  this.LeadForm = this.formBuilder.group({
    nome: ['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    cpf: ['',Validators.required],
    tell: ['',Validators.required],
    end: ['',Validators.required],
    cep: ['',Validators.required],
  })
  }

  editForm(user: ModelFormModule,index: number){
    this.LeadForm.setValue({...user});
    this.ListDados.splice(index,1);
  }
  deletForm(index: number){
    this.ListDados.splice(index,1)
  }
  criar(){
    console.log(this.LeadForm.value);
    let user={

      ...this.LeadForm.value
    }
    this.ListDados.push(user);
    this.LeadForm.reset()

  }

}
