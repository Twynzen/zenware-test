import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GET_EMPLOYEES } from "src/app/modules/shared/constants/endpoints.constants";


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private Http_client: HttpClient,
  ) { }

  public get(endpoint: string) {
    return this.Http_client.get(environment.url + endpoint);
  }

  public post(endpoint: string, body: any) {
    console.log(this.Http_client.post(environment.url + endpoint, body), "aaa");

    return this.Http_client.post(environment.url + endpoint, body);
  }




}
