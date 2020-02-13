import Pretender from 'pretender';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from '../servcies/authors.service';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { RouterTestingModule } from '@angular/router/testing';

/**
const server = new Pretender(function() {
  this.get('//jsonapiplayground.reyesoft.com/v2/', request => {
    let all =  JSON.stringify(require('../../../e2e/author.json'));    
    console.log(all)
    return [200, {"Content-Type": "application/json"}, all]
  });
});
*/

describe('AuthorsComponent', () => {
  
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let authorsService: AuthorsService;
  authorsService = null;
  
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
    }, 10000);    
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
    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    expect(authorElements.length).toBeGreaterThan(3);
  });

});
