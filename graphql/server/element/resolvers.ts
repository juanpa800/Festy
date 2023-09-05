import { Resolver } from 'types';
import prisma from '@config/prisma';

const elementResolvers: Resolver = {
    Query: {
        getElements: async (parent, args) => {
            const AllElements = await prisma.element.findMany();
            return AllElements;
        },

        getElement: async (parent, args) => {
            const UniqueElement = await prisma.element.findUnique({
                where: { id: args.id },
            });
            return UniqueElement;
        },

    },
    Mutation: {
        updateElement: async (parent, args) => {
            const Element = await prisma.element.update({
                where: { id: args.id },
                data: {
                    ...args.data,
                },
            });
            return Element;
        },
        createElement: async (parent, args) => {
            const Element = await prisma.element.create({
                data: {
                    id: args.data.id,
                    name: args.data.name,
                    price: args.data.price,
                    amount: args.data.amount,
                    responsability: { connect: { id: args.data.responsability } },
                },
            });
            return Element;
        },
    },
};

export { elementResolvers };
