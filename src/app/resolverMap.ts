import { IResolvers } from "graphql-tools";

const resolverMap: IResolvers = {
  Query: {
    helloWorld(parent, args): string {
      return `👋 Hello world! 👋`;
    }
  }
};
export default resolverMap;
