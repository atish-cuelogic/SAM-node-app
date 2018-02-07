'use strict';

exports.handler = (event, context, callback) => {

    callback(null, {
        statusCode: '200',
        body: '{"message" : "Hello World"}',
        headers: {
            'Content-Type': 'application/json',
        },
    });

};