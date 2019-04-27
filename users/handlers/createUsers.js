'use strict';

module.exports.createUsers = async (event) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "You created this user.",
            user: {
                propertyId: Math.random() * 1000,
                role: event.body.role,
                email: event.body.email,
                stripeId: Math.random() * 1000,
                userId: Math.random() * 1000,
            },
        }),
    };
};