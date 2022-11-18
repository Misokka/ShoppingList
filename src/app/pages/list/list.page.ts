import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // Fonction qui permet de changer de page

  nextpage() {
    this.route.navigate(['/dashboard']);
  }

}





