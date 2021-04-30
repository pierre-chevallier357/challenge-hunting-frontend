import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';
import { Defi } from '../interface/defi';
import { Observable } from 'rxjs';
import { DefiService } from '../service/defi.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../interface/question';



@Component({
  selector: 'app-challenge-accepted',
  templateUrl: './challenge-accepted.component.html',
  styleUrls: ['./challenge-accepted.component.scss']
})
export class ChallengeAcceptedComponent implements OnInit {

  defi!: Defi;
  questionObs: Observable<Question[]> = this.questionService.getAllQuestion();

  constructor(private questionService: QuestionService,private defiService: DefiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idDefi = String(routeParams.get('id'));
    this.defiService.getDefiByidDefi(idDefi).subscribe(defi => this.defi = defi);
    this.questionObs = this.questionService.getQuestionByidDefi(this.defi.idDefi);
  }
}
