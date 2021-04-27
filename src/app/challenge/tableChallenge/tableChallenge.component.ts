import { Defi } from '../../defi';
import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with pagination
 */


@Component({
  selector: 'table-challenge',
  styleUrls: ['tableChallenge.component.scss'],
  templateUrl: 'tableChallenge.component.html',
})
export class TableChallengeComponent implements AfterViewInit,OnInit{

  @Input() DATA_SOURCE:Defi[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'titre', 'auteur', 'description','datedecreation'];
  dataSource !:MatTableDataSource<Defi>;

  //Données chargés une suel fois lors de l'instantiation du composant (rafraichir la page pour des nouvelles donnees)
  ngOnInit() {
    this.dataSource = new MatTableDataSource<Defi>(this.DATA_SOURCE)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
