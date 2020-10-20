import { Component, OnInit } from '@angular/core';

//import types of form
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter : number = 0;

 //creating new form
  name = new FormControl('');

  //input fields for form, and validators check if the user input is correct
  info = new FormGroup({
    brand: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),

  });

  cars = [
    {
      brand : 'Skoda',
      color: 'white'
    },
    {
      brand : 'BMW',
      color: 'white'
    },
    {
      brand : 'Opel Corsa',
      color: 'black'
    }];

    
  constructor() { }

  countClick(){
    this.clickCounter += 10 ;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.info.valid){
      var a = this.info.value;
      console.log(a)
    }
    
  }
}


