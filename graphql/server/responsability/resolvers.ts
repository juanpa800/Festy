import { Resolver } from 'types';
import prisma from '@config/prisma';

const responsabilityResolvers: Resolver = {
    Query: {
        getResponsabilities: async (parent, args) => {
            const AllResponsability = await prisma.responsability.findMany();
            return AllResponsability;
        },

        getResponsability: async (parent, args) => {
            const UniqueResponsability = await prisma.responsability.findUnique({
                where: { id: args.id },
            });
            return UniqueResponsability;
        },

    },
    Mutation: {
        updateResponsability: async (parent, args) => {
            const Responsability = await prisma.responsability.update({
                where: { id: args.id },
                data: {
                    ...args.data,
                },
            });
            return Responsability;
        },
        createResponsability: async (parent, args) => {
            const Responsability = await prisma.responsability.create({
                data: {
                    id: args.data.id,
                    user: { connect: { id: args.data.user } },
                    element: { connect: { id: args.data.element } },
                    proyect: { connect: { id: args.data.proyect } },
                }
            });
            return Responsability;
        },
    },
};

export { responsabilityResolvers };
