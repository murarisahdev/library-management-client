import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountconfirmationComponent } from './accountconfirmation.component';

describe('AccountconfirmationComponent', () => {
  let component: AccountconfirmationComponent;
  let fixture: ComponentFixture<AccountconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
