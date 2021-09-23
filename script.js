let header = document.getElementById("heading1");
header.innerHTML = "changed heading1";

header.style.backgroundColor = "red";

let body = document.getElementsByTagName("body")[0];
let h3 = document.createElement("h3");
h3.innerHTML = "heading 3";
body.appendChild(h3);

let clickHandler = () => {
    header.innerHTML = "new new heading";
    header.style.backgroundColor = "green";
}

let submitHandler = (event) => {
    event.preventDefault();
    let input = document.getElementById("form").value;
    let h4 = document.createElement("h4");
    h4.innerHTML = input;
    body.appendChild(h4);
    alert(input)
    document.getElementById("form").value = "";
}
