// Scroll animations
const animatedElements = document.querySelectorAll('.animate-left, .animate-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});

animatedElements.forEach(el => observer.observe(el));

// Optional: simple contact form submission placeholder
function submitForm(e){
  e.preventDefault();
  alert('Message sent!');
  document.getElementById('contactForm').reset();
  return false;
}

function openMail(){
  window.location.href='mailto:thamimansarijsn@gmail.com';
}
const skills = ["Accountant", "Tally", "MS Office", "Management"];
let index = 0;
const skillSpan = document.getElementById("dynamic-skill");

function rotateSkills() {
  skillSpan.textContent = skills[index];
  index = (index + 1) % skills.length;
}

// Change skill every 2 seconds
setInterval(rotateSkills, 2000);
