<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

Find the Content Useful? [You can always buy me a coffey](https://www.buymecoffee.com/johnsmilga)

#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in the package.json

- public
  Contains static assets including index.html(page template).
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the javaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependencies tree

- README
  The markdown file where you can share more info about the project for example build instruction and summary

- zoom 175%

  #### Remove Boilerplate

- remove src folder
- create src folder
  - create index.js inside src
- toggle sidebar CMD + B
- shortcuts settings/keyboard shortcuts

#### First Component

```js
function Greeting() {
  return <h2>My First Component</h2>;
}

// arrow function also works

const Greeting = () => {
  return <h2>My First Component</h2>;
};
```

- starts with capital letter
- must return jsx (html)
- always close tag <Greeting/>

##### Typical Component

```js
// imports or logic

const Greeting = () => {
  return <h2>my first component</h2>;
};
export default Greeting;
```

##### Root Component (only one) for my js entry point

index.js

```js
import React from "react";
import ReactDOM from "react-down/client";

function Greeting() {
  return <h2>My First Component</h2>;
}

const root = ReactionDom.creatRoot(document.getElementByid("root"));

root.render(<Greeting />);
```

#### Extension and settings.json

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier
  - format on the save
  - format on the paste
  - default formatter (prittier - code formatter)

settings.json

```json (this can search for them on the settings or add them directly on the json file)
"editor.formatOnPaster"; true,
"editor.formatOnSave"; true,
"editor.defaultFormatter"; "esbenp.prettier-version",
  "prettier.singleQuote"; true,
  "pretier.semi"; false,
```

- Emmet

settings.json

```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
},
```

- ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export )
  - same as the file name
  - react auto import
    - uncheck
    - React snippets > settings: import react on top

#### First Component in Detail

- capital letter
- must return something
- JSX syntax (return html)
  - to make our lives easier
  - calling function under the hood

index.js

```js
const Greeting = () => {
  return React.createElement("h2", {}, "hello world");
};
```

```js
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

const Greeting = () => {
  return React.creatElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};
```

#### JSX Rules

- return single element

  - semantics section/article
  - fragment - let's us group element without adding extra nodes

```js
return <React.Fragment>...rest of the return </React.Fragment>;

// shorthand

return <>...rest on the return</>;
```

- camelCase property naming convention

```js
return (
  <div tabaindex={1}>
    <button onClick={myFunction}>Click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
     <button onclick="myfunction()">Click me</button>
     <label for='name'>Name</label>
     <input raedonly id='name'>
</div>
```

- className='' instead of class=""

```js
return <div className="someValue">hello</div>;
```

- close every element

```js
return <img />;
// or
return <input />;
```

- formating
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <div>
      <div className="someValue">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
// "()" it help us to be able to break our code to the second line and will still show on our page but without parentices it will not show on the page
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```

#### React Developer Tools

- top right corneer
- more tools/extensions
- open chrome web store

- setup structure amazon

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList = () => {
  return <section>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <h2>image placeholder</h2>
const Title = () => <h2>Title of the Book</h2>
const Author = () => {
  return <h4>Author</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greatings></Greatings>)
root.render(<BookList />);
```

- in search engine type - 'amazon best selling books'
  [Amazon Best Sellers] (https://www.amazon.com/Best-Sellers-Books/zgbs/books/)
- DON'T NEED TO BUY ANYTHING !!!
- NOT AN AFFILIATE LINK !!!!
- choose a book
- copy image (copy image address), title and author

```js
import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/81o-PyNHxbL._AC_UL600_SR600,400_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);
const Title = () => <h2>Interesting Facts For Curious Minds</h2>;
const Author = () => {
  return <h4>Jordan Moore</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greatings></Greatings>)
root.render(<BookList />);
```

#### CSS

- create index.css in src

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f1f5f8;
  color: #222;
}
```

-import file and add classes

```js
- import './index.css';

function Booklist() {
  return <section className='booklist'>
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}
```

- complete css

```css
.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.book img {
  width: 100%;
  object-fit: cover;
}
/* this make the image fit in the page no matter how the small the page is */

.book h2 {
  margin-top: 1rem;
  font-size: 1rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
/* the @media (grid-tem) will make the <Book> form into three books per column when the page is more than 768px min-width */
```

#### Local Images (Public Folder)

- Optical Video !!!

- external images (hosted on different server) - just need an url
- local images (public folder) - less performant
- local images (src folder) - better solution for assets, since under the hood they get optimized.

- save image (Save Image As....)
- create images folder in public
- copy/paste image
- rename (optional)
- replace url in the src - './images/imageName.extension'
- './' because assets are on the same server

```js
const Image = () => (
    img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
);
```

- whatever assets we place in the public - instantly available
- domain(loacalhost)/asset

#### JSX - CSS (inline style)

- style prop
- {} in JSX means going back to JS Land
- value is an object with key/value pairs - capitalized and with ''

```js
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75", marginTop: "0.5rem" }}>
    Joredan Moore
  </h4>
);
```

- css rules still apply (inline vs external css)

```css
.book h4 {
  /* won't work */
  color: red;
  /* will work */
  letter-spacing: 2px;
}
```

- external libraries use inline css,
  so if you want to make some changes,
  reference the library docs and element tab

- alternative option

```js
const Author = () => {
  const inlineHeadingStyle = {
    color: "#617d98",
    fontSize: "0.75",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyle}>Jordan Moore</h4>;
};
```

- FOR THE MOST PART, MULTIPLE APPROACHES AVAILABLE !!!
- AS LONG AS THE RESULT IS THE SAME, REALLY COMES DOWN TO PREFERENCE !!!!

#### JSX - Javascript

- refactor to single book component (personal preference)
- remove inline css

```js
const Book = () => {
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>Interesting Facts For Curious Minds</h2>
      <h4>Jordan Moore</h4>
    </article>
  );
};
```

```css
.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  letter-spacing: 2px;
}
```

- {} in JSX means going back to JS Land
- value inside must be an expression (return value), can't be a ststement

```js
const author = "Jordan Moore";
const Book = () => {
  const title = "Interesting Facts For Curious Minds";
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6} */}
      <p>{6 + 6}</p>
    </article>
  );
};
```

#### Props - Initial Setup

- refactor/clean up

```js
const autor = 'Jordan Moore';
const title =  'Interesting Facts For Curious Minds';
const img = './images/book-1.jpg';

function BookList() {
  return (
    <section className='booklist'>
    <Book />
    <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className='book'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    </article>
  );
};
```

```js
// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
//  arguments
someFunc ('job', 'developer');
```

```js
const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{props.job}</p>  
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};
```

#### Props - Somewhat Dynamic Setup

- setup an object 
- refactor vars to properties
- copy/paste and rename
- get values for second
