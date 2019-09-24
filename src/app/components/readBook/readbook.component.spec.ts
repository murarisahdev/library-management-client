import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbookComponent } from './readbook.component';

describe('ReadbookComponent', () => {
  let component: ReadbookComponent;
  let fixture: ComponentFixture<ReadbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
