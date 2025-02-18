import{c as o,j as e}from"./index-ZosuQzyq.js";import{a}from"./routing-vCLUgvyj.js";import"./react-core-DbHEDQBy.js";import"./fontawesome-react-DZpL5_7X.js";import"./fontawesome-core-CvPWi8JN.js";import"./fontawesome-brands-BOo1eGpv.js";import"./fontawesome-solid-BVvy6kF4.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],u=o("ExternalLink",g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],j=o("Github",f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],y=o("LoaderCircle",b),P=()=>{const[l,i]=a.useState([]),[d,n]=a.useState(!0),[c,m]=a.useState(null);a.useEffect(()=>{(async()=>{try{n(!0);const r=await fetch("https://api.github.com/users/jbrannelid/repos");if(!r.ok)throw new Error("Failed to fetch projects");const p=(await r.json()).filter(s=>["TWCounters","SchoolSystem","ChessBoard"].includes(s.name)).map(s=>({...s,category:h(s.name),colorTheme:x(s.name)}));i(p)}catch(r){m("Failed to load projects. Please try again later."),console.error("Error fetching projects:",r)}finally{n(!1)}})()},[]);const h=t=>({TWCounters:"Web Application",SchoolSystem:"Backend System"})[t]||"Other",x=t=>({TWCounters:"from-blue-500/30 to-purple-500/40",SchoolSystem:"from-green-500/30 to-teal-500/40",ChessBoard:"from-orange-500/30 to-red-500/40"})[t]||"from-gray-500/20 to-slate-500/40";return d?e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:e.jsx(y,{className:"w-8 h-8 animate-spin text-[var(--accent-orange-color)]"})}):c?e.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen gap-4",children:e.jsxs("div",{className:"text-red-500 text-center max-w-md p-4 bg-red-500/10 rounded-lg",children:[e.jsx("p",{children:c}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-[var(--accent-orange-color)] rounded-lg hover:bg-[var(--accent1-orange-color)] transition-colors",children:"Try Again"})]})}):e.jsxs("main",{className:"container mx-auto px-4",children:[e.jsxs("header",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Featured Projects"}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg opacity-90",children:"Explore my selected projects from GitHub, each representing key milestones in my development journey"})]}),e.jsx("div",{className:"grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:l.map(t=>e.jsxs("article",{className:`group relative overflow-hidden rounded-xl bg-gradient-to-r ${t.colorTheme} 
              p-6 transition-all duration-300 hover:scale-[1.03] flex flex-col
              border border-white/10 backdrop-blur-sm`,children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm px-3 py-1 rounded-full bg-white/10",children:t.category}),e.jsx("span",{className:"text-sm opacity-60",children:new Date(t.created_at).toLocaleDateString()})]}),e.jsx("h2",{className:"text-2xl font-bold mb-2",children:t.name}),e.jsx("p",{className:"text-sm opacity-80 mb-4 line-clamp-3",children:t.description||"No description available"})]}),e.jsxs("div",{className:"mt-auto space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-3 w-3 rounded-full bg-[var(--accent-orange-color)]"}),e.jsx("span",{className:"text-sm",children:t.language})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 \r
                    hover:bg-white/20 transition-colors duration-300`,children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Code"})]}),t.homepage&&e.jsxs("a",{href:t.homepage,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 \r
                      hover:bg-white/20 transition-colors duration-300`,children:[e.jsx(u,{className:"w-4 h-4"}),e.jsx("span",{children:"Live Demo"})]})]})]})]},t.id))})]})};export{P as default};
