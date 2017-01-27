# Webbapplication Development - Final Project
......................
# By Christian Ahlsén
======================
### School: Lernia
### Program: Frontend-Javascript Developer
### Course: Webbapplication development

****

## Purpose and functionality of the finished product

I've made a music news blog where you can search for random news of an artist and then - if you feel like it - listen to a preview
sample of a song from an album by searching the Spotify API.
I've spent a lot of time on the details to make it feel like a genuine product.
****

## A short description of the process

Before i began making this app i gathered reference material, in this case i looked a lot at various music blogs to get a feel for how they were built. Initially i tried to stick to the progressive enhancement design philosophy(with a mobile first mind-set), building a stable experience for small devices first and gradually introduce more advanced features, but somewhere along the way i noticed that i diverged from this path, rather adopting the graceful degradation way of thinking. This lead me to rewrite a lot of code.

I used Bootstrap and custom CSS to style the page, mostly vanilla Javascript for DOM-manipulation and jQuery for effects and Ajax calls.
The Api:s i've used in this project is the [Webhose Api](https://webhose.io/web-search-api) to get the news information, the [Last FM](http://www.last.fm/api) and [Spotify Api](https://developer.spotify.com/web-api/):s for pictures, biographys and music.
****
##Technologies
The technologies used in this course are: 

1. HTML5 

2. CSS 

3. Javascript 

4. jQuery 

5. Ajax

6. JSON

7. Bootstrap 3

****
### Things i could've done better 
If I could've found a more suitable API for finding artist related news I would have used that instead of the Webhose API.
Eventhough it has many filter settings i couldn't get it to filter enough to just find artist news.

I also could've handled the response from the Webhose API better so that if you just searched for something totally unrelated,
an error message would be displayed to the user.

I could've simplified the generateNewsPost.js file and split up the code into methods and properties, for readability and to be more maintainable.
****
### The good

I've used promise objects for the responses so that if the Api request fails, error handling is a lot easier.

I've minified the javascript and css files in order for the page to load faster

I've tried to split up the code into objects so that the variables and methods don't directly belong to the global window object.
****
[Reach me on linkedin](https://www.linkedin.com/in/christian-fujimaki-ahlsen-77701766?trk=nav_responsive_tab_profile)

[The project is live here](https://aknotofknots.github.io/Webbapplikationsutveckling-slutprojekt/)

# Contributions to project
[github user: mow-github](https://github.com/mow-github)
