import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigComponent } from './minifig.component';

describe('MinifigComponent', () => {
  let component: MinifigComponent;
  let fixture: ComponentFixture<MinifigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinifigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
