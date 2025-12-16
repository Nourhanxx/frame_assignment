import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semifooter } from './semifooter';

describe('Semifooter', () => {
  let component: Semifooter;
  let fixture: ComponentFixture<Semifooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semifooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semifooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
