import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceComponentComponent } from './space-component.component';

describe('SpaceComponentComponent', () => {
  let component: SpaceComponentComponent;
  let fixture: ComponentFixture<SpaceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
