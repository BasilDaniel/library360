import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  panoImg: any;

  constructor(private httpService: HttpService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.panoImg = data['panoImg'];
      console.log(this.panoImg);
      let imgSrc = this.panoImg.url.replace(/\//, '/');
      document.querySelector('a-sky').setAttribute('src', imgSrc);

    });

  }

  // loadPanoImg(){
  //   this.httpService.getPano(+this.route.snapshot.params['id'])
  //   .subscribe((data) => { 
  //     this.panoImg = data;

  //     console.log(data);
  //     console.log(this.panoImg);
  //   });
  // }

}
