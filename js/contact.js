let names = document.querySelector("#fname");
let mail = document.querySelector("#email");
let web = document.querySelector("#iwebsite");
let image = document.querySelector("#image");
let clik = document.querySelector("#submitForm");
let clear = document.querySelector("#clear");
let inpt = document.querySelectorAll(".input1");
let checkbox=document.querySelectorAll(".checkbox");
let radio=document.querySelectorAll(".radio");

clik.addEventListener('click', () => {     //enrolled button click

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //pattern for mail
    let c = 0;
    if (!(mail.value.match(mailformat))) {
        mail.style.borderColor = "red";
        c = 1
    }
    else
    mail.style.borderColor = null;


    var letters = /^[a-zA-Z ]*$/; //validation of name
    if (!(names.value.match(letters))) {
        names.style.borderColor = "red";
        c = 1;
    }
    else
    names.style.borderColor = null;


        // validation of Weblink
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if (!(web.value.match(expression))) {
        web.style.borderColor = "red";
        c = 1;
    }
    else
    web.style.borderColor = null;

    if (c === 1) {
    alert("!Please fill all feild  properly");
    c = 0
    }
    else {
        if(!(radio[0].checked) && !(radio[1].checked))
        {
            alert("Please Select your Gender")
        }
        else
        insert();
    }
})


//values() function will retrieve the value of text field and store it into contain object
function values() {

    var contain = {}
    var store="";
    for(let i=0;i<3;i++)
    {
        if(checkbox[i].checked)
            store+=checkbox[i].value+","
    }
    store = store.slice(0, -1);
    contain["name"] = names.value;
    contain["gender"] = document.querySelector('input[name="gender"]:checked').value
    contain["mail"] = mail.value;
    contain["web"] = web.value;
    contain["image"] = image.value;
    contain["skills"]=store;
    return contain;
}


//insert function is used for insertion of values into table
function insert() {
    var data = values();
    var table = document.getElementById("table2").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    column1 = newRow.insertCell(0);
    column1.innerHTML = data.name + "<br>" + data.gender + "<br>" + data.mail + "<br>" + "<a href=" + data.web + ">" + data.web + "</a>" +"<br>"+"<a href=" + data.image +">"+data.image+"</a>" +  "<br>"+data.skills;
    var img = document.createElement('img');
    img.src="image.jpg"
    img.style = "height:100%;width:100%"
    column2 = newRow.insertCell(1);
    column2.style = "width:25%;"
    column2.innerHTML = "";
    column2.appendChild(img);
    alert("Details of enrolled students have been attatched successfully");
}


//clear funtion is used for clearing the values
clear.addEventListener('click', () => {
    inpt.forEach(clr => clr.value = '');
    inpt.forEach(clr => clr.style.borderColor = null);
    check.forEach(ch => ch.checked = false);
})