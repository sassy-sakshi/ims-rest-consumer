import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Product Inventory Management System'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Product Inventory Management System');
  });

  it(`should render title in a h2 tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('h2').textContent).toContain('Product Inventory Management System');
  });

});
