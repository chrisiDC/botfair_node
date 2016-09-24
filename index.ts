/// <reference path="typings/index.d.ts" />

let http = require("http");
let unirest = require('unirest');

unirest.post('https://identitysso.betfair.com/api/login')
 /*   .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})*/
    .send({ "username": 23, "password": "bar" })
    .end(function (response) {
        console.log(response.body);
    });
