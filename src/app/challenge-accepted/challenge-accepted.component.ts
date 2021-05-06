import { QuestionService } from '../service/question.service';
import { Component, OnInit } from '@angular/core';
import { Defi } from '../interface/defi';
import { Observable } from 'rxjs';
import { DefiService } from '../service/defi.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Question } from '../interface/question';
import { Reponse } from '../interface/reponse';


@Component({
  selector: 'app-challenge-accepted',
  templateUrl: './challenge-accepted.component.html',
  styleUrls: ['./challenge-accepted.component.scss']
})
export class ChallengeAcceptedComponent implements OnInit {
  defi!: Observable<Defi>;
  idDefi!: number;
  listeReponse: Partial<Reponse>[] = [];
  reponsePartial!: Partial<Reponse>;
  questions: Question[] = [];

  next = false;
  resultatCalc = 0;

  constructor(private questionService: QuestionService,
              private defiService: DefiService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idDefi = Number(routeParams.get('id'));
    this.defi = this.defiService.getDefiByidDefi(this.idDefi);
    this.questionService.getQuestionByidDefi(this.idDefi).subscribe(
      questions => {
        this.questions = questions;
        questions.map(question => this.listeReponse.push({
          question: question.idQuestion
        }
        ));
      }
    );
  }

  onSubmit(reponseValue: string, id: number): void {
    for (const reponse of this.listeReponse){
      if (reponse.question === id){
        reponse.reponse = reponseValue;
        return;
      }
    }
    this.listeReponse.push({
      reponse: reponseValue,
      question: id,
    });
  }

  indiceUsed(idQuestion: number, numero: number): void {
    for (const reponse of this.listeReponse) {
      if (reponse.question === idQuestion) {
        reponse.indiceUtilise = true;
        alert('Vous avez utilisez un indice: \n' + this.questions[numero - 1].indice);
        return;
      }
    }
  }

  onSubmitValidey(): void {
    this.next = true;

    for (const reponse of this.listeReponse) {
      if (reponse.indiceUtilise !== true) {
        reponse.indiceUtilise = false;
      }
    }

    this.questionService.getQuestionByidDefi(this.idDefi).subscribe(questions => {
      this.questions = questions;
      for (let i = 0; i < this.listeReponse.length; i++ ){
        if (this.listeReponse[i].reponse === questions[i].secret) {
          this.resultatCalc += questions[i].pointsQuestion;
        }
        if (this.listeReponse[i].indiceUtilise === true){
          this.resultatCalc -= questions[i].pointsQuestion;
        }
      }
      if (this.resultatCalc < 0){
        this.resultatCalc = 0;
      }
    });
  }

  finish(): void {
  }
}
