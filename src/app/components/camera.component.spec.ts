import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { CameraComponent } from './camera.component';

describe('CameraComponent', () => {
    let fixture:ComponentFixture<CameraComponent>;
    let app:any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            CameraComponent
          ],
        }).compileComponents();
        fixture = TestBed.createComponent(CameraComponent);
        app = fixture.debugElement.componentInstance;
      }));

    it('should create a component', () => {
        expect(app).toBeTruthy();
    });
});
