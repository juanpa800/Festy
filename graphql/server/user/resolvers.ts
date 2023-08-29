import { Resolver } from 'types';
import prisma from '@config/prisma';

const userResolvers: Resolver = {
    Query: {
        getUsers: async (parent, args) => {
            const AllUsers = await prisma.user.findMany();
            return AllUsers;
        },

        getUser: async (parent, args) => {
            const UniqueUser = await prisma.user.findUnique({
                where: { id: args.id },
            });
            return UniqueUser;
        },

    },
    Mutation: {
        updateUser: async (parent, args) => {
            const User = await prisma.user.update({
                where: {id : args.id},
                data:{
                    ...args.data,
                },
            });
            return User;
        },
    },
};

export { userResolvers };
