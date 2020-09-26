import { Component, OnInit } from '@angular/core';
import { SpacedataService } from './spacedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-spacex';
  years:any = [];
  spaceData: any = [];

  constructor(private SpacedataService: SpacedataService) {}

  ngOnInit() {
    this.SpacedataService.getSpaceXadata().subscribe((results) => { 
      this.spaceData  = results;
      this.years = [...new Set(this.spaceData.map(i => (i.launch_year)))];
    })
  }

  displayFilterData(event) {
    this.SpacedataService.getyearData(event).subscribe((r) => { 
      this.spaceData = r;
    });
  }

  sussLaunchData(e) {
    this.SpacedataService.getLaunchData(e).subscribe((r) => { 
      this.spaceData = r;
    });
  }

  sussLandData(e) {
    this.SpacedataService.getLandingData(e).subscribe((r) => { 
      this.spaceData = r;
    });
  }
}
