const resolvers = {
  Query: {
    //returns array of tracks that will be used to populate
    //the homepage grid of web client
    //This below is a resolver function
    tracksForHome: (parent, args, context, info) => {},
  },
};
module.exports = resolvers;
