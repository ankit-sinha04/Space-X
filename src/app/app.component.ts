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
  launchData: boolean = false;
  landData: boolean = false;

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
    this.SpacedataService.getLaunchData(e.slaunch, e.cYear).subscribe((r) => { 
      this.spaceData = r;
    });
  }

  sussLandData(e) {
    this.SpacedataService.getLandingData(e.sLand, e.cYear).subscribe((r) => { 
      console.log(r);
      this.spaceData = r;
    });
  }
}
