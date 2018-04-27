import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    baseUrl = 'http://localhost:3000/api';

constructor(private http: HttpClient) { }

    getPanoramas(){        
        return this.http.get(this.baseUrl);
    }

}
