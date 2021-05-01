import logger from './logger';
import Model from './model';

const promise = new Promise<Model>((resolve) => {
    const model = new Model({ name: 'Vinicius', age: 40 });
    setTimeout(() => resolve(model), 1000);
});

// Top-level await
const value = await promise;
logger.debug(JSON.stringify(value));

const msg = 'Hello, World!';
logger.info(msg);
