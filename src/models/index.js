// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Request, Client, Volunteer } = initSchema(schema);

export {
  Request,
  Client,
  Volunteer
};