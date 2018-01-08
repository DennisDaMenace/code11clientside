# code11clientside
Code 11 service side functionality

# Project Name

**Author**: Dennis - Aaron - Ayanle
**Version**: 1.0.0 Set up client side scaffold, added on-click (submit) button  and added server.js file

1.5.0 Added html files to book.js, added constant cors, added functionality for posting,updating, and deleting

## Overview
We are attempting to implement a basic full stack application for a book list which will render books from a PostgreSQL database. Our company is building two sides of the full stack (client/server side)to store books lists in a database. A user will be able to  make a request to the server for retrieval of all books, which will then be rendered as a list in the browser (from client side).


## Getting Started - Client Side
1. Set up the client side scaffold - by adding the package.json and all necessary dependencies
2. Setting up client server side and listening functions
3. Setting up client functions in server.js to get the data and manipulate newBook and updateBook.html

## Architecture
We had to ensure we added the following dependencies to our server.js:
 "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "fs": "0.0.1-security",
    "pg": "^6.4.2"
Added 404, newBook and updateBook.html files to render client side information from databased

## Change Log
01-07-2018 1:40 pm aaron - connected html files to book.js, added const cors
01-07-2018 3:40 pm aaron - added functionality for posting/updating/deleting/

