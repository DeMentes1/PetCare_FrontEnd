import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetProfileViewAndEditComponent } from './vet-profile-view-and-edit.component';

describe('VetProfileViewAndEditComponent', () => {
  let component: VetProfileViewAndEditComponent;
  let fixture: ComponentFixture<VetProfileViewAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetProfileViewAndEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetProfileViewAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
