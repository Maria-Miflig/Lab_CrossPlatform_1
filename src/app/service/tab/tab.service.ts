import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) {}

  private computeFunction(x: number): number {
    return x / (1 + x * x);
  }

  getTabulation(xn: number = -0.9, xk: number = 0.9, h: number = 0.1){
    this.xy.clear();
    let x = xn;
    while (x <= xk) {
      const y = this.computeFunction(x);
      this.xy.set(x, y);
      
      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)}, y=${y.toFixed(4)}`);
      }
      
      x = parseFloat((x + h).toFixed(5));
    }
    
    return this.xy;
  }
}
