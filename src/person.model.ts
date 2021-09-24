import Address from './address.model';

export default class Person {
    name: string;
    address?: Address;

    constructor(init?: Partial<Person>) {
        Object.assign(this, init);
    }
}
