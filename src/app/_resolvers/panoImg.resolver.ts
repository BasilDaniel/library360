import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { PanoImg } from "../_models/panoImg";
import { Injectable } from "@angular/core";
import { HttpService } from "../_services/http.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PanoImgResolver implements Resolve<PanoImg> {
    constructor(
      private http: HttpService, 
      private router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot):Observable<PanoImg>{
        return this.http.getPano(route.params['id']);
    }
}
