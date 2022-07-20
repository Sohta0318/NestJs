import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerSErvice: PowerService) {}

  getData() {
    console.log('Drawing 20 watts of power from Power Service');
    this.powerSErvice.supplyPower(20);
    return 'data!';
  }
}
