import { ApolloError } from 'apollo-server-express';

export default function ErrorController(message, code) {
  console.log(`${code} ${message}`);
  return new ApolloError(message, code);
}
