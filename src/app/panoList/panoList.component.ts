import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';

@Component({
  selector: 'app-panoList',
  templateUrl: './panoList.component.html',
  styleUrls: ['./panoList.component.css']
})
export class PanoListComponent implements OnInit {
  panoramas: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadPanoramas();
  }

  loadPanoramas(){
    this.httpService.getPanoramas()
    .subscribe((data) => { 
      this.panoramas = data;
    })  
  }

}
