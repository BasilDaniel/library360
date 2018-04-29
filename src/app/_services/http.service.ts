import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PanoImg } from "../_models/panoImg";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class HttpService {
  baseUrl = "http://127.0.0.1:3000/api/";

  constructor(private http: HttpClient) {}

  getPanoramas() {
    return this.http.get(this.baseUrl);
  }

  getPano(id): Observable<PanoImg> {
    return this.http.get(this.baseUrl + id).map(response => <PanoImg>response);
  }

  postPano(model) {
    this.http.post(this.baseUrl, model).subscribe(res => {
      console.log(res);
    });
  }
}
