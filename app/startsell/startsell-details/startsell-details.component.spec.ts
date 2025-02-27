import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsellDetailsComponent } from './startsell-details.component';

describe('StartsellDetailsComponent', () => {
  let component: StartsellDetailsComponent;
  let fixture: ComponentFixture<StartsellDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartsellDetailsComponent]
    });
    fixture = TestBed.createComponent(StartsellDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
