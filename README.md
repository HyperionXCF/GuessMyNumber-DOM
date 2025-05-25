# DOM Manipulation Snippets
><br>
> Prerequisites for Learning DOM <br>
> 1. Basic HTML. <br>
> 2. Classes and IDs of HTML elements. <br>
> 3. Basics of JS function and Function expressions. <br> 
> 4. Basic Understanding of how Objects in JS works and Object Methods.
><br>
DOM stands for document object model.
every index.html file is stored as a tree structure where each node is an HTML element. <br> DOM is Structured representation for HTML Document.

[![DOM Tree Structure](https://www.linode.com/docs/guides/traversing-the-dom/dom-tree-example.png)](https://www.linode.com/docs/guides/traversing-the-dom/dom-tree-example.png)

<br>

this tree is basically stored as a JavaScript Object & then we can manipulate this HTML document's contents and styles by applying different Methods on document object.
<br> 
> <br>
> How All this works Behind-The-Scene {only for curious people!} <br>
> So whenever a HTML file is loaded on the browser, the browser automatically creates a document object and tree structure. <br>
> Each DOM always starts with the document object. (first node will be document node.) <br>
<br>
> DOM nodes can represent <br>
> 1. HTML elements <br>
> 2. Comments <br>
> 3. Text / Image Inside that particular element. (refer Image please :P) <br>
<br>
> DOM and DOM methods are not a part of JS language, they are part of WEB APIs <br>
> for now consider WEB APIs as a library which we do not need to import in our > code but it offers us the functionality to manipulate DOM. <br>
> <br>


## Getting and Setting Element's value and textContent using DOM methods 

syntax 

    // use this to access the text content inside the element with class = className

    document.querySelector('.className').textContent;
    document.querySelector('#elementID').textContent;

    // this text now can be reassigned just like variables in JS or stored in another variables. 

    // getting input values from <input class="inputClass"> tags 
    // suppose we want to get and store the value from user input in marks variable 

    const marks = document.querySelector('.inputClass').value;

    // setting the input field value 
    document.querySelector('.inputClass').value = {newValue};

<br>

## Manipulating Styles of element using DOM methods 
syntax 

    make sure to write the new value of style property as a string. 

    document.querySelector('.className').style.<propertyName> = 'newvalue';

    make sure to write propertyNames in camelCase notation.
    for example : 
    in css : background-color but in camelCase : backgroundColor
    in css : justify-content but in camelCase : justifyContent

    document.querySelector('.className').style.backgroundColor = '#222';

    //selecting whole body tag 

    document.querySelector('body').style.backgroundColor = '#777';

<br>

## Handling clicks (events)

syntax

    <select element on which you want to keep checks of events like click>.addEventListener('eventType', response fn);

    example : 

    suppose I want to implement a button with class greet which on clicks changes the textContent inside : <span class = 'greeting'>Hello</span> to 'Hello User' 

    document.querySelector('.greet').addEventListener(
    'click', function (){
            document.querySelector('.greet').textContent = "Hello User";
    });


<br> 

> This is just a layman's guide to basic DOM manipulation. 
> <br> These are my notes which I took while learning DOM hehe.

