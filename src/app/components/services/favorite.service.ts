import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class FavoritesService {

	apiEndPoint: string = environment.apiEndPoint;

	constructor(private http: HttpClient) {
	}

	getFavorite() {
		return this.http.get(`${this.apiEndPoint}/api/favorites`);
	}

	addFavorite(productId: number) {
		const requestData = {productId: productId};
		return this.http.post(`${this.apiEndPoint}/api/favorites`, requestData);
	}

	removeFavorite(productId: number) {
		return this.http.delete(`${this.apiEndPoint}/api/favorites/${productId}`);
	}

}

