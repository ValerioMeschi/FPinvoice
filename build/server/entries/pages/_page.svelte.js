import { d as set_current_component, r as run_all, f as current_component, c as create_ssr_component, h as createEventDispatcher, e as escape, i as each, v as validate_component, j as add_attribute } from "../../chunks/ssr.js";
import QRCode from "qrcode";
import { getEmojiFlag, countries, getCountryData } from "countries-list";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const css$b = {
  code: "button.svelte-1uv9x5z{display:flex;justify-content:center;align-items:center;box-sizing:border-box;margin:0;margin-bottom:calc(3px + 0.5rem);padding:0.3rem 0.7rem 0.3rem 0.7rem;text-transform:uppercase;border:2px solid black;cursor:pointer;outline:none;border-radius:6px;box-shadow:0px 5px;transform:translateY(-0px);transition:0.05s ease-in;user-select:none;background-color:transparent;height:2rem}button.svelte-1uv9x5z:hover{transform:translateY(-3px);box-shadow:0px 8px;background-color:rgb(235, 235, 235)}button.svelte-1uv9x5z:active{transform:translateY(5px);box-shadow:0px 0px;background-color:white}.big.svelte-1uv9x5z{width:calc(100%);padding:1rem;margin:1rem 0 1rem 0;font-size:1rem}.green.svelte-1uv9x5z:hover{background-color:greenyellow}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\tconst click = () => dispatch('click');\\n\\texport let label = 'button';\\n\\texport let type = 'small';\\n\\texport let col = 'white';\\n<\/script>\\n\\n<button class=\\"{type} {col}\\" on:click={click}>{label}</button>\\n\\n<style>\\n\\tbutton {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tmargin: 0;\\n\\t\\tmargin-bottom: calc(3px + 0.5rem);\\n\\t\\tpadding: 0.3rem 0.7rem 0.3rem 0.7rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tborder: 2px solid black;\\n\\t\\tcursor: pointer;\\n\\t\\toutline: none;\\n\\t\\tborder-radius: 6px;\\n\\t\\tbox-shadow: 0px 5px;\\n\\t\\ttransform: translateY(-0px);\\n\\t\\ttransition: 0.05s ease-in;\\n\\t\\tuser-select: none;\\n\\t\\tbackground-color: transparent;\\n\\t\\theight: 2rem;\\n\\t}\\n\\tbutton:hover {\\n\\t\\ttransform: translateY(-3px);\\n\\t\\tbox-shadow: 0px 8px;\\n\\t\\tbackground-color: rgb(235, 235, 235);\\n\\t}\\n\\tbutton:active {\\n\\t\\ttransform: translateY(5px);\\n\\t\\tbox-shadow: 0px 0px;\\n\\t\\tbackground-color: white;\\n\\t}\\n\\t.big {\\n\\t\\twidth: calc(100%);\\n\\t\\tpadding: 1rem;\\n\\t\\tmargin: 1rem 0 1rem 0;\\n\\t\\tfont-size: 1rem;\\n\\t}\\n\\t.green:hover {\\n\\t\\tbackground-color: greenyellow;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,qBAAO,CACN,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACjC,OAAO,CAAE,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,MAAM,CACpC,cAAc,CAAE,SAAS,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,KAAK,CAAC,OAAO,CACzB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,IACT,CACA,qBAAM,MAAO,CACZ,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CACA,qBAAM,OAAQ,CACb,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,gBAAgB,CAAE,KACnB,CACA,mBAAK,CACJ,KAAK,CAAE,KAAK,IAAI,CAAC,CACjB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACrB,SAAS,CAAE,IACZ,CACA,qBAAM,MAAO,CACZ,gBAAgB,CAAE,WACnB"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label = "button" } = $$props;
  let { type = "small" } = $$props;
  let { col = "white" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.col === void 0 && $$bindings.col && col !== void 0)
    $$bindings.col(col);
  $$result.css.add(css$b);
  return `<button class="${escape(type, true) + " " + escape(col, true) + " svelte-1uv9x5z"}">${escape(label)}</button>`;
});
const css$a = {
  code: "div.svelte-2sx6o3{display:flex;justify-content:center;align-items:center;box-sizing:border-box;min-width:6rem;min-height:6rem;background-color:white;border-radius:6px;text-align:center;box-shadow:0px 5px 0 0;border:2px solid black;transform:translateY(0);cursor:pointer;transition:0.1s ease-in-out;user-select:none}div.svelte-2sx6o3:hover{box-shadow:0px 10px 0 0;transform:translateY(-5px);background-color:greenyellow}div.svelte-2sx6o3:active{box-shadow:0px 0px 0 0;transform:translateY(5px)}",
  map: `{"version":3,"file":"SaveFile.svelte","sources":["SaveFile.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\tlet dispatch = createEventDispatcher();\\n\\texport let file;\\n\\texport function contextmenu(e) {\\n\\t\\te.preventDefault();\\n\\t\\tdispatch('delete', { file });\\n\\t}\\n\\texport function click(e) {\\n\\t\\te.preventDefault();\\n\\t\\tdispatch('click', { file });\\n\\t}\\n<\/script>\\n\\n<div on:contextmenu={contextmenu} on:click|stopPropagation={click}>\\n\\t{file.project.name}\\n\\t{file.project.number} <br />\\n\\t{file.datesaved} <br />\\n\\t{file.timesaved}\\n</div>\\n\\n<style>\\n\\tdiv {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tmin-width: 6rem;\\n\\t\\tmin-height: 6rem;\\n\\t\\tbackground-color: white;\\n\\t\\tborder-radius: 6px;\\n\\t\\ttext-align: center;\\n\\t\\tbox-shadow: 0px 5px 0 0;\\n\\t\\tborder: 2px solid black;\\n\\t\\ttransform: translateY(0);\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: 0.1s ease-in-out;\\n\\t\\tuser-select: none;\\n\\t}\\n\\tdiv:hover {\\n\\t\\tbox-shadow: 0px 10px 0 0;\\n\\t\\ttransform: translateY(-5px);\\n\\t\\tbackground-color: greenyellow;\\n\\t}\\n\\tdiv:active {\\n\\t\\tbox-shadow: 0px 0px 0 0;\\n\\t\\ttransform: translateY(5px);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsBC,iBAAI,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,WAAW,CAAE,IACd,CACA,iBAAG,MAAO,CACT,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CACxB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,gBAAgB,CAAE,WACnB,CACA,iBAAG,OAAQ,CACV,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,SAAS,CAAE,WAAW,GAAG,CAC1B"}`
};
const SaveFile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dispatch = createEventDispatcher();
  let { file } = $$props;
  function contextmenu(e) {
    e.preventDefault();
    dispatch("delete", { file });
  }
  function click(e) {
    e.preventDefault();
    dispatch("click", { file });
  }
  if ($$props.file === void 0 && $$bindings.file && file !== void 0)
    $$bindings.file(file);
  if ($$props.contextmenu === void 0 && $$bindings.contextmenu && contextmenu !== void 0)
    $$bindings.contextmenu(contextmenu);
  if ($$props.click === void 0 && $$bindings.click && click !== void 0)
    $$bindings.click(click);
  $$result.css.add(css$a);
  return `<div class="svelte-2sx6o3">${escape(file.project.name)} ${escape(file.project.number)} <br> ${escape(file.datesaved)} <br> ${escape(file.timesaved)} </div>`;
});
const css$9 = {
  code: "#background.svelte-dkz0p1.svelte-dkz0p1{position:absolute;height:100%;width:100%;background-color:rgba(0, 0, 0, 0.5);top:0;left:0;pointer-events:none;transition-delay:0.2s;transition-duration:0.3s;transition-timing-function:ease-in-out;display:flex;justify-content:center;align-items:center;opacity:0}#background.open.svelte-dkz0p1.svelte-dkz0p1{pointer-events:all;background-color:rgba(0, 0, 0, 0.5);opacity:1}#board.svelte-dkz0p1.svelte-dkz0p1{box-shadow:0px 0px 30px 0px rgba(0, 0, 0, 0.4);box-sizing:border-box;width:80%;height:60%;max-width:1200px;max-height:600px;background-color:white;border-radius:6px;transform:translateY(-100vh);transition:0.3s ease-in-out;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}#board.svelte-dkz0p1.svelte-dkz0p1::-webkit-scrollbar{display:none}#board.svelte-dkz0p1 #saveContainer.svelte-dkz0p1{padding:3rem;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem}#saveContainer.svelte-dkz0p1.svelte-dkz0p1::after{content:'';flex:auto}#board.open.svelte-dkz0p1.svelte-dkz0p1{transition-delay:0.2s;transition-duration:0.3s;transition-timing-function:ease-in-out;transform:translateY(0vh)}",
  map: `{"version":3,"file":"SavePicker.svelte","sources":["SavePicker.svelte"],"sourcesContent":["<script>\\n\\timport SaveFile from './SaveFile.svelte';\\n\\timport { browser } from '$app/environment';\\n\\timport { tick } from 'svelte';\\n\\n\\texport let savefiles = [];\\n\\tlet open = false;\\n\\texport let store;\\n\\texport async function toggle() {\\n\\t\\tawait tick();\\n\\t\\tsavefiles = savefiles;\\n\\t\\topen = !open;\\n\\t\\tconsole.log(savefiles);\\n\\t}\\n\\tfunction deleteFile(event) {\\n\\t\\tlet f = event.detail.file;\\n\\t\\tsavefiles.splice(savefiles.indexOf(f), 1);\\n\\t\\tif (browser) {\\n\\t\\t\\tsavefiles = savefiles;\\n\\t\\t\\tlocalStorage.setItem('save', JSON.stringify(savefiles));\\n\\t\\t}\\n\\t}\\n\\tfunction loadFile(event) {\\n\\t\\tstore = structuredClone(event.detail.file);\\n\\t\\ttoggle();\\n\\t}\\n<\/script>\\n\\n<div class:open id=\\"background\\" on:click={toggle}>\\n\\t<div class:open id=\\"board\\">\\n\\t\\t<div id=\\"saveContainer\\">\\n\\t\\t\\t{#each savefiles as file}\\n\\t\\t\\t\\t<SaveFile on:click={loadFile} on:delete={deleteFile} {file}></SaveFile>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#background {\\n\\t\\tposition: absolute;\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-color: rgba(0, 0, 0, 0.5);\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tpointer-events: none;\\n\\t\\ttransition-delay: 0.2s;\\n\\t\\ttransition-duration: 0.3s;\\n\\t\\ttransition-timing-function: ease-in-out;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t#background.open {\\n\\t\\tpointer-events: all;\\n\\t\\tbackground-color: rgba(0, 0, 0, 0.5);\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\t#board {\\n\\t\\tbox-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.4);\\n\\n\\t\\tbox-sizing: border-box;\\n\\t\\twidth: 80%;\\n\\t\\theight: 60%;\\n\\t\\tmax-width: 1200px;\\n\\t\\tmax-height: 600px;\\n\\t\\tbackground-color: white;\\n\\t\\tborder-radius: 6px;\\n\\t\\ttransform: translateY(-100vh);\\n\\t\\ttransition: 0.3s ease-in-out;\\n\\t\\toverflow-y: scroll;\\n\\t\\t-ms-overflow-style: none; /* IE and Edge */\\n\\t\\tscrollbar-width: none; /* Firefox */\\n\\t}\\n\\t#board::-webkit-scrollbar {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t#board #saveContainer {\\n\\t\\tpadding: 3rem;\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: 1fr 1fr 1fr 1fr;\\n\\t\\tgap: 1rem;\\n\\t}\\n\\t#saveContainer::after {\\n\\t\\tcontent: '';\\n\\t\\tflex: auto;\\n\\t}\\n\\n\\t#board.open {\\n\\t\\ttransition-delay: 0.2s;\\n\\t\\ttransition-duration: 0.3s;\\n\\t\\ttransition-timing-function: ease-in-out;\\n\\t\\ttransform: translateY(0vh);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuCC,uCAAY,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,cAAc,CAAE,IAAI,CACpB,gBAAgB,CAAE,IAAI,CACtB,mBAAmB,CAAE,IAAI,CACzB,0BAA0B,CAAE,WAAW,CACvC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CACV,CAEA,WAAW,iCAAM,CAChB,cAAc,CAAE,GAAG,CACnB,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,CACV,CAEA,kCAAO,CACN,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAE/C,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,UAAU,CAAE,MAAM,CAClB,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IAClB,CACA,kCAAM,mBAAoB,CACzB,OAAO,CAAE,IACV,CAEA,oBAAM,CAAC,4BAAe,CACrB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACtC,GAAG,CAAE,IACN,CACA,0CAAc,OAAQ,CACrB,OAAO,CAAE,EAAE,CACX,IAAI,CAAE,IACP,CAEA,MAAM,iCAAM,CACX,gBAAgB,CAAE,IAAI,CACtB,mBAAmB,CAAE,IAAI,CACzB,0BAA0B,CAAE,WAAW,CACvC,SAAS,CAAE,WAAW,GAAG,CAC1B"}`
};
const SavePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { savefiles = [] } = $$props;
  let open = false;
  let { store } = $$props;
  async function toggle() {
    await tick();
    savefiles = savefiles;
    open = !open;
    console.log(savefiles);
  }
  if ($$props.savefiles === void 0 && $$bindings.savefiles && savefiles !== void 0)
    $$bindings.savefiles(savefiles);
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  $$result.css.add(css$9);
  return `<div id="background" class="${["svelte-dkz0p1", open ? "open" : ""].join(" ").trim()}"><div id="board" class="${["svelte-dkz0p1", open ? "open" : ""].join(" ").trim()}"><div id="saveContainer" class="svelte-dkz0p1">${each(savefiles, (file) => {
    return `${validate_component(SaveFile, "SaveFile").$$render($$result, { file }, {}, {})}`;
  })}</div></div> </div>`;
});
const css$8 = {
  code: ".accordion-content.svelte-156wr5h.svelte-156wr5h{display:grid;grid-template-rows:1fr;transition:grid-template-rows 0.3s}.accordion-content.svelte-156wr5h div.svelte-156wr5h{transition:padding 0.3s;overflow:hidden;padding:0.5rem 0.5rem 0.5rem 0.5rem}.accordion-content.closed.svelte-156wr5h.svelte-156wr5h{grid-template-rows:0fr}.accordion-content.closed.svelte-156wr5h div.svelte-156wr5h{padding:0rem}h2.svelte-156wr5h.svelte-156wr5h{margin-top:0;margin-bottom:1rem;cursor:pointer;user-select:none;scale:1;transition:0.1s ease-in-out;text-wrap:nowrap;width:0%}h2.svelte-156wr5h.svelte-156wr5h:hover{scale:1.1}.closed.svelte-156wr5h.svelte-156wr5h{transition:0.4s ease-in-out;grid-template-rows:1fr}",
  map: `{"version":3,"file":"Section.svelte","sources":["Section.svelte"],"sourcesContent":["<script>\\n\\texport let title = 'Title';\\n\\tlet closed = false;\\n\\tfunction toggle() {\\n\\t\\tclosed = !closed;\\n\\t}\\n<\/script>\\n\\n<h2 on:click={toggle}>\\n\\t{#if closed}✧{:else}\\n\\t\\t✦\\n\\t{/if}\\n\\t{title.toUpperCase()}\\n</h2>\\n\\n<div class=\\"accordion-content\\" class:closed>\\n\\t<div>\\n\\t\\t<slot></slot>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.accordion-content {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-rows: 1fr;\\n\\t\\ttransition: grid-template-rows 0.3s;\\n\\t}\\n\\t.accordion-content div {\\n\\t\\ttransition: padding 0.3s;\\n\\t\\toverflow: hidden;\\n\\t\\tpadding: 0.5rem 0.5rem 0.5rem 0.5rem;\\n\\t}\\n\\t.accordion-content.closed {\\n\\t\\tgrid-template-rows: 0fr;\\n\\t}\\n\\t.accordion-content.closed div {\\n\\t\\tpadding: 0rem;\\n\\t}\\n\\th2 {\\n\\t\\tmargin-top: 0;\\n\\t\\tmargin-bottom: 1rem;\\n\\t\\tcursor: pointer;\\n\\t\\tuser-select: none;\\n\\t\\tscale: 1;\\n\\t\\ttransition: 0.1s ease-in-out;\\n\\t\\ttext-wrap: nowrap;\\n\\t\\twidth: 0%;\\n\\t}\\n\\th2:hover {\\n\\t\\tscale: 1.1;\\n\\t}\\n\\t.closed {\\n\\t\\ttransition: 0.4s ease-in-out;\\n\\t\\tgrid-template-rows: 1fr;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsBC,gDAAmB,CAClB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,GAAG,CACvB,UAAU,CAAE,kBAAkB,CAAC,IAChC,CACA,iCAAkB,CAAC,kBAAI,CACtB,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,MAC/B,CACA,kBAAkB,qCAAQ,CACzB,kBAAkB,CAAE,GACrB,CACA,kBAAkB,sBAAO,CAAC,kBAAI,CAC7B,OAAO,CAAE,IACV,CACA,gCAAG,CACF,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,EACR,CACA,gCAAE,MAAO,CACR,KAAK,CAAE,GACR,CACA,qCAAQ,CACP,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,kBAAkB,CAAE,GACrB"}`
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$8);
  return `<h2 class="svelte-156wr5h">${`✦`} ${escape(title.toUpperCase())}</h2> <div class="${["accordion-content svelte-156wr5h", ""].join(" ").trim()}"><div class="svelte-156wr5h">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const css$7 = {
  code: "#track.svelte-kfgsl3.svelte-kfgsl3{box-sizing:content-box;height:2rem;width:4rem;outline:2px solid black;outline-offset:0px;border-radius:6px;cursor:pointer;background-color:white;transform:translateY(10px);margin-bottom:calc(3px + 0.5rem)}#thumb.svelte-kfgsl3.svelte-kfgsl3{box-sizing:content-box;height:calc(2rem - 0px);width:calc(2rem - 0px);background-color:white;transition:0.05s ease-in-out;border:2px solid black;border-radius:6px;box-shadow:0px 5px;transform:translate(calc(-2px), -7px);display:flex;justify-content:center;align-items:center;user-select:none}#thumb.flipped.svelte-kfgsl3.svelte-kfgsl3{transform:translate(calc(-2px + 2rem), -7px)}#track.svelte-kfgsl3:hover #thumb.svelte-kfgsl3{box-shadow:0px 7px;transform:translate(calc(-2px), -10px);background-color:rgb(235, 235, 235)}#track.svelte-kfgsl3:hover #thumb.flipped.svelte-kfgsl3{transform:translate(calc(-2px + 2rem), -10px)}",
  map: `{"version":3,"file":"Toggle.svelte","sources":["Toggle.svelte"],"sourcesContent":["<script>\\n\\texport let flipped;\\n\\tfunction sw() {\\n\\t\\tflipped = !flipped;\\n\\t}\\n\\texport let values = { off: 'EN', on: 'FR' };\\n<\/script>\\n\\n<div id=\\"track\\" class:flipped on:click={sw}>\\n\\t<div id=\\"thumb\\" class:flipped>{flipped ? values.on : values.off}</div>\\n</div>\\n\\n<style>\\n\\t#track {\\n\\t\\tbox-sizing: content-box;\\n\\t\\theight: 2rem;\\n\\t\\twidth: 4rem;\\n\\t\\toutline: 2px solid black;\\n\\t\\toutline-offset: 0px;\\n\\t\\tborder-radius: 6px;\\n\\t\\tcursor: pointer;\\n\\t\\tbackground-color: white;\\n\\t\\ttransform: translateY(10px);\\n\\t\\tmargin-bottom: calc(3px + 0.5rem);\\n\\t}\\n\\t#thumb {\\n\\t\\tbox-sizing: content-box;\\n\\t\\theight: calc(2rem - 0px);\\n\\t\\twidth: calc(2rem - 0px);\\n\\t\\tbackground-color: white;\\n\\t\\ttransition: 0.05s ease-in-out;\\n\\t\\tborder: 2px solid black;\\n\\t\\tborder-radius: 6px;\\n\\t\\tbox-shadow: 0px 5px;\\n\\t\\ttransform: translate(calc(-2px), -7px);\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tuser-select: none;\\n\\t}\\n\\t#thumb.flipped {\\n\\t\\ttransform: translate(calc(-2px + 2rem), -7px);\\n\\t}\\n\\t#track:hover #thumb {\\n\\t\\tbox-shadow: 0px 7px;\\n\\t\\ttransform: translate(calc(-2px), -10px);\\n\\t\\tbackground-color: rgb(235, 235, 235);\\n\\t}\\n\\t#track:hover #thumb.flipped {\\n\\t\\ttransform: translate(calc(-2px + 2rem), -10px);\\n\\t}\\n\\t#track.flipped {\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAaC,kCAAO,CACN,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACxB,cAAc,CAAE,GAAG,CACnB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,gBAAgB,CAAE,KAAK,CACvB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,aAAa,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CACjC,CACA,kCAAO,CACN,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACxB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,KAAK,CAAC,WAAW,CAC7B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,SAAS,CAAE,UAAU,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IACd,CACA,MAAM,oCAAS,CACd,SAAS,CAAE,UAAU,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAC7C,CACA,oBAAM,MAAM,CAAC,oBAAO,CACnB,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,SAAS,CAAE,UAAU,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CACvC,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CACA,oBAAM,MAAM,CAAC,MAAM,sBAAS,CAC3B,SAAS,CAAE,UAAU,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAC9C"}`
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flipped } = $$props;
  let { values = { off: "EN", on: "FR" } } = $$props;
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  $$result.css.add(css$7);
  return `<div id="track" class="${["svelte-kfgsl3", flipped ? "flipped" : ""].join(" ").trim()}"><div id="thumb" class="${["svelte-kfgsl3", flipped ? "flipped" : ""].join(" ").trim()}">${escape(flipped ? values.on : values.off)}</div> </div>`;
});
const css$6 = {
  code: "input.svelte-1jwyxyw::-webkit-outer-spin-button,input.svelte-1jwyxyw::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number'].svelte-1jwyxyw{-moz-appearance:textfield}label.svelte-1jwyxyw{margin-right:1rem;font-size:1rem;text-transform:uppercase}input.svelte-1jwyxyw,select.svelte-1jwyxyw{width:60%;text-align:end;box-sizing:border-box;border:2px solid black;outline:none;height:2rem;padding:0.5rem;border-radius:6px;font-size:1rem;transition:0.1s ease-in-out;box-shadow:0px 0px}input.svelte-1jwyxyw:focus{transform:translateY(-5px);box-shadow:0px 5px;background-color:rgb(235, 235, 235)}div.svelte-1jwyxyw{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-bottom:0.8rem}.svelte-1jwyxyw::-moz-selection{color:white;background:black}.svelte-1jwyxyw::selection{color:white;background:black}select.svelte-1jwyxyw{text-align:end;box-sizing:border-box;border:2px solid black;outline:none;height:2rem;padding:0rem 0.5rem 0rem 0.5rem;font-size:1rem;transition:0.1s ease-in-out;box-shadow:0px 0px;background-color:white;cursor:pointer}option.svelte-1jwyxyw{box-sizing:border-box;border:2px solid black;background-color:rgb(235, 235, 235)}",
  map: `{"version":3,"file":"Input.svelte","sources":["Input.svelte"],"sourcesContent":["<script>\\n\\timport Toggle from './Toggle.svelte';\\n\\timport Button from './Button.svelte';\\n\\timport { createEventDispatcher } from 'svelte';\\n\\timport { getEmojiFlag } from 'countries-list';\\n\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\texport let btnText = 'Button';\\n\\texport let label = 'Label';\\n\\texport let value = 'write something here';\\n\\texport let type = 'text';\\n\\texport let options = [];\\n\\texport let flipped;\\n\\texport let toggleValues = { off: 'OFF', on: 'ON' };\\n\\n\\tfunction click() {\\n\\t\\tdispatch('click');\\n\\t}\\n<\/script>\\n\\n<div>\\n\\t<label for=\\"field\\">{label} </label>\\n\\t{#if type == 'options'}\\n\\t\\t<select bind:value name=\\"field\\">\\n\\t\\t\\t{#each options as entry}\\n\\t\\t\\t\\t<option value={entry[0]}> {entry[1]} {getEmojiFlag(entry[0])}</option>\\n\\t\\t\\t{/each}\\n\\t\\t</select>\\n\\t{:else if type == 'text'}\\n\\t\\t<input bind:value type=\\"text\\" name=\\"field\\" />\\n\\t{:else if type == 'number'}\\n\\t\\t<input bind:value type=\\"number\\" name=\\"field\\" />\\n\\t{:else if type == 'iban'}\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\n\\t\\t\\tbind:value\\n\\t\\t/>\\n\\t{:else if type == 'toggle'}\\n\\t\\t<Toggle values={toggleValues} bind:flipped></Toggle>\\n\\t{:else if type == 'button'}\\n\\t\\t<Button label={btnText} on:click={click}></Button>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\tinput::-webkit-outer-spin-button,\\n\\tinput::-webkit-inner-spin-button {\\n\\t\\t-webkit-appearance: none;\\n\\t\\tmargin: 0;\\n\\t}\\n\\t/* Firefox */\\n\\tinput[type='number'] {\\n\\t\\t-moz-appearance: textfield;\\n\\t}\\n\\tlabel {\\n\\t\\tmargin-right: 1rem;\\n\\t\\tfont-size: 1rem;\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\tinput,\\n\\tselect {\\n\\t\\twidth: 60%;\\n\\t\\ttext-align: end;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid black;\\n\\t\\toutline: none;\\n\\t\\theight: 2rem;\\n\\t\\tpadding: 0.5rem;\\n\\t\\tborder-radius: 6px;\\n\\t\\tfont-size: 1rem;\\n\\t\\ttransition: 0.1s ease-in-out;\\n\\t\\tbox-shadow: 0px 0px;\\n\\t}\\n\\n\\tinput:focus {\\n\\t\\ttransform: translateY(-5px);\\n\\t\\tbox-shadow: 0px 5px;\\n\\t\\tbackground-color: rgb(235, 235, 235);\\n\\t}\\n\\tdiv {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding-bottom: 0.8rem;\\n\\t}\\n\\t::-moz-selection {\\n\\t\\t/* Code for Firefox */\\n\\t\\tcolor: white;\\n\\t\\tbackground: black;\\n\\t}\\n\\n\\t::selection {\\n\\t\\tcolor: white;\\n\\t\\tbackground: black;\\n\\t}\\n\\tselect {\\n\\t\\ttext-align: end;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid black;\\n\\n\\t\\toutline: none;\\n\\t\\theight: 2rem;\\n\\t\\tpadding: 0rem 0.5rem 0rem 0.5rem;\\n\\t\\tfont-size: 1rem;\\n\\t\\ttransition: 0.1s ease-in-out;\\n\\t\\tbox-shadow: 0px 0px;\\n\\t\\tbackground-color: white;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\toption {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid black;\\n\\t\\tbackground-color: rgb(235, 235, 235);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+CC,oBAAK,2BAA2B,CAChC,oBAAK,2BAA4B,CAChC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,gBAAE,CACpB,eAAe,CAAE,SAClB,CACA,oBAAM,CACL,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,SACjB,CACA,oBAAK,CACL,qBAAO,CACN,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,UAAU,CAAE,GAAG,CAAC,GACjB,CAEA,oBAAK,MAAO,CACX,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CACA,kBAAI,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MACjB,gBACA,gBAAiB,CAEhB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KACb,gBAEA,WAAY,CACX,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KACb,CACA,qBAAO,CACN,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAEvB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,MAAM,CAChC,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,OACT,CACA,qBAAO,CACN,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC"}`
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { btnText = "Button" } = $$props;
  let { label = "Label" } = $$props;
  let { value = "write something here" } = $$props;
  let { type = "text" } = $$props;
  let { options = [] } = $$props;
  let { flipped } = $$props;
  let { toggleValues = { off: "OFF", on: "ON" } } = $$props;
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.toggleValues === void 0 && $$bindings.toggleValues && toggleValues !== void 0)
    $$bindings.toggleValues(toggleValues);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="svelte-1jwyxyw"><label for="field" class="svelte-1jwyxyw">${escape(label)}</label> ${type == "options" ? `<select name="field" class="svelte-1jwyxyw">${each(options, (entry) => {
      return `<option${add_attribute("value", entry[0], 0)} class="svelte-1jwyxyw">${escape(entry[1])} ${escape(getEmojiFlag(entry[0]))}</option>`;
    })}</select>` : `${type == "text" ? `<input type="text" name="field" class="svelte-1jwyxyw"${add_attribute("value", value, 0)}>` : `${type == "number" ? `<input type="number" name="field" class="svelte-1jwyxyw"${add_attribute("value", value, 0)}>` : `${type == "iban" ? `<input type="text" class="svelte-1jwyxyw"${add_attribute("value", value, 0)}>` : `${type == "toggle" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { values: toggleValues, flipped },
      {
        flipped: ($$value) => {
          flipped = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type == "button" ? `${validate_component(Button, "Button").$$render($$result, { label: btnText }, {}, {})}` : ``}`}`}`}`}`} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$5 = {
  code: "input.svelte-1mxzzus::-webkit-outer-spin-button,input.svelte-1mxzzus::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number'].svelte-1mxzzus{-moz-appearance:textfield}input.svelte-1mxzzus:first-child{border-radius:6px 0px 0px 6px;border-width:2px 2px 2px 2px;width:200%}input.last.svelte-1mxzzus{margin:0;border-radius:0 6px 6px 0;border-width:2px 2px 2px 0px;margin-right:0.5rem}input.svelte-1mxzzus{width:100%;text-align:end;box-sizing:border-box;border:2px solid black;border-width:2px 2px 2px 0px;outline:none;height:2rem;padding:0.5rem;font-size:1rem;transition:0.1s ease-in-out;box-shadow:0px 0px}#quantity.svelte-1mxzzus{width:50%}select.svelte-1mxzzus{width:150%;text-align:end;box-sizing:border-box;border:2px solid black;border-width:2px 2px 2px 0px;outline:none;height:2rem;padding:0rem 0.5rem 0rem 0.5rem;font-size:1rem;transition:0.1s ease-in-out;box-shadow:0px 0px;background-color:white;cursor:pointer}option.svelte-1mxzzus{box-sizing:border-box;border:2px solid black;background-color:rgb(235, 235, 235)}input.svelte-1mxzzus:focus{transform:translateY(-5px);box-shadow:0px 5px;background-color:rgb(235, 235, 235);border-width:2px 2px 2px 2px}div.svelte-1mxzzus{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:1rem}.svelte-1mxzzus::-moz-selection{color:white;background:black}.svelte-1mxzzus::selection{color:white;background:black}input.sub.svelte-1mxzzus{border-width:0 0 2px 0;width:70%;text-align:left}",
  map: `{"version":3,"file":"rowInput.svelte","sources":["rowInput.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\texport let entry;\\n\\texport let labels;\\n\\timport Button from './Button.svelte';\\n\\timport Input from './Input.svelte';\\n\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\tfunction addSub() {\\n\\t\\tentry.sub.push('');\\n\\t\\tentry.sub = entry.sub;\\n\\t\\tconsole.log(entry);\\n\\t}\\n\\tfunction remove(event) {\\n\\t\\tevent.preventDefault();\\n\\t\\tconsole.log('delete this');\\n\\t\\tdispatch('remove', { target: entry });\\n\\t}\\n\\tfunction removeSub(event) {\\n\\t\\tevent.preventDefault();\\n\\t\\tentry.sub.splice(entry.sub.indexOf(event.target.value), 1);\\n\\t\\tentry.sub = entry.sub;\\n\\t}\\n<\/script>\\n\\n<div on:contextmenu={remove}>\\n\\t<input type=\\"text\\" bind:value={entry.title} />\\n\\t<select bind:value={entry.unit}>\\n\\t\\t<option value=\\"0\\">{labels.units[0]}</option>\\n\\t\\t<option value=\\"1\\">{labels.units[1]}</option>\\n\\t\\t<option value=\\"2\\">{labels.units[2]}</option>\\n\\t\\t<option value=\\"3\\">-</option>\\n\\t</select>\\n\\t<input id=\\"quantity\\" type=\\"number\\" bind:value={entry.amount} />\\n\\t<input class=\\"last\\" type=\\"number\\" bind:value={entry.price} />\\n\\t<Button label=\\"✱\\" on:click={addSub}></Button>\\n</div>\\n{#each entry.sub as sub}\\n\\t<input bind:value={sub} on:contextmenu={removeSub} class=\\"sub\\" type=\\"text\\" />\\n{/each}\\n\\n<style>\\n\\tinput::-webkit-outer-spin-button,\\n\\tinput::-webkit-inner-spin-button {\\n\\t\\t-webkit-appearance: none;\\n\\t\\tmargin: 0;\\n\\t}\\n\\t/* Firefox */\\n\\tinput[type='number'] {\\n\\t\\t-moz-appearance: textfield;\\n\\t}\\n\\tinput:first-child {\\n\\t\\tborder-radius: 6px 0px 0px 6px;\\n\\t\\tborder-width: 2px 2px 2px 2px;\\n\\t\\twidth: 200%;\\n\\t}\\n\\tinput.last {\\n\\t\\tmargin: 0;\\n\\t\\tborder-radius: 0 6px 6px 0;\\n\\t\\tborder-width: 2px 2px 2px 0px;\\n\\t\\tmargin-right: 0.5rem;\\n\\t}\\n\\tinput {\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: end;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid black;\\n\\t\\tborder-width: 2px 2px 2px 0px;\\n\\t\\toutline: none;\\n\\t\\theight: 2rem;\\n\\t\\tpadding: 0.5rem;\\n\\t\\tfont-size: 1rem;\\n\\t\\ttransition: 0.1s ease-in-out;\\n\\t\\tbox-shadow: 0px 0px;\\n\\t}\\n\\t#quantity {\\n\\t\\twidth: 50%;\\n\\t}\\n\\tselect {\\n\\t\\twidth: 150%;\\n\\t\\ttext-align: end;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid black;\\n\\t\\tborder-width: 2px 2px 2px 0px;\\n\\n\\t\\toutline: none;\\n\\t\\theight: 2rem;\\n\\t\\tpadding: 0rem 0.5rem 0rem 0.5rem;\\n\\t\\tfont-size: 1rem;\\n\\t\\ttransition: 0.1s ease-in-out;\\n\\t\\tbox-shadow: 0px 0px;\\n\\t\\tbackground-color: white;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\toption {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid black;\\n\\t\\tbackground-color: rgb(235, 235, 235);\\n\\t}\\n\\n\\tinput:focus {\\n\\t\\ttransform: translateY(-5px);\\n\\t\\tbox-shadow: 0px 5px;\\n\\t\\tbackground-color: rgb(235, 235, 235);\\n\\t\\tborder-width: 2px 2px 2px 2px;\\n\\t}\\n\\tdiv {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding-top: 1rem;\\n\\t}\\n\\t::-moz-selection {\\n\\t\\t/* Code for Firefox */\\n\\t\\tcolor: white;\\n\\t\\tbackground: black;\\n\\t}\\n\\n\\t::selection {\\n\\t\\tcolor: white;\\n\\t\\tbackground: black;\\n\\t}\\n\\tinput.sub {\\n\\t\\tborder-width: 0 0 2px 0;\\n\\t\\twidth: 70%;\\n\\t\\ttext-align: left;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2CC,oBAAK,2BAA2B,CAChC,oBAAK,2BAA4B,CAChC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACT,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,gBAAE,CACpB,eAAe,CAAE,SAClB,CACA,oBAAK,YAAa,CACjB,aAAa,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAC9B,YAAY,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAC7B,KAAK,CAAE,IACR,CACA,KAAK,oBAAM,CACV,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAC1B,YAAY,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAC7B,YAAY,CAAE,MACf,CACA,oBAAM,CACL,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,YAAY,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAC7B,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MAAM,CACf,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,UAAU,CAAE,GAAG,CAAC,GACjB,CACA,wBAAU,CACT,KAAK,CAAE,GACR,CACA,qBAAO,CACN,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,YAAY,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAE7B,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,MAAM,CAChC,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,OACT,CAEA,qBAAO,CACN,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CAEA,oBAAK,MAAO,CACX,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,GAAG,CAAC,GAAG,CACnB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,YAAY,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAC3B,CACA,kBAAI,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IACd,gBACA,gBAAiB,CAEhB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KACb,gBAEA,WAAY,CACX,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KACb,CACA,KAAK,mBAAK,CACT,YAAY,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACvB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IACb"}`
};
const RowInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  let { labels } = $$props;
  createEventDispatcher();
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  $$result.css.add(css$5);
  return `<div class="svelte-1mxzzus"><input type="text" class="svelte-1mxzzus"${add_attribute("value", entry.title, 0)}> <select class="svelte-1mxzzus"><option value="0" class="svelte-1mxzzus">${escape(labels.units[0])}</option><option value="1" class="svelte-1mxzzus">${escape(labels.units[1])}</option><option value="2" class="svelte-1mxzzus">${escape(labels.units[2])}</option><option value="3" class="svelte-1mxzzus" data-svelte-h="svelte-vrf9wm">-</option></select> <input id="quantity" type="number" class="svelte-1mxzzus"${add_attribute("value", entry.amount, 0)}> <input class="last svelte-1mxzzus" type="number"${add_attribute("value", entry.price, 0)}> ${validate_component(Button, "Button").$$render($$result, { label: "✱" }, {}, {})}</div> ${each(entry.sub, (sub) => {
    return `<input class="sub svelte-1mxzzus" type="text"${add_attribute("value", sub, 0)}>`;
  })}`;
});
const css$4 = {
  code: "#row.svelte-1hghmf3.svelte-1hghmf3{width:100%;display:flex;justify-content:space-between;margin-top:1%}#row.svelte-1hghmf3 div.svelte-1hghmf3{display:inline-block;text-align:left;width:80%}#row.svelte-1hghmf3 div.svelte-1hghmf3:first-child{width:200%}#row.svelte-1hghmf3 div.svelte-1hghmf3:last-child{text-align:right;direction:rtl}#row.header.svelte-1hghmf3.svelte-1hghmf3{color:rgb(170, 170, 170);margin-bottom:2%;font-weight:700}#row.header.svelte-1hghmf3 div.svelte-1hghmf3{padding:0}.total.svelte-1hghmf3.svelte-1hghmf3{color:rgb(125, 125, 125)}#row.black.svelte-1hghmf3 .total.svelte-1hghmf3{text-indent:5%;padding:0.2% 0;background-color:black;color:white}",
  map: `{"version":3,"file":"Row.svelte","sources":["Row.svelte"],"sourcesContent":["<script>\\n\\texport let entry;\\n\\texport let labels;\\n\\texport let header = false;\\n\\texport let total = false;\\n\\texport let black = false;\\n\\texport let currency = 'CHF';\\n<\/script>\\n\\n<div id=\\"row\\" class:header class:black>\\n\\t<div>{entry.title}</div>\\n\\t{#if header}\\n\\t\\t<div>{entry.unit}</div>\\n\\t{:else if total}\\n\\t\\t<div></div>\\n\\t{:else}\\n\\t\\t<div>{labels.units[entry.unit]}</div>\\n\\t{/if}\\n\\n\\t<div>{entry.amount}</div>\\n\\t<div class:total>\\n\\t\\t{#if header}\\n\\t\\t\\t{entry.price}\\n\\t\\t{:else if total}\\n\\t\\t\\t{entry.legend}\\n\\t\\t{:else}\\n\\t\\t\\t{currency} {entry.price}\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class:total>\\n\\t\\t{#if header}\\n\\t\\t\\t{entry.total}\\n\\t\\t{:else if total}\\n\\t\\t\\t{currency} {entry.total}\\n\\t\\t{:else}\\n\\t\\t\\t{#if !header}\\n\\t\\t\\t\\t{currency}\\n\\t\\t\\t{/if}\\n\\t\\t\\t{Math.floor(entry.price * entry.amount * 100) / 100}\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#row {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tmargin-top: 1%;\\n\\t}\\n\\t#row div {\\n\\t\\tdisplay: inline-block;\\n\\t\\ttext-align: left;\\n\\t\\twidth: 80%;\\n\\t}\\n\\t#row div:first-child {\\n\\t\\twidth: 200%;\\n\\t}\\n\\t#row div:last-child {\\n\\t\\ttext-align: right;\\n\\t\\tdirection: rtl;\\n\\t}\\n\\n\\t#row.header {\\n\\t\\tcolor: rgb(170, 170, 170);\\n\\t\\tmargin-bottom: 2%;\\n\\t\\tfont-weight: 700;\\n\\t}\\n\\t#row.header div {\\n\\t\\tpadding: 0;\\n\\t}\\n\\t.total {\\n\\t\\tcolor: rgb(125, 125, 125);\\n\\t}\\n\\t#row.black .total {\\n\\t\\ttext-indent: 5%;\\n\\t\\tpadding: 0.2% 0;\\n\\t\\tbackground-color: black;\\n\\t\\tcolor: white;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4CC,kCAAK,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,UAAU,CAAE,EACb,CACA,mBAAI,CAAC,kBAAI,CACR,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GACR,CACA,mBAAI,CAAC,kBAAG,YAAa,CACpB,KAAK,CAAE,IACR,CACA,mBAAI,CAAC,kBAAG,WAAY,CACnB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,GACZ,CAEA,IAAI,qCAAQ,CACX,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,aAAa,CAAE,EAAE,CACjB,WAAW,CAAE,GACd,CACA,IAAI,sBAAO,CAAC,kBAAI,CACf,OAAO,CAAE,CACV,CACA,oCAAO,CACN,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,IAAI,qBAAM,CAAC,qBAAO,CACjB,WAAW,CAAE,EAAE,CACf,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KACR"}`
};
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  let { labels } = $$props;
  let { header = false } = $$props;
  let { total = false } = $$props;
  let { black = false } = $$props;
  let { currency = "CHF" } = $$props;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.black === void 0 && $$bindings.black && black !== void 0)
    $$bindings.black(black);
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0)
    $$bindings.currency(currency);
  $$result.css.add(css$4);
  return `<div id="row" class="${["svelte-1hghmf3", (header ? "header" : "") + " " + (black ? "black" : "")].join(" ").trim()}"><div class="svelte-1hghmf3">${escape(entry.title)}</div> ${header ? `<div class="svelte-1hghmf3">${escape(entry.unit)}</div>` : `${total ? `<div class="svelte-1hghmf3"></div>` : `<div class="svelte-1hghmf3">${escape(labels.units[entry.unit])}</div>`}`} <div class="svelte-1hghmf3">${escape(entry.amount)}</div> <div class="${["svelte-1hghmf3", total ? "total" : ""].join(" ").trim()}">${header ? `${escape(entry.price)}` : `${total ? `${escape(entry.legend)}` : `${escape(currency)} ${escape(entry.price)}`}`}</div> <div class="${["svelte-1hghmf3", total ? "total" : ""].join(" ").trim()}">${header ? `${escape(entry.total)}` : `${total ? `${escape(currency)} ${escape(entry.total)}` : `${!header ? `${escape(currency)}` : ``} ${escape(Math.floor(entry.price * entry.amount * 100) / 100)}`}`}</div> </div>`;
});
const css$3 = {
  code: "#row.svelte-n2zt8b{width:100%;display:flex;justify-content:space-between;margin-bottom:0;text-align:left;padding-left:1%}",
  map: `{"version":3,"file":"sub.svelte","sources":["sub.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\tfunction remove(event) {\\n\\t\\tevent.preventDefault();\\n\\t\\tconsole.log('delete this');\\n\\t\\tdispatch('remove', { target: text });\\n\\t}\\n\\texport let text;\\n<\/script>\\n\\n<div id=\\"row\\" on:contextmenu={remove}>\\n\\t<div>.{text}</div>\\n</div>\\n\\n<style>\\n\\t#row {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tmargin-bottom: 0;\\n\\t\\ttext-align: left;\\n\\t\\tpadding-left: 1%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,kBAAK,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,aAAa,CAAE,CAAC,CAChB,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,EACf"}`
};
const Sub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$3);
  return `<div id="row" class="svelte-n2zt8b"><div>.${escape(text)}</div> </div>`;
});
const css$2 = {
  code: "#totals.svelte-wv5b7n{margin-top:3%}",
  map: `{"version":3,"file":"table.svelte","sources":["table.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\timport Row from './Row.svelte';\\n\\timport Sub from './sub.svelte';\\n\\n\\texport let services;\\n\\texport let labels;\\n\\texport let tva;\\n\\texport let currencyToggle;\\n\\texport let exemptToggle;\\n\\texport let tvaToggle;\\n\\t$: currency = currencyToggle ? 'EUR' : 'CHF';\\n\\n\\t$: tvaC = tva * !exemptToggle;\\n\\texport let totals = { t: 0, tva: 0, ttc: 0 };\\n\\n\\tlet dispatch = createEventDispatcher();\\n\\n\\t$: sum = calcTotal(services, sum, tvaC, tvaToggle);\\n\\tfunction calcTotal(s, v, vat, toggle) {\\n\\t\\tv = 0;\\n\\t\\ts.forEach((e) => {\\n\\t\\t\\tv += e.price * e.amount;\\n\\t\\t});\\n\\t\\tif (!toggle) {\\n\\t\\t\\ttotals = { t: v, tva: (v * vat) / 100, ttc: v + (v * vat) / 100 };\\n\\t\\t} else {\\n\\t\\t\\tlet dividend = (100 + vat) / 100;\\n\\t\\t\\tconsole.log(dividend);\\n\\t\\t\\ttotals = { t: v / dividend, tva: ((v / dividend) * vat) / 100, ttc: v };\\n\\t\\t}\\n\\t\\tdispatch('newTotal');\\n\\t\\treturn v;\\n\\t}\\n<\/script>\\n\\n<div id=\\"table\\">\\n\\t<Row entry={labels.tableHeader} {labels} header=\\"true\\"></Row>\\n\\t{#each services as entry}\\n\\t\\t<div>\\n\\t\\t\\t<Row {currency} {entry} {labels}></Row>\\n\\t\\t</div>\\n\\t\\t{#each entry.sub as sub}\\n\\t\\t\\t<Sub\\n\\t\\t\\t\\ton:remove={(event) => {\\n\\t\\t\\t\\t\\tentry.sub.splice(entry.sub.indexOf(event.detail.target), 1);\\n\\t\\t\\t\\t\\tentry.sub = entry.sub;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\ttext={sub}\\n\\t\\t\\t></Sub>\\n\\t\\t{/each}\\n\\t{/each}\\n\\t<div id=\\"totals\\">\\n\\t\\t<Row\\n\\t\\t\\t{currency}\\n\\t\\t\\tentry={{\\n\\t\\t\\t\\ttitle: '',\\n\\t\\t\\t\\tsub: [],\\n\\t\\t\\t\\tunit: '',\\n\\t\\t\\t\\tamount: '',\\n\\t\\t\\t\\tlegend: 'Total ' + labels.HT,\\n\\t\\t\\t\\ttotal: Math.floor(totals.t * 100) / 100\\n\\t\\t\\t}}\\n\\t\\t\\t{labels}\\n\\t\\t\\ttotal=\\"true\\"\\n\\t\\t></Row>\\n\\t\\t<Row\\n\\t\\t\\tcurrency={exemptToggle ? '' : currency}\\n\\t\\t\\tentry={{\\n\\t\\t\\t\\ttitle: '',\\n\\t\\t\\t\\tsub: [],\\n\\t\\t\\t\\tunit: '',\\n\\t\\t\\t\\tamount: '',\\n\\t\\t\\t\\tlegend: labels.tva + ' ' + tvaC + '%',\\n\\t\\t\\t\\ttotal: exemptToggle ? '- - -' : Math.floor(totals.tva * 100) / 100\\n\\t\\t\\t}}\\n\\t\\t\\t{labels}\\n\\t\\t\\ttotal=\\"true\\"\\n\\t\\t></Row>\\n\\t\\t<Row\\n\\t\\t\\t{currency}\\n\\t\\t\\tentry={{\\n\\t\\t\\t\\ttitle: '',\\n\\t\\t\\t\\tsub: [],\\n\\t\\t\\t\\tunit: '',\\n\\t\\t\\t\\tamount: '',\\n\\t\\t\\t\\tlegend: 'Total',\\n\\t\\t\\t\\ttotal: Math.floor(totals.ttc * 100) / 100\\n\\t\\t\\t}}\\n\\t\\t\\t{labels}\\n\\t\\t\\ttotal=\\"true\\"\\n\\t\\t\\tblack=\\"true\\"\\n\\t\\t></Row>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#table {\\n\\t}\\n\\t#totals {\\n\\t\\tmargin-top: 3%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmGC,qBAAQ,CACP,UAAU,CAAE,EACb"}`
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currency;
  let tvaC;
  let sum;
  let { services } = $$props;
  let { labels } = $$props;
  let { tva } = $$props;
  let { currencyToggle } = $$props;
  let { exemptToggle } = $$props;
  let { tvaToggle } = $$props;
  let { totals = { t: 0, tva: 0, ttc: 0 } } = $$props;
  let dispatch = createEventDispatcher();
  function calcTotal(s, v, vat, toggle) {
    v = 0;
    s.forEach((e) => {
      v += e.price * e.amount;
    });
    if (!toggle) {
      totals = {
        t: v,
        tva: v * vat / 100,
        ttc: v + v * vat / 100
      };
    } else {
      let dividend = (100 + vat) / 100;
      console.log(dividend);
      totals = {
        t: v / dividend,
        tva: v / dividend * vat / 100,
        ttc: v
      };
    }
    dispatch("newTotal");
    return v;
  }
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.tva === void 0 && $$bindings.tva && tva !== void 0)
    $$bindings.tva(tva);
  if ($$props.currencyToggle === void 0 && $$bindings.currencyToggle && currencyToggle !== void 0)
    $$bindings.currencyToggle(currencyToggle);
  if ($$props.exemptToggle === void 0 && $$bindings.exemptToggle && exemptToggle !== void 0)
    $$bindings.exemptToggle(exemptToggle);
  if ($$props.tvaToggle === void 0 && $$bindings.tvaToggle && tvaToggle !== void 0)
    $$bindings.tvaToggle(tvaToggle);
  if ($$props.totals === void 0 && $$bindings.totals && totals !== void 0)
    $$bindings.totals(totals);
  $$result.css.add(css$2);
  currency = currencyToggle ? "EUR" : "CHF";
  tvaC = tva * !exemptToggle;
  sum = calcTotal(services, sum, tvaC, tvaToggle);
  return `<div id="table" class="svelte-wv5b7n">${validate_component(Row, "Row").$$render(
    $$result,
    {
      entry: labels.tableHeader,
      labels,
      header: "true"
    },
    {},
    {}
  )} ${each(services, (entry) => {
    return `<div>${validate_component(Row, "Row").$$render($$result, { currency, entry, labels }, {}, {})}</div> ${each(entry.sub, (sub) => {
      return `${validate_component(Sub, "Sub").$$render($$result, { text: sub }, {}, {})}`;
    })}`;
  })} <div id="totals" class="svelte-wv5b7n">${validate_component(Row, "Row").$$render(
    $$result,
    {
      currency,
      entry: {
        title: "",
        sub: [],
        unit: "",
        amount: "",
        legend: "Total " + labels.HT,
        total: Math.floor(totals.t * 100) / 100
      },
      labels,
      total: "true"
    },
    {},
    {}
  )} ${validate_component(Row, "Row").$$render(
    $$result,
    {
      currency: exemptToggle ? "" : currency,
      entry: {
        title: "",
        sub: [],
        unit: "",
        amount: "",
        legend: labels.tva + " " + tvaC + "%",
        total: exemptToggle ? "- - -" : Math.floor(totals.tva * 100) / 100
      },
      labels,
      total: "true"
    },
    {},
    {}
  )} ${validate_component(Row, "Row").$$render(
    $$result,
    {
      currency,
      entry: {
        title: "",
        sub: [],
        unit: "",
        amount: "",
        legend: "Total",
        total: Math.floor(totals.ttc * 100) / 100
      },
      labels,
      total: "true",
      black: "true"
    },
    {},
    {}
  )}</div> </div>`;
});
const css$1 = {
  code: "svg.svelte-1ofrr86{width:100%}",
  map: `{"version":3,"file":"logo.svelte","sources":["logo.svelte"],"sourcesContent":["<svg\\n\\tviewBox=\\"0 0 1340 500\\"\\n\\tversion=\\"1.1\\"\\n\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\txmlns:xlink=\\"http://www.w3.org/1999/xlink\\"\\n\\txml:space=\\"preserve\\"\\n\\txmlns:serif=\\"http://www.serif.com/\\"\\n\\tstyle=\\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\\"\\n>\\n\\t<g transform=\\"matrix(1,0,0,1,0,-775.575)\\">\\n\\t\\t<g id=\\"Page-5\\" serif:id=\\"Page 5\\" transform=\\"matrix(1,0,0,1,0,775.575)\\">\\n\\t\\t\\t<rect x=\\"0\\" y=\\"0\\" width=\\"1339.46\\" height=\\"500\\" style=\\"fill:none;\\" />\\n\\t\\t\\t<g id=\\"Calque-1\\" serif:id=\\"Calque 1\\">\\n\\t\\t\\t\\t<g transform=\\"matrix(-1,0,0,1,670.982,224.238)\\">\\n\\t\\t\\t\\t\\t<rect\\n\\t\\t\\t\\t\\t\\tx=\\"279.129\\"\\n\\t\\t\\t\\t\\t\\ty=\\"81.519\\"\\n\\t\\t\\t\\t\\t\\twidth=\\"112.724\\"\\n\\t\\t\\t\\t\\t\\theight=\\"112.724\\"\\n\\t\\t\\t\\t\\t\\tstyle=\\"fill:rgb(29,29,27);\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</g>\\n\\t\\t\\t\\t<g>\\n\\t\\t\\t\\t\\t<g transform=\\"matrix(1,0,0,1,166.405,418.48)\\">\\n\\t\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\t\\td=\\"M0,-338.173L-112.726,-225.448L-112.726,0L0,0L0,-112.723L112.724,-112.723L112.724,-225.448L225.447,-225.448L225.447,-338.173L0,-338.173Z\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"fill:rgb(29,29,27);fill-rule:nonzero;\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</g>\\n\\t\\t\\t\\t\\t<g>\\n\\t\\t\\t\\t\\t\\t<text\\n\\t\\t\\t\\t\\t\\t\\tx=\\"447.238px\\"\\n\\t\\t\\t\\t\\t\\t\\ty=\\"235.67px\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:224.2px;fill:rgb(29,29,27);\\"\\n\\t\\t\\t\\t\\t\\t\\t>Floating</text\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<text\\n\\t\\t\\t\\t\\t\\t\\tx=\\"447.238px\\"\\n\\t\\t\\t\\t\\t\\t\\ty=\\"422.429px\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:224.2px;fill:rgb(29,29,27);\\"\\n\\t\\t\\t\\t\\t\\t\\t>Point</text\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</g>\\n\\t\\t\\t\\t</g>\\n\\t\\t\\t</g>\\n\\t\\t</g>\\n\\t</g></svg\\n>\\n\\n<style>\\n\\tsvg {\\n\\t\\twidth: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkDC,kBAAI,CACH,KAAK,CAAE,IACR"}`
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg viewBox="0 0 1340 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" class="svelte-1ofrr86"><g transform="matrix(1,0,0,1,0,-775.575)"><g id="Page-5" serif:id="Page 5" transform="matrix(1,0,0,1,0,775.575)"><rect x="0" y="0" width="1339.46" height="500" style="fill:none;"></rect><g id="Calque-1" serif:id="Calque 1"><g transform="matrix(-1,0,0,1,670.982,224.238)"><rect x="279.129" y="81.519" width="112.724" height="112.724" style="fill:rgb(29,29,27);"></rect></g><g><g transform="matrix(1,0,0,1,166.405,418.48)"><path d="M0,-338.173L-112.726,-225.448L-112.726,0L0,0L0,-112.723L112.724,-112.723L112.724,-225.448L225.447,-225.448L225.447,-338.173L0,-338.173Z" style="fill:rgb(29,29,27);fill-rule:nonzero;"></path></g><g><text x="447.238px" y="235.67px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:224.2px;fill:rgb(29,29,27);">Floating</text><text x="447.238px" y="422.429px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:224.2px;fill:rgb(29,29,27);">Point</text></g></g></g></g></g></svg>`;
});
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nanum+Gothic+Coding:wght@400;700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Space+Mono:wght@400;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');body{padding:0;margin:0;display:flex;align-items:center;justify-content:center;background-color:rgb(250, 250, 250)}:root{--font:'IBM Plex Mono', monospace;font-family:var(--font)}#container.svelte-16owego .svelte-16owego{font-family:var(--font)}#container.svelte-16owego.svelte-16owego{box-sizing:border-box;width:100vw;height:100vh;display:flex;flex-direction:row;justify-content:space-around;max-width:1500px}#invoice.svelte-16owego .svelte-16owego{font-weight:400;font-style:normal;font-weight:400;font-style:normal}#container.svelte-16owego>div.svelte-16owego{box-sizing:border-box;overflow-y:scroll;overflow-x:visible}#container.svelte-16owego>#formArea.svelte-16owego{width:100%;height:100vh;padding-left:0;padding:3rem}#container.svelte-16owego>div.svelte-16owego::-webkit-scrollbar{display:none}#container.svelte-16owego>#previewArea.svelte-16owego{box-sizing:border-box;width:100%;max-width:950px;height:100vh;padding:3rem 3rem 3rem 1.5rem}#invoice.svelte-16owego.svelte-16owego{box-sizing:border-box;background-color:white !important;box-shadow:0px 0px 1.5rem 0px rgba(0, 0, 0, 0.3);border-radius:10px;width:100%;aspect-ratio:1/1.414}#page.svelte-16owego.svelte-16owego{user-select:none;box-sizing:border-box;width:100%;margin:auto;aspect-ratio:1/1.414;max-width:100%;max-height:100%;display:flex;position:relative;flex-direction:column;justify-content:space-between;font-size:100%;--font-small:calc(var(--page-width) * 0.018);--font-medium:calc(var(--page-width) * 0.025);--font-big:calc(var(--page-width) * 0.035);padding:calc(var(--page-width) * 0.05);font-family:var(--font)}#page.svelte-16owego p.svelte-16owego{padding:0;margin:0;font-size:var(--font-small)}#page.svelte-16owego h3.svelte-16owego{padding:0;margin:0;margin-top:calc(var(--page-width) * 0.025);margin-bottom:calc(var(--page-width) * 0.008);font-size:var(--font-medium);font-weight:800}#page.svelte-16owego h3.svelte-16owego:first-child{margin-top:0}#header.svelte-16owego.svelte-16owego{width:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}#logo.svelte-16owego.svelte-16owego{width:calc(var(--page-width) * 0.25)}#receiver.svelte-16owego.svelte-16owego{text-align:end}#body.svelte-16owego.svelte-16owego{font-size:var(--font-small);min-height:30%;max-height:60%;overflow:hidden;width:100%}#footer.svelte-16owego.svelte-16owego{min-height:calc(var(--page-width) * 0.32);width:100%;display:flex;justify-content:space-between;font-size:var(--font-small)}#footer.svelte-16owego h3.svelte-16owego{font-size:var(--font-small);color:rgb(170, 170, 170)}#footer.svelte-16owego #qr.svelte-16owego{width:calc(100% / 3)}#qr.svelte-16owego img.svelte-16owego{width:calc(100%)}#footer.svelte-16owego .split.svelte-16owego{display:flex;margin-top:calc(var(--page-width) * 0.025);width:100%}#footer.svelte-16owego .split div.svelte-16owego{width:100%}#footer.svelte-16owego #contact.svelte-16owego{align-items:left;display:flex;flex-direction:column;width:calc(100% / 3);padding-left:2%}#footer.svelte-16owego #info.svelte-16owego{display:flex;flex-direction:column;width:calc(100% / 3);padding-right:2%}.save.svelte-16owego.svelte-16owego{display:flex;justify-content:space-between;width:100%;gap:1rem}@media screen and (max-width: 850px){#container.svelte-16owego.svelte-16owego{display:block;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;max-width:100vw;max-height:100vh;overflow:scroll}#container.svelte-16owego>div.svelte-16owego{width:100%;scroll-snap-align:center}#container.svelte-16owego #previewArea.svelte-16owego{display:none}#container.svelte-16owego #formArea.svelte-16owego{padding:1rem;min-width:100vw}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport { tick } from 'svelte';\\n\\timport QRCode from 'qrcode';\\n\\timport { countries } from 'countries-list';\\n\\timport { getCountryData, getEmojiFlag } from 'countries-list';\\n\\timport { browser } from '$app/environment';\\n\\timport Button from './Button.svelte';\\n\\timport SavePicker from './SavePicker.svelte';\\n\\timport Section from './Section.svelte';\\n\\timport Input from './Input.svelte';\\n\\timport RowInput from './rowInput.svelte';\\n\\timport Table from './table.svelte';\\n\\n\\timport Logo from './logo.svelte';\\n\\n\\texport let data;\\n\\tlet defaults = data.contents;\\n\\n\\tlet countriesData = Array.from(Object.entries(countries));\\n\\tlet countriesList = countriesData.map((entry) => [entry[0], entry[1].name]);\\n\\tlet totals = {};\\n\\tlet store = structuredClone(defaults);\\n\\n\\tlet savefiles = [];\\n\\tlet savePicker;\\n\\n\\tlet sfx;\\n\\tif (browser) {\\n\\t\\tsfx = new Audio('/sfx/catching.mp3');\\n\\t\\tsfx.volume = 0.5;\\n\\t\\tsfx.pause();\\n\\t\\tif (!localStorage.getItem('default')) {\\n\\t\\t\\tlocalStorage.setItem('default', JSON.stringify(store));\\n\\t\\t\\tconsole.log(localStorage);\\n\\t\\t} else {\\n\\t\\t\\tstore = JSON.parse(localStorage.getItem('default'));\\n\\t\\t}\\n\\t\\tif (localStorage.getItem('save')) {\\n\\t\\t\\tsavefiles = JSON.parse(localStorage.getItem('save'));\\n\\t\\t}\\n\\t}\\n\\n\\t$: currency = store.currencyToggle ? 'EUR' : 'CHF';\\n\\t$: labels = store.langToggle ? store.labelsFR : store.labelsEN;\\n\\tconst date = new Date();\\n\\tlet year = date.getFullYear().toString();\\n\\tlet formatDate = \`\${pad(date.getDate(), 2)}.\${pad(date.getMonth() + 1, 2)}.\${year.slice(2)}\`;\\n\\tlet pw = 0;\\n\\n\\t$: invoiceID = \`I-\${store.project.name.slice(0, 3).toLocaleUpperCase()}\${pad(store.project.number, 2)}\${year.slice(2)}\`;\\n\\tlet qr = '';\\n\\n\\t$: qrString = \`SPC\\\\n0200\\\\n1\\\\n\${store.sender.iban}\\\\nS\\\\n\${store.sender.name}\\\\n\${store.sender.address.street}\\\\n\${store.sender.address.number}\\\\n\${store.sender.address.code}\\\\n\${store.sender.address.region}\\\\n\${store.sender.address.country}\\\\n\\\\n\\\\n\\\\n\\\\n\\\\n\\\\n\\\\n\${totals.ttc}\\\\n\${currency}\\\\nS\\\\n\${store.receiver.name}\\\\n\\\\n\\\\n\${store.receiver.address.code}\\\\n\${store.receiver.address.region}\\\\n\${store.receiver.address.country}\\\\nSCOR\\\\n\\\\n\${invoiceID}\\\\nEPD\`;\\n\\t$: generateQR(qrString).then((url) => (qr = url));\\n\\n\\tfunction pad(num, size) {\\n\\t\\tnum = num.toString();\\n\\t\\twhile (num.length < size) num = '0' + num;\\n\\t\\treturn num;\\n\\t}\\n\\n\\tfunction resetDefaults() {\\n\\t\\tif (browser) {\\n\\t\\t\\tstore = JSON.parse(localStorage.getItem('default'));\\n\\t\\t}\\n\\t}\\n\\tfunction saveDefaults() {\\n\\t\\tif (browser) {\\n\\t\\t\\tlocalStorage.setItem('default', JSON.stringify(store));\\n\\t\\t\\tstore = JSON.parse(localStorage.getItem('default'));\\n\\t\\t}\\n\\t}\\n\\tfunction clearDefaults() {\\n\\t\\tlocalStorage.setItem('default', JSON.stringify(defaults));\\n\\t\\tstore = JSON.parse(localStorage.getItem('default'));\\n\\t}\\n\\tfunction saveInvoice() {\\n\\t\\tif (browser) {\\n\\t\\t\\tlet existing = null;\\n\\t\\t\\tconsole.log(savefiles);\\n\\t\\t\\tsavefiles.forEach((save) => {\\n\\t\\t\\t\\tif (\\n\\t\\t\\t\\t\\tsave.project.name == store.project.name &&\\n\\t\\t\\t\\t\\tsave.project.number == store.project.number\\n\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\texisting = save;\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\t\\t\\tif (existing != null) {\\n\\t\\t\\t\\tconsole.log('deleting old save', existing);\\n\\t\\t\\t\\tsavefiles.splice(savefiles.indexOf(existing), 1);\\n\\t\\t\\t}\\n\\t\\t\\tconsole.log('SAVING');\\n\\t\\t\\tstore.datesaved = formatDate;\\n\\t\\t\\tstore.timesaved = date.toLocaleTimeString();\\n\\n\\t\\t\\tsavefiles.push(structuredClone(store));\\n\\t\\t\\tsavefiles = savefiles;\\n\\t\\t\\tlocalStorage.setItem('save', JSON.stringify(savefiles));\\n\\t\\t}\\n\\t}\\n\\n\\tfunction addEntry() {\\n\\t\\tstore.services.push({\\n\\t\\t\\ttitle: 'Production',\\n\\t\\t\\tunit: '2',\\n\\t\\t\\tsub: [],\\n\\t\\t\\tamount: 1,\\n\\t\\t\\tprice: 3000\\n\\t\\t});\\n\\t\\tstore.services = store.services;\\n\\t}\\n\\n\\tfunction deleteEntry(event) {\\n\\t\\tstore.services.splice(store.services.indexOf(event.detail.target), 1);\\n\\t\\tstore.services = store.services;\\n\\t}\\n\\tfunction openSavePicker() {\\n\\t\\tconsole.log('opening save picker');\\n\\t\\tsavePicker.toggle();\\n\\t}\\n\\n\\tasync function generatePDF() {\\n\\t\\tpw = '100vw';\\n\\t\\tawait tick();\\n\\t\\tlet markup = document.querySelector('#invoice').innerHTML;\\n\\t\\tlet s = '';\\n\\t\\tfor (const sheet of document.styleSheets) {\\n\\t\\t\\tif (sheet != undefined) {\\n\\t\\t\\t\\tfor (const rule of sheet.cssRules) {\\n\\t\\t\\t\\t\\tif (rule != undefined) {\\n\\t\\t\\t\\t\\t\\ts += rule.cssText;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tlet data = {\\n\\t\\t\\tmkp: markup,\\n\\t\\t\\tstyle: s\\n\\t\\t};\\n\\t\\tconst reqOptions = {\\n\\t\\t\\tmethod: 'POST',\\n\\t\\t\\tbody: JSON.stringify(data),\\n\\t\\t\\tcredentials: 'same-origin',\\n\\t\\t\\tmode: 'same-origin',\\n\\t\\t\\theaders: {\\n\\t\\t\\t\\t'Content-Type': 'application/json'\\n\\t\\t\\t}\\n\\t\\t};\\n\\t\\tconst request = new Request('/scrape/', reqOptions);\\n\\t\\tconst response = await fetch(request);\\n\\t\\tif (response.status == 200) {\\n\\t\\t\\tlet content = await response.blob();\\n\\t\\t\\tconsole.log('Generating PDF ✍🏻');\\n\\t\\t\\tvar link = window.URL.createObjectURL(content);\\n\\t\\t\\tvar a = document.createElement('a');\\n\\t\\t\\ta.setAttribute('download', \`[INVOICE]-\${invoiceID}.pdf\`);\\n\\t\\t\\ta.setAttribute('href', link);\\n\\t\\t\\tdocument.body.appendChild(a);\\n\\t\\t\\tconsole.log('Donwloading 💾');\\n\\t\\t\\tsfx.currentTime = 0;\\n\\t\\t\\tsfx.play();\\n\\t\\t\\ta.click();\\n\\t\\t\\tdocument.body.removeChild(a);\\n\\t\\t\\tcalulateWidth();\\n\\t\\t} else {\\n\\t\\t\\tconsole.log(response);\\n\\t\\t\\tthrow new Error('Something went wrong on the server! 😱');\\n\\t\\t}\\n\\t}\\n\\n\\tasync function saveJSON() {\\n\\t\\tlet content = JSON.stringify(store);\\n\\t\\tlet file = new Blob([content], { type: 'json' });\\n\\t\\tlet a = document.createElement('a');\\n\\t\\ta.setAttribute('download', \`[INVOICE]-\${invoiceID}.json\`);\\n\\t\\ta.href = URL.createObjectURL(file);\\n\\t\\ta.click();\\n\\t}\\n\\n\\tasync function loadJSON() {}\\n\\n\\tfunction calulateWidth() {\\n\\t\\tpw = document.querySelector('#invoice').offsetWidth + 'px';\\n\\t}\\n\\tonMount(() => {\\n\\t\\t//afterDomload\\n\\t\\tcalulateWidth();\\n\\t\\twindow.addEventListener('resize', calulateWidth);\\n\\t});\\n\\n\\tasync function setNewTotal() {\\n\\t\\t//let text = \`SPC\\\\n0200\\\\n1\\\\n\${store.data.iban}\\\\nS\\\\nFloating Point Studio Sàrl\\\\nRue de la Paix\\\\n18\\\\n1020\\\\nRenens VD\\\\nCH\\\\n\\\\n\\\\n\\\\n\\\\n\\\\n\\\\n\\\\n12345.00\\\\nCHF\\\\nS\\\\nJerôme\\\\n\\\\n\\\\n1209\\\\nGenève\\\\nCH\\\\nSCOR\\\\nRF34JL02\\\\n\\\\nEPD\`;\\n\\t\\t//qr = await generateQR(text);\\n\\t}\\n\\n\\tasync function generateQR(text) {\\n\\t\\tvar opts = {\\n\\t\\t\\tmargin: 5,\\n\\t\\t\\tcolor: {\\n\\t\\t\\t\\tdark: '#000000',\\n\\t\\t\\t\\tlight: '#ffffff00'\\n\\t\\t\\t}\\n\\t\\t};\\n\\t\\treturn await QRCode.toDataURL(text, opts);\\n\\t}\\n<\/script>\\n\\n<div id=\\"container\\">\\n\\t<div id=\\"formArea\\">\\n\\t\\t<div id=\\"form\\">\\n\\t\\t\\t<Section title=\\"Sender\\">\\n\\t\\t\\t\\t<Input bind:value={store.sender.name} label=\\"name\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.sender.address.street} label=\\"street\\"></Input>\\n\\t\\t\\t\\t<Input type=\\"number\\" bind:value={store.sender.address.number} label=\\"N°\\"></Input>\\n\\t\\t\\t\\t<Input type=\\"number\\" bind:value={store.sender.address.code} label=\\"Code\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.sender.address.region} label=\\"Region\\"></Input>\\n\\t\\t\\t\\t<Input\\n\\t\\t\\t\\t\\ttype=\\"options\\"\\n\\t\\t\\t\\t\\toptions={countriesList}\\n\\t\\t\\t\\t\\tbind:value={store.sender.address.country}\\n\\t\\t\\t\\t\\tlabel=\\"Country\\"\\n\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t<Input bind:value={store.sender.address.mail} label=\\"mail\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.sender.address.website} label=\\"website\\"></Input>\\n\\n\\t\\t\\t\\t<br />\\n\\t\\t\\t</Section>\\n\\t\\t\\t<Section title=\\"Receiver\\">\\n\\t\\t\\t\\t<Input bind:value={store.receiver.name} label=\\"name\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.receiver.address.street} label=\\"street\\"></Input>\\n\\t\\t\\t\\t<Input type=\\"number\\" bind:value={store.receiver.address.number} label=\\"N°\\"></Input>\\n\\t\\t\\t\\t<Input type=\\"number\\" bind:value={store.receiver.address.code} label=\\"Code\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.receiver.address.region} label=\\"Region\\"></Input>\\n\\t\\t\\t\\t<Input\\n\\t\\t\\t\\t\\ttype=\\"options\\"\\n\\t\\t\\t\\t\\toptions={countriesList}\\n\\t\\t\\t\\t\\tbind:value={store.receiver.address.country}\\n\\t\\t\\t\\t\\tlabel=\\"Country\\"\\n\\t\\t\\t\\t></Input>\\n\\t\\t\\t</Section>\\n\\t\\t\\t<Section title=\\"Project\\">\\n\\t\\t\\t\\t<Input bind:value={store.project.name} label=\\"Name\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.project.number} label=\\"Invoice N°\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.project.contact} label=\\"Contact\\"></Input>\\n\\t\\t\\t</Section>\\n\\t\\t\\t<Section title=\\"Services\\">\\n\\t\\t\\t\\t<Button type=\\"big\\" label=\\"+ row  (•◡•) /\\" on:click={addEntry}></Button>\\n\\t\\t\\t\\t{#each store.services as entry}\\n\\t\\t\\t\\t\\t<RowInput on:remove={deleteEntry} bind:entry {labels}></RowInput>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</Section>\\n\\t\\t\\t<Section title=\\"Payment\\">\\n\\t\\t\\t\\t<Input type=\\"iban\\" bind:value={store.sender.iban} label=\\"IBAN\\"></Input>\\n\\n\\t\\t\\t\\t<Input\\n\\t\\t\\t\\t\\tbind:flipped={store.currencyToggle}\\n\\t\\t\\t\\t\\ttype=\\"toggle\\"\\n\\t\\t\\t\\t\\tlabel=\\"Currency\\"\\n\\t\\t\\t\\t\\ttoggleValues={{ on: 'EUR', off: 'CHF' }}\\n\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t<Input\\n\\t\\t\\t\\t\\tbind:flipped={store.exemptToggle}\\n\\t\\t\\t\\t\\ttype=\\"toggle\\"\\n\\t\\t\\t\\t\\tlabel=\\"VAT exempt\\"\\n\\t\\t\\t\\t\\ttoggleValues={{ on: 'ON', off: 'OFF' }}\\n\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t<Input\\n\\t\\t\\t\\t\\tbind:flipped={store.tvaToggle}\\n\\t\\t\\t\\t\\ttype=\\"toggle\\"\\n\\t\\t\\t\\t\\tlabel=\\"VAT incl.\\"\\n\\t\\t\\t\\t\\ttoggleValues={{ on: 'ON', off: 'OFF' }}\\n\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t<Input bind:value={store.rate} type=\\"number\\" label=\\"VAT %\\"></Input>\\n\\t\\t\\t\\t<Input bind:value={store.vatno} type=\\"text\\" label=\\"VAT N°\\"></Input>\\n\\t\\t\\t</Section>\\n\\t\\t\\t<Section title=\\"Controls\\">\\n\\t\\t\\t\\t<div id=\\"controls\\">\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<Input\\n\\t\\t\\t\\t\\t\\t\\tbind:flipped={store.langToggle}\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"toggle\\"\\n\\t\\t\\t\\t\\t\\t\\tlabel=\\"Language\\"\\n\\t\\t\\t\\t\\t\\t\\ttoggleValues={{ on: 'FR', off: 'EN' }}\\n\\t\\t\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t\\t\\t<Input bind:flipped={store.logo} type=\\"toggle\\" label=\\"Logo\\"></Input>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<Input on:click={saveDefaults} type=\\"button\\" label=\\"save defaults\\" btnText=\\"SAVE\\"></Input>\\n\\t\\t\\t\\t\\t<Input on:click={resetDefaults} type=\\"button\\" label=\\"reset defaults\\" btnText=\\"RESET\\"\\n\\t\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t\\t<Input on:click={clearDefaults} type=\\"button\\" label=\\"clear defaults\\" btnText=\\"CLEAR\\"\\n\\t\\t\\t\\t\\t></Input>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Section>\\n\\t\\t\\t<div class=\\"save\\">\\n\\t\\t\\t\\t<Button col=\\"green\\" type=\\"big\\" label=\\"GET JSON\\" on:click={saveJSON} />\\n\\t\\t\\t\\t<Button col=\\"green\\" type=\\"big\\" label=\\" ★LOAD JSON★\\" on:click={loadJSON} />\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"save\\">\\n\\t\\t\\t\\t<Button col=\\"green\\" type=\\"big\\" label=\\"★SAVE★\\" on:click={saveInvoice} />\\n\\t\\t\\t\\t<Button col=\\"green\\" type=\\"big\\" label=\\" ★LOAD★\\" on:click={openSavePicker} />\\n\\t\\t\\t</div>\\n\\t\\t\\t<Button col=\\"green\\" type=\\"big\\" label=\\"✱ download ⸜(രᴗര๑)⸝ ✱\\" on:click={generatePDF} />\\n\\t\\t</div>\\n\\t</div>\\n\\t<div id=\\"previewArea\\">\\n\\t\\t<div id=\\"invoice\\">\\n\\t\\t\\t<div id=\\"page\\" style=\\"--page-width:{pw}\\">\\n\\t\\t\\t\\t<div id=\\"header\\">\\n\\t\\t\\t\\t\\t<div id=\\"sender\\">\\n\\t\\t\\t\\t\\t\\t{#if store.logo}\\n\\t\\t\\t\\t\\t\\t\\t<div id=\\"logo\\"><Logo></Logo></div>\\n\\t\\t\\t\\t\\t\\t\\t<p>{store.sender.name}</p>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<h3>{store.sender.name}</h3>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.street} {store.sender.address.number}</p>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.code} {store.sender.address.region}</p>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t{getCountryData(store.sender.address.country).name}\\n\\t\\t\\t\\t\\t\\t\\t{store.sender.address.country}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.mail}</p>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.website}</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div id=\\"receiver\\">\\n\\t\\t\\t\\t\\t\\t<h3>{labels.invoice}</h3>\\n\\t\\t\\t\\t\\t\\t<p>{invoiceID}</p>\\n\\t\\t\\t\\t\\t\\t<p>{formatDate}</p>\\n\\t\\t\\t\\t\\t\\t<h3>{store.receiver.name}</h3>\\n\\t\\t\\t\\t\\t\\t<p>{store.receiver.address.street} {store.receiver.address.number}</p>\\n\\t\\t\\t\\t\\t\\t<p>{store.receiver.address.code} {store.receiver.address.region}</p>\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\t{getCountryData(store.receiver.address.country).name}\\n\\t\\t\\t\\t\\t\\t\\t{store.receiver.address.country}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div id=\\"body\\">\\n\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t<div id=\\"table\\">\\n\\t\\t\\t\\t\\t\\t\\t<Table\\n\\t\\t\\t\\t\\t\\t\\t\\ton:newTotal={setNewTotal}\\n\\t\\t\\t\\t\\t\\t\\t\\tcurrencyToggle={store.currencyToggle}\\n\\t\\t\\t\\t\\t\\t\\t\\texemptToggle={store.exemptToggle}\\n\\t\\t\\t\\t\\t\\t\\t\\ttvaToggle={store.tvaToggle}\\n\\t\\t\\t\\t\\t\\t\\t\\ttva={store.rate}\\n\\t\\t\\t\\t\\t\\t\\t\\tbind:totals\\n\\t\\t\\t\\t\\t\\t\\t\\tservices={store.services}\\n\\t\\t\\t\\t\\t\\t\\t\\t{labels}\\n\\t\\t\\t\\t\\t\\t\\t></Table>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div id=\\"footer\\">\\n\\t\\t\\t\\t\\t<div id=\\"info\\">\\n\\t\\t\\t\\t\\t\\t<h3>{labels.account.toUpperCase()}</h3>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.name}</p>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.street} {store.sender.address.number}</p>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.code} {store.sender.address.region}</p>\\n\\t\\t\\t\\t\\t\\t<p>{getCountryData(store.receiver.address.country).name}</p>\\n\\t\\t\\t\\t\\t\\t<h3>IBAN</h3>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.iban}</p>\\n\\t\\t\\t\\t\\t\\t<div class=\\"split\\">\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<h3>{labels.currency.toUpperCase()}</h3>\\n\\t\\t\\t\\t\\t\\t\\t\\t<p>{currency}</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<h3>{labels.amount.toUpperCase()}</h3>\\n\\t\\t\\t\\t\\t\\t\\t\\t<p>{totals.ttc}</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div id=\\"qr\\">\\n\\t\\t\\t\\t\\t\\t<img src={qr} alt=\\"\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div id=\\"contact\\">\\n\\t\\t\\t\\t\\t\\t<h3>{labels.tva} N°</h3>\\n\\t\\t\\t\\t\\t\\t<p>{store.vatno}</p>\\n\\n\\t\\t\\t\\t\\t\\t<h3>REFERENCE</h3>\\n\\t\\t\\t\\t\\t\\t<p>{invoiceID}</p>\\n\\t\\t\\t\\t\\t\\t<h3>CONTACT</h3>\\n\\t\\t\\t\\t\\t\\t<p>{store.sender.address.mail}</p>\\n\\t\\t\\t\\t\\t\\t<div class=\\"split\\">\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<h3>{labels.currency.toUpperCase()}</h3>\\n\\t\\t\\t\\t\\t\\t\\t\\t<p>{currency}</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<h3>{labels.amount.toUpperCase()}</h3>\\n\\t\\t\\t\\t\\t\\t\\t\\t<p>{totals.ttc}</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n<SavePicker bind:store bind:savefiles bind:this={savePicker}></SavePicker>\\n\\n<style>\\n\\t@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nanum+Gothic+Coding:wght@400;700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Space+Mono:wght@400;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');\\n\\t:global(body) {\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tbackground-color: rgb(250, 250, 250);\\n\\t}\\n\\n\\t:global(:root) {\\n\\t\\t--font: 'IBM Plex Mono', monospace;\\n\\t\\tfont-family: var(--font);\\n\\t}\\n\\t#container * {\\n\\t\\tfont-family: var(--font);\\n\\t}\\n\\t#container {\\n\\t\\tbox-sizing: border-box;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\tjustify-content: space-around;\\n\\t\\tmax-width: 1500px;\\n\\t}\\n\\t#invoice * {\\n\\t\\tfont-weight: 400;\\n\\t\\tfont-style: normal;\\n\\t\\tfont-weight: 400;\\n\\t\\tfont-style: normal;\\n\\t}\\n\\t#container > div {\\n\\t\\tbox-sizing: border-box;\\n\\t\\toverflow-y: scroll;\\n\\t\\toverflow-x: visible;\\n\\t}\\n\\t#container > #formArea {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100vh;\\n\\t\\tpadding-left: 0;\\n\\t\\tpadding: 3rem;\\n\\t}\\n\\t#container > div::-webkit-scrollbar {\\n\\t\\tdisplay: none;\\n\\t}\\n\\t#container > #previewArea {\\n\\t\\tbox-sizing: border-box;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 950px;\\n\\t\\theight: 100vh;\\n\\t\\tpadding: 3rem 3rem 3rem 1.5rem;\\n\\t}\\n\\t#invoice {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tbackground-color: white !important;\\n\\t\\tbox-shadow: 0px 0px 1.5rem 0px rgba(0, 0, 0, 0.3);\\n\\t\\tborder-radius: 10px;\\n\\t\\twidth: 100%;\\n\\t\\taspect-ratio: 1/1.414;\\n\\t}\\n\\t#page {\\n\\t\\tuser-select: none;\\n\\t\\tbox-sizing: border-box;\\n\\t\\twidth: 100%;\\n\\t\\tmargin: auto;\\n\\t\\taspect-ratio: 1/1.414;\\n\\t\\tmax-width: 100%;\\n\\t\\tmax-height: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tposition: relative;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: space-between;\\n\\t\\tfont-size: 100%;\\n\\t\\t--font-small: calc(var(--page-width) * 0.018);\\n\\t\\t--font-medium: calc(var(--page-width) * 0.025);\\n\\t\\t--font-big: calc(var(--page-width) * 0.035);\\n\\t\\tpadding: calc(var(--page-width) * 0.05);\\n\\t\\tfont-family: var(--font);\\n\\t}\\n\\n\\t#page p {\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\tfont-size: var(--font-small);\\n\\t}\\n\\n\\t#page h3 {\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\tmargin-top: calc(var(--page-width) * 0.025);\\n\\t\\tmargin-bottom: calc(var(--page-width) * 0.008);\\n\\t\\tfont-size: var(--font-medium);\\n\\t\\tfont-weight: 800;\\n\\t}\\n\\t#page h3:first-child {\\n\\t\\tmargin-top: 0;\\n\\t}\\n\\n\\t#header {\\n\\t\\twidth: 100%;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\t#logo {\\n\\t\\twidth: calc(var(--page-width) * 0.25);\\n\\t}\\n\\n\\t#receiver {\\n\\t\\ttext-align: end;\\n\\t}\\n\\t#body {\\n\\t\\tfont-size: var(--font-small);\\n\\t\\tmin-height: 30%;\\n\\t\\tmax-height: 60%;\\n\\t\\toverflow: hidden;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t#footer {\\n\\t\\tmin-height: calc(var(--page-width) * 0.32);\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tfont-size: var(--font-small);\\n\\t}\\n\\n\\t#footer h3 {\\n\\t\\tfont-size: var(--font-small);\\n\\t\\tcolor: rgb(170, 170, 170);\\n\\t}\\n\\n\\t#footer #qr {\\n\\t\\twidth: calc(100% / 3);\\n\\t}\\n\\t#qr img {\\n\\t\\twidth: calc(100%);\\n\\t}\\n\\t#footer .split {\\n\\t\\tdisplay: flex;\\n\\t\\tmargin-top: calc(var(--page-width) * 0.025);\\n\\t\\twidth: 100%;\\n\\t}\\n\\t#footer .split div {\\n\\t\\twidth: 100%;\\n\\t}\\n\\t#footer #contact {\\n\\t\\talign-items: left;\\n\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: calc(100% / 3);\\n\\t\\tpadding-left: 2%;\\n\\t}\\n\\t#footer #info {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: calc(100% / 3);\\n\\t\\tpadding-right: 2%;\\n\\t}\\n\\n\\t.save {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\twidth: 100%;\\n\\t\\tgap: 1rem;\\n\\t}\\n\\n\\t@media screen and (max-width: 850px) {\\n\\t\\t#container {\\n\\t\\t\\tdisplay: block;\\n\\t\\t\\toverscroll-behavior-x: contain;\\n\\t\\t\\tscroll-snap-type: x mandatory;\\n\\t\\t\\tmax-width: 100vw;\\n\\t\\t\\tmax-height: 100vh;\\n\\t\\t\\toverflow: scroll;\\n\\t\\t}\\n\\n\\t\\t#container > div {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tscroll-snap-align: center;\\n\\t\\t}\\n\\t\\t#container #previewArea {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t\\t#container #formArea {\\n\\t\\t\\tpadding: 1rem;\\n\\t\\t\\tmin-width: 100vw;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwZC,QAAQ,qcAAqc,CACrc,IAAM,CACb,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CAEQ,KAAO,CACd,MAAM,CAAE,0BAA0B,CAClC,WAAW,CAAE,IAAI,MAAM,CACxB,CACA,yBAAU,CAAC,eAAE,CACZ,WAAW,CAAE,IAAI,MAAM,CACxB,CACA,wCAAW,CACV,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,YAAY,CAC7B,SAAS,CAAE,MACZ,CACA,uBAAQ,CAAC,eAAE,CACV,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACb,CACA,yBAAU,CAAG,kBAAI,CAChB,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,OACb,CACA,yBAAU,CAAG,wBAAU,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,YAAY,CAAE,CAAC,CACf,OAAO,CAAE,IACV,CACA,yBAAU,CAAG,kBAAG,mBAAoB,CACnC,OAAO,CAAE,IACV,CACA,yBAAU,CAAG,2BAAa,CACzB,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,MACzB,CACA,sCAAS,CACR,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,KAAK,CAAC,UAAU,CAClC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACjD,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,CAAC,CAAC,KACjB,CACA,mCAAM,CACL,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,CAAC,CAAC,KAAK,CACrB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,+BAA+B,CAC7C,aAAa,CAAE,+BAA+B,CAC9C,UAAU,CAAE,+BAA+B,CAC3C,OAAO,CAAE,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACvC,WAAW,CAAE,IAAI,MAAM,CACxB,CAEA,oBAAK,CAAC,gBAAE,CACP,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,YAAY,CAC5B,CAEA,oBAAK,CAAC,iBAAG,CACR,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAC3C,aAAa,CAAE,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAC9C,SAAS,CAAE,IAAI,aAAa,CAAC,CAC7B,WAAW,CAAE,GACd,CACA,oBAAK,CAAC,iBAAE,YAAa,CACpB,UAAU,CAAE,CACb,CAEA,qCAAQ,CACP,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAClB,CAEA,mCAAM,CACL,KAAK,CAAE,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,CACrC,CAEA,uCAAU,CACT,UAAU,CAAE,GACb,CACA,mCAAM,CACL,SAAS,CAAE,IAAI,YAAY,CAAC,CAC5B,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,GAAG,CACf,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IACR,CAEA,qCAAQ,CACP,UAAU,CAAE,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC1C,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,SAAS,CAAE,IAAI,YAAY,CAC5B,CAEA,sBAAO,CAAC,iBAAG,CACV,SAAS,CAAE,IAAI,YAAY,CAAC,CAC5B,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CAEA,sBAAO,CAAC,kBAAI,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CACrB,CACA,kBAAG,CAAC,kBAAI,CACP,KAAK,CAAE,KAAK,IAAI,CACjB,CACA,sBAAO,CAAC,qBAAO,CACd,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAC3C,KAAK,CAAE,IACR,CACA,sBAAO,CAAC,MAAM,CAAC,kBAAI,CAClB,KAAK,CAAE,IACR,CACA,sBAAO,CAAC,uBAAS,CAChB,WAAW,CAAE,IAAI,CAEjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACrB,YAAY,CAAE,EACf,CACA,sBAAO,CAAC,oBAAM,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACrB,aAAa,CAAE,EAChB,CAEA,mCAAM,CACL,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IACN,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACpC,wCAAW,CACV,OAAO,CAAE,KAAK,CACd,qBAAqB,CAAE,OAAO,CAC9B,gBAAgB,CAAE,CAAC,CAAC,SAAS,CAC7B,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,MACX,CAEA,yBAAU,CAAG,kBAAI,CAChB,KAAK,CAAE,IAAI,CACX,iBAAiB,CAAE,MACpB,CACA,yBAAU,CAAC,2BAAa,CACvB,OAAO,CAAE,IACV,CACA,yBAAU,CAAC,wBAAU,CACpB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KACZ,CACD"}`
};
function pad(num, size) {
  num = num.toString();
  while (num.length < size)
    num = "0" + num;
  return num;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currency;
  let labels;
  let invoiceID;
  let qrString;
  let { data } = $$props;
  let defaults = data.contents;
  let countriesData = Array.from(Object.entries(countries));
  let countriesList = countriesData.map((entry) => [entry[0], entry[1].name]);
  let totals = {};
  let store = structuredClone(defaults);
  let savefiles = [];
  let savePicker;
  const date = /* @__PURE__ */ new Date();
  let year = date.getFullYear().toString();
  let formatDate = `${pad(date.getDate(), 2)}.${pad(date.getMonth() + 1, 2)}.${year.slice(2)}`;
  let pw = 0;
  let qr = "";
  async function generateQR(text) {
    var opts = {
      margin: 5,
      color: { dark: "#000000", light: "#ffffff00" }
    };
    return await QRCode.toDataURL(text, opts);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    currency = store.currencyToggle ? "EUR" : "CHF";
    labels = store.langToggle ? store.labelsFR : store.labelsEN;
    invoiceID = `I-${store.project.name.slice(0, 3).toLocaleUpperCase()}${pad(store.project.number, 2)}${year.slice(2)}`;
    qrString = `SPC
0200
1
${store.sender.iban}
S
${store.sender.name}
${store.sender.address.street}
${store.sender.address.number}
${store.sender.address.code}
${store.sender.address.region}
${store.sender.address.country}







${totals.ttc}
${currency}
S
${store.receiver.name}


${store.receiver.address.code}
${store.receiver.address.region}
${store.receiver.address.country}
SCOR

${invoiceID}
EPD`;
    {
      generateQR(qrString).then((url) => qr = url);
    }
    $$rendered = `<div id="container" class="svelte-16owego"><div id="formArea" class="svelte-16owego"><div id="form" class="svelte-16owego">${validate_component(Section, "Section").$$render($$result, { title: "Sender" }, {}, {
      default: () => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          { label: "name", value: store.sender.name },
          {
            value: ($$value) => {
              store.sender.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "street",
            value: store.sender.address.street
          },
          {
            value: ($$value) => {
              store.sender.address.street = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            label: "N°",
            value: store.sender.address.number
          },
          {
            value: ($$value) => {
              store.sender.address.number = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            label: "Code",
            value: store.sender.address.code
          },
          {
            value: ($$value) => {
              store.sender.address.code = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Region",
            value: store.sender.address.region
          },
          {
            value: ($$value) => {
              store.sender.address.region = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "options",
            options: countriesList,
            label: "Country",
            value: store.sender.address.country
          },
          {
            value: ($$value) => {
              store.sender.address.country = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "mail",
            value: store.sender.address.mail
          },
          {
            value: ($$value) => {
              store.sender.address.mail = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "website",
            value: store.sender.address.website
          },
          {
            value: ($$value) => {
              store.sender.address.website = $$value;
              $$settled = false;
            }
          },
          {}
        )} <br class="svelte-16owego">`;
      }
    })} ${validate_component(Section, "Section").$$render($$result, { title: "Receiver" }, {}, {
      default: () => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "name",
            value: store.receiver.name
          },
          {
            value: ($$value) => {
              store.receiver.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "street",
            value: store.receiver.address.street
          },
          {
            value: ($$value) => {
              store.receiver.address.street = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            label: "N°",
            value: store.receiver.address.number
          },
          {
            value: ($$value) => {
              store.receiver.address.number = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            label: "Code",
            value: store.receiver.address.code
          },
          {
            value: ($$value) => {
              store.receiver.address.code = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Region",
            value: store.receiver.address.region
          },
          {
            value: ($$value) => {
              store.receiver.address.region = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "options",
            options: countriesList,
            label: "Country",
            value: store.receiver.address.country
          },
          {
            value: ($$value) => {
              store.receiver.address.country = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Section, "Section").$$render($$result, { title: "Project" }, {}, {
      default: () => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          { label: "Name", value: store.project.name },
          {
            value: ($$value) => {
              store.project.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Invoice N°",
            value: store.project.number
          },
          {
            value: ($$value) => {
              store.project.number = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Contact",
            value: store.project.contact
          },
          {
            value: ($$value) => {
              store.project.contact = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Section, "Section").$$render($$result, { title: "Services" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, { type: "big", label: "+ row  (•◡•) /" }, {}, {})} ${each(store.services, (entry) => {
          return `${validate_component(RowInput, "RowInput").$$render(
            $$result,
            { labels, entry },
            {
              entry: ($$value) => {
                entry = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}`;
      }
    })} ${validate_component(Section, "Section").$$render($$result, { title: "Payment" }, {}, {
      default: () => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "iban",
            label: "IBAN",
            value: store.sender.iban
          },
          {
            value: ($$value) => {
              store.sender.iban = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "toggle",
            label: "Currency",
            toggleValues: { on: "EUR", off: "CHF" },
            flipped: store.currencyToggle
          },
          {
            flipped: ($$value) => {
              store.currencyToggle = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "toggle",
            label: "VAT exempt",
            toggleValues: { on: "ON", off: "OFF" },
            flipped: store.exemptToggle
          },
          {
            flipped: ($$value) => {
              store.exemptToggle = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "toggle",
            label: "VAT incl.",
            toggleValues: { on: "ON", off: "OFF" },
            flipped: store.tvaToggle
          },
          {
            flipped: ($$value) => {
              store.tvaToggle = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            label: "VAT %",
            value: store.rate
          },
          {
            value: ($$value) => {
              store.rate = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            label: "VAT N°",
            value: store.vatno
          },
          {
            value: ($$value) => {
              store.vatno = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Section, "Section").$$render($$result, { title: "Controls" }, {}, {
      default: () => {
        return `<div id="controls" class="svelte-16owego"><div class="svelte-16owego">${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "toggle",
            label: "Language",
            toggleValues: { on: "FR", off: "EN" },
            flipped: store.langToggle
          },
          {
            flipped: ($$value) => {
              store.langToggle = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "toggle",
            label: "Logo",
            flipped: store.logo
          },
          {
            flipped: ($$value) => {
              store.logo = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "button",
            label: "save defaults",
            btnText: "SAVE"
          },
          {},
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "button",
            label: "reset defaults",
            btnText: "RESET"
          },
          {},
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "button",
            label: "clear defaults",
            btnText: "CLEAR"
          },
          {},
          {}
        )}</div>`;
      }
    })} <div class="save svelte-16owego">${validate_component(Button, "Button").$$render(
      $$result,
      {
        col: "green",
        type: "big",
        label: "GET JSON"
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        col: "green",
        type: "big",
        label: " ★LOAD JSON★"
      },
      {},
      {}
    )}</div> <div class="save svelte-16owego">${validate_component(Button, "Button").$$render(
      $$result,
      {
        col: "green",
        type: "big",
        label: "★SAVE★"
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        col: "green",
        type: "big",
        label: " ★LOAD★"
      },
      {},
      {}
    )}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        col: "green",
        type: "big",
        label: "✱ download ⸜(രᴗര๑)⸝ ✱"
      },
      {},
      {}
    )}</div></div> <div id="previewArea" class="svelte-16owego"><div id="invoice" class="svelte-16owego"><div id="page" style="${"--page-width:" + escape(pw, true)}" class="svelte-16owego"><div id="header" class="svelte-16owego"><div id="sender" class="svelte-16owego">${store.logo ? `<div id="logo" class="svelte-16owego">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div> <p class="svelte-16owego">${escape(store.sender.name)}</p>` : `<h3 class="svelte-16owego">${escape(store.sender.name)}</h3>`} <p class="svelte-16owego">${escape(store.sender.address.street)} ${escape(store.sender.address.number)}</p> <p class="svelte-16owego">${escape(store.sender.address.code)} ${escape(store.sender.address.region)}</p> <p class="svelte-16owego">${escape(getCountryData(store.sender.address.country).name)} ${escape(store.sender.address.country)}</p> <p class="svelte-16owego">${escape(store.sender.address.mail)}</p> <p class="svelte-16owego">${escape(store.sender.address.website)}</p></div> <div id="receiver" class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.invoice)}</h3> <p class="svelte-16owego">${escape(invoiceID)}</p> <p class="svelte-16owego">${escape(formatDate)}</p> <h3 class="svelte-16owego">${escape(store.receiver.name)}</h3> <p class="svelte-16owego">${escape(store.receiver.address.street)} ${escape(store.receiver.address.number)}</p> <p class="svelte-16owego">${escape(store.receiver.address.code)} ${escape(store.receiver.address.region)}</p> <p class="svelte-16owego">${escape(getCountryData(store.receiver.address.country).name)} ${escape(store.receiver.address.country)}</p></div></div> <div id="body" class="svelte-16owego"><div class="svelte-16owego"><div id="table" class="svelte-16owego">${validate_component(Table, "Table").$$render(
      $$result,
      {
        currencyToggle: store.currencyToggle,
        exemptToggle: store.exemptToggle,
        tvaToggle: store.tvaToggle,
        tva: store.rate,
        services: store.services,
        labels,
        totals
      },
      {
        totals: ($$value) => {
          totals = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div> <div id="footer" class="svelte-16owego"><div id="info" class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.account.toUpperCase())}</h3> <p class="svelte-16owego">${escape(store.sender.name)}</p> <p class="svelte-16owego">${escape(store.sender.address.street)} ${escape(store.sender.address.number)}</p> <p class="svelte-16owego">${escape(store.sender.address.code)} ${escape(store.sender.address.region)}</p> <p class="svelte-16owego">${escape(getCountryData(store.receiver.address.country).name)}</p> <h3 class="svelte-16owego" data-svelte-h="svelte-xdjhkk">IBAN</h3> <p class="svelte-16owego">${escape(store.sender.iban)}</p> <div class="split svelte-16owego"><div class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.currency.toUpperCase())}</h3> <p class="svelte-16owego">${escape(currency)}</p></div> <div class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.amount.toUpperCase())}</h3> <p class="svelte-16owego">${escape(totals.ttc)}</p></div></div></div> <div id="qr" class="svelte-16owego"><img${add_attribute("src", qr, 0)} alt="" class="svelte-16owego"></div> <div id="contact" class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.tva)} N°</h3> <p class="svelte-16owego">${escape(store.vatno)}</p> <h3 class="svelte-16owego" data-svelte-h="svelte-14mctv5">REFERENCE</h3> <p class="svelte-16owego">${escape(invoiceID)}</p> <h3 class="svelte-16owego" data-svelte-h="svelte-qdpbsu">CONTACT</h3> <p class="svelte-16owego">${escape(store.sender.address.mail)}</p> <div class="split svelte-16owego"><div class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.currency.toUpperCase())}</h3> <p class="svelte-16owego">${escape(currency)}</p></div> <div class="svelte-16owego"><h3 class="svelte-16owego">${escape(labels.amount.toUpperCase())}</h3> <p class="svelte-16owego">${escape(totals.ttc)}</p></div></div></div></div></div></div></div></div> ${validate_component(SavePicker, "SavePicker").$$render(
      $$result,
      { store, savefiles, this: savePicker },
      {
        store: ($$value) => {
          store = $$value;
          $$settled = false;
        },
        savefiles: ($$value) => {
          savefiles = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          savePicker = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
