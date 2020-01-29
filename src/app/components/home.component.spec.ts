import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let fixture:ComponentFixture<HomeComponent>;
    let app:any;
    let compiled:any;

    beforeEach(async(() => {
    }));

    beforeAll(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              HomeComponent
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        app = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    }));

    it('should create a component', () => {
        expect(app).toBeTruthy();
    });

    it('should have a header h1', () => {
        expect(compiled.querySelector('h1').textContent).toContain('Curiosity Images');
    });
});
