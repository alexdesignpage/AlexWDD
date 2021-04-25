  
const links = [
    {
        label: "Week1 notes",
        url: "WEEK1/index.html"   },
    {
        label: "Week2 notes",
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