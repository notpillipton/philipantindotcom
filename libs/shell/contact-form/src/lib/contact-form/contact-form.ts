import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ContactService } from './contact.service';

@Component({
  selector: 'lib-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  template: `
    <h2 mat-dialog-title class="dialog-title">
      <button mat-icon-button (click)="onClose()" class="close-button" aria-label="close">
        <mat-icon>close</mat-icon>
      </button>
      <span class="title-text">Philip would love to hear from you!</span>
      <div class="title-underline"></div>
    </h2>

    <mat-dialog-content>
      <form [formGroup]="contactForm" id="contact-form" (ngSubmit)="onSubmit()">
        <div class="form-grid">
          <div class="form-row">
            <div class="label-col">Name *</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <input matInput formControlName="name" placeholder="Your name" required />
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">Email *</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <input matInput type="email" formControlName="email" placeholder="Your email" required />
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">How did you find this site?</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <mat-select formControlName="findUs">
                  <mat-option value="jobapp">Job application or resume</mat-option>
                  <mat-option value="linkedin">LinkedIn</mat-option>
                  <mat-option value="search">Search engine</mat-option>
                  <mat-option value="friend">Personal recommendation</mat-option>
                  <mat-option value="other">Other</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">Follow-up requested?</div>
            <div class="input-col checkbox-col">
              <mat-checkbox formControlName="followup" color="primary">Yes, please</mat-checkbox>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">Drop Philip a line *</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <textarea matInput formControlName="message" rows="4" placeholder="Your message" required></textarea>
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">Anti-bot: Spell Philip's last name, backwards, ALL CAPS *</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <input matInput formControlName="passphrase" placeholder="Passphrase" required />
              </mat-form-field>
            </div>
          </div>
        </div>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end" class="dialog-actions">
      <button mat-button color="accent" (click)="onClose()">Cancel</button>
      <button mat-flat-button color="primary" type="submit" form="contact-form" [disabled]="loading || contactForm.invalid">
        <span class="submit-content">
          <mat-spinner diameter="20" *ngIf="loading"></mat-spinner>
          <span>{{ loading ? 'Sending...' : 'Send it!' }}</span>
        </span>
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-title {
      text-align: center;
      position: relative;
      padding: 16px 24px 0;
      margin: 0;
    }
    .close-button {
      position: absolute;
      right: 8px;
      top: 8px;
      color: var(--theme-text-primary, #666);
    }
    .title-text {
      font-size: 1.5rem;
      text-transform: uppercase;
      display: block;
      margin-top: 16px;
    }
    @media (max-width: 600px) {
      .title-text { font-size: 1.25rem; }
    }
    .title-underline {
      width: 100px;
      height: 2px;
      background-color: var(--theme-primary-main, #1976d2);
      margin: 16px auto 0;
    }
    .form-grid {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .form-row {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .label-col {
      width: 100%;
      margin-top: 16px;
    }
    .input-col {
      width: 100%;
    }
    @media (min-width: 600px) {
      .form-row {
        align-items: center;
      }
      .label-col {
        width: 33.333%;
        margin-top: 0;
        padding-right: 16px;
      }
      .input-col {
        width: 66.666%;
      }
      .input-col.checkbox-col {
        margin-top: 0;
      }
    }
    mat-form-field {
      width: 100%;
    }
    .dialog-actions {
      padding: 24px;
    }
    .submit-content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `]
})
export class ContactForm implements OnInit {
  contactForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContactForm>
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      findUs: ['jobapp'],
      followup: [true],
      message: ['', Validators.required],
      passphrase: ['', Validators.required]
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.snackBar.open('Please fill out all required fields properly.', 'Close', { duration: 6000, panelClass: ['error-snackbar'] });
      return;
    }

    const formData = this.contactForm.value;

    if (formData.passphrase !== 'NITNA') {
      this.snackBar.open("Incorrect passphrase! Hint: Philip's last name backwards, ALL CAPS.", 'Close', { duration: 6000, panelClass: ['error-snackbar'] });
      return;
    }

    this.loading = true;

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        findUs: formData.findUs,
        followup: formData.followup ? 'Yes' : 'No',
        message: formData.message,
      };

      await this.contactService.sendEmail(templateParams);

      this.snackBar.open('Your message was sent! Thank you!', 'Close', { duration: 6000, panelClass: ['success-snackbar'] });
      this.contactForm.reset({
        name: '', email: '', findUs: 'jobapp', followup: true, message: '', passphrase: ''
      });
      setTimeout(() => {
        this.onClose();
      }, 1500);
    } catch (error) {
      console.error('Failed to send email:', error);
      this.snackBar.open('Your message was not sent. Please check for errors.', 'Close', { duration: 6000, panelClass: ['error-snackbar'] });
    } finally {
      this.loading = false;
    }
  }
}
