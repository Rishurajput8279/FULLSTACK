const parent = document.getElementById("root")
const element=React.createElement("h1",{},"THis is new heading")

const element2 = React.createElement("h2",{},"Shoping cart");
const item1=React.createElement("li",{},"Iteam-1");
const item1=React.createElement("li",{},"Iteam-1");
const list=React.createElement("ul",{},item1,item2);
const root=ReactDOM.createRoot(parent);
    root.render(element)