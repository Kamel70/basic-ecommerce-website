import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProCardComponent } from './cart-pro-card.component';

describe('CartProCardComponent', () => {
  let component: CartProCardComponent;
  let fixture: ComponentFixture<CartProCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartProCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartProCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
