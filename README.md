# README - Server Side

# Card Management Server

This project is part of the Hadassim Full Stack course. The server is built with Node.js and Express, handling card data management, including getting, get by id, adding, updating and deleting for prioritized cards.

# Table of Contents:

- Prerequisites
- Installation and Setup
- Project Description
- Example API Calls
- Repository Links

# Prerequisites:

Node.js
NPM (comes with Node.js)
nodemon

# Installation and Setup:

- Clone the repository:
`git clone https://github.com/RacheliShayzada/cards-project-back.git`
`cd server`
- Install dependencies:
`npm install`
- Start the server:
`npm start`

By default, the server will run on http://localhost:3000. You can configure the port in the index.js file.

# Project Description:

The server provides a RESTful API for managing card information. Key functionalities include:

Get all cards: get all cards information.
Get card by id: get card information by id.
Create a card: Add a new card with color and text.
Update card: Edit text or color of a specific card.
Delete a card: Remove a card permanently.

# Example API Calls:

Here are some example API calls you can use with a tool like Postman or directly through the client:

GET /cards: Retrieve all cards.
GET /cards/1: get information of card with id: 1.
POST /cards: Add a new card with a JSON body, e.g., { "text": "New Card", "color": "khaki" }.
PATCH /cards/: Update card fields (e.g., color or text) by ID.
DELETE /cards/1: Delete a card by ID: 1.

# Repository Links:

Client Side Repository: https://github.com/RacheliShayzada/card-project-front.git