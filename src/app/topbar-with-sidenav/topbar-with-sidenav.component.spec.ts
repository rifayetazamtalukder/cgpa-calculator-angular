import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarWithSidenavComponent } from './topbar-with-sidenav.component';

describe('TopbarWithSidenavComponent', () => {
  let component: TopbarWithSidenavComponent;
  let fixture: ComponentFixture<TopbarWithSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarWithSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarWithSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
