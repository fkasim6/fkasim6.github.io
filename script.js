const hero=document.querySelector('.hero');document.querySelectorAll('.selectors a').forEach(a=>{['mouseenter','focus'].forEach(e=>a.addEventListener(e,()=>hero.dataset.world=a.dataset.world));['mouseleave','blur'].forEach(e=>a.addEventListener(e,()=>delete hero.dataset.world))});
const motion=document.querySelector('#motion');if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.body.classList.add('no-motion');motion.textContent='MOTION OFF';motion.setAttribute('aria-pressed','true')}motion.addEventListener('click',()=>{const off=document.body.classList.toggle('no-motion');motion.textContent=off?'MOTION OFF':'MOTION ON';motion.setAttribute('aria-pressed',String(off))});
const weather={clear:['☀','CLEAR VISION / PHYSICAL FORM','Design & fabrication','SolidWorks CAD · 3D printing · Rapid prototyping · Mechanical integration'],storm:['ϟ','COMPUTATION / CONTROL','Programming & embedded systems','Python · C / C++ · MATLAB · ESP32 & Arduino'],cloud:['☁','ENERGY / CONNECTED SYSTEMS','Thermal & mechanical systems','Thermal-fluid systems · Energy systems · Robotics · Experimental hardware']};document.querySelectorAll('[data-weather]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-weather]').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');document.querySelector('.skills').dataset.weather=b.dataset.weather;const v=weather[b.dataset.weather];document.querySelector('.weather-icon').textContent=v[0];document.querySelector('#skill-kicker').textContent=v[1];document.querySelector('#skill-title').textContent=v[2];document.querySelector('#skill-list').textContent=v[3]}));
const dialog = document.querySelector('#project-dialog');
const projectBody = document.getElementById('modal-body');
const projectImage = document.getElementById('modal-image');
const mediaPanel = document.querySelector('.project-detail-media');
const detailLayout = document.querySelector('.project-detail-layout');
let imageRequest = 0;

function renderProjectDetails(project) {
  document.getElementById('modal-kicker').textContent = project.kicker;
  document.getElementById('modal-title').textContent = project.title;
  projectBody.textContent = project.description;
  document.getElementById('modal-tags').textContent = project.tags;
  document.getElementById('modal-bullets')?.remove();

  if (Array.isArray(project.bullets) && project.bullets.length) {
    const list = document.createElement('ul');
    list.id = 'modal-bullets';
    project.bullets.forEach(([label, text]) => {
      const item = document.createElement('li');
      const heading = document.createElement('strong');
      heading.textContent = label + ': ';
      item.append(heading, document.createTextNode(text));
      list.appendChild(item);
    });
    projectBody.after(list);
  }

  const request = ++imageRequest;
  mediaPanel.hidden = true;
  detailLayout.classList.add('no-project-image');
  projectImage.removeAttribute('src');
  projectImage.alt = project.title;
  if (project.image) {
    const loader = new Image();
    loader.onload = () => {
      if (request !== imageRequest) return;
      projectImage.src = project.image;
      mediaPanel.hidden = false;
      detailLayout.classList.remove('no-project-image');
    };
    loader.onerror = () => {
      if (request !== imageRequest) return;
      mediaPanel.hidden = true;
      detailLayout.classList.add('no-project-image');
    };
    loader.src = project.image;
  }
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = PORTFOLIO_PROJECTS[button.dataset.project];
    if (!project) return;
    renderProjectDetails(project);
    dialog.showModal();
  });
});
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

// Activate only the contact information supplied in contact.js.
const contacts=PORTFOLIO_CONTACT;
if(contacts.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacts.email)){
 const a=document.getElementById('contact-email');a.href='mailto:'+contacts.email;a.hidden=false;document.getElementById('contact-email-label').textContent=contacts.email;document.getElementById('email-placeholder').hidden=true;
}
if(contacts.linkedin){
 try{const u=new URL(contacts.linkedin);if(u.protocol==='https:'&&(u.hostname==='linkedin.com'||u.hostname.endsWith('.linkedin.com'))){const a=document.getElementById('contact-linkedin');a.href=u.href;a.hidden=false;document.getElementById('linkedin-placeholder').hidden=true}}catch{}
}
if(contacts.phone && /^[+()\d\s.-]+$/.test(contacts.phone)){const a=document.getElementById('contact-phone');a.href='tel:'+contacts.phone.replace(/[^+\d]/g,'');a.hidden=false;document.getElementById('contact-phone-label').textContent=contacts.phone}
// Stop offscreen animation work; effects remain decorative and never block input.
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('ambient-running',e.isIntersecting)),{rootMargin:'80px'});document.querySelectorAll('.chapter').forEach(s=>observer.observe(s))}else{document.querySelectorAll('.chapter').forEach(s=>s.classList.add('ambient-running'))}
