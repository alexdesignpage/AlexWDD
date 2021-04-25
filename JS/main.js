  
const links = [
    {
        label: "WEEK1",
        url: "WEEK1/index.html"   },
    {
        label: "WEEK2",
        url: "WEEK2/index.html"
    }
];

var contents = document.getElementById("contents");

function generateContents () {
    links.forEach(function (item, index) {
        console.log(index, item);
        let listItem = "<li><a href=\"" + item.url + "\" >" + item.label + "</a></li>";
        console.log(listItem);
        contents.innerHTML += listItem;
    })
}

document.addEventListener("load", generateContents());