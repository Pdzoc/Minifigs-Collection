import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Minifig } from './minifig'

interface Minifigs {
  count: number,
  previous: string,
  next: string,
  results: Minifig[]
}

interface Theme {
  id: number, 
  parent_id: any, 
  name: string
}

interface Themes {
  count: number,
  previous: string,
  next: string,
  results: Theme[]
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

 

  apiKey = 'key=6f69282068ab3ad0e8fa50953d29b1bf';
  base = 'https://rebrickable.com/api/v3/lego/';
  urlPrev = '';
  urlNext = '';


  getData(url?:string, page?:number) {
    if(!page) page=1;
    if(!url)  return this.http.get<Minifigs>(this.base+'minifigs/?'+this.apiKey+'&page='+page)
    else return this.http.get<Minifigs>(url)
  }

  getID(id) {
    return this.http.get<Minifigs>(this.base+'minifigs/?'+this.apiKey+'&in_theme_id='+id)
  }

  searchKeyword(keyword) {
    return this.http.get<Minifigs>(this.base+'minifigs/?'+this.apiKey+'&search='+keyword)
  }

  getThemes(page) {
    return this.http.get<Themes>(this.base+'themes/?'+this.apiKey+'&page='+page)
  }

  getRandom() {
    // let num = (~~(Math.random() * (12000-1) + 1)).toString().padStart(6,'0')
    let num = ~~(Math.random() * (125-1) + 1)
    // return this.http.get(this.base+'minifigs//fig-'+num+'/?'+this.apiKey)
    return this.http.get<Minifigs>(this.base+'minifigs/?'+this.apiKey+'&page='+num)
  }
}
