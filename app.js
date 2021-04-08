//Simple Nodejs server by Zuri Internship
const http = require('http');

const server = http.createServer((req, res)=>{
const url = req.url;

//json info about me
let name = {
    name: "Akinyemi Taiwo k",
    counter: "Nigeria",
    Hobby: "Coding Js"
};


//simpple webpage using Node js
if(url == "/"){
    res.write('<h1>Hello guy, Welcome To Nodejs Class </h1>');
    res.write('<h1>My name is'  +JSON.stringify(name.name ) + '</h1>');
    res.write('<h1>Name of Coumtry '+  JSON.stringify(name.counter) + '</h1>');
    res.write('<h3>My hobby is'+ JSON.stringify(name.Hobby)+ '</h3>');
    return res.end();
}

});

server.listen(3000);