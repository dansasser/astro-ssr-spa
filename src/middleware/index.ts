import { sequence } from 'astro/middleware';

// Import the middleware
import { auth } from './auth';
import { validate } from './validate';

// export onRequest. Invoke "sequence" with the middleware
export const onRequest = sequence(validate, auth);
