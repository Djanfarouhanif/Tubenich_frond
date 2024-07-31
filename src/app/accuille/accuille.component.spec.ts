import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuilleComponent } from './accuille.component';

describe('AccuilleComponent', () => {
  let component: AccuilleComponent;
  let fixture: ComponentFixture<AccuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccuilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
