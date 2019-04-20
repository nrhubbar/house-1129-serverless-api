'use strict';

module.exports.getUsers = async (event) => {
  //TODO: Get email from event more safely
  let email = event.requestContext.authorizer.claims.email;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `You got a user with email ${email}`,
    }),
  };
};
