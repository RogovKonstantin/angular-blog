import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithFormComponent } from './box-with-form.component';

describe('BoxWithFormComponent', () => {
  let component: BoxWithFormComponent;
  let fixture: ComponentFixture<BoxWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxWithFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
