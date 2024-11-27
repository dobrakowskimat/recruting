import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {

  @Output()
  addItem = new EventEmitter<{ name: string, id: number }>();

  name = new FormControl('');


  addNew() {
    this.addItem.emit({ name: this.name.value ?? "", id: Math.random() })
  }
}
