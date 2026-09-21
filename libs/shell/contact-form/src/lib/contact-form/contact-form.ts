import { Component, OnInit, inject } from '@angular/core';
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
import { TranslatePipe, I18nService } from '@shell/header';

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
    MatProgressSpinnerModule,
    TranslatePipe
  ],
  template: `
    <h2 mat-dialog-title class="dialog-title">
      <button mat-icon-button (click)="onClose()" class="close-button" aria-label="close">
        <mat-icon>close</mat-icon>
      </button>
      <span class="title-text">{{ 'contact.dialogTitle' | translate }}</span>
      <div class="title-underline"></div>
    </h2>

    <mat-dialog-content>
      <form [formGroup]="contactForm" id="contact-form" (ngSubmit)="onSubmit()">
        <div class="form-grid">
          <div class="form-row">
            <div class="label-col">{{ 'contact.nameLabel' | translate }}</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <input matInput formControlName="name" [placeholder]="'contact.namePlaceholder' | translate" required />
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">{{ 'contact.emailLabel' | translate }}</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <input matInput type="email" formControlName="email" [placeholder]="'contact.emailPlaceholder' | translate" required />
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">{{ 'contact.findUsLabel' | translate }}</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <mat-select formControlName="findUs">
                  <mat-option value="jobapp">{{ 'contact.findUsOptions.jobapp' | translate }}</mat-option>
                  <mat-option value="linkedin">{{ 'contact.findUsOptions.linkedin' | translate }}</mat-option>
                  <mat-option value="search">{{ 'contact.findUsOptions.search' | translate }}</mat-option>
                  <mat-option value="friend">{{ 'contact.findUsOptions.friend' | translate }}</mat-option>
                  <mat-option value="other">{{ 'contact.findUsOptions.other' | translate }}</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">{{ 'contact.followupLabel' | translate }}</div>
            <div class="input-col checkbox-col">
              <mat-checkbox formControlName="followup" color="primary">{{ 'contact.followupYes' | translate }}</mat-checkbox>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">{{ 'contact.messageLabel' | translate }}</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <textarea matInput formControlName="message" rows="4" [placeholder]="'contact.messagePlaceholder' | translate" required></textarea>
              </mat-form-field>
            </div>
          </div>

          <div class="form-row">
            <div class="label-col">{{ 'contact.passphraseLabel' | translate }}</div>
            <div class="input-col">
              <mat-form-field appearance="outline">
                <input matInput formControlName="passphrase" [placeholder]="'contact.passphrasePlaceholder' | translate" required />
              </mat-form-field>
            </div>
          </div>
        </div>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end" class="dialog-actions">
      <button mat-button color="accent" (click)="onClose()">{{ 'contact.cancel' | translate }}</button>
      <button mat-flat-button color="primary" type="submit" form="contact-form" [disabled]="loading || contactForm.invalid">
        <span class="submit-content">
          @if (loading) {
            <mat-spinner diameter="20"></mat-spinner>
          }
          <span>{{ loading ? ('contact.sending' | translate) : ('contact.sendIt' | translate) }}</span>
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
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private snackBar = inject(MatSnackBar);
  public dialogRef = inject(MatDialogRef<ContactForm>);
  private i18n = inject(I18nService);

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
    const closeLabel = this.i18n.t('contact.close');

    if (this.contactForm.invalid) {
      this.snackBar.open(this.i18n.t('contact.snackValidation'), closeLabel, { duration: 6000, panelClass: ['error-snackbar'] });
      return;
    }

    const formData = this.contactForm.value;

    if (formData.passphrase !== 'NITNA') {
      this.snackBar.open(this.i18n.t('contact.snackPassphrase'), closeLabel, { duration: 6000, panelClass: ['error-snackbar'] });
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

      this.snackBar.open(this.i18n.t('contact.snackSuccess'), closeLabel, { duration: 6000, panelClass: ['success-snackbar'] });
      this.contactForm.reset({
        name: '', email: '', findUs: 'jobapp', followup: true, message: '', passphrase: ''
      });
      setTimeout(() => {
        this.onClose();
      }, 1500);
    } catch (error) {
      console.error('Failed to send email:', error);
      this.snackBar.open(this.i18n.t('contact.snackError'), closeLabel, { duration: 6000, panelClass: ['error-snackbar'] });
    } finally {
      this.loading = false;
    }
  }
}
