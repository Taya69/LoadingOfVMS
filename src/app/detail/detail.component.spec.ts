import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let route: ActivatedRoute;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent, route ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
