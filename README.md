# Na Zdrowie Restaurant V2 🍽️
<p align="center">
My older version of the the project: <br>
-> https://github.com/MathieuKruk/NaZdrowie-Restaurant-V1 <-
</p>

## ◾ Features

<ul>
  <li>Na Zdrowie is a static website made for a fictional restaurant.</li>
  <li>It tries to provide a better visibility and increase the communication</li>
</ul>

<hr>

<p align="center">
  <img src="screenshoots/mountain3.jpg">
</p>

<hr>

## ◾ Motivation

It has been launch the 💠06/09/2019💠 in the case of a school project (<a href="https://github.com/becodeorg" target="_blank">BeCode</a>).

Below, you will find our guidelines hosted on the school repo: 
▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️

== Missions objectives

At the end of this challenge you should have improved your:

* placement of element with *Bootstrap*


== The mission

Create a repository called _restaurant-css-framework_ in which you must realise
a window web page for a restaurant. The franchise is fictive, but the type of
food (burger, pizza, asian, ...) is your choice.

The website must be *responsive*, at least for small and medium screens. It must
at least have five accessible pages: welcome, menu, pictures, restaurants and
contact.

.Welcome
A page with one _Jumbotron_ and two panels to show news (promo, events, etc...).

.Menu
A page with the restaurant menu in the form of a grouped list with badges.

.Pictures
A page with a gallery of minimum 10 pictures and a pagination (3 photos per
page).

.Restaurant
A page about the restaurants (it's a franchise) with its addresses, a map, and
different schedules.

.Contact
A page with a contact form containing the firstname, lastname, email, subject of
the message (a drop-down list with multiple options), an area for the message
itself and a send button with an icon. Each entry as a title in a semantically
correct tag.

If you want to make an even more complex website feel free to try new things and
make it as beautiful as possible.

=== Instructions
* create the repository
* write a good *README*
* don't use a pre-made theme
* mention a description and the website URL on the top of the repo
* use ONLY royalty-free pictures AND credit in your readme the website where the pictures are from

=== Advices

. Read the instructions well.
. Take time to prepare (prototype, content, pictures, ...).
. Go step by step, *HTML*, then *classes* and *id* and finally *CSS*.

=== Optional

* use *SASS*

=== Resources

* https://tinyurl.com/y2nlxere[README]
* http://glyphicons.com/[glyphicons]

▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️

<hr>

## ◾ Tasks

- [x] Initialize the ReadMe and the trello.
- [x] First static version of the website.
- [ ] Launch the app.

ℹ️ For further informations, please make sure to visit my **Trello** [board](https://trello.com/b/wkDPM6CS/na-zdrowie-restaurant) (only in french).

<hr>

## ◾ Build status

📲 V2.0.1
Logs
   - Added a Dialogflow Chatbot.
   - Switched the website on React tech.
   - Added React-Bootstrap package.
   - Finished the website design with bootstrap and sass.
   - Fixed the responsive behavior of the google map.
   - ...

<hr>

## ◾ Screenshots

### Homepage
<p align="center">
  <img src="screenshoots/homepage.png">
</p>

<hr>

## ◾ Tech/framework used

1. Front-end
   - [React](https://reactjs.org/)
   - [React-Bootstrap](https://react-bootstrap.github.io/)
   - [Sass](https://sass-lang.com/)
   - [Font Awesome 4.7](https://fontawesome.com/v4.7.0/)
   
2. Back-end
   - [Node.js](https://nodejs.org/en/)
   
3. Others
   - [Dialogflow](https://dialogflow.com/)

<hr>

## ◾ Code Example

### React router
```
<BrowserRouter>
 <NavigationBar changeRoute={this.changeRouteHandler.bind(this)} />
  <JumbotronHeader pathname={this.state.pathname} /> 
   <Switch>
       <Redirect from="/" to="/home" exact/>
       <Route path="/home" component={Home} exact/>
       <Route path="/Menus" component={Menus}/>
       <Route path="/Gallery" component={Gallery}/>
       <Route path="/About" component={About}/>
       <Route path="/Contact" component={Contact}/>
     <Route component={Error}/>
   </Switch>
  <Chatbot />
 <Footer /> 
</BrowserRouter>
```

<hr>

## ◾ Credits

[Mathieu Kruk](https://github.com/MathieuKruk)

Special thanks to:
- [Phil](https://github.com/philesgilles), for helping me setting up the react router and implement the history function.
<hr>

## ◾ License

OpenSource | Free

<hr>

✍️ Readme Author: Mathieu Kruk 
<p align="left">
  <img src="https://media.giphy.com/media/114NEaW5Q5Gikw/giphy.gif">
</p>
