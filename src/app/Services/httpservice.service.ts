import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

  getConfig(){
    return this.http.get(this.configUrl);
  }
  fetchURL(year, launchStatus, landingStatus){
    // if(year!=undefined && launchStatus==undefined && landingStatus==undefined){
    //   return this.http.get(this.configUrl+'&launch_year='+year);
    // }
    this.configUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    if (launchStatus !== undefined){
      this.configUrl = this.configUrl.concat('&launch_success=' + launchStatus);
    }
    if (landingStatus !== undefined){
      this.configUrl = this.configUrl.concat('&land_success=' + landingStatus);
    }
    if (year !== undefined){
      this.configUrl = this.configUrl.concat('&launch_year=' + year);
    }
    return this.http.get(this.configUrl);
  }
}
