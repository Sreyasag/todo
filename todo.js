

function displayTodo(data) {
  let list= JSON.parse(data.responseText);
  for (let x of list){
    let state = "";
    if(x.completed){ state= "checked disabled"}  
    let listItem = document.createElement('div');
    listItem.className = "col-lg-4 col-md-6 card1";
    listItem.innerHTML = `<div class="card h-100">
                              <div class="card-body">
                                  <input type="checkbox"  ${state}>
                                  <ul>
                                   ${x.title}
                                  </ul>
                              </div>
                          </div>`;
    document.getElementById("listspace").append(listItem);

  }
}



let p = new Promise(function(resolve,reject){
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhttp.send();
  xhttp.onload = function() {
    displayTodo(xhttp);
    resolve(document.getElementsByTagName('input'))
  }
})


let count = 0; 
function done5(item){
  item.addEventListener('change', function(){
    if(this.checked == true){count++;}
    else{count--;}
    if(count==5){alert("Congrats! 5 tasks have been completed.")}
  })
}


p.then(function(checkboxes){
   
  for( item of checkboxes){
    done5(item)
  }  
})

function add(){
    let listItem = document.createElement('div');
    listItem.className = "col-lg-4 col-md-6 card1";
    listItem.innerHTML = `<div class="card h-100">
                              <div class="card-body">
                                  <input type="checkbox" id="list1">
                                  <ul>
                                   ${document.getElementById("data").value}
                                  </ul>
                              </div>
                          </div>`;
    document.getElementById("listspace").prepend(listItem);
    document.getElementById("data").value = "";

    done5(document.getElementById('list1'))
}




  





