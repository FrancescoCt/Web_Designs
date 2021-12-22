var count = 1;


document.getElementById('clickMe').onclick = function (){ addList()};

function addList (){
  var userList = document.getElementById('list').value;
  console.log(userList);

  if (userList != ""){
    //create list
    var newList = document.createElement('li');
    newList.className = 'list-group-item';
    newList.id = 'list'+count;
    var addListHere = document.getElementById("list_items");
    addListHere.appendChild(newList);


    var newParagraph = document.createElement('span');
    var newText = document.createTextNode( userList);
    newParagraph.appendChild(newText);
    var addParragraphHere = document.getElementById('list'+count);
    addParragraphHere.appendChild(newParagraph);

    //create button and assign className
    var newButton = document.createElement('button');
    newButton.className = 'remove';
    newButton.id = 'remove'+count;
    var newButtonText = document.createTextNode('Delete');
    newButton.appendChild(newButtonText);
    var addButtonHere = document.getElementsByClassName('list-group-item')[count-1];
    addButtonHere.appendChild(newButton);


    document.getElementById(newButton.id).onclick = function(){deleteList(newList.id)};

    //delete content after pushing the button
    document.getElementById('list').value = "";

    return count++;

  }
return
}


function deleteList(listId){
  var removeList = document.getElementById(listId);
  var containerList = removeList.parentNode;
  containerList.removeChild(removeList);
  console.log("List Removed");
}
