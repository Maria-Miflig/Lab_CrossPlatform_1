import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private xy = new Map();
  
  constructor(@Optional() private logService: LogService) {}
  
  
  getSeries(x: number): number {
    let sum: number = x, sqr: number = x*x, memory: number = x, mul: number = -1;
    const min = 1e-12; 
  
    do {
      memory*=sqr*mul;
      sum+=memory;
    } while (Math.abs(memory) > min);
    
    return sum;
  }

  getTabulation(xn: number = -0.9, xk: number = 0.9, h: number = 0.1){
    this.xy.clear();
    let x = xn;
    while (x <= xk) {
      const y = this.getSeries(x);
      this.xy.set(x, y);
        
      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)}, y=${y.toFixed(4)}`);
      }
        
      x = parseFloat((x + h).toFixed(5));
    }
      
    return this.xy;
  }
  
}
