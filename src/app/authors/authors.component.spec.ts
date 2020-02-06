import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthorsComponent } from './authors.component';

import { AuthorsService } from '../authors.service';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { RouterTestingModule } from '@angular/router/testing';

describe('AuthorsComponent', () => {
  
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let authorsService: AuthorsService;
  
  beforeEach(async(async () => {
    TestBed.configureTestingModule({
        declarations: [
            AuthorsComponent,
        ],
        providers: [
            AuthorsService
        ],
        imports: [
            NgxJsonapiModule.forRoot({
                url: '//jsonapiplayground.reyesoft.com/v2/'
            }),
            RouterTestingModule
        ]
    }).compileComponents();
  }));
  
  beforeEach(async(async () => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    setTimeout(()=>{
      component.getData(authorsService);
    }, 3000);    
    fixture.detectChanges();
  }));

  it('should create the component',  async () => {
    expect(component).toBeTruthy();
  });

  it('should have a title',  async () => {
    const titleElements = fixture.debugElement.queryAll(By.css('h1'));
    expect(titleElements.length).toBe(1);
    expect(titleElements[0].nativeElement.innerHTML).toBe('Authors');
  });

  it('show all the authors', async () =>  {           
    const authorElements = fixture.debugElement.queryAll(By.css('.authors'));
    expect(authorElements.length).toBeGreaterThan(3);
  });

});
