import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumbersGameService } from '../numbers-game.service';
import { NumbersSolution } from '../numbers-solution';

@Component({
  selector: 'app-numbers-game',
  templateUrl: './numbers-game.component.html',
  styleUrls: ['./numbers-game.component.scss']
})
export class NumbersGameComponent implements OnInit {


  constructor(private numbersGameService: NumbersGameService) { }


  results: NumbersSolution[] = [];

  numbers = new FormControl();
  

  getNumbersSolutions() {

    this.numbersGameService.getNumbersSolutions(this.numbers.value)
      .subscribe(data => this.results = data);
  }

  ngOnInit() {
    this.numbers.setValue("100,2,5,10");
  }

}
