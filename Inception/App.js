const heading = React.createElement(
  "h1",
  { title: "H1 Tag", xyz: "abc" },
  "Hello from React"
);

// React.createElement ==> it creates and returns object and not tag

console.log(heading); //heading is object and not h1 tag

// heading object looks like this
// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "title": "H1 Tag",
//         "xyz": "abc",
//         "children": "Hello from React"
//     },
//     "_owner": null,
//     "_store": {}
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading); //render method convert heading object into h1 tag and then renders it
