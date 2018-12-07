# AppyHour
A web application that lets a user select a drink :beer: or appetizer "deal of the day", to be redeemed the following day.  

## Technologies Used
* Express API
* RESTful Routing
* AJAX
* jQuery
* MongoDB
* Javascript
* Node.JS

## Existing Functionality
A user starts on a landing page, which shows a sign up and login button. The user signs up or logs in, and is taken to a page where they choose between getting a drink or appetizer. Once chosen, the page populates with the images and titles of the items. On click of the image, a description of the item and a "Reserve Now" button populate. Once the "Reserve Button" is clicked, an order is created for the user, and a voucher code appears. If the user changes their mind, they can click a link to delete their order.

## Fun Lines of Code
* Creating a date for the next day

```
var today = new Date()
var tomorrow = new Date((new Date()).valueOf() + 1000*3600*24)

```

