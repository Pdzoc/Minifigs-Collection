import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private reqServ: RequestService, private collectionServ: CollectionService) { }

  ngOnInit(): void {
    this.storedIds = this.collectionServ.getIds();
    this.collectionServ.getCollection().subscribe(el => this.storedFigs.push(...el))
  }

  allData = [];
  storedFigs = []
  storedIds = [];
  page = 1;
  changingPage = false;
  themeID: number;
  keyword: string;
  next: string;
  prev: string;
  
  getMinifigs(page?:number, url?:string, factor?:number) {
    console.log(this.storedFigs)
    this.storedIds = this.collectionServ.getIds();
    this.changingPage = false;
    if(typeof factor=='number') this.page += factor;
    this.next = "";
    this.prev = "";
    this.reqServ.getData(url, page).subscribe(el => {
      console.log(el)
      if(el.next) {
        this.next = el.next;
      }
      if(el.previous) this.prev = el.previous;
      this.allData = [];
      el.results.forEach(minifig => {
        this.allData.push(minifig)
      })
    })
    }

  getID(id:number) {
    this.changingPage = false;
    this.reqServ.getID(id).subscribe(el => {
      console.log(el)
      this.page = 1;
      this.next = "";
      this.prev = "";
      if(el.next) this.next = el.next;
      if(el.previous) this.prev = el.previous;
      this.allData = [];
      el.results.forEach(minifig => {
        this.allData.push(minifig)
      })
    }, error => {console.log(error)})
  }

  search(keyword) {
    this.changingPage = false;
    this.page = 1;
    this.reqServ.searchKeyword(keyword).subscribe(el => {
      this.next = "";
      this.prev = "";
      if(el.next) this.next = el.next;
      if(el.previous) this.prev = el.previous;
      this.allData = [];
      el.results.forEach(minifig => {
        this.allData.push(minifig)
      })
    })
  }

  compare(elem) {
    return this.storedFigs.some(el => el.set_num==elem.set_num)
  }

  getRandom() {
    this.allData=[];
    let minifigs = []
    this.reqServ.getRandom().subscribe(
    { 
      next: (el) => minifigs.push(...el.results),
      complete: () => {
        minifigs = minifigs.filter(el => el.set_img_url)
        console.log(minifigs)
        minifigs.sort(()=> Math.random() - .5);
        console.log(minifigs[0])
        this.allData.push(minifigs[0])
      }
    }
    );
  }
}
