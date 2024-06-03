import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPetOwnerComponent } from './navbar-pet-owner.component';

describe('NavbarPetOwnerComponent', () => {
  let component: NavbarPetOwnerComponent;
  let fixture: ComponentFixture<NavbarPetOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarPetOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
