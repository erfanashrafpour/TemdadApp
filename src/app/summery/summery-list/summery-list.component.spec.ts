import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryListComponent } from './summery-list.component';

describe('SummeryListComponent', () => {
  let component: SummeryListComponent;
  let fixture: ComponentFixture<SummeryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummeryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
