let blogcounter = 1;


export function createPost(title, date, summary){
    title = "Title: " + title;
    date = "Date: " + date;
    // let h_title = createElement("div");
    // let h_date = createElement("div");

    // let htitletext = document.createTextNode("Title: ");
    // let hdatetext = document.createTextNode("Date: ");

    // h_title.appendChild(htitletext);
    // h_date.appendChild(hdatetext);
    let buttoncontainer = document.createElement("div");

    let li = document.createElement("li");
    let tit = document.createElement("span")
    let d8 = document.createElement("span");
    let summ = document.createElement("p");
    


    let ed = document.createElement("button");
    let del = document.createElement("button");

    li.setAttribute("id", "postnum" + blogcounter);
    tit.setAttribute("id", "title" + blogcounter);
    d8.setAttribute("id", "date" + blogcounter);
    summ.setAttribute("id", "summary" + blogcounter);
    ed.setAttribute("id", "edit" + blogcounter);
    ed.setAttribute("class", "edit");
    ed.setAttribute("valid", "0");
    del.setAttribute("id", "delete" + blogcounter);
    del.setAttribute("class", "delete");
    del.setAttribute("valid", "0");

    blogcounter++;

    let ti = document.createTextNode(title);
    let da = document.createTextNode(date);
    let su = document.createTextNode(summary);


    let textnode2 = document.createTextNode("Edit");
    let textnode3 = document.createTextNode("Delete");

    tit.appendChild(ti);
    li.appendChild(tit);
    d8.appendChild(da);
    summ.appendChild(su);


    ed.appendChild(textnode2);
    del.appendChild(textnode3);
    li.appendChild(d8);
    li.appendChild(summ);

    buttoncontainer.appendChild(ed);
    buttoncontainer.appendChild(del);
    li.appendChild(buttoncontainer);
    // li.appendChild(ed);
    // li.appendChild(del);

    // console.log(li.innerHTML);

    return li;
}



// export function editPost(id){



// }


// editPost = (event) => {
//     let nameOfFunction = this[event.target.name];
//     let arg1 = event.target.getAttribute('data-arg1');
//     // We can add more arguments as needed...
//     window[nameOfFunction](arg1)
//     // Hope the function is in the window.
//     // Else the respective object need to be used
    
// }

