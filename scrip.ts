const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLOutputElement;



form.addEventListener('submit' , (event: Event)=>{
event.preventDefault();
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value


    const resumeHTML = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${name}</P>
    <p><strong>email:</strong> ${email}</P>
    <p><strong>phone:</strong> ${phone}</P>
    <h3>education</h3>
     <P>${education}</P>
     <h3>experiance</h3>
     <P>${experience}</P>
    <h3>skills</h3> 
    <P>${skills}</P>
    `;

//Display the generated resume

    if(resumeOutput){
               resumeOutput.innerHTML = resumeHTML;
    }  else{
        console.error('The resume output Element are missing');
    } 
    
});