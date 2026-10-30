export function download(blob,name){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000)}
export const jsonBlob=s=>new Blob([JSON.stringify(s,null,2)],{type:'application/json'});
