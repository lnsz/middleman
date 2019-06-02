// Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateEndpoint {
  count: Int!
}

type AggregateRun {
  count: Int!
}

type AggregateTest {
  count: Int!
}

type AggregateTranslator {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Endpoint {
  id: ID!
  translator: Translator!
  type: RequestType!
  url: String!
}

type EndpointConnection {
  pageInfo: PageInfo!
  edges: [EndpointEdge]!
  aggregate: AggregateEndpoint!
}

input EndpointCreateInput {
  id: ID
  translator: TranslatorCreateOneWithoutEndpointsInput!
  type: RequestType!
  url: String!
}

input EndpointCreateManyWithoutTranslatorInput {
  create: [EndpointCreateWithoutTranslatorInput!]
  connect: [EndpointWhereUniqueInput!]
}

input EndpointCreateWithoutTranslatorInput {
  id: ID
  type: RequestType!
  url: String!
}

type EndpointEdge {
  node: Endpoint!
  cursor: String!
}

enum EndpointOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  url_ASC
  url_DESC
}

type EndpointPreviousValues {
  id: ID!
  type: RequestType!
  url: String!
}

input EndpointScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: RequestType
  type_not: RequestType
  type_in: [RequestType!]
  type_not_in: [RequestType!]
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [EndpointScalarWhereInput!]
  OR: [EndpointScalarWhereInput!]
  NOT: [EndpointScalarWhereInput!]
}

type EndpointSubscriptionPayload {
  mutation: MutationType!
  node: Endpoint
  updatedFields: [String!]
  previousValues: EndpointPreviousValues
}

input EndpointSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EndpointWhereInput
  AND: [EndpointSubscriptionWhereInput!]
  OR: [EndpointSubscriptionWhereInput!]
  NOT: [EndpointSubscriptionWhereInput!]
}

input EndpointUpdateInput {
  translator: TranslatorUpdateOneRequiredWithoutEndpointsInput
  type: RequestType
  url: String
}

input EndpointUpdateManyDataInput {
  type: RequestType
  url: String
}

input EndpointUpdateManyMutationInput {
  type: RequestType
  url: String
}

input EndpointUpdateManyWithoutTranslatorInput {
  create: [EndpointCreateWithoutTranslatorInput!]
  delete: [EndpointWhereUniqueInput!]
  connect: [EndpointWhereUniqueInput!]
  set: [EndpointWhereUniqueInput!]
  disconnect: [EndpointWhereUniqueInput!]
  update: [EndpointUpdateWithWhereUniqueWithoutTranslatorInput!]
  upsert: [EndpointUpsertWithWhereUniqueWithoutTranslatorInput!]
  deleteMany: [EndpointScalarWhereInput!]
  updateMany: [EndpointUpdateManyWithWhereNestedInput!]
}

input EndpointUpdateManyWithWhereNestedInput {
  where: EndpointScalarWhereInput!
  data: EndpointUpdateManyDataInput!
}

input EndpointUpdateWithoutTranslatorDataInput {
  type: RequestType
  url: String
}

input EndpointUpdateWithWhereUniqueWithoutTranslatorInput {
  where: EndpointWhereUniqueInput!
  data: EndpointUpdateWithoutTranslatorDataInput!
}

input EndpointUpsertWithWhereUniqueWithoutTranslatorInput {
  where: EndpointWhereUniqueInput!
  update: EndpointUpdateWithoutTranslatorDataInput!
  create: EndpointCreateWithoutTranslatorInput!
}

input EndpointWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  translator: TranslatorWhereInput
  type: RequestType
  type_not: RequestType
  type_in: [RequestType!]
  type_not_in: [RequestType!]
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [EndpointWhereInput!]
  OR: [EndpointWhereInput!]
  NOT: [EndpointWhereInput!]
}

input EndpointWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEndpoint(data: EndpointCreateInput!): Endpoint!
  updateEndpoint(data: EndpointUpdateInput!, where: EndpointWhereUniqueInput!): Endpoint
  updateManyEndpoints(data: EndpointUpdateManyMutationInput!, where: EndpointWhereInput): BatchPayload!
  upsertEndpoint(where: EndpointWhereUniqueInput!, create: EndpointCreateInput!, update: EndpointUpdateInput!): Endpoint!
  deleteEndpoint(where: EndpointWhereUniqueInput!): Endpoint
  deleteManyEndpoints(where: EndpointWhereInput): BatchPayload!
  createRun(data: RunCreateInput!): Run!
  updateRun(data: RunUpdateInput!, where: RunWhereUniqueInput!): Run
  updateManyRuns(data: RunUpdateManyMutationInput!, where: RunWhereInput): BatchPayload!
  upsertRun(where: RunWhereUniqueInput!, create: RunCreateInput!, update: RunUpdateInput!): Run!
  deleteRun(where: RunWhereUniqueInput!): Run
  deleteManyRuns(where: RunWhereInput): BatchPayload!
  createTest(data: TestCreateInput!): Test!
  updateTest(data: TestUpdateInput!, where: TestWhereUniqueInput!): Test
  updateManyTests(data: TestUpdateManyMutationInput!, where: TestWhereInput): BatchPayload!
  upsertTest(where: TestWhereUniqueInput!, create: TestCreateInput!, update: TestUpdateInput!): Test!
  deleteTest(where: TestWhereUniqueInput!): Test
  deleteManyTests(where: TestWhereInput): BatchPayload!
  createTranslator(data: TranslatorCreateInput!): Translator!
  updateTranslator(data: TranslatorUpdateInput!, where: TranslatorWhereUniqueInput!): Translator
  updateManyTranslators(data: TranslatorUpdateManyMutationInput!, where: TranslatorWhereInput): BatchPayload!
  upsertTranslator(where: TranslatorWhereUniqueInput!, create: TranslatorCreateInput!, update: TranslatorUpdateInput!): Translator!
  deleteTranslator(where: TranslatorWhereUniqueInput!): Translator
  deleteManyTranslators(where: TranslatorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  endpoint(where: EndpointWhereUniqueInput!): Endpoint
  endpoints(where: EndpointWhereInput, orderBy: EndpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Endpoint]!
  endpointsConnection(where: EndpointWhereInput, orderBy: EndpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EndpointConnection!
  run(where: RunWhereUniqueInput!): Run
  runs(where: RunWhereInput, orderBy: RunOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Run]!
  runsConnection(where: RunWhereInput, orderBy: RunOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunConnection!
  test(where: TestWhereUniqueInput!): Test
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!
  translator(where: TranslatorWhereUniqueInput!): Translator
  translators(where: TranslatorWhereInput, orderBy: TranslatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Translator]!
  translatorsConnection(where: TranslatorWhereInput, orderBy: TranslatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TranslatorConnection!
  node(id: ID!): Node
}

enum RequestType {
  GET
  POST
  PUT
  DELETE
}

enum ResultType {
  Pass
  Fail
}

type Run {
  id: ID!
  test: Test!
  expected: String!
  actual: String!
  result: ResultType!
}

type RunConnection {
  pageInfo: PageInfo!
  edges: [RunEdge]!
  aggregate: AggregateRun!
}

input RunCreateInput {
  id: ID
  test: TestCreateOneWithoutRunsInput!
  expected: String!
  actual: String!
  result: ResultType!
}

input RunCreateManyWithoutTestInput {
  create: [RunCreateWithoutTestInput!]
  connect: [RunWhereUniqueInput!]
}

input RunCreateWithoutTestInput {
  id: ID
  expected: String!
  actual: String!
  result: ResultType!
}

type RunEdge {
  node: Run!
  cursor: String!
}

enum RunOrderByInput {
  id_ASC
  id_DESC
  expected_ASC
  expected_DESC
  actual_ASC
  actual_DESC
  result_ASC
  result_DESC
}

type RunPreviousValues {
  id: ID!
  expected: String!
  actual: String!
  result: ResultType!
}

input RunScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  expected: String
  expected_not: String
  expected_in: [String!]
  expected_not_in: [String!]
  expected_lt: String
  expected_lte: String
  expected_gt: String
  expected_gte: String
  expected_contains: String
  expected_not_contains: String
  expected_starts_with: String
  expected_not_starts_with: String
  expected_ends_with: String
  expected_not_ends_with: String
  actual: String
  actual_not: String
  actual_in: [String!]
  actual_not_in: [String!]
  actual_lt: String
  actual_lte: String
  actual_gt: String
  actual_gte: String
  actual_contains: String
  actual_not_contains: String
  actual_starts_with: String
  actual_not_starts_with: String
  actual_ends_with: String
  actual_not_ends_with: String
  result: ResultType
  result_not: ResultType
  result_in: [ResultType!]
  result_not_in: [ResultType!]
  AND: [RunScalarWhereInput!]
  OR: [RunScalarWhereInput!]
  NOT: [RunScalarWhereInput!]
}

type RunSubscriptionPayload {
  mutation: MutationType!
  node: Run
  updatedFields: [String!]
  previousValues: RunPreviousValues
}

input RunSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RunWhereInput
  AND: [RunSubscriptionWhereInput!]
  OR: [RunSubscriptionWhereInput!]
  NOT: [RunSubscriptionWhereInput!]
}

input RunUpdateInput {
  test: TestUpdateOneRequiredWithoutRunsInput
  expected: String
  actual: String
  result: ResultType
}

input RunUpdateManyDataInput {
  expected: String
  actual: String
  result: ResultType
}

input RunUpdateManyMutationInput {
  expected: String
  actual: String
  result: ResultType
}

input RunUpdateManyWithoutTestInput {
  create: [RunCreateWithoutTestInput!]
  delete: [RunWhereUniqueInput!]
  connect: [RunWhereUniqueInput!]
  set: [RunWhereUniqueInput!]
  disconnect: [RunWhereUniqueInput!]
  update: [RunUpdateWithWhereUniqueWithoutTestInput!]
  upsert: [RunUpsertWithWhereUniqueWithoutTestInput!]
  deleteMany: [RunScalarWhereInput!]
  updateMany: [RunUpdateManyWithWhereNestedInput!]
}

input RunUpdateManyWithWhereNestedInput {
  where: RunScalarWhereInput!
  data: RunUpdateManyDataInput!
}

input RunUpdateWithoutTestDataInput {
  expected: String
  actual: String
  result: ResultType
}

input RunUpdateWithWhereUniqueWithoutTestInput {
  where: RunWhereUniqueInput!
  data: RunUpdateWithoutTestDataInput!
}

input RunUpsertWithWhereUniqueWithoutTestInput {
  where: RunWhereUniqueInput!
  update: RunUpdateWithoutTestDataInput!
  create: RunCreateWithoutTestInput!
}

input RunWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  test: TestWhereInput
  expected: String
  expected_not: String
  expected_in: [String!]
  expected_not_in: [String!]
  expected_lt: String
  expected_lte: String
  expected_gt: String
  expected_gte: String
  expected_contains: String
  expected_not_contains: String
  expected_starts_with: String
  expected_not_starts_with: String
  expected_ends_with: String
  expected_not_ends_with: String
  actual: String
  actual_not: String
  actual_in: [String!]
  actual_not_in: [String!]
  actual_lt: String
  actual_lte: String
  actual_gt: String
  actual_gte: String
  actual_contains: String
  actual_not_contains: String
  actual_starts_with: String
  actual_not_starts_with: String
  actual_ends_with: String
  actual_not_ends_with: String
  result: ResultType
  result_not: ResultType
  result_in: [ResultType!]
  result_not_in: [ResultType!]
  AND: [RunWhereInput!]
  OR: [RunWhereInput!]
  NOT: [RunWhereInput!]
}

input RunWhereUniqueInput {
  id: ID
}

type Subscription {
  endpoint(where: EndpointSubscriptionWhereInput): EndpointSubscriptionPayload
  run(where: RunSubscriptionWhereInput): RunSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
  translator(where: TranslatorSubscriptionWhereInput): TranslatorSubscriptionPayload
}

type Test {
  id: ID!
  translator: Translator!
  request: String!
  expected: String!
  runs(where: RunWhereInput, orderBy: RunOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Run!]
}

type TestConnection {
  pageInfo: PageInfo!
  edges: [TestEdge]!
  aggregate: AggregateTest!
}

input TestCreateInput {
  id: ID
  translator: TranslatorCreateOneWithoutTestsInput!
  request: String!
  expected: String!
  runs: RunCreateManyWithoutTestInput
}

input TestCreateManyWithoutTranslatorInput {
  create: [TestCreateWithoutTranslatorInput!]
  connect: [TestWhereUniqueInput!]
}

input TestCreateOneWithoutRunsInput {
  create: TestCreateWithoutRunsInput
  connect: TestWhereUniqueInput
}

input TestCreateWithoutRunsInput {
  id: ID
  translator: TranslatorCreateOneWithoutTestsInput!
  request: String!
  expected: String!
}

input TestCreateWithoutTranslatorInput {
  id: ID
  request: String!
  expected: String!
  runs: RunCreateManyWithoutTestInput
}

type TestEdge {
  node: Test!
  cursor: String!
}

enum TestOrderByInput {
  id_ASC
  id_DESC
  request_ASC
  request_DESC
  expected_ASC
  expected_DESC
}

type TestPreviousValues {
  id: ID!
  request: String!
  expected: String!
}

input TestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  request: String
  request_not: String
  request_in: [String!]
  request_not_in: [String!]
  request_lt: String
  request_lte: String
  request_gt: String
  request_gte: String
  request_contains: String
  request_not_contains: String
  request_starts_with: String
  request_not_starts_with: String
  request_ends_with: String
  request_not_ends_with: String
  expected: String
  expected_not: String
  expected_in: [String!]
  expected_not_in: [String!]
  expected_lt: String
  expected_lte: String
  expected_gt: String
  expected_gte: String
  expected_contains: String
  expected_not_contains: String
  expected_starts_with: String
  expected_not_starts_with: String
  expected_ends_with: String
  expected_not_ends_with: String
  AND: [TestScalarWhereInput!]
  OR: [TestScalarWhereInput!]
  NOT: [TestScalarWhereInput!]
}

type TestSubscriptionPayload {
  mutation: MutationType!
  node: Test
  updatedFields: [String!]
  previousValues: TestPreviousValues
}

input TestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestWhereInput
  AND: [TestSubscriptionWhereInput!]
  OR: [TestSubscriptionWhereInput!]
  NOT: [TestSubscriptionWhereInput!]
}

input TestUpdateInput {
  translator: TranslatorUpdateOneRequiredWithoutTestsInput
  request: String
  expected: String
  runs: RunUpdateManyWithoutTestInput
}

input TestUpdateManyDataInput {
  request: String
  expected: String
}

input TestUpdateManyMutationInput {
  request: String
  expected: String
}

input TestUpdateManyWithoutTranslatorInput {
  create: [TestCreateWithoutTranslatorInput!]
  delete: [TestWhereUniqueInput!]
  connect: [TestWhereUniqueInput!]
  set: [TestWhereUniqueInput!]
  disconnect: [TestWhereUniqueInput!]
  update: [TestUpdateWithWhereUniqueWithoutTranslatorInput!]
  upsert: [TestUpsertWithWhereUniqueWithoutTranslatorInput!]
  deleteMany: [TestScalarWhereInput!]
  updateMany: [TestUpdateManyWithWhereNestedInput!]
}

input TestUpdateManyWithWhereNestedInput {
  where: TestScalarWhereInput!
  data: TestUpdateManyDataInput!
}

input TestUpdateOneRequiredWithoutRunsInput {
  create: TestCreateWithoutRunsInput
  update: TestUpdateWithoutRunsDataInput
  upsert: TestUpsertWithoutRunsInput
  connect: TestWhereUniqueInput
}

input TestUpdateWithoutRunsDataInput {
  translator: TranslatorUpdateOneRequiredWithoutTestsInput
  request: String
  expected: String
}

input TestUpdateWithoutTranslatorDataInput {
  request: String
  expected: String
  runs: RunUpdateManyWithoutTestInput
}

input TestUpdateWithWhereUniqueWithoutTranslatorInput {
  where: TestWhereUniqueInput!
  data: TestUpdateWithoutTranslatorDataInput!
}

input TestUpsertWithoutRunsInput {
  update: TestUpdateWithoutRunsDataInput!
  create: TestCreateWithoutRunsInput!
}

input TestUpsertWithWhereUniqueWithoutTranslatorInput {
  where: TestWhereUniqueInput!
  update: TestUpdateWithoutTranslatorDataInput!
  create: TestCreateWithoutTranslatorInput!
}

input TestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  translator: TranslatorWhereInput
  request: String
  request_not: String
  request_in: [String!]
  request_not_in: [String!]
  request_lt: String
  request_lte: String
  request_gt: String
  request_gte: String
  request_contains: String
  request_not_contains: String
  request_starts_with: String
  request_not_starts_with: String
  request_ends_with: String
  request_not_ends_with: String
  expected: String
  expected_not: String
  expected_in: [String!]
  expected_not_in: [String!]
  expected_lt: String
  expected_lte: String
  expected_gt: String
  expected_gte: String
  expected_contains: String
  expected_not_contains: String
  expected_starts_with: String
  expected_not_starts_with: String
  expected_ends_with: String
  expected_not_ends_with: String
  runs_every: RunWhereInput
  runs_some: RunWhereInput
  runs_none: RunWhereInput
  AND: [TestWhereInput!]
  OR: [TestWhereInput!]
  NOT: [TestWhereInput!]
}

input TestWhereUniqueInput {
  id: ID
}

type Translator {
  id: ID!
  endpoints(where: EndpointWhereInput, orderBy: EndpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Endpoint!]
  requestFunction: String
  responseFunction: String
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test!]
}

type TranslatorConnection {
  pageInfo: PageInfo!
  edges: [TranslatorEdge]!
  aggregate: AggregateTranslator!
}

input TranslatorCreateInput {
  id: ID
  endpoints: EndpointCreateManyWithoutTranslatorInput
  requestFunction: String
  responseFunction: String
  tests: TestCreateManyWithoutTranslatorInput
}

input TranslatorCreateOneWithoutEndpointsInput {
  create: TranslatorCreateWithoutEndpointsInput
  connect: TranslatorWhereUniqueInput
}

input TranslatorCreateOneWithoutTestsInput {
  create: TranslatorCreateWithoutTestsInput
  connect: TranslatorWhereUniqueInput
}

input TranslatorCreateWithoutEndpointsInput {
  id: ID
  requestFunction: String
  responseFunction: String
  tests: TestCreateManyWithoutTranslatorInput
}

input TranslatorCreateWithoutTestsInput {
  id: ID
  endpoints: EndpointCreateManyWithoutTranslatorInput
  requestFunction: String
  responseFunction: String
}

type TranslatorEdge {
  node: Translator!
  cursor: String!
}

enum TranslatorOrderByInput {
  id_ASC
  id_DESC
  requestFunction_ASC
  requestFunction_DESC
  responseFunction_ASC
  responseFunction_DESC
}

type TranslatorPreviousValues {
  id: ID!
  requestFunction: String
  responseFunction: String
}

type TranslatorSubscriptionPayload {
  mutation: MutationType!
  node: Translator
  updatedFields: [String!]
  previousValues: TranslatorPreviousValues
}

input TranslatorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TranslatorWhereInput
  AND: [TranslatorSubscriptionWhereInput!]
  OR: [TranslatorSubscriptionWhereInput!]
  NOT: [TranslatorSubscriptionWhereInput!]
}

input TranslatorUpdateInput {
  endpoints: EndpointUpdateManyWithoutTranslatorInput
  requestFunction: String
  responseFunction: String
  tests: TestUpdateManyWithoutTranslatorInput
}

input TranslatorUpdateManyMutationInput {
  requestFunction: String
  responseFunction: String
}

input TranslatorUpdateOneRequiredWithoutEndpointsInput {
  create: TranslatorCreateWithoutEndpointsInput
  update: TranslatorUpdateWithoutEndpointsDataInput
  upsert: TranslatorUpsertWithoutEndpointsInput
  connect: TranslatorWhereUniqueInput
}

input TranslatorUpdateOneRequiredWithoutTestsInput {
  create: TranslatorCreateWithoutTestsInput
  update: TranslatorUpdateWithoutTestsDataInput
  upsert: TranslatorUpsertWithoutTestsInput
  connect: TranslatorWhereUniqueInput
}

input TranslatorUpdateWithoutEndpointsDataInput {
  requestFunction: String
  responseFunction: String
  tests: TestUpdateManyWithoutTranslatorInput
}

input TranslatorUpdateWithoutTestsDataInput {
  endpoints: EndpointUpdateManyWithoutTranslatorInput
  requestFunction: String
  responseFunction: String
}

input TranslatorUpsertWithoutEndpointsInput {
  update: TranslatorUpdateWithoutEndpointsDataInput!
  create: TranslatorCreateWithoutEndpointsInput!
}

input TranslatorUpsertWithoutTestsInput {
  update: TranslatorUpdateWithoutTestsDataInput!
  create: TranslatorCreateWithoutTestsInput!
}

input TranslatorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  endpoints_every: EndpointWhereInput
  endpoints_some: EndpointWhereInput
  endpoints_none: EndpointWhereInput
  requestFunction: String
  requestFunction_not: String
  requestFunction_in: [String!]
  requestFunction_not_in: [String!]
  requestFunction_lt: String
  requestFunction_lte: String
  requestFunction_gt: String
  requestFunction_gte: String
  requestFunction_contains: String
  requestFunction_not_contains: String
  requestFunction_starts_with: String
  requestFunction_not_starts_with: String
  requestFunction_ends_with: String
  requestFunction_not_ends_with: String
  responseFunction: String
  responseFunction_not: String
  responseFunction_in: [String!]
  responseFunction_not_in: [String!]
  responseFunction_lt: String
  responseFunction_lte: String
  responseFunction_gt: String
  responseFunction_gte: String
  responseFunction_contains: String
  responseFunction_not_contains: String
  responseFunction_starts_with: String
  responseFunction_not_starts_with: String
  responseFunction_ends_with: String
  responseFunction_not_ends_with: String
  tests_every: TestWhereInput
  tests_some: TestWhereInput
  tests_none: TestWhereInput
  AND: [TranslatorWhereInput!]
  OR: [TranslatorWhereInput!]
  NOT: [TranslatorWhereInput!]
}

input TranslatorWhereUniqueInput {
  id: ID
}
`