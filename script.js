let main_page = document.getElementById("main_page");
let container = document.getElementById("container");
let add_btn = document.getElementById("add_btn");
let submit_btn = document.getElementById("submit_btn");
let clear_btn = document.getElementById("clear_btn");
let task_edit_page = document.getElementById("task_edit_page");
let dabba = document.getElementById("dabba");
let title_txt = document.getElementById("title_txt");
let desc_txt = document.getElementById("desc_txt");
let a = document.getElementsByClassName("task");
let sad_txt = document.getElementById("sad_txt");

submit_btn.addEventListener("click", function(){
    if(title_txt.value == '' && desc_txt.value == '')
    {

    }
    else if(title_txt.value == '' || desc_txt.value == '')
    {
        alert("Task cannot be empty!");
        hide();
    }
    else{
        var task = document.createElement("div");
        var task_text = document.createElement("div");
        var title = document.createElement("div");
        var desc = document.createElement("div");
        var symbols = document.createElement("div");
        var edit = document.createElement("img");
        var del = document.createElement("img");

        // edit.innerHTML = '<img src ='+happy.svg+'alt="My Happy SVG"/>';
        edit.src = "edit.svg";
        del.src = "trash.svg";

        task.className = "task";
        task_text.className = "task_text";
        title.className = "title";
        desc.className = "desc";
        symbols.className = "symbols";
        edit.className = "edit";
        del.className = "del";

        edit.addEventListener("click", function(){
            // title_txt.innerHTML = title.value;
            title_txt.value = title.innerHTML;
            desc_txt.value = desc.innerHTML;
            hide();
            task.remove();
        })

        title.innerHTML = title_txt.value;
        desc.innerHTML = desc_txt.value;
        
        container.appendChild(task);
        task.appendChild(task_text);
        task.appendChild(symbols);
        task_text.appendChild(title);
        task_text.appendChild(desc);
        symbols.appendChild(edit);
        symbols.appendChild(del);

        del.addEventListener("click",function(){
            task.remove();
            checkk();
        })
    }
})
console.log(a);

function checkk(){
    if(a.length == 0)
    {
        sad_txt.classList.add("hidden");
    }
    else
        sad_txt.classList.remove("hidden");
}

function hide(){
    dabba.classList.toggle("show");
    main_page.classList.toggle("show");
    checkk();
}

function clear_txt(){ 
    title_txt.value='';
    desc_txt.value='';
}



// function submit_task(){
//     add_task();
//     hide();
// }