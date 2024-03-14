import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptreaderComponent } from './scriptreader.component';

describe('ScriptreaderComponent', () => {
  let component: ScriptreaderComponent;
  let fixture: ComponentFixture<ScriptreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptreaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
