'use strict';

var AWS = require("aws-sdk");

exports.handler = (event, context, callback) => {

	var sns = new AWS.SNS();
    var params = {
        Message: "eventText testing", 
        Subject: "Test SNS From Lambda",
        TopicArn: process.env.topicARN
    };
    sns.publish(params, context.done);

    callback(null, {
        statusCode: '200',
        body: '{"message" : "Hello World"}',
        headers: {
            'Content-Type': 'application/json',
        },
    });

};