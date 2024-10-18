import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
})
export class CatComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getCats().subscribe(data => {
      this.cats = data;
    });
  }
}