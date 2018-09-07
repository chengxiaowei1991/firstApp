import { List } from './../list';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    this.list = [
      {id:1,name:'飞机'},
      {id:2,name:'火车'},
      {id:3,name:'汽车'},
      {id:4,name:'划船'},
    ];
  }
  list:List[]
  listItem:List
  ngOnInit() {
  }

  hero = 'chengiaowei';

  reset():void{
    this.list=[
      {id:1,name:'飞机'},
      {id:2,name:'火车'},
      {id:3,name:'汽车'},
      {id:4,name:'划船'},
    ]
  }
  update():void{
    this.list=[
      {id:1,name:'西瓜'},
      {id:2,name:'苹果'},
      {id:3,name:'香蕉'},
      {id:4,name:'菠萝'},
    ]
  }
  showName(item){
    this.listItem = item
  }
  // 当请求为同一个数据时，不会重新渲染dom
  trackByList(id:number,item){
    // return id;
  }
}
