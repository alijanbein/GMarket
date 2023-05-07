<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A mobile app for connecting farmers and customers to sell their products directly, without the need for a middleman. 
>
> Green Market is a great way to support local farmers and get fresh, high-quality produce at a lower price. If you're looking for a more convenient and affordable way to shop for food, then this app is a great option for you.

### User Stories
- As a Farmer, I want to post my  offer about my production, so that let me offer my production without going to the market.
- As a Farmer, I want to join auctions, so I can have the best price for my product.
- As a customer, I want to search for production to buy, so I can choise the best quality and price.

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed Green Market using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Home screen  | Profile screen |  AddPost screen |
| ---| ---| ---|
| ![Landing](./readme/demo/profile%20(3).png) | ![fsdaf](./readme/demo/home%20(2).png) | ![fsdaf](./readme/demo/addpost.png) |

### Mockups
| Complete Profile screen  | Login Screen | Auction Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/completeProfile.png) | ![fsdaf](./readme/demo/login.png) | ![fsdaf](./readme/demo/auction.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Green Market app with the following features:

### User Screens (Mobile)
| Welcome screen  | Login screen | Verification screen | Register screen |
| ---| ---| ---| ---|
| ![Landing](./readme/demo/w.jpg) | ![fsdaf](./readme/demo/p.jpg) | ![fsdaf](./readme/demo/v.jpg) | ![fsdaf](./readme/demo/edit_p.jpg) |
| Home screen  | Auction Screen | Profile Screen | Messages Screen |
| ![Landing](./readme/demo/home_s.jpg) | ![fsdaf](./readme/demo/a.jpg) | ![fsdaf](./readme/demo/profile_s.jpg) | ![fsdaf](./readme/demo/m.jpg) |

### Admin Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Coffee Express is built using the following technologies:

- This project uses the [React Native framework](https://reactnative.dev/). React Native apps can be built for multiple platforms, including Android, iOS, macOS, tvOS, Web, Windows and UWP. 
- For persistent storage (database), the app uses the [mongodb](https://www.mongodb.com/)  which allows the app to store all data in different schema 
and handler the big data insid the app
- To send SMS verification code, the app uses the [TWILIO](https://www.twilio.com/) Feature which allow the app to send messages via user phone number
  - 🚨 Currently, chatbot isn't helpfull because he is still learning. This is a known issue that we are working to resolve!
- The app uses the font ["Noto Serif Tamil"](https://fonts.google.com/noto/specimen/Noto+Serif?query=not+serif+tamil) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Green Market locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/ALINJFSw/GMarket.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `constant.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Green Market locally and explore its features.