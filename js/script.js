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

const gabFeed = document.querySelector(".gab-feed");
gabFeed.innerHTML = feed

// 4. Custom Branding using an API endpoint - 10 points
// 5 points: Output content from a Developer API to show that content can be displayed with a custom design and brand colours.
// 5 points: In the project README, include relevant links from the Developer API Documentation:
// General Usage
// Rate limits
// Authentication methods
// Creating a token
// Endpoint Reference
// 5. Secure API token/key - 10 points
// Points given for not displaying API key or token in public source code.
// You may use a method of your choice to do this, such as:
// A proxy endpoint created in Node or a serverless function.
// Calling the API during the build process of a framework such as Eleventy or Nuxt.
// In your README, include details of how you secured your API, along with links to relevant documentation.