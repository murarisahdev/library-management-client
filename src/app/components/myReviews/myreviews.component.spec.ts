import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreviewsComponent } from './myreviews.component';

describe('MyreviewsComponent', () => {
  let component: MyreviewsComponent;
  let fixture: ComponentFixture<MyreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
