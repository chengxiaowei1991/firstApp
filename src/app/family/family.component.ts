import { Component, OnInit, Input} from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  constructor() { }
  @Input() list:List
  ngOnInit() {
  }

}
