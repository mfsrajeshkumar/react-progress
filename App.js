/*
 * <div id="parent">
        <div id="child">
            <h1> I am h1 tag </h1>
        </div>
   </div>
 * 
   ReactElement(Object)  ==> HTML (Browser understands)
 */

const parent = React.createElement(
    "div", {id: "parent"}, [
        React.createElement(
        "div", {id:"child"},
        [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
        ]
    ),
    React.createElement(
        "div", {id:"child2"},
        [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
        ]
    )
    ]
);





const heading = React.createElement("h1", {id: 'first_heading'}, "Hello World from React Js!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(heading); //object