function addNewWeField() {
    // console.log("good!");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","write Your Experiences");
   
        //weObj is like parent
    let weObj= document.getElementById("we") //This is location of add new element
    let weAddButtonObj=document.getElementById('weAddButton');
    
    weObj.insertBefore(newNode,weAddButtonObj);
 
}

function addAcademics(){
    // console.log("good!");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"write Your academics");

    let aqObj=document.getElementById('aq')
    let aqAddButtonObj=document.getElementById('aqAddButton');
    aqObj.insertBefore(newNode,aqAddButtonObj);
    aqObj.insertBefore(newNode,aqAddButtonObj);

}
