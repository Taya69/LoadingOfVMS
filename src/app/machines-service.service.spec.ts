import { fakeAsync, flush, TestBed} from '@angular/core/testing';
import { MachinesServiceService } from './machines-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Machine } from 'src/interfaces/machine';
import { of } from 'rxjs';
import { Load } from 'src/interfaces/load';
describe('MachinesServiceService', () => {
  let service: MachinesServiceService;
  //let httpClient: HttpClient;
  //let httpTestingController: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };
  const expectedMachines: Machine[] =  [
    {id: 1, name: '', cores: 1, frequency: 1, ram: 1 , selected: false},
    {id: 2, name: '', cores: 2, frequency: 2, ram: 2 , selected: false}
]
  beforeEach(() => {
   // TestBed.configureTestingModule({
  //    imports: [ HttpClientTestingModule ],
    //  providers: [MachinesServiceService]
      
  //  });
  //  httpClient = TestBed.get(HttpClient);
   // httpTestingController = TestBed.get(HttpTestingController);
   // service = TestBed.inject(MachinesServiceService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MachinesServiceService(httpClientSpy as any);
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return expected machines (HttpClient called once)', (done: DoneFn) => {
   
  httpClientSpy.get.and.returnValue(of((expectedMachines)));

  service.getMachines().subscribe(
    machines => {
      expect(machines).toEqual(expectedMachines, 'expected machines');
      done();
    },
    done.fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');  
  })
  it('should return expected loads (HttpClient called once)', (done: DoneFn) => {
    const expectedLoads: Load[] =  [
      {vmId: 1, coreLoads: [0.5, 0.3], usedMemory: 100 },
      {vmId: 2, coreLoads: [0.3, 0.2], usedMemory: 200 }
  ]
  httpClientSpy.get.and.returnValue(of((expectedLoads)));

  service.getLoadOfMachine('1,2').subscribe(
    loads => {
      expect(loads).toEqual(expectedLoads, 'expected machines');
      done();
    },
    done.fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');  
  })
});
