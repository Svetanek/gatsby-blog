---
title: "capstone-KnowNYC"
date: "2020-09-07"
description: "group project"
---

KnowNYC allows users to explore a virtual map of Manhattan and visualize 311 calls by neighborhood and address. Users can see the top five complaints within a neighborhood and can zoom in to individual addresses and see its entire 311 history, including call date, complaint type, descriptor, and resolution description.

This project used Sequelize, Mapbox, D3.js, Firebase, React, Express.JS, and Node technologies. The data came from two APIs: NYC Open Data and ArcGIS Hub.
System design and database management played an integral part in app development since the entire 311 database for NYC, spanning 9 years, is 11GB. Selecting for relevance and storing the values of expensive calculations in the database, the data was reduced from 21 million+ to 1,177,451 data points and the map render speed was optimized.

Team Members: Noah Schefer, Svetlana Shinkar, Daniel Wasserman and Jennifer Scheinhorn.

[Github link](https://github.com/lima-dove/KnowNYC)

<iframe width="560" height="315" src="https://www.youtube.com/embed/-BfZi9GQ_qc?start=63" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
