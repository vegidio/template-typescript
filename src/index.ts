import logger from './logger';
import Person from './person.model';
import Address from './address.model';

const promise = new Promise<Person>((resolve) => {
    const person = new Person({ name: 'Vinicius', address: new Address({ city: 'Stockholm', country: 'SE' }) });
    setTimeout(() => resolve(person), 1000);
});

// Top-level await
const value = await promise;
logger.debug(JSON.stringify(value));

const msg = 'Hello, World!';
logger.info(msg);

export { Person, Address };
