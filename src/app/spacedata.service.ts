import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SpacedataService {

  constructor(private http: HttpClient) { }

  getSpaceXadata() {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100'); //.pipe(pluck('launch_year'));
  }

  getyearData(year) {
    return this.http.get("https://api.spaceXdata.com/v3/launches?launch_year=" + year);
  }

  getLaunchData(b) {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + b)
  }

  getLandingData(b) {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=" + b)
  }
}
