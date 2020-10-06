import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBlogComponent } from './comp-blog.component';

describe('CompBlogComponent', () => {
  let component: CompBlogComponent;
  let fixture: ComponentFixture<CompBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
