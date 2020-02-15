import { TestBed, inject } from '@angular/core/testing';
import { OrderService } from './order.service';
describe('OrderService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OrderService]
        });
    });
    it('should ...', inject([OrderService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=order.service.spec.js.map