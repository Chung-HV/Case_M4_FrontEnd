import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { Brand } from '../_models/brand';

const baseUrl = `${environment.backend_url}/brand`;

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {  }

  getAll(): Observable<Brand[]>{
    return this.http.get<Brand[]>(baseUrl);
  }
}
