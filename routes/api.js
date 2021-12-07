const express = require('express')
const app = express()
const router = express.Router();
//connect to Gab
const gabDB = require('../model/db')
const mongoose = require('mongoose');
const { response } = require('express');
const dotenv = require('dotenv').config()
/*
 * Initialize the Gab API module
 */
const gabapi = require('gab-api')({
    clientId: '########-####-####-####-############',
    clientSecret: '########################################',
    getUserIdFromRequest: (req) => {
      return req.user._id;
    },
    getUserAccessToken: (userId) => {
      module.log.debug('getGabAccessToken', { userId: userId });
      return GabAccessToken
      .findOne({ user: userId })
      .lean()
      .then((tokenObject) => {
        return module.gabapi.verifyAccessToken(userId, tokenObject);
      });
    },
    saveUserAccessToken: (userId, accessToken) => {
      return GabAccessToken
      .updateOne(
        { user: userId },
        {
          $set: {
            accessToken: accessToken
          }
        },
        {
          upsert: true
        }
      );
    },
});

gabapi
.getUserFeed(req, 'realdonaldtrump', 0)
.then((feed) => {
  console.log('user feed', feed);
})
.catch((error) => {
  console.log('Gab.com API error', error);
});

module.exports = router