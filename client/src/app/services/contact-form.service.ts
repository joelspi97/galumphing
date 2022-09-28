import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactMessage } from '../interfaces/ContactMessage';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  contactMessage: ContactMessage = {
    body: '',
    email: '',
    name: '',
    subject: ''
  }

  constructor(private http: HttpClient) { }

  postMessage(contactMessage: ContactMessage) {
    return this.http.post<{ message: string }>(environment.contactUrl, contactMessage);
  }
}
