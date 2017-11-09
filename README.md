## __ISSUES WITH DESIGN__
* These issues seem to stem from the way that the info is centered on the top image.
    * Possible solution: Make the  `FoodForCause` text at the top a permanent part of the img, or fixed position, and then have the rest of the stuff centered in the remaining space.
    * __OCT.21:__ Perhaps remove the bio section at the bottom of every page and add an `about us` page with the pics/bio, also add a link for bug reporting, and a problems/soution/detailed description of the site (it should match the readme, and there is a sectiona about that below).
    * add.html
        * top of page is cut off, can't see 'food for cause' title
    * available.html
        * The papge starts further down than 'view.html' ... maybe an extra div?
* __Oct.21:__ Here is a screen shot that illustrate the following:
    * The Food For Cause title and the menu bar are not fixed, and they get pushed up and cut off when there are more than a few results (a problem on all pages)
    * The search results overflow and break the page style

## Nice To Have:
* __Oct. 21:__
    * Calculate remaining time until items expire, and display it use it for twilio / tweets
    * Allow users to reserve a certain amount (lbs.) of an item
        * Display the remaining amount of goods
* https://www.twilio.com/
    * Send Texts for notifications about specific items
* Tweets to notify of available items that will expire soon
* Connect on FB/ IG..?
* Authentication
    * Reestablish (Disabled for ease of Presentation)
* Testing

# FoodForCause

## What does Food For Cause do for the community?

### Problem
* Kansas City does not have a resource to connect food suppliers and organizations that provide food stuffs to the community.

* Many grocery stores, and restaurants throw away food that could go to good use.
    * Some of these items will expire soon.
    * Others items may have damaged packaging or other small defects that do not affect the quality of the product, but the store is still unable to sell the items.
* Food banks and Kitchens provide a valuable service: feeding people in our community that need assistance and sustenance.
* A large amount of food is unnecessarily wasted.
* Our community needs food assistance programs to thrive and care for those in need.

### Solution
* Food For Cause provides a platform to connect local community outreach programs, like food banks and kitchens, with companies that have food to donate.
* This will help to reduce food waste, put the food to good use, and strengthen the community.

### How Does it work?
* Grocery Stores, restaurants, and other businesses login and then post their available food items (including quantity, and expiration date).
* Food banks, and kitchens may reserve and pick up items.
* Unreserved items that are nearing expiration will be tweeted and text (SMS) to let the community know about their availability.

### What powers FoodForCause?
* Node/ Express
* MySQL
* Heroku
* Passport.js User Authentication