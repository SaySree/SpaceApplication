import { Component, OnInit } from '@angular/core';


import {HttpserviceService} from '../../Services/httpservice.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-space-component',
  templateUrl: './space-component.component.html',
  styleUrls: ['./space-component.component.css']
})
export class SpaceComponentComponent implements OnInit {
arrayofYrs: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
truefalseCombination: string[] = ['true', 'false'];
data: any;
launchStatus: string;
landingStatus: string;
yearSelected: string;
loaded = false;
yearbtnclronClick: any;
launchsuccessbtnclronClick: any;
landsuccessbtnclronClick: any;

  constructor(private httpservice: HttpserviceService, private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.httpservice.getConfig().subscribe((data) => {
       console.log(data);
       this.data = data;
       setTimeout(() => {
        this.loaded = true;
       }, 2000);
    });
  }

  /********Click event on Filter Options ************/
  onClickFilter(event, statusonClick): void{
    console.log(event);
    event.target.style.pointerEvents = 'none';
    if (statusonClick === 'launch_year'){
      if (this.yearbtnclronClick !== undefined){
        this.yearbtnclronClick.style.backgroundColor = '';
        this.yearbtnclronClick.style.pointerEvents = '';
      }
      this.yearbtnclronClick = event.target;
      this.yearbtnclronClick.style.backgroundColor = '#1e7e34';
      this.yearSelected = event.target.innerHTML;
    }else if (statusonClick === 'launch_success'){
      if (this.launchsuccessbtnclronClick !== undefined){
        this.launchsuccessbtnclronClick.style.pointerEvents = '';
        this.launchsuccessbtnclronClick.style.backgroundColor = '';
      }
      this.launchsuccessbtnclronClick = event.target;
      this.launchsuccessbtnclronClick.style.backgroundColor = '#1e7e34';
      this.launchStatus = event.target.innerHTML;
    } else if (statusonClick === 'land_success'){
      if (this.landsuccessbtnclronClick !== undefined){
        this.landsuccessbtnclronClick.style.pointerEvents = '';
        this.landsuccessbtnclronClick.style.backgroundColor = '';
      }
      this.landsuccessbtnclronClick = event.target;
      this.landsuccessbtnclronClick.style.backgroundColor = '#1e7e34';
      this.landingStatus = event.target.innerHTML;
    }
    this.httpservice.fetchURL(this.yearSelected, this.launchStatus, this.landingStatus).subscribe((data) => {
      console.log(data);
      this.data = data;
   });
  }
}
