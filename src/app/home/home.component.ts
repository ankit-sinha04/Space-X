import { Component, Input, OnInit } from '@angular/core';
import { SpacedataService } from '../spacedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() spaceData2:any;

  constructor(private SpacedataService:SpacedataService) { }

  ngOnInit(): void {
  }

  getSpaceXallData() {
  }

}
