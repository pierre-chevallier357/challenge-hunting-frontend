import { Indice } from './../interface/indice';
import { Question } from './../interface/question';
import { Defi,DefiType } from 'src/app/interface/defi';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-defi-creator',
  templateUrl: './defi-creator.component.html',
  styleUrls: ['./defi-creator.component.scss']
})

export class DefiCreatorComponent implements OnInit {

  defiForm!: FormGroup;
  questionForm!: FormGroup
  submitted: Boolean= false;
  submitedTwo: Boolean= false;
  DefiType = DefiType;
  listeQuestion: Partial<Question>[] = [];
  listeIndice: Partial<Indice>[] = [];
  leDefi!: Partial<Defi>;
  incrementation: number=0;
  laQuestion!: Partial<Question>;
  lIndice!: Partial<Indice>;

  show!: string;
  sum: number = 0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.defiForm = this.formBuilder.group({
      titre: ['', Validators.required],
      type:  ['', Validators.required],
      auteur: ['', Validators.required],
      arret: ['', Validators.required],
      motsClefs: ['', Validators.required],
      duree: ['', Validators.required],
      prologue: ['', Validators.required],
      description: ['', Validators.required],
      epilogue: ['', Validators.required],
      commentaire: ['', Validators.required],
    });
    this.questionForm = this.formBuilder.group({
      question: ['', Validators.required],
      pointsqss: ['', Validators.required],
      reponse: ['', Validators.required],
      indice: ['', Validators.required],
      pointsi: ['', Validators.required],
    }
    )
    this.onReset();
  }

  get f() { return this.defiForm.controls; }
  get g() { return this.questionForm.controls; }

  OnSubmit(){
    this.submitted = true;
    if (this.defiForm.invalid){
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.defiForm.value, null, 4));

    this.leDefi = {
      titre: this.defiForm.get('titre')?.value,
      uid: '12', // RECUPERER SUR LA PAGE
      defiType: this.defiForm.get('type')?.value,
      dateCreation: new Date(),
      dateModification: new Date(),
      versionD: 1,
      points: this.sum,                                                   //A CALCULER A LA FIN
      motsClefs: this.defiForm.get('motsClefs')?.value,
      duree: this.defiForm.get('duree')?.value,
      idArret: 1,                                                   //GET WITH API
      description: this.defiForm.get('descritpion')?.value,
      prologue: this.defiForm.get('prologue')?.value,
      epilogue: this.defiForm.get('epilogue')?.value,
      commentaire: this.defiForm.get('commentaire')?.value,
    };}

  OnSubmitTwo(){
    this.submitedTwo = true;
    if (this.questionForm.invalid){
      return;
    }
    alert('SUCCESS TWO!! :-)\n\n' + JSON.stringify(this.questionForm.value, null, 4));
    this.incrementation += 1;
    this.laQuestion = {
      question: this.questionForm.get('question')?.value,
      points: this.questionForm.get('pointsqss')?.value,
      secret: this.questionForm.get('question')?.value,
      numero: this.incrementation,
    };

   this.lIndice =  {
      description: this.questionForm.get('question')?.value,
      points: this.questionForm.get('pointsi')?.value,
      numero: this.incrementation,
    };
    this.listeIndice.push(this.lIndice);
    this.listeQuestion.push(this.laQuestion);

    this.sum =this.sum + this.questionForm.get('pointsqss')?.value;
  }

  onReset() {
    this.submitted = false;
    this.defiForm.reset();

}
  onResetTwo(){
    this.submitedTwo = false;
    this.questionForm.reset();
  }
}
