import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = "";
  
  onInput(event: any) {
    let value = event?.target.value
    this.enteredText = value;
    console.log(value);
  
  }

  compare(randomletter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomletter === enteredLetter ? 'correct' : 'incorrect';


  }

}
