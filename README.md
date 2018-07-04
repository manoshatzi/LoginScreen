# Login Screen

This is a project with a login screen. There are 2 implementations of the screen one with HTML/CSS/JS and one other with a Node.js server.

## 1. HTML/CSS/JS
This is a simple template with js actions for the form. The credentials are static (admin/password123) and you can change them in the file
[main.js](js/main.js)

For the HTML template has been used the [HTML5 Boilerplate](https://html5boilerplate.com/)

The styling file (.css) has been created with the SASS extension of CSS.

The javascript file has been minify but you can find the unminified version too.

## 2. Node.js Version
The Node.js version is in the [node folder](node).
You need the [Node Express](https://expressjs.com/) extension to be installed and also the [CORS](https://www.npmjs.com/package/cors) to avoid the cors issue in your local browser.

To run that version you have to go inside node folder from your cli and run `node server.js` 