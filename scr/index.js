function addNewWeField() {
  // console.log("good!");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "write Your Experiences");

  //weObj is like parent
  let weObj = document.getElementById("we"); //This is location of add new element
  let weAddButtonObj = document.getElementById("weAddButton");

  weObj.insertBefore(newNode, weAddButtonObj);
}

function addAcademics() {
  // console.log("good!");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "write Your academics");

  let aqObj = document.getElementById("aq");
  let aqAddButtonObj = document.getElementById("aqAddButton");
  aqObj.insertBefore(newNode, aqAddButtonObj);
  aqObj.insertBefore(newNode, aqAddButtonObj);
}

//Generate CV

function generateCV() {
  // console.log("generate CV");

  // This will take value from Name input field!
  let nameField = document.getElementById("nameField").value;
  //nameT1 is Location where to pull values of NameField!
  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  // assignment give by Duragesh !
    //  writing second name
  let nameT2 = document.getElementById("nameT2");
  nameT2.innerHTML = nameField;
//contact field
  let contactField=document.getElementById('contactField').value;
 document.getElementById('contactT').innerHTML=contactField;
   //address field
// ADDRESS Field
   let addressField=document.getElementById('addressField').value;
   document.getElementById('addressT').innerHTML=addressField;
   //facebook Links
   let fbField=document.getElementById('fbField').value;
   document.getElementById('fbT').innerHTML=fbField;
   //instagram Links
   let instaField=document.getElementById('instaField').value;
   document.getElementById('instaT').innerHTML=instaField;
   //linkedin Links
   let linkedField=document.getElementById('fbField').value;
   document.getElementById('linkedT').innerHTML=linkedField;
   
   // Objective Field
      let objectField=document.getElementById('objectField').value;
      document.getElementById('objectiveT').innerHTML=objectField;
       //    work experience
let weField=document.getElementById('weField').value;
document.getElementById('weT').innerHTML=weField;





}
