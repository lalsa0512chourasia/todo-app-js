function showpopup() {
  document.getElementById("pop-up").style.visibility = "visible";
  document.getElementById("container").style.filter = "blur(14px)";
}


const taskList = [];

const addcards = () => {

  //save data in your array
  const value1 = document.getElementById("text").value;
  console.log(value1);
  value1.value = "";
  const tempObj = {
    id: Date.now(),
    taskName: value1,
    subTask: []
  }
  taskList.push(tempObj);
  console.log(taskList);

  addTaskOnScreen();
}


const addTaskOnScreen = () => {

  document.getElementById("pop-up").style.visibility = "hidden";
  document.getElementById("container").style.filter = "none";
  document.getElementById("no").style.visibility = "hidden";


  const element1 = document.createElement("div");
  element1.setAttribute("class", "child");
  console.log(element1);
  element1.innerText = taskList[taskList.length - 1].taskName;
  console.log(taskList, element1);

  let html = "";
  let blankdiv = document.getElementById("blankdiv");
  taskList.forEach((element, index) => {
    html += ` <div class="child" id="${element.id}">
       <p>${element.taskName}</p><hr>
       <ul class="list" id="${'id' + element.id}"></ul>

      
       <span id="del-btn" onclick="removetask(${element.id})"> <i class="fas fa-trash-alt"></i> </span> 
        <span id="add-btn" onclick="edittask(${element.id})"> <i class="fas fa-plus-circle"></i></span>
       
  </div>`

  });
  blankdiv.innerHTML = html;    //add html in blankdiv


}

//for delete the cards
function removetask(removeid) {
  console.log(removeid);

  taskList.forEach((element, index) => {
    if (element.id === removeid) {
      taskList.splice(index, 1)
    }
  });
  addTaskOnScreen();
}

function edittask(id) {

  const popup2 = document.getElementById("pop-up2").style.visibility = "visible";
  // document.querySelector(".child").style.filter = "blur(10px)"   // child div blur done later
 
  const input = document.getElementById("text1").value;

  input.value = "";

  const addbtn = document.getElementById("add-btn3")

  addbtn.onclick = () => {
    let input = document.getElementById("text1").value;


    taskList.forEach((element, index) => {
      if (element.id === id) {
        const tempObj = {
          id: Date.now(),
          taskName: input
        }
        taskList[index].subTask.push(tempObj);
      }
      addInnerTask()

    })

  }

  //  showlist ()
}


// function showlist (id){
//   const input = document.getElementById("text1").value;
//   console.log(input);
//   input.value = "";

//  const tempObj = {
//             id : Date.now(),
//           taskName : input,
//           subTask : []
//       }
//     taskList[length].subTask.push(tempObj);
// console.log(taskList);


//   taskList.forEach((element,index) => {
//     if(element.id === id){
//       const tempObj ={
//         // id : Date.now(),
//         taskName : input
//       };
//     taskList[index].subTask.push(tempObj);
//     }
//   })
//   console.log(taskList);
//   // console.log(tempObj.taskName);
//   addInnerTask()

// }

function addInnerTask() {

  taskList.forEach((element, index) => {
    let list = document.getElementById('id' + element.id)



    let newli = "";
    element.subTask.forEach(task => {
      newli += ` <li class="listitem">
           <span class="task-name" id="${'pid' + task.taskid}">${task.taskName}</span>
           <button class="donebtn" id="${'mid' + task.taskid}" onclick = markdone(${task.taskid}) >Mark Done</button>
           </li>
         `
    document.querySelector(".child").style.filter = "visible"   // child div blur done later

    });
    list.innerHTML = newli;  //add li in ul

  })

  // })
}



//FUNCTION FOR MARK DONE

function markdone(doneid) {
  taskList.forEach(element => {
    element.subTask.forEach(task => {
      if (task.taskid === doneid) {
        document.getElementById('pid' + task.taskid).style.textDecoration = "line-through";
        document.getElementById('pid' + task.taskid).style.color = "red";
        document.getElementById('mid' + task.taskid).style.display = "none";
      }
    })
  });
}





// }
