import { Component, Input, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-minifig',
  templateUrl: './minifig.component.html',
  styleUrls: ['./minifig.component.css']
})
export class MinifigComponent implements OnInit {

  constructor(private collectionServ: CollectionService) { }

  ngOnInit(): void {
  }

  @Input() minifig;
  @Input() isCollection;
  addingFlag = true;

  onAdd(elem) {
    this.collectionServ.add(elem)
    this.addingFlag = !this.addingFlag;
  }

  onRemove(elem) {
    this.collectionServ.remove(elem);
    this.addingFlag = !this.addingFlag
  }
}
