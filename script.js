let db=JSON.parse(localStorage.getItem('buckets')||'{"demo-bucket":[]}');
const save=()=>localStorage.setItem('buckets',JSON.stringify(db));
function addBucket(){const n=bn.value.trim().toLowerCase();if(!/^[a-z0-9-]{3,30}$/.test(n))return alert('3-30 chars: a-z, 0-9, -');if(db[n])return alert('Bucket exists');db[n]=[];bn.value='';save();render(n)}
function delBucket(){if(bs.value&&confirm('Delete bucket and all objects?')){delete db[bs.value];save();render()}}
function upload(){const file=f.files[0];if(!file||!bs.value)return alert('Choose a file & bucket');
 if(file.size>1e6)return alert('Max 1MB (browser storage limit)');
 const r=new FileReader();r.onload=()=>{db[bs.value].push({name:file.name,size:file.size,date:new Date().toLocaleString(),data:r.result});save();render(bs.value)};r.readAsDataURL(file)}
function del(i){db[bs.value].splice(i,1);save();render(bs.value)}
function render(sel){const cur=sel||bs.value;bs.innerHTML=Object.keys(db).map(k=>`<option ${k==cur?'selected':''}>${k}</option>`).join('');
 const o=db[bs.value]||[];info.textContent=`${o.length} object(s), ${(o.reduce((a,b)=>a+b.size,0)/1024).toFixed(1)} KB used`;
 rows.innerHTML=o.map((x,i)=>`<tr><td><a style="color:#38bdf8" href="${x.data}" download="${x.name}">${x.name}</a></td><td>${(x.size/1024).toFixed(1)} KB</td><td>${x.date}</td><td><button class="red" onclick="del(${i})">Delete</button></td></tr>`).join('')}
render();
