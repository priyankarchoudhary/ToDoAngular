var toEditDiv = 0;
window.onload = function () {
    var input = document.getElementById('inputID');
    var btn = document.getElementById('addButtonID');
    btn.onclick =  function ()
    {
        console.log("Inside");
        var div_id = 1;
        AddTaskInTodoArray(input.value,"ACTIVE");
        showList()
    }
    //showList();

}

function showList()
{
    var parent = document.getElementById("element"); //a div
    parent.innerHTML = "";
    Object.keys(list.todoArray).forEach(function(i)
    {
        if(list.todoArray[i].ToDoStatus != "DELETED")
        {
            parent.append(CreateElement(i, list.todoArray[i]));
        }
    })
}

function CreateElement(i, obj)
{

    var main  = document.createElement("div");
    main.setAttribute("class", obj.ToDoStatus+"todo-item breathehorizontal");
    //main.style.background="#3D9970" //'#'+Math.floor(Math.random()*16777215).toString(16);
    var taskName = document.createElement("span");
    taskName.setAttribute('id','spanid')
    taskName.innerText =obj.ToDoName;
    main.appendChild(taskName);

    var mybr = document.createElement('br');
    main.appendChild(mybr);

    var buttonComplete = document.createElement("button");
    buttonComplete.setAttribute('id','completebutton');
    buttonComplete.setAttribute("class","buttonClass completeButton");


    buttonComplete.innerText= "Complete"
    main.appendChild(buttonComplete);

    var editButton = document.createElement("button");
    editButton.setAttribute("id", "editbutton");
    editButton.setAttribute('class','buttonClass editButton');


    editButton.innerText= "Edit"

    main.appendChild(editButton);


    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deletebutton");
    deleteButton.setAttribute("class", "buttonClass deleteButton");


    deleteButton.innerText= "delete"
    main.appendChild(deleteButton)


    if(obj.ToDoStatus == "ACTIVE") {

        buttonComplete.onclick = function () {
            MarkTaskAsCompletedExport(i);
            showList();
        }
    }

    if(obj.ToDoStatus == "COMPLETED")
    {

        buttonComplete.disabled = true;

    }

    deleteButton.onclick = function () {
        DeleteATaskExport(i);
        showList();

    }

    editButton.addEventListener("click", function () {
        console.log(this.parentNode);
        console.log(this.parentNode.childNodes[0].value)
        var textBox = document.createElement("input");
        textBox.type = "text";
        textBox.setAttribute('id','idForEditBox');
        var submit = document.createElement("button");
        submit.setAttribute("class", "buttonClass submitButton");
        submit.innerText = "Change Title";
        this.parentNode.appendChild(textBox);
        this.parentNode.appendChild(submit);

        submit.addEventListener("click",function () {
            var updatedText = document.getElementById('idForEditBox').value;
            console.log(updatedText)
            this.parentNode.childNodes[0].innerHTML = updatedText;

        // Remove the child element from the document

            var child1 = this.parentNode.childNodes[5];

            var child2 = this.parentNode.childNodes[6];
            child1.parentNode.removeChild(child1)
            child2.parentNode.removeChild(child2);


        })

    })

    return main;
}





