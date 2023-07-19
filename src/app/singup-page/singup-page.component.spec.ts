import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupPageComponent } from './singup-page.component';

describe('SingupPageComponent', () => {
  let component: SingupPageComponent;
  let fixture: ComponentFixture<SingupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingupPageComponent]
    });
    fixture = TestBed.createComponent(SingupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
