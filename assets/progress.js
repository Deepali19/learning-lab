/* Tiny progress helper. Saves which steps are done, per project, in this browser only. */
window.Progress = {
  key(slug){ return "lab-progress:" + slug; },
  get(slug){
    try { return JSON.parse(localStorage.getItem(this.key(slug))) || { done: [] }; }
    catch(e){ return { done: [] }; }
  },
  save(slug, data){
    try { data.updated = new Date().toISOString(); localStorage.setItem(this.key(slug), JSON.stringify(data)); } catch(e){}
  },
  toggle(slug, stepIndex){
    const p = this.get(slug);
    const i = p.done.indexOf(stepIndex);
    if(i >= 0) p.done.splice(i, 1); else p.done.push(stepIndex);
    this.save(slug, p); return p;
  },
  setLast(slug, stepIndex){ const p = this.get(slug); p.last = stepIndex; this.save(slug, p); },
  reset(slug){ try { localStorage.removeItem(this.key(slug)); } catch(e){} }
};
