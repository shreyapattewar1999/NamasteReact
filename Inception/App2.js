{
  /* 
    <div id="parent">
        <div id="child">
            <h1>I am h1 tag</h1>
            <h2>I am sibling h2 tag</h2>
        </div>
    </div>; 
*/
}

// In order to generate nested HTML as above, below code is required
// React.createElement
// 1st parameter ==> tag need to be created
// 2nd parameter ==> attributes that need to pass to the tag ==> attributes are also objects(JSON objects)
// 3rd parameter ==> children of the tag

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am h1 tag"),
    React.createElement("h2", { key: "h2" }, "I am sibling h2 tag"),
  ])
);

console.log(parent);
// parent object looks like this

// {
//     "type": "div",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "parent",
//         "children": {
//             "type": "div",
//             "key": null,
//             "ref": null,
//             "props": {
//                 "id": "child",
//                 "children": [
//                     {
//                         "type": "h1",
//                         "key": "h1",
//                         "ref": null,
//                         "props": {
//                             "children": "I am h1 tag"
//                         },
//                         "_owner": null,
//                         "_store": {}
//                     },
//                     {
//                         "type": "h2",
//                         "key": "h2",
//                         "ref": null,
//                         "props": {
//                             "children": "I am sibling h2 tag"
//                         },
//                         "_owner": null,
//                         "_store": {}
//                     }
//                 ]
//             },
//             "_owner": null,
//             "_store": {}
//         }
//     },
//     "_owner": null,
//     "_store": {}
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
