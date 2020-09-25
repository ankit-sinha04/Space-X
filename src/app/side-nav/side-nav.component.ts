import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() year:any;
  @Output() lYear = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  filterList(y) {
    this.lYear.emit(y);
  }

}
