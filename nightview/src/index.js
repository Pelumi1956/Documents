import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {books} from './books';
import Book from "./Book";

const BookList = () => { 
  return (
    <>
    <h1>amazon best sellers</h1>
    <section className='booklist'>
      {books.map((book,index) => {
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greetings></Greetings>)
root.render(<BookList />)




















// ```start
// function Greating() {
//   return (
//     <>
//       <div>
//         {/* <h2>My First Component</h2> */}
//         <h3>hello people!</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// or

// function Greating() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
// ```

// NOTE: if there is no parentices after the return, u must make sure ur opening is on the same line as the return

//``` First Component in Detail

// function Greating() {
//   return React.createElement('h2', {}, 'Hello world!');
// }
// ```
