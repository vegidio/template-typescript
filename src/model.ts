export default class Model {
    name: string;
    age?: number;

    constructor(init?: Partial<Model>) {
        Object.assign(this, init);
    }
}
