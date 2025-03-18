import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {

private xy = new Map();
  
  constructor(@Optional() private logService: LogService) {}
  
  
  getRecursion(x: number, sum: number = x, memory: number = x, mul: number = -1, min: number = 1e-12): number {
    let sqr: number = x * x;
    
    if (Math.abs(memory) <= min) {
      return sum;
    }
    
    memory *= sqr * mul;
    sum += memory;
    
    return this.getRecursion(x, sum, memory, mul, min);
  }
  

  getTabulation(xn: number = -0.9, xk: number = 0.9, h: number = 0.1){
    this.xy.clear();
    let x = xn;
    while (x <= xk) {
      const y = this.getRecursion(x);
      this.xy.set(x, y);
        
      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)}, y=${y.toFixed(4)}`);
      }
        
      x = parseFloat((x + h).toFixed(5));
    }
      
    return this.xy;
  }
}
