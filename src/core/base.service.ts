import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

export class BaseService {

	private apiUrl: string = environment.apiEndPoint;

	constructor(private httpClient: HttpClient) {
	}

	protected get<T>(url: string): Observable<T> {
		return this.httpClient.get<T>(`${this.apiUrl}/${url}`);
	}

	protected post<T>(url: string, body: any): Observable<T> {
		return this.httpClient.post<T>(`${this.apiUrl}/${url}`, body);
	}

	protected postWithHeaders<T>(url: string, body: any, headers: any): Observable<T> {
		return this.httpClient.post<T>(`${this.apiUrl}/${url}`, body, {headers});
	}

	protected put<T>(url: string, body: any): Observable<T> {
		return this.httpClient.put<T>(`${this.apiUrl}/${url}`, body);
	}

<<<<<<< HEAD
	protected delete<T>(url: string): Observable<T> {
		return this.httpClient.delete<T>(`${this.apiUrl}/${url}`);
	}
=======
  protected patch<T>(url:string, body: any):Observable<T> {
    return this.httpClient.patch<T>(`${this.apiUrl}/${url}`, body)
  }

  protected delete<T>(url:string): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/${url}`);
  }
>>>>>>> 2441c6cf21dc79d5dbd11685478a01c43f044d1d

}
