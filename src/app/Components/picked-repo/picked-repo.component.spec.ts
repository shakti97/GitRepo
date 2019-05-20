import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedRepoComponent } from './picked-repo.component';

describe('PickedRepoComponent', () => {
  let component: PickedRepoComponent;
  let fixture: ComponentFixture<PickedRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
