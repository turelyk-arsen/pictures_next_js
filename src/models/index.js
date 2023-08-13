// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { POST } = initSchema(schema);

export {
  POST
};