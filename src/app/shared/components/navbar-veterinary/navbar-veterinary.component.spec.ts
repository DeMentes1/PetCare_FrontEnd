import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVeterinaryComponent } from './navbar-veterinary.component';

describe('NavbarVeterinaryComponent', () => {
  let component: NavbarVeterinaryComponent;
  let fixture: ComponentFixture<NavbarVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarVeterinaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
