import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLInksComponent } from './social-links.component';

describe('SocialLInksComponent', () => {
  let component: SocialLInksComponent;
  let fixture: ComponentFixture<SocialLInksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialLInksComponent]
    });
    fixture = TestBed.createComponent(SocialLInksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
