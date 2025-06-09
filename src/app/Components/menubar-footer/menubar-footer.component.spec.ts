import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarFooterComponent } from './menubar-footer.component';

describe('MenubarFooterComponent', () => {
  let component: MenubarFooterComponent;
  let fixture: ComponentFixture<MenubarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
