import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryLawDialogComponent } from './summary-law-dialog.component';

describe('SummaryLawDialogComponent', () => {
  let component: SummaryLawDialogComponent;
  let fixture: ComponentFixture<SummaryLawDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryLawDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryLawDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
