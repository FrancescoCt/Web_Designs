//CREATE BLOB Object

var myBlob = new Blob(
["Hello World"],
{type:"text/plain"}
);

//CREATE DOWNLOAD LINK
var url = window.URL.createObjectURL(myBlob);
var anchor = document.createElement("a");
anchor.innerText = "Download";
anchor.href = url;
anchor.download = "demo.txt";

//FORCE DOWNLOAD
//anchor.click()
document.body.appendChild(anchor);

//CLEAN UP da abbinare al FORCE DOWNLOAD
//window.URL.revokeObjectURL(url);
//document.removeChild(anchor);