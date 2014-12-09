angularshopcart
===============

Angular Shopping Cart with Credit Card Processing

Based off: http://www.codeproject.com/Articles/576246/A-Shopping-Cart-Application-Built-with-AngularJS

The above project was the base for this one. It goes a lot more in depth into each function and how they apply.

This was my extension of the project, it has some extra features and tweaks:

1) Instead of using a DataService factory for all of our router controllers and JavaScript logic, I created controllers for the unique pages to be used. They're passed the DataService which simply contains the shopping cart JavaScript object.

2) sessionStorage is used instead of localStorage for cart items (http://www.w3schools.com/html/html5_webstorage.asp).

3) ccsubmit.js/.htm is used for credit card checkout. This leverages angular-payments (https://github.com/laurihy/angular-payments) to detect card types, format, and validate forms based off input. There are credit card images that are shown depending on the credit card number input.

4) Angular Library was updated to 1.2.16 in order support the ng-currency directive (https://github.com/aguirrel/ng-currency). This meant ngRoute was no longer included in the library as a default and also had to be brought in as an outside directive (https://github.com/angular/angular.js/tree/master/src/ngRoute)

5) 2) I had a requirement to implement the cart on IE8+. This meant getting angular-payments and the angular library playing well with IE8. They both leverage Array prototypes such as forEach and indexOf. These had to be shimmed in using modernizr and yepnope. (http://modernizr.com/, and https://github.com/es-shims/es5-shim for the shims).

If you have any questions don't hesitate to ask,


Thanks!
