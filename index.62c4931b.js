const t=document.querySelector(".wall"),e=document.querySelector(".spider"),i=document.body;t.addEventListener("click",l=>{let c=(i.clientWidth-t.clientWidth)/2,o=(i.clientHeight-t.clientHeight)/2,n=l.clientX-c,d=l.clientY-o;n<e.offsetWidth/2?n=0:n+e.offsetWidth/2>t.clientWidth?n=t.clientWidth-e.offsetWidth:n-=e.offsetWidth/2,d<e.offsetHeight/2?d=0:d+e.offsetHeight/2>t.clientHeight?d=t.clientHeight-e.offsetHeight:d-=e.offsetHeight/2,e.style.left=n+window.scrollX+"px",e.style.top=d+window.scrollY+"px"});//# sourceMappingURL=index.62c4931b.js.map

//# sourceMappingURL=index.62c4931b.js.map
