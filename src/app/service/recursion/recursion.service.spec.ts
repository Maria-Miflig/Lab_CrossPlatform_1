import { RecursionService } from './recursion.service';
import { TestBed } from '@angular/core/testing';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('sum of series at x=0.8; y=0.4878', () => {
    let x = 0.8;
    let y = 0.4878;
    const xy = service.getTabulation();
    let computedY = xy.get(x);

    if (computedY === undefined) {
      computedY = 5;
    }

    expect(xy.has(x)).toBeTrue();
    expect(computedY.toFixed(4)).toBe(y.toFixed(4));
  });

  it('sum of series at x=-0.6; y=-0.4412', () => {
    let x = -0.6;
    let y = -0.4412;
    const xy = service.getTabulation();
    let computedY = xy.get(x);

    if (computedY === undefined) {
      computedY = 5;
    }

    expect(xy.has(x)).toBeTrue();
    expect(computedY.toFixed(4)).toBe(y.toFixed(4));
  });
});
