import { Resolver } from 'types';
import prisma from '@config/prisma';

const teamResolvers: Resolver = {
    Query: {
        getTeams: async (parent, args) => {
            const AllTeams = await prisma.team.findMany();
            return AllTeams;
        },

        getTeam: async (parent, args) => {
            const UniqueTeam = await prisma.team.findUnique({
                where: { id: args.id },
            });
            return UniqueTeam;
        },

    },
    Mutation: {
        updateTeam: async (parent, args) => {
            const Team = await prisma.team.update({
                where: {id : args.id},
                data:{
                    ...args.data,
                },
            });
            return Team;
        },
        createTeam: async (parent, args) => {
            const Team = await prisma.team.create({
                data: {
                    id: args.data.id,
                    name: args.data.name,
                },
            });
            return Team;
        },
    },
};

export { teamResolvers };
