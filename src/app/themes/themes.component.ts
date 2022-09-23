import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  constructor(private reqServ: RequestService) { }

  ngOnInit(): void {
    this.getThemes(1);
  }
  themesData = [];
  filtered = [];
  filteredFlag = false;

  getThemes(page) {
    this.reqServ.getThemes(page).subscribe(
      {
        next: (v) => {
          this.themesData.push(...v.results);
        },
        error: (e) => console.error(e),
        complete: () => {this.getThemes(page+1)}
    }
    )
  }

  filterThemes() {
    this.filteredFlag = !this.filteredFlag;
    this.filtered = this.themesData.filter(el => el.parent_id==null)
    this.filtered.forEach(el => el.children = []);

    this.themesData.forEach(el => {
      if(this.filtered.findIndex(x => x.id == el.parent_id) > -1)
        this.filtered.find(x => x.id == el.parent_id).children.push(el)
    })
  }

}
