'use strict';

module.exports.updateUsers = async (event) => {

    return {
        statusCode: 200,
        body: {
            message: "You updated this user.",
            user: {
                propertyId: event.body.propertyId,
                role: event.body.role,
                email: event.body.email,
                stripeId: event.body.stripeId,
                userId: event.body.userId,
            },
        },
    };
};