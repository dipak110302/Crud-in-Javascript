var selectedRow = null;

//Clear All Fields
function clearFields(){
   document.querySelector("#firstName").value = "";
   document.querySelector("#LastName").value = "";
   document.querySelector("#rollNo").value = "";
}

//Add Data

document.querySelector("#student-form").addEventListener("submit", (e) =>{
   e.preventDefault();

   const firstName = document.querySelector("#firstName").value;
   const LastName = document.querySelector("#LastName").value;
   const rollNo = document.querySelector("#rollNo").value;

   //validate
   if(firstName == "" || LastName == "" || rollNo == ""){
      alert("Please fill in all fields","danger");
   }
   else{
      if(selectedRow == null){
         const list = document.querySelector("#student-list");
         const row = document.createElement("tr");

         row.innerHTML =`
         <td>${firstName}</td>
         <td>${LastName}</td>
         <td>${rollNo}</td>
         <td>
            <a href="#"class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#"class="btn btn-danger btn-sm delete">Delete</a>
         </td>
         `;
         list.appendChild(row);
         selectedRow = null;
         alert("Student Added", "Succes");
      }
      else{
         selectedRow.children[0].textContent = firstName;
         selectedRow.children[1].textContent = LastName;
         selectedRow.children[2].textContent = rollNo;
         selectedRow = null;
         alert("student info edited")
      }
   }
});

//Edit Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
   target = e.target;
   if(target.classList.contains("edit")){
      selectedRow = target.parentElement.parentElement;
      document.querySelector("#firstName").value = selectedRow.children[0].textContent;
      document.querySelector("#LastName").value = selectedRow.children[1].textContent;
      document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
   }
});
//Delete Data
document.querySelector("#student-list").addEventListener("click", (e)=>{
   target = e.target;
   if(target.classList.contains("delete")){
      target.parentElement.parentElement.remove();
      alert("student Data Deleted", "danger");

   }
});