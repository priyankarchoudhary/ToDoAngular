var ToDoClass //Todo
 = /** @class */ (function () {
    function ToDoClass() {
        this.todoArray = []; //initially array is empty
    }
    ToDoClass.prototype.add = function (list) {
        this.todoArray.push(list);
        console.log(this.todoArray);
    };
    ToDoClass.prototype.display = function () {
        this.todoArray.forEach(function (i) {
            if (i.ToDoStatus != "DELETED")
                console.log("success");
        });
    };
    ToDoClass.prototype.EditTitle = function (id, newValue) {
        this.todoArray[id].ToDoStatus = newValue;
    };
    ToDoClass.prototype.MarkTaskAsCompleted = function (taskID) {
        this.todoArray[taskID].ToDoStatus = "COMPLETED";
    };
    ToDoClass.prototype.DeleteATask = function (taskID) {
        this.todoArray[taskID].ToDoStatus = "DELETED";
    };
    return ToDoClass;
}());
var list = new ToDoClass();
function AddTaskInTodoArray(TaskName, TaskStatus) {
    list.add({
        ToDoName: TaskName,
        ToDoStatus: TaskStatus //default value active
    });
}
function editItem(id, value) {
    list.EditTitle(id, value);
}
function MarkTaskAsCompletedExport(taskID) {
    list.MarkTaskAsCompleted(taskID);
}
function DeleteATaskExport(taskID) {
    list.DeleteATask(taskID);
}
