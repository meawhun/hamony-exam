import { Ex1Service } from './ex1.service';
import { CreateEx1Dto } from './dto/create-ex1.dto';
export declare class Ex1Controller {
    private readonly ex1Service;
    constructor(ex1Service: Ex1Service);
    create(createEx1Dto: CreateEx1Dto): Promise<any>;
}
