import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleMatDialogComponent } from './rule-mat-dialog.component';

describe('RuleMatDialogComponent', () => {
  let component: RuleMatDialogComponent;
  let fixture: ComponentFixture<RuleMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleMatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
