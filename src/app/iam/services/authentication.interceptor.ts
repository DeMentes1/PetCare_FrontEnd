import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {
  /**
   * Intercepts the request and adds the Authorization header
   * @param request HttpRequest<any> - The request to be intercepted
   * @param next HttpHandler - The next interceptor in the chain
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const handledRequest = token
      ? request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)})
      : request;
    return next.handle(handledRequest);
  }
}