import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent {
  @Output() addButtonClick = new EventEmitter<void>();

  emitClickEvent() {
    this.addButtonClick.emit();
  }
}
