import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CatService } from '../services/cat.service';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
  styleUrls: ['./edit-cat.component.scss']
})
export class EditCatComponent implements OnInit {
  updateForm: FormGroup;
  catId!: number;

  constructor(
    private catService: CatService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      breed: ['', Validators.required],
      hair_type: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.catId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCat();
  }

  loadCat() {
    this.catService.getCatById(this.catId).subscribe(cat => {
      this.updateForm.patchValue({
        name: cat.name,
        age: cat.age,
        breed: cat.breed,
        hair_type: cat.hair_type
      });
    });
  }

  updateCat() {
    if (this.updateForm.valid) {
      const updatedCat = this.updateForm.value;
      this.catService.updateCat(this.catId, updatedCat).subscribe(() => {
        this.router.navigate(['/cats']);
      });
    }
  }
}