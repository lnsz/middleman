import { idArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields([
      'createTranslator',
      'updateTranslator',
      'deleteTranslator',
      'createEndpoint',
      'updateEndpoint',
      'deleteEndpoint',
      'createTest',
      'updateTest',
      'deleteTest'
    ])

    t.field('runTest', {
      type: 'Run',
      args: {
        testId: idArg()
      },
      resolve: (parent, { testId }, ctx) => {
        // TODO: Running tests
        return ctx.prisma.createRun({
          test: {
            connect: {
              id : testId
            }
          },
          expected: '',
          actual: '',
          result: 'Fail'
        })
      }
    })
  }
})