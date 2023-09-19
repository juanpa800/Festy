import { Resolver } from 'types';
import prisma from '@config/prisma';

const proyectResolvers: Resolver = {
    Query: {
        getProyects: async (parent, args) => {
            const AllProyects = await prisma.proyect.findMany();
            return AllProyects;
        },

        getProyect: async (parent, args) => {
            const UniqueProyect = await prisma.proyect.findUnique({
                where: { id: args.id },
            });
            return UniqueProyect;
        },

    },
    Mutation: {
        updateProyect: async (parent, args) => {
            const Proyect = await prisma.proyect.update({
                where: {id : args.id},
                data:{
                    ...args.data,
                },
            });
            return Proyect;
        },
        createProyect: async (parent, args) => {
            const Proyect = await prisma.proyect.create({
                data: {
                    id: args.data.id,
                    name: args.data.name,
                    budget: args.data.budget,
                    team: { connect: { id: args.data.team } },
                },
            });
            return Proyect;
        },
    },
};

export { proyectResolvers };
