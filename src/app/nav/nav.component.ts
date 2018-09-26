import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
private nav_list: {name: string, status: boolean}[];
  constructor() { }

  ngOnInit() {
    this.nav_list = [
      {name: '随机歌单', status: true},
      {name: '90电台', status: false},
      {name: '我的音乐', status: false}];
  }
  public selectItem(item) {
    this.nav_list.forEach(v => {
      if (item.name === v.name) {
        v.status = true;
      } else {
        v.status = false;
      }
    });
  }
}
