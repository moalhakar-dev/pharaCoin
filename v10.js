(function(){
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const noSidebar=['index.html','login.html','register.html'];
  document.body.classList.add('v10-theme');
  document.documentElement.style.background='#050608';
  const routes=[
    ['dashboard.html','Overview','fa-chart-pie'],['museum.html','Museum','fa-landmark'],['tasks.html','Tasks','fa-list-check'],['store.html','Store','fa-store'],['invite.html','Invite','fa-user-group'],['transactions.html','Transactions','fa-arrow-right-arrow-left'],['profile.html','Profile','fa-user'],['offers.html','Offers','fa-gift'],['levels.html','Levels','fa-layer-group'],['vip.html','VIP','fa-crown']
  ];
  const active=p=>p===path;
  function navHtml(){return routes.map(r=>`<a href="${r[0]}" class="${active(r[0])?'active':''}"><i class="fa-solid ${r[2]}"></i><span>${r[1]}</span></a>`).join('')}
  function addSidebar(){
    if(noSidebar.includes(path)||document.querySelector('.v10-sidebar')) return;
    const aside=document.createElement('aside'); aside.className='v10-sidebar';
    aside.innerHTML=`<div class="v10-brand"><div class="v10-brand-mark"><i class="fa-solid fa-ankh"></i></div><div><strong>PHARACOIN</strong><small>V10 COMMAND CENTER</small></div></div><div class="v10-nav-label">MAIN MENU</div><nav class="v10-nav">${navHtml()}</nav><div class="v10-user"><div class="v10-avatar">PC</div><div><b>PharaCoin</b><small>Digital Treasury</small></div></div>`;
    document.body.appendChild(aside);
  }
  function addMobile(){
    if(document.querySelector('.v10-mobile-bar')) return;
    const bar=document.createElement('nav');bar.className='v10-mobile-bar';
    bar.innerHTML=routes.slice(0,5).map(r=>`<a href="${r[0]}" class="${active(r[0])?'active':''}"><i class="fa-solid ${r[2]}"></i>${r[1]}</a>`).join('');
    document.body.appendChild(bar);
  }
  function addHead(){
    if(noSidebar.includes(path)||document.querySelector('.v10-page-head')) return;
    const target=document.querySelector('.content,.main-container,.game-container,.container,main')||document.body;
    if(target===document.body) return;
    target.classList.add('v10-main');
    const h=document.createElement('div');h.className='v10-page-head';
    const title=(document.title||'PharaCoin').replace(/\s*[•|].*$/,'').trim();
    h.innerHTML=`<div><div class="v10-kicker">PHARACOIN / V10</div><div class="v10-page-title">${title||'Command Center'}</div><div class="v10-page-subtitle">A modern glass dashboard experience</div></div><div class="v10-status">SYSTEM ONLINE</div>`;
    target.insertBefore(h,target.firstChild);
  }
  addSidebar(); addMobile(); addHead();
})();
