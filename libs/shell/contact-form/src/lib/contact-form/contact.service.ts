import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  async sendEmail(templateParams: Record<string, unknown>) {
    return emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      templateParams,
      environment.emailJs.publicKey
    );
  }
}
