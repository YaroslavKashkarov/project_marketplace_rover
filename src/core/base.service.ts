import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

export class BaseService {

  constructor( private httpClient: HttpClient) { }

  private apiUrl: string = environment.apiEndoint;

  protected get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${url}`);
  }

  protected post<T>(url:string, body: any):Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${url}`, body)
  }

  protected postWithHeaders<T>(url:string, body: any, headers: any):Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${url}`, body, {headers})
  }

  protected put<T>(url:string, body: any):Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${url}`, body)
  }

  protected delete<T>(url:string): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/${url}`);
  }

}
