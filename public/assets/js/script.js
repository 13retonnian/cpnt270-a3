"use strict";
const gabFeed = document.querySelector(".gab-feed");
//code loops through castles object pulling out objects one by one and outputting the required data to the HTML
let i = 0;
const gabOutput = function() {  
  gabFeed.innerHTML += `
    <figcaption>    
      <h2>${feed[i].title}</h2>   
      <h2>${feed[i].content}</h2>
    </figcaption>`;
  i++;
}
gabFeed.forEach(gabOutput);




// 5. Secure API token/key - 10 points
// Points given for not displaying API key or token in public source code.
// You may use a method of your choice to do this, such as:
// A proxy endpoint created in Node or a serverless function.
// Calling the API during the build process of a framework such as Eleventy or Nuxt.
// In your README, include details of how you secured your API, along with links to relevant documentation.