import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'anime-search-ui';

  options = ["Luke", "Leia", "Rey"];
  
  formGroup!: FormGroup;
  
  filteredOptions:any;

  constructor(private service: DataServiceService, private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
    this.getNames();

  }

  initForm(){
    this.formGroup = this.fb.group({
      'character' : ['']
    })
    this.formGroup.get("character").valueChanges.subscribe((response: any) => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  filterData(enteredData: string){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.service.getCharacter().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  }

  
}
