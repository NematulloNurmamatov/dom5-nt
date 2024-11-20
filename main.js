let darck = false;
const body = document.querySelector('#body');
const b = document.querySelector('.b')
const text_xs = document.querySelector('.text-xs')

function isDarckk() {
  darck = !darck;

  if (darck) {

    body.style.backgroundColor = "black";
    b.style.color = "white";
    first_name.style.backgroundColor = "black";
    last_name.style.backgroundColor = "black";
    is_active.style.backgroundColor = "black";
    text_xs.style.backgroundColor = "#97b4e9";
  } else {
    body.style.backgroundColor = "#f5f5f5";
    b.style.color = "black";
    first_name.style.backgroundColor = "white";
    last_name.style.backgroundColor = "white";
    is_active.style.backgroundColor = "white";
    text_xs.style.backgroundColor = "white";
  }
  console.log("Checking dark mode:");
}

let students = [
  {
    first_name: "Oybek",
    last_name: "Mirfayzullayev",
    is_active: 25,
  },
  {
    first_name: "Ulug'bek",
    last_name: "Shamsiddinov",
    is_active: 26,
  },
  {
    first_name: "Ulug'bek",
    last_name: "Abdullayev",
    is_active: 23,
  },
  {
    first_name: "Alpomish",
    last_name: "Jaldoshov",
    is_active: 19,
  },
  {
    first_name: "Asadbek",
    last_name: "Nurberdiyev",
    is_active: 18,
  },
];

let student_table_tbody = document.querySelector("#student_table_tbody");

function render(list = students) {
  student_table_tbody.innerHTML = null;
  list.forEach((item, idx) => {
    // console.log(item);
    let tr = document.createElement("tr");
    tr.classList.add("bg-white", "border-b");

    let td_index = document.createElement("td");
    td_index.classList.add("px-6", "py-4");
    td_index.textContent = idx + 1;

    let td_first_name = document.createElement("td");
    td_first_name.classList.add("px-6", "py-4");
    td_first_name.textContent = item.first_name;

    let td_last_name = document.createElement("td");
    td_last_name.classList.add("px-6", "py-4");
    td_last_name.textContent = item.last_name;

    let td_is_active = document.createElement("td");
    td_is_active.classList.add("px-6", "py-4");
    td_is_active.textContent = item.is_active;

    let td_actios = document.createElement("td");
    td_actios.classList.add("px-6", "py-4");

    let delete_btn = document.createElement("button");
    delete_btn.textContent = "O'chirish";
    delete_btn.classList.add(
      "bg-red-600",
      "py-2",
      "px-4",
      "rounded-xl",
      "text-white"
    );

    delete_btn.setAttribute("onclick", `deleteUser(${idx})`);
    let edit_btn = document.createElement("button");
    edit_btn.classList.add(
      "bg-orange-600",
      "py-2",
      "px-4",
      "rounded-xl",
      "text-white",
      "mr-2"
    );

    edit_btn.textContent = "Tahrirlash";
    edit_btn.setAttribute("onclick", `editUser(${idx})`);

    td_actios.appendChild(edit_btn);
    td_actios.appendChild(delete_btn);

    // td_is_active.textContent = item.is_active
    tr.appendChild(td_index);
    tr.appendChild(td_first_name);
    tr.appendChild(td_last_name);
    tr.appendChild(td_is_active);
    tr.appendChild(td_actios);

    student_table_tbody.appendChild(tr);
  });
}

render();

let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let is_active = document.querySelector("#is_active");
function addUser() {
  students.push({
    first_name: first_name.value,
    last_name: last_name.value,
    is_active: is_active.value,
  });
  render();
  clearForm();
}

function deleteUser(index) {
  students.splice(index, 1);
  console.log(students);
  render();
}

let edit_user_index;
let add_user = document.querySelector("#add_user");
let edit_user = document.querySelector("#edit_user");
function editUser(index) {
  add_user.classList.add("hidden");
  edit_user.classList.remove("hidden");
  first_name.value = students[index].first_name;
  last_name.value = students[index].last_name;
  is_active.value = students[index].is_active;
  edit_user_index = index;
}

function editUserHandle() {
  console.log(edit_user_index);
  students.splice(edit_user_index, 1, {
    first_name: first_name.value,
    last_name: last_name.value,
    is_active: is_active.value,
  });
  render();
  clearForm();
  edit_user_index = null;
  add_user.classList.remove("hidden");
  edit_user.classList.add("hidden");
}

function clearForm() {
  first_name.value = "";
  last_name.value = "";
  is_active.value = "";
}



