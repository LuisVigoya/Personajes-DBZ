import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  @Output()
  public emitDeleteCharacter:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [
    {
      id: '',
      name: '',
      power: 0,
    }
  ];

  deleteCharacter( id:string ) {
    this.emitDeleteCharacter.emit( id );
  };

}
