import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class XrayApiService {
  constructor(private http: HttpClient) {}

  getRegistration() {
    return environment.production
      ? this.http.get('')
      : this.http.get('api/registration');
  }

  postRegistration(reg) {
    environment.production
      ? this.http.post('', reg)
      : this.http.post('api/registration', reg);
  }
}
