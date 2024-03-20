import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsheetComponent } from './callsheet.component';

describe('CallsheetComponent', () => {
  let component: CallsheetComponent;
  let fixture: ComponentFixture<CallsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
