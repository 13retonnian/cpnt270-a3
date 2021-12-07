# DSGN 270 Assignment 3
# Christopher Barber

### !!THIS ASSIGNMENT DOES NOT WORK!!
This assignment doesn't work because I couldn't get an API key because I need Gab pro (couldn't pay for it(country restrictions)) but I built it as if I had the key.

## User Story

**As a**

> * Republican Party politician

**I want**

> * My website to show Donald Trump's social media posts

**So that**

> * I can increase my popularity with Donald Trump supporters

### Summary of the Market Problem

The target market for this integration is Republican Party politicians with websites. Republican politicians who are looking to be elected will sometimes show their allegiance to Donald Trump in order to gain his large base of voters or demonstrate that they have the same policies. This integration will help a client and users to see Donald Trump's social media posts while not having to sign up or visit Gab themselves. Donald Trump was one of the most popular Tweeters on Twitter with 80 million followers before his account was banned. He now only has 2.2 million followers on Gab. This number discrepency displays the possibility that many clients may want to see the social media posts but haven't signed up for Gab. This integration will help clients to see his posts again and will likely bring more viewers to a Republican party member's website which may increase their popularity.

## Test account with sample content

#### Social Media Tool Selected:
Gab
#### Account:
13retonnianGab
13retonnian+Gab@Protonmail.com
https://gab.com/13retonnianGab - 3 Trump posts are here

#### Task Flow Instructions:

1. User enters the website.
2. User clicks to add their own post.
3. User types in what they would like to post in the text box.
4. User clicks submit.

### Problems encountered
- can't use API because I need a Gab pro account. Can only pay for Gab pro if inside USA.

#### Attributions:
(Gab developers Gab)[https://gab.com/developers]
Attributions to Tony Grimes and Ashlyn Knox's classes and code from SAIT. (They have no part in the idea to use Trump's Gab for this assignment.)
MIT License

### API Documentation
#### General Usage:
https://code.gab.com/gab/hydra/hydra-modules/gab-api

#### Rate limits
#### Authentication methods
router.get('/connect-gab', gabapi.authorize);
#### Creating a token
#### Endpoint Reference
Retrieves a list of posts from Donald Trump's feed:
gabapi
.getUserFeed(req, 'realdonaldtrump', 0)
.then((feed) => {
  console.log('user feed', feed);
})
.catch((error) => {
  console.log('Gab.com API error', error);
});


<!-- 5 points: In the project README, include relevant links from the Developer API Documentation:
General Usage
Rate limits
Authentication methods
Creating a token
Endpoint Reference -->

<!-- 
Create a public web page that displays social content in a way that supports your User Story.

To be included in the project README. Define instructions as a Task Flow for the potential client to test the integration. For example:

Go to web page and take note of the current content.
content can be displayed using an embed strategy offered by the social tool.
Log into social tool (include creds in brightspace comment).
Make a change or add a new post in social tool admin.
Refresh output page to confirm content has changed.
Further notes:

Attempts should be made to extend the functionality beyond any examples covered in class. In other words, don't just copy what your instructor did.
Points given for unique use of the tool that goes beyond simply displaying content. For example:
Content only displayed when a particular hashtag is present in description.
Displaying content that is added to a particular collection.
Displaying a list with pagination.
Task can be to create a new post (i.e. new "daily special" OR edit the existing content in some significant way that supports the User Story (i.e. label an existing post as "featured" to change the output of the integration).
One of the three non-lorem posts may be used as sample content for the client to use to create a new post.
Include relevant supporting links from the user documentation of the social tool you've chosen (i.e. "How to create an Instagram Post" from the IG website).
Your instructor will follow these instructions to mark this assignment so be clear and concise. -->