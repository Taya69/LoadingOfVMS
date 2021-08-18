import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ListOfMachinesComponent } from './list-of-machines.component';
import {RouterTestingModule} from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Machine } from 'src/interfaces/machine';

describe('ListOfMachinesComponent', () => {
  let component: ListOfMachinesComponent;
  let fixture: ComponentFixture<ListOfMachinesComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const machine: Machine = {id: 1, name: '', cores: 1, frequency: 1, ram: 1 , selected: false}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMachinesComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })    
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 //   httpClient = TestBed.get(HttpClient);
  //  httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return ability of button', () => {
    const result = component.getDisable(machine)
    expect(result).toBe(false);
  }); 
});
