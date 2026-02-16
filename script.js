// Mobile menu toggle and form handling
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Insert current year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Smooth internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});

function handleContact(e){
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);
  const name = formData.get('name');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const message = formData.get('message');

  // Basic client-side validation
  if(!name || !phone || !email || !message){
    alert('Please fill all fields.');
    return false;
  }

  // Simulate send — in production, hook to server endpoint or form provider
  setTimeout(()=>{
    alert('Thank you '+name+' — your message has been received. We will contact you shortly.');
    form.reset();
  },500);

  return false;
}
