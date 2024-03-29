import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styles: [
  ]
})
export class AddCharacterComponent {

  @Output()
  public emitNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0,
  };

  captureCharacter():void {

    if ( this.character.name.length === 0 ) return;

    this.emitNewCharacter.emit( this.character );

    this.character = { name: '', power: 0 };

  };

}
