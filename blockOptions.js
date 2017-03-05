window.onload = function() {
    var urlInputButton = document.getElementById("new_url_button");
    var urlWipeButton = document.getElementById("wipe_url_button");
    urlInputButton.onclick = function() {
        var inputField = document.getElementById("new_url_input");
        var listOfUrls = localStorage.getItem("urls") ? JSON.parse(localStorage.getItem("urls")) : [];
        console.log(inputField.value);
        listOfUrls.push(inputField.value);
        localStorage.setItem("urls", JSON.stringify(listOfUrls));
        displayList("list_urls", listOfUrls);  
    };
    
    urlWipeButton.onclick = function() {
        var deleteField = document.getElementById("wipe_url_button");
        var list= document.getElementById("list_urls");
        list.innerHTML="";
        
        localStorage.setItem("urls", "");
    };
    
   
}

function displayList(id, list) {
    var listHTML = document.getElementById(id);
    listHTML.innerHTML= "";
    for (var i=0; i<list.length; i++){
        var li = document.createElement("li");
        li.innerHTML = list[i];
        listHTML.appendChild(li);
    }
}