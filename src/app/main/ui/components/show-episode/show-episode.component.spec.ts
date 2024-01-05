import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodeComponent } from './show-episode.component';

describe('ShowEpisodeComponent', () => {
  let component: ShowEpisodeComponent;
  let fixture: ComponentFixture<ShowEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowEpisodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
