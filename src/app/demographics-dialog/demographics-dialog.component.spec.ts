import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsDialogComponent } from './demographics-dialog.component';

describe('DemographicsDialogComponent', () => {
  let component: DemographicsDialogComponent;
  let fixture: ComponentFixture<DemographicsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemographicsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemographicsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
