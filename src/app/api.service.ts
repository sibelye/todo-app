import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAgenda(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  postAgenda(data): Observable<any> {
    console.log(data);
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updateAgenda(id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteAgenda(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}

