import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardviewloginComponent } from './cardviewlogin.component';

describe('CardviewloginComponent', () => {
  let component: CardviewloginComponent;
  let fixture: ComponentFixture<CardviewloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardviewloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardviewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
