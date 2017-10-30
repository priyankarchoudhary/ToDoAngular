interface  ToDoList //toDoList
{
    ToDoName:string,
    ToDoStatus :string //status
}

class ToDoClass //Todo
{
    public todoArray: ToDoList[]; //items
    constructor()
    {
        this.todoArray = []; //initially array is empty
    }
    add(list : ToDoList)
    {
        this.todoArray.push(list);
        console.log(this.todoArray)
    }

    display()
    {
        this.todoArray.forEach(function (i) {
            if(i.ToDoStatus != "DELETED")
                console.log("success");
        })
    }

    EditTitle(id, newValue)
    {
        this.todoArray[id].ToDoStatus = newValue;
    }

    MarkTaskAsCompleted(taskID)
    {
        this.todoArray[taskID].ToDoStatus = "COMPLETED";
    }

    DeleteATask(taskID)
    {
        this.todoArray[taskID].ToDoStatus = "DELETED";
    }
}

var list = new ToDoClass();

function AddTaskInTodoArray(TaskName,TaskStatus)
{

    list.add({
        ToDoName: TaskName,
        ToDoStatus :TaskStatus //default value active
    })

}

function editItem(id:number, value:string)
{
    list.EditTitle(id, value);
}


function MarkTaskAsCompletedExport(taskID:Number)
{
    list.MarkTaskAsCompleted(taskID);
}

function DeleteATaskExport(taskID)
{
    list.DeleteATask(taskID);
}


