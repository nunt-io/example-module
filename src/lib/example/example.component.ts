import {Component, Input} from '@angular/core';

@Component({
  selector: 'nunt-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {

  @Input() test = 'Example';

  constructor() {

  }

}
