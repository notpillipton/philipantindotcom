import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { of, BehaviorSubject, Subject } from 'rxjs';
import { Component } from '@angular/core';

// eslint-disable-next-line @angular-eslint/component-selector
@Component({
  selector: 'lib-header',
  standalone: true,
  template: '<div>Mock Header</div>'
})
class MockHeader {}

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let mockDialog: any;
  let mockRouter: any;
  let queryParams: BehaviorSubject<any>;
  let fragment: BehaviorSubject<string | null>;

  beforeEach(async () => {
    queryParams = new BehaviorSubject({});
    fragment = new BehaviorSubject<string | null>(null);
    mockDialog = {
      open: jest.fn().mockReturnValue({
        afterClosed: () => of(true),
        close: jest.fn()
      })
    };
    mockRouter = {
      navigate: jest.fn(),
      events: of()
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: Router, useValue: mockRouter },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: queryParams.asObservable(),
            fragment: fragment.asObservable()
          }
        }
      ]
    }).overrideComponent(App, {
      set: { imports: [RouterModule, MockHeader] }
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open contact dialog when contact=true query param is present', () => {
    queryParams.next({ contact: 'true' });
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('should close dialog when contact query param is removed', () => {
    const afterClosedSubject = new Subject();
    const mockDialogRef = {
      afterClosed: () => afterClosedSubject.asObservable(),
      close: jest.fn()
    };
    mockDialog.open.mockReturnValue(mockDialogRef);
    
    queryParams.next({ contact: 'true' });
    expect(mockDialog.open).toHaveBeenCalled();
    
    queryParams.next({ contact: 'false' });
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should navigate to /past when fragment is past', () => {
    fragment.next('past');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/past']);
  });
});
