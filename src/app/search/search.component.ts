import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, interval, take } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<h2>Search with Keys</h2>
            <form [formGroup]="searchForm!">
              <input type="text" formControlName="name" (keyup)="readValue()"/>
</form>
  `,
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit{


  searchForm?: FormGroup;
  //name?: FormControl;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('')
    });

    this.searchForm.get('name')?.valueChanges.pipe( 
      take(1),
      debounceTime(2000),
    ).subscribe(data=> {
      console.log(data);
    })
  }

  readValue() {
    // throw new Error('Method not implemented.');
    }
}
