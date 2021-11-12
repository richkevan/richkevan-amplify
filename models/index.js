// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blogpost } = initSchema(schema);

export {
  Blogpost
};