import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRejectComponent } from './approval-reject.component';

describe('ApprovalRejectComponent', () => {
  let component: ApprovalRejectComponent;
  let fixture: ComponentFixture<ApprovalRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
