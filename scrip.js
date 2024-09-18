var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(name, "</P>\n    <p><strong>email:</strong> ").concat(email, "</P>\n    <p><strong>phone:</strong> ").concat(phone, "</P>\n    <h3>education</h3>\n     <P>").concat(education, "</P>\n     <h3>experiance</h3>\n     <P>").concat(experience, "</P>\n    <h3>skills</h3> \n    <P>").concat(skills, "</P>\n    ");
    //Display the generated resume
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume output Element are missing');
    }
});
