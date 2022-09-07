import { Ex2Service } from './ex2.service';
import { InputEx2Dto } from './dto/input-ex2.dto';
export declare class Ex2Controller {
    private readonly ex2Service;
    constructor(ex2Service: Ex2Service);
    create(inputEx2Dto: InputEx2Dto): Promise<any>;
}
