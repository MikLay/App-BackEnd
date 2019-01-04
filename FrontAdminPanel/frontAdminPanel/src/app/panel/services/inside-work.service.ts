import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsideWorkService {

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  changeIsLogIn() {
  this.change.emit();
  }

}
