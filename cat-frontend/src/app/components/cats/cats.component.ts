import { Component, inject, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../cat.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [];
  router = inject(Router)

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    breed: new FormControl(null, Validators.required),
    hair_type: new FormControl(null, Validators.required),
})

  delete_form = new FormGroup({
    id: new FormControl(null, Validators.required)
  })

  update_form = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    breed: new FormControl('', Validators.required),
    hair_type: new FormControl('', Validators.required),
})

// setUpdateForm(cat: Cat) {
//   this.update_form.patchValue({
//     name: cat.name,
//     age: cat.age,
//     breed: cat.breed,
//     hair_type: cat.hair_type
//   });
// }

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.loadCats();
  }


  
  loadCats() {
    this.catService.getCats().subscribe(data => {
      this.cats = data;
      console.log(data)
    })
    
  }

  createCat() {
    if (this.form.valid){
       this.catService.createCat(this.form.value)
       .subscribe(
        (response: any) => {
          this.router.navigate(['cats'])
          console.log('Response:', response);
        })
    }
  }

  

  updateCat(catId: number, age: number, breed: string, hair_type: string, name: string) {
    
    const cat = {'age': age,'name': name, 'breed': breed, 'hair_type': hair_type}
    this.catService.updateCat(catId, cat).subscribe(() => this.loadCats());

  }

  deleteCat(catId: number) {
    this.catService.deleteCat(catId).subscribe(() => this.loadCats());
  }
}
