import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryViewComponent } from './veterinary-view.component';

describe('VeterinaryViewComponent', () => {
  let component: VeterinaryViewComponent;
  let fixture: ComponentFixture<VeterinaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinaryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
