var studentTitle; 
var teacherType;
var studentDescription;
var studentDate1;
var studentDate2;
var studentGrade = [];
var studentCatagory;
var studentClub;


function getStudentSearchData() {
    
    // Document get element by id: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById --> Helpful tool for understanding getElementIDs
    studentTitle = document.getElementById("title").value;
    teacherType = document.getElementById("teacherList").value;
    studentDescription = document.getElementById("descriptionT").value;
    studentDate1 = document.getElementById("datefrom").value;
    studentDate2 = document.getElementById("dateto").value;
    studentCatagory = document.getElementById("tagCatagory").value;
    studentClub = document.getElementById("clubInput").value;  

    // Array push method for grades --> pushes all checked grade values into an array for easy access and comparison (use if-else later for search function)
    studentGrade = [];
    const gradeIds = ['grade9T', 'grade10T', 'grade11T', 'grade12T'];
    gradeIds.forEach(id => {
        const checkbox = document.querySelector(`input[name="${id}"]`);
        if (checkbox && checkbox.checked) {
            studentGrade.push(checkbox.value);
        }
    });

    // Commands to log to local storage of console (access from the inspect element tab & application tab in the window (top right))
    localStorage.setItem("studentTitleKey", studentTitle);
    localStorage.setItem("teacherTypeKey", teacherType);
    localStorage.setItem("studentDescriptionKey", studentDescription);
    localStorage.setItem("studentDate1Key", studentDate1);
    localStorage.setItem("studentDate2Key", studentDate2);
    localStorage.setItem("studentGradeKey", JSON.stringify(studentGrade));
    localStorage.setItem("studentCatagoryKey", studentCatagory);
    localStorage.setItem("studentClubKey", studentClub);

    
    console.log("studentTitleKey:", studentTitle);
    console.log("teacherTypeKey:", teacherType);
    console.log("studentDescriptionKey:", studentDescription);
    console.log("studentDate1Key:", studentDate1);
    console.log("studentDate2Key:", studentDate2);
    console.log("studentGradeKey:", studentGrade);
    console.log("studentCatagoryKey:", studentCatagory);
    console.log("studentClubKey:", studentClub);  
}


// Function to clear all local storage data (useful for testing and debugging)


function clearLocalStorage() {
    localStorage.clear();
    console.log("Local storage cleared.");
}

function draftFunction(){
    // Function to save the data to local storage when the "Save as Draft" button is clicked
    getStudentSearchData();
    alert("Your data has been saved as a draft.");
    console.log("Draft saved:", localStorage);
}

// Repeat of function above --> Rather than saving fully, this can be used to edit later