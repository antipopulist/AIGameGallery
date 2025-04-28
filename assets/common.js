(function(){
  /* ---------- inject header ---------- */
  const bar=document.createElement('div');
  bar.id='ai-gallery-bar';
  bar.innerHTML=`<a href="/AIGameGallery/">← Back to Gallery</a>
                 <button id="ai-about-toggle">About&nbsp;this&nbsp;version</button>`;
  document.body.append(bar);

  /* ---------- prepare about panel ---------- */
  const about=document.createElement('div');
  about.id='ai-gallery-about';

  /* 1) If the page contains an element #ai-about-content, use its HTML.
     2) Else if window.AI_GAME_NOTES exists, use that.
     3) Else fallback. */
  const pageNotes=document.getElementById('ai-about-content');
  if(pageNotes){
    about.innerHTML=pageNotes.innerHTML;
  }else if(window.AI_GAME_NOTES){
    about.innerHTML=window.AI_GAME_NOTES;
  }else{
    about.innerHTML='<h3>About this game</h3><p>No notes provided.</p>';
  }
  document.body.append(about);

  /* ---------- toggle logic ---------- */
  document.getElementById('ai-about-toggle')
          .addEventListener('click',()=>about.style.display=
            about.style.display==='block'?'none':'block');

  /* Push page content down so bar doesn’t overlay it */
  document.body.style.paddingTop='3.2rem';
})();