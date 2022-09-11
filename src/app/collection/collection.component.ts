import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private collectionServ: CollectionService) { }

  currentCollection = this.collectionServ.getCollection()
  currentIds = this.collectionServ.ids.length

  ngOnInit(): void {
    
  }

}
