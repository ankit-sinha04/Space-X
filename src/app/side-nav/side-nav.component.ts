import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() year:any;
  @Output() lYear = new EventEmitter();
  @Output() sList = new EventEmitter();

  @Output() lList = new EventEmitter();

currentYear: any;
successlaunch;
successland;


  constructor() { }

  ngOnInit(): void {
  }

  filterList(y) {
    this.currentYear =y;
    this.lYear.emit(y);
  }

  filterLUYear(e) {
    this.successlaunch = e;
    // this.successland ='';
    // this.currentYear = '';
    this.sList.emit({'slaunch':e, 'cYear':this.currentYear, 'sLand':this.successland});
  }

  filterLAYear(e) {
    this.successland = e;
    // this.successlaunch ='';
    // this.currentYear = '';
    this.lList.emit({'slaunch':e, 'cYear':this.currentYear, 'sLand':this.successland});
  }

}
