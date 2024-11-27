import { Component } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { CommonModule } from '@angular/common';
import { AddItemComponent } from "../add-item/add-item.component";

const list = [
  { name: "item 1", id: 123 },
  { name: "item 12", id: 23 },
  { name: "item 144", id: 14443 },
  { name: "item 121344", id: 1232222 }
]

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, AddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  list = list;

  addNew(newItem: { name: string, id: number }) {
    this.list = [...this.list, newItem]
  }

  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id != id);

  }

}
