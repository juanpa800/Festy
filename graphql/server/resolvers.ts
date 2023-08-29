import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { userResolvers } from './user/resolvers';

const globalResolvers: Resolver[] = [
  model1Resolvers,
  userResolvers,
];

export { globalResolvers };
