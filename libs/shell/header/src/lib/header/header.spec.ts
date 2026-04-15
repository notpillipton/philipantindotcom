import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Header } from './header';
import { Router, NavigationEnd } from '@angular/router';
import { of, Subject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

jest.mock('@shared/assets/nav-items.json', () => ({
  navItems: [
    { label: 'About Philip', target: 'bio', isRoute: false },
    { label: 'Competencies', target: '/competencies', isRoute: true },
    { label: 'Contact Philip', target: 'contact', isRoute: false },
    { label: 'Time Warp', target: '/past', isRoute: true }
  ]
}), { virtual: true });

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let mockRouter: any;
  let routerEvents: Subject<any>;

  beforeEach(async () => {
    routerEvents = new Subject();
    mockRouter = {
      events: routerEvents.asObservable(),
      url: '/',
      navigate: jest.fn().mockResolvedValue(true)
    };

    await TestBed.configureTestingModule({
      imports: [Header, NoopAnimationsModule],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update isHome and handle scroll on NavigationEnd', async () => {
    const scrollSpy = jest.spyOn(window, 'scrollTo');
    routerEvents.next(new NavigationEnd(1, '/', '/'));
    
    // In zoneless, we might need to trigger change detection manually or wait
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.isHome).toBe(true);
    expect(scrollSpy).toHaveBeenCalledWith(0, 0);
  });

  it('should navigate with contact query param when target is contact', () => {
    component.scrollToSection('contact');
    expect(mockRouter.navigate).toHaveBeenCalledWith([], {
      queryParams: { contact: 'true' },
      queryParamsHandling: 'merge'
    });
  });

  it('should navigate to route when isRoute is true', () => {
    component.scrollToSection('/competencies', true);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/competencies']);
  });

  it('should scroll to element when on home page', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'test-section';
    mockElement.scrollIntoView = jest.fn();
    document.body.appendChild(mockElement);
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    component.isHome = true;
    component.scrollToSection('test-section');
    
    expect(mockElement.scrollIntoView).toHaveBeenCalled();
    document.body.removeChild(mockElement);
  });

  it('should hide header on scroll down and show on scroll up', () => {
    // Initial state
    expect(component.isHidden).toBe(false);

    // Mock scroll down
    Object.defineProperty(window, 'pageYOffset', { value: 100, configurable: true });
    window.dispatchEvent(new Event('scroll'));
    expect(component.isHidden).toBe(true);

    // Mock scroll up
    Object.defineProperty(window, 'pageYOffset', { value: 50, configurable: true });
    window.dispatchEvent(new Event('scroll'));
    expect(component.isHidden).toBe(false);
  });
});
