//Create a variable that selects the form element
const formEl = document.querySelector("#formid");
const courseButton = document.querySelector("#courseButton");
console.log(courseButton);
// Function to read course from local storage
let readLocalStorageCourse = function(){
    let courseData = JSON.parse(localStorage.getItem('courseData'));
    if(!courseData){
        return [];
    }
    return courseData;
};
//Function to store course data
function storeLocalStoragecourse(course){
    let courseData = readLocalStorageCourse();
    courseData.push(course);
    localStorage.setItem('courseData',JSON.stringify(courseData));
};
// Create a function that handles the form signup submission. Grab the form data and store it in local storage, then redirect to the landing page using the `redirectPage` function. If the form is submitted with missing or invalid or existing user data, display an error message to the user.
function handleAddCourse(event){
   
        debugger;
    event.preventDefault();
    console.log(event);
    const classId = document.querySelector("#classId").value.trim();
    const className = document.querySelector("#className").value.trim();
  
    if(classId && className){
       let course = { 
            id: classId,
            name: className,
        };
        storeLocalStoragecourse(course);
    console.log("Course added successfully!");
    const messageEl = document.querySelector("p");
    messageEl.textContent = "Course added successfully!";
    document.querySelector("#classId").value = "";
    document.querySelector("#className").value = "";
   
        
     };
};



// Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener("submit",handleAddCourse);