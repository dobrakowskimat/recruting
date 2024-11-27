import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item: { name: string, id: number };

  @Output()
  deleteItem = new EventEmitter<number>();

  constructor() {
    this.item = {
      name: '',
      id: 0
    }
  }

  delete() {
    this.deleteItem.emit(this.item.id)
  }

}
