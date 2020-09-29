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
    if(this.currentYear === y) {
      this.currentYear = '';
    } else {
      this.currentYear = y;
    }
    this.lYear.emit(this.currentYear);
  }

  filterLUYear(e) {
    if(this.successlaunch === e) {
      this.successlaunch = '';
    } else {
      this.successlaunch = e;
    }
    
    this.sList.emit({'slaunch':this.successlaunch, 'cYear':this.currentYear, 'sLand':this.successland});
  }

  filterLAYear(e) {
    if(this.successland === e) {
      this.successland = '';
    } else {
      this.successland = e;
    }
    this.lList.emit({'slaunch': this.successland, 'cYear':this.currentYear, 'sLand':this.successland});
  }

}
