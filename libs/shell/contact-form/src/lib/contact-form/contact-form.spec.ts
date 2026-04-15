import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ContactForm } from './contact-form';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from './contact.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactForm', () => {
  let component: ContactForm;
  let fixture: ComponentFixture<ContactForm>;
  let mockDialogRef: any;
  let mockContactService: any;
  let mockSnackBar: any;

  beforeEach(async () => {
    mockDialogRef = { close: jest.fn() };
    mockContactService = { sendEmail: jest.fn().mockResolvedValue({}) };
    mockSnackBar = { open: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [ContactForm, ReactiveFormsModule, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: ContactService, useValue: mockContactService },
        { provide: MatSnackBar, useValue: mockSnackBar }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an invalid form', () => {
    expect(component.contactForm.invalid).toBe(true);
  });

  it('should be valid when all required fields are filled correctly', () => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello!',
      passphrase: 'NITNA'
    });
    expect(component.contactForm.valid).toBe(true);
  });

  it('should not submit if passphrase is incorrect', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello!',
      passphrase: 'WRONG'
    });
    
    await component.onSubmit();
    
    expect(alertSpy).toHaveBeenCalled();
    expect(mockContactService.sendEmail).not.toHaveBeenCalled();
    alertSpy.mockRestore();
  });

  it('should call contactService and show success snackbar on successful submission', async () => {
    const setTimeoutSpy = jest.spyOn(window, 'setTimeout').mockImplementation((cb) => {
      if (typeof cb === 'function') cb();
      return 0 as any;
    });

    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello!',
      passphrase: 'NITNA'
    });
    
    await Promise.resolve();
    fixture.detectChanges();
    
    await component.onSubmit();
    
    await Promise.resolve();
    fixture.detectChanges();
    
    expect(mockContactService.sendEmail).toHaveBeenCalled();
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      expect.stringContaining('sent'),
      'Close',
      expect.any(Object)
    );
    
    expect(mockDialogRef.close).toHaveBeenCalled();
    setTimeoutSpy.mockRestore();
  });

  it('should show error snackbar on failed submission', async () => {
    mockContactService.sendEmail.mockRejectedValue(new Error('Failed'));
    
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello!',
      passphrase: 'NITNA'
    });
    
    await Promise.resolve();
    fixture.detectChanges();
    
    await component.onSubmit();
    
    await Promise.resolve();
    fixture.detectChanges();
    
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      expect.stringContaining('not sent'),
      'Close',
      expect.any(Object)
    );
  });

  it('should close the dialog when onClose is called', () => {
    component.onClose();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
