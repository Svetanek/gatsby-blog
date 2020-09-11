---
title: "Capstone project KnowNYC"
date: "2019-07-17"
description: "group project"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-BfZi9GQ_qc?start=63" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Github link](https://github.com/lima-dove/KnowNYC)

KnowNYC began as a member of our team was apartment searching after finding out too late about all the chronic issues his current building suffered. Had there only been an easy map that layed out all the most common problems in each building, they might have never moved to that
building in the first place!

KnowNYC allows users to explore a virtual map of Manhattan and visualize 311 calls by neighborhood and address. Users can see the top five complaints within a neighborhood and can zoom in to individual addresses and see its entire 311 history, including call date, complaint type, descriptor, and resolution description. There is an option to add own (unofficial)complaints and sign up and set a home address. If any new complaints appear on that user's address, the notification will be send to user's email.

This project used Sequelize, Mapbox, D3.js, Firebase, React, Express.JS, and Node technologies. The data came from two APIs: NYC Open Data and ArcGIS Hub.
System design and database management played an integral part in app development since the entire 311 database for NYC, spanning 9 years, is 11GB. Selecting for relevance and storing the values of expensive calculations in the database, the data was reduced from 21 million+ to 1,177,451 data points and the map render speed was optimized.

Team Members: Noah Schefer, Svetlana Shinkar, Daniel Wasserman and Jennifer Scheinhorn.
