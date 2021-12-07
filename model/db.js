const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GabAccessTokenSchema = new Schema({
  user: { type: Schema.ObjectId, required: true, index: true, ref: 'User' },
  accessToken: {
    token_type: { type: String },
    expires_in: { type: Number },
    expires_at: { type: Date },
    access_token: { type: String },
    refresh_token: { type: String }
  }
});

mongoose.model('GabAccessToken', GabAccessTokenSchema);
