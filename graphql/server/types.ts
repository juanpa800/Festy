import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { model1Types } from '@graphql/server/model1/types';
import { modelUser } from './user/types';
import { modelTeam } from './team/types';
import { modelProyect } from './proyect/types';
import { modelResponsability } from './responsability/types';
import { modelElement } from './element/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  model1Types,
  modelUser,
  modelTeam,
  modelProyect,
  modelResponsability,
  modelElement,
];

export { globalTypes };
