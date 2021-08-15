import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ListOfMachinesComponent } from './list-of-machines.component';

describe('ListOfMachinesComponent', () => {
  let component: ListOfMachinesComponent;
  let fixture: ComponentFixture<ListOfMachinesComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMachinesComponent ],
      imports: [ HttpClientTestingModule ]
    })    
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
