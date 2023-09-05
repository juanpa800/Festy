import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { userResolvers } from './user/resolvers';
import { teamResolvers } from './team/resolvers';
import { proyectResolvers } from './proyect/resolvers';
import { responsabilityResolvers } from './responsability/resolvers';
import { elementResolvers } from './element/resolvers';

const globalResolvers: Resolver[] = [
  model1Resolvers,
  userResolvers,
  teamResolvers,
  proyectResolvers,
  responsabilityResolvers,
  elementResolvers,
];

export { globalResolvers };
