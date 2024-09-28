# Hacker News Clone

<p align="center">
  <img src="./public/Screenshot from 2024-09-28 02-54-15.png" title="hover text">
</p>


[Demo Video](https://drive.google.com/file/d/1jZd4h85VwI7T2_JA22J7lsvVhVPnGguE/view?usp=drive_link) 

[1hr Coding Video](https://drive.google.com/file/d/1w31wuaSL4L0xym17rqvvZ7EnR4pHSsqw/view?usp=drive_link)


## Overview

This project is a clone of Hacker News built using **React**, **TypeScript**, and **Tailwind CSS**. The aim was to replicate the core functionalities of Hacker News while learning to make quick decisions in the development process.

## Features Implemented

- **Header with Logo**: A clean header that includes the logo for brand identity.
- **News Feed**: Displaying all items in a grid layout, matching the UI and styling of the original Hacker News.
- **Responsive Design**: Utilized Tailwind CSS for its flexibility in inline css styling.

## Getting Started

To run the application, follow these steps:

1. Install the required packages:
   ```bash
   npm install
2. Start the development server:
      ```bash
   npm run dev

### Limitations of the Implementation

- **Interactivity**: The application lacks full interactive capabilities, such as upvoting articles and navigating through top nav buttons.

- **URL Abbreviation Logic**: The abbreviation of URL was challenging as I had to brainstorm before implementing the function. There are few exceptions where the website shows the first directory name of github.com website and others it does not show. I also observed that it renders upto 3rd level domain. Since I do not have the mappings of which website to show the first directory I just implemented it for github.com and also removed www. from the URL string. 

- **Type Checking**: Although I usually use Zod for type validation while fetching the data in TypeScript, I opted to forego this due to time constraints.

