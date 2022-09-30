import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form/contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  error = false;
  errorMsg = null;
  loading = false;
  success = false;

  constructor(public contactFormService: ContactFormService) { }

  ngOnInit(): void {
  }

  sendMessage(form: NgForm) {
    console.log(form);
  }
}
