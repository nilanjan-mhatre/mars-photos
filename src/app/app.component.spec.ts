import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { HomeComponent } from './components/home.component';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let app:any;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
              AppComponent, CameraComponent, HomeComponent
          ],
      }).compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
      expect(app).toBeTruthy();
  });

  it(`should have as title 'mars-photos'`, () => {
      expect(app.title).toEqual('mars-photos');
  });
});
