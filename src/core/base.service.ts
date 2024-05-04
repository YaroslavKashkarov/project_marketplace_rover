import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

export class BaseService {

  constructor( private httpClient: HttpClient) { }

  private apiUrl: string = environment.apiEndoint;

  protected post<T>(url:string, body: any):Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${url}`, body)
  }

}
