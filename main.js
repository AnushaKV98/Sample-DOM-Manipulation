// Examine the document stuff
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL );
// console.log(document.tile);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.tile);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENT BY ID
// console.log(document.getElementById('header-title') );
// var headerTitle = document.getElementById('header-title') ;
// console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px black';
// var headerMain = document.getElementById('main-header') ;
// console.log(headerMain);
// headerMain.style.borderBottom = 'solid 2px black';

//GET ELEMENTS BY CLASS NAME
// var itemsList =  document.getElementsByClassName('list-group-item');
// console.log(itemsList);
// console.log(itemsList[1]);
// itemsList[0].textContent = 'Text1';
// itemsList[0].style.fontWeight = 'bold';
// itemsList[0].style.backgroundColor = 'yellow';
// for(var i=0 ; i<itemsList.length ; i++)
// {
//     itemsList[i].style.backgroundColor = '#F4F4F4';
// }


// //GET ELEMENTS BY TAG NAME
// var liItems =  document.getElementsByTagName('li');
// console.log(liItems);
// console.log(liItems[1]);
// liItems[1].textContent = 'Text2';
// liItems[0].style.fontWeight = 'bold';
// liItems[0].style.backgroundColor = 'pink';

// for(var i=0 ; i<liItems.length ; i++)
// {
//     liItems[i].style.backgroundColor = 'pink';
// }

// //QUERY SELECTOR 
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px red'

// var input  =  document.querySelector('input'); //first input by default
// input.value = 'Hello World';

// var submit =  document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item =  document.querySelector('.list-group-item');
// item.style.color  = 'red';

// var lastitem =  document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'green';

// var nitem =  document.querySelector('.list-group-item:nth-child(2)' );
// nitem.style.color = 'coral';

// //QUERY SELECTOR ALL
// var titles =  document.querySelectorAll('.title');
// console.log(titles);
//  titles[0].textContent = "Hello World";

// var odd =  document.querySelectorAll('li:nth-child(odd)');
// var even =  document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = "Red";
// }
// for(var i=0; i<even.length;i++)
// {
//     even[i].style.backgroundColor = "blue";
// }





// ---------------------VIDEO 2------------------------
//TRAVERSING THE DOM
// var itemList =  document.querySelector('#items');
// // parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "Green";
// console.log(itemList.parentNode.parentNode);

// parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "purple";
// console.log(itemList.parentElement.parentElement);

//child nodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "Yellow";

//FirstChild
// console.log(itemList.firstChild);
// first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

// lastChild
// console.log(itemList.lastChild);
// last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 1';


//siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = "red";


//---------------------CREATE ELEMENT--------------------------------
// 1- CREATE A DIV
// var newDiv = document.createElement('div');

// newDiv.className = 'helloclass';
// newDiv.id = 'helloid';
// newDiv.setAttribute('title', 'Hello title');

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv , h1);
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// newDiv.style.textAlign = 'center';


// --------------------------VIDEO 3 - events --------------------------------
// function buttonClick() //the classic way
// {
//     console.log("Button clicked")
// }


// var button = document.getElementById("button").addEventListener('click', function()
//                                                                         {
//                                                                             console.log(1234);

//                                                                         });


// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e)
// {
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main-header').style.backgroundColor = 'blue';
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    //  var output = document.getElementById('output');
    //  output.innerHTML = '<h3>'+e.target.id+'</h3>';
// }


// ----------------------MOUSE EVENTS-------------------
    //  var box = document.getElementById('box');
    //  box.addEventListener('click',runEvent);
    //  box.addEventListener('dbclick',runEvent);
    //  box.addEventListener('mouseout',runEvent);
    //  box.addEventListener('mouseover',runEvent);
    //  box.addEventListener("mouseenter",runEvent);
    //  box.addEventListener('mousedown', runEvent);
    // box.addEventListener('mousemove', runEvent);

    //  function runEvent (e){
    //     console.log('EVENT TYPE : ' + e.type);

    //     // var output = ' <h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+'</h3>';
    //     box.style.backgroundColor = "rgb("+e.offsetX+" , "+e.offsetY+" , 40)";
    
    // }



    // ----------------KEYBOARD EVENTS-----------------------
     
    // var itemInput = document.querySelector('input[type="text"]');
    // var form = document.querySelector('form');
    // itemInput.addEventListener('keydown',runEvent);
    // itemInput.addEventListener('keyup',runEvent);
    // itemInput.addEventListener('keypress',runEvent);
    // itemInput.addEventListener('focus',runEvent);
    // itemInput.addEventListener('blur',runEvent);
    // itemInput.addEventListener('cut',runEvent);
    // itemInput.addEventListener('paste',runEvent);
    // itemInput.addEventListener('input',runEvent);



    //  function runEvent(e)
    //  {
    //     console.log('EVENT TYPE : '+e.type)
        // console.log(e.target.value);
        // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    //  }

    // ---------------------------//

    //  var select = document.querySelector('select');
    //  select.addEventListener('change', runEvent);
    //  select.addEventListener('input', runEvent);
    //  select.addEventListener('submit', runEvent);
     

    //  function runEvent(e){

    //     e.preventDefault();
    //     console.log('EVENT TYPE : '+e.type);
    //     console.log(e.target.value);
    //  }


// ---------------------------------------------------------------//
// ----------------------------VIDEO 04 --------------------------//
// ---------------------------------------------------------------//
var form = document.getElementById('addForm');
var itemList =  document.getElementById('items'); 
//form submit event
form.addEventListener('submit',addItem);
//Add Item
function addItem(e)
{
    e.preventDefault();
    // console.log(1);
    //Get input value
    var newItem   =  document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    // li.className = 'list-group-item';
    li.className = 'list-group-item box';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create del button element
    var deleteBtn =  document.createElement('button');
    //adding class to del btn
    deleteBtn.className = ' button icon  is-danger is-pulled-right';
    //text node
    deleteBtn.appendChild (document.createTextNode('x'));  

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list 
    itemList.appendChild(li);


 }

 //REMOVING ITEMS-------------------------DELETE EVENT
 itemList.addEventListener('click',removeItem);

 function removeItem(e){
    if(e.target.classList.contains('is-danger'))
    {
        if(confirm('Are you sure ?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
  
    }
 } 


 //FILTER ITEMS

  var filter = document.getElementById('filter');
  //filter event
   filter.addEventListener('keyup', filterItems);

   function filterItems(e)
   {
    //convert to lower case
    var text =  e.target.value.toLowerCase();
    // console.log(text); 
    //get list
    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) 
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none'; 
        }
    });     
}                  

                    

   
