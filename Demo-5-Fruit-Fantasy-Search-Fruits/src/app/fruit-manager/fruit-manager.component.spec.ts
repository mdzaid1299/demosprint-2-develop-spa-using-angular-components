import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitManagerComponent } from './fruit-manager.component';

describe('FruitManagerComponent', () => {
  let component: FruitManagerComponent;
  let fixture: ComponentFixture<FruitManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
