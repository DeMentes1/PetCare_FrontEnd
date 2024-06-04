import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductPublishViewComponent } from './new-product-publish-view.component';

describe('NewProductPublishViewComponent', () => {
  let component: NewProductPublishViewComponent;
  let fixture: ComponentFixture<NewProductPublishViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProductPublishViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProductPublishViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
