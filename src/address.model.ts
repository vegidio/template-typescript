export default class Address {
    city: string;
    country: string;

    constructor(init?: Partial<Address>) {
        Object.assign(this, init);
    }
}
