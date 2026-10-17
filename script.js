const data = window.PORTFOLIO;
const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null; } catch { return null; } };
document.querySelectorAll('[data-name]').forEach(el => el.textContent = data.nombre);
document.title = `${data.nombre} — Desarrollo & creaciones`;
document.getElementById('bio').textContent = data.bio;
document.getElementById('year').textContent = new Date().getFullYear();
for (const item of data.historia) { const article = document.createElement('article'); const h = document.createElement('h3'); h.textContent = item.titulo; const p = document.createElement('p'); p.textContent = item.texto; article.append(h,p); document.getElementById('journey').append(article); }
const visuals = { web: '<div class="mini-browser"><div>● ● ● <span>tu-marca.dev</span></div><b>Ideas que<br>dejan huella.</b><small>DESCUBRE LO QUE HACEMOS ↗</small></div>', minecraft: '<div class="blocks"><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="world-label">UN MUNDO POR CONSTRUIR</span>', discord: '<div class="discord-demo"><span class="bot-avatar">&gt;_</span><div><b>Tu bot <small>APP</small></b><p>¡Una nueva idea se ha conectado!</p><code>/crear algo_increíble</code></div></div>' };
function renderProjects(filter='Todos') { const grid = document.getElementById('project-grid'); grid.replaceChildren(); for(const project of data.proyectos.filter(p => filter === 'Todos' || p.categoria === filter)) { const card = document.createElement('article'); card.className='project'; const art=document.createElement('div'); art.className=`project-art ${['web','minecraft','discord'].includes(project.estilo)?project.estilo:'web'}`; art.innerHTML=visuals[project.estilo] || visuals.web; const details=document.createElement('div'); details.className='project-details'; const label=document.createElement('p'); label.className='eyebrow'; label.textContent=project.categoria + (project.demo?' / CONCEPTO':' / PROYECTO'); const title=document.createElement('h3'); title.textContent=project.titulo; const desc=document.createElement('p'); desc.textContent=project.descripcion; const tech=document.createElement('small'); tech.textContent=project.tecnologias; details.append(label,title,desc,tech); const url=safeUrl(project.enlace); if(url){const a=document.createElement('a'); a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='Ver proyecto ↗'; details.append(a);} card.append(art,details);grid.append(card); } if(!grid.children.length){const p=document.createElement('p');p.textContent='Próximamente, nuevas creaciones en esta categoría.';grid.append(p);} }
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects(button.dataset.filter);}));
const menu=document.querySelector('.menu'); const nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const discord=document.getElementById('discord-link'); const discordUrl=safeUrl(data.discordUrl);discord.href=discordUrl || 'https://discord.com/app';discord.addEventListener('click',e=>{if(!discordUrl){document.getElementById('copy-status').textContent=`En Discord, añade a ${data.discordUsuario} para hablar de tu proyecto.`;}});document.getElementById('close-dialog').addEventListener('click',()=>document.getElementById('contact-dialog').close());
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('contact-status').textContent=`¿Pensando en ${a.dataset.service}? Cuéntame las funciones que necesitas y tu idea inicial.`;}));

const username = data.discordUsuario || 'AlexGamer753';
document.getElementById('discord-username').textContent = username;
document.getElementById('copy-discord').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(username);
    status.textContent = 'Usuario copiado. Pégalo en Discord → Añadir amigo.';
  } catch {
    status.textContent = `Copia este usuario y búscalo en Discord: ${username}`;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('discord-username'));
    selection.removeAllRanges(); selection.addRange(range);
  }
});
