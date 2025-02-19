import{j as e}from"./index-CqUxuoBb.js";import{a as c}from"./routing-vCLUgvyj.js";import"./fontawesome-react-DZpL5_7X.js";import"./react-core-DbHEDQBy.js";import"./fontawesome-core-CvPWi8JN.js";import"./fontawesome-brands-BOo1eGpv.js";import"./fontawesome-solid-BVvy6kF4.js";function b(){const[r,a]=c.useState({message:"",isSuccess:null}),t=async o=>{o.preventDefault(),a({message:"Sending message...",isSuccess:null});const s=new FormData(o.target);s.append("access_key","37935aa7-15e9-4a89-999f-69191d8b614c");try{const l=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:s})).json();l.success?(a({message:"Thank you for your message! I will get back to you as soon as possible.",isSuccess:!0}),o.target.reset()):(console.log("Error",l),a({message:"Something went wrong while sending the message. Please contact me via email or social media links shown below.",isSuccess:!1}))}catch(n){console.error("Error submitting form:",n),a({message:"A technical error occurred. You can reach me directly at J.Brannelid@icloud.com or through social media.",isSuccess:!1})}};return e.jsx("section",{className:"min-h-screen",children:e.jsx("div",{className:"container px-6 mx-auto",children:e.jsxs("div",{className:"lg:flex lg:items-center",children:[e.jsxs("div",{className:"lg:w-1/2 lg:mx-10",children:[e.jsx("h1",{className:"text-2xl font-semibold capitalize lg:text-3xl",children:"Let's talk"}),e.jsx("p",{className:"mt-4 opacity-90",children:"I'd be happy to hear from you! Feel free to reach out via email, contact form or provided social media links below"}),e.jsx("div",{className:"mt-6 space-y-8 md:mt-8"}),e.jsxs("form",{className:"mt-12",onSubmit:t,children:[e.jsxs("div",{className:"-mx-2 md:items-center md:flex",children:[e.jsxs("div",{className:"flex-1 px-2",children:[e.jsx("label",{className:"block mb-2 text-sm",htmlFor:"fullName",children:"Full Name"}),e.jsx("input",{type:"text",id:"fullName",name:"name",placeholder:"Name",required:!0,"aria-required":"true",className:`block w-full px-5 py-3 mt-2 \r
                    bg-[var(--secondary-bg)]\r
                    text-[var(--placeholder-color)]\r
                    placeholder-[var(--input-border-color)]\r
                    border-2\r
                    border-[var(--accent-orange-color)]\r
                    rounded-lg\r
                    transition-all\r
                    duration-200\r
                    ease-in-out\r
                    hover:border-[var(--accent1-orange-color)]\r
                    focus:border-[var(--accent1-orange-color)]\r
                    focus:ring-1\r
                    focus:ring-[var(--accent1-orange-color)]\r
                    focus:outline-none\r
                    focus:shadow-md`})]}),e.jsxs("div",{className:"flex-1 px-2 mt-4 md:mt-0",children:[e.jsx("label",{className:"block mb-2 text-sm",htmlFor:"email",children:"Email address"}),e.jsx("input",{type:"email",id:"email",name:"email",placeholder:"email@example.com",required:!0,"aria-required":"true",className:`block w-full px-5 py-3 mt-2 \r
                    bg-[var(--secondary-bg)]\r
                    text-[var(--placeholder-color)]\r
                    placeholder-[var(--input-border-color)]\r
                    border-2\r
                    border-[var(--accent-orange-color)]\r
                    rounded-lg\r
                    transition-all\r
                    duration-200\r
                    ease-in-out\r
                    hover:border-[var(--accent1-orange-color)]\r
                    focus:border-[var(--accent1-orange-color)]\r
                    focus:ring-1\r
                    focus:ring-[var(--accent1-orange-color)]\r
                    focus:outline-none\r
                    focus:shadow-md`})]})]}),e.jsxs("div",{className:"w-full mt-4",children:[e.jsx("label",{className:"block mb-2 text-sm",htmlFor:"message",children:"Write your message"}),e.jsx("textarea",{className:`block w-full h-32 px-5 py-3 mt-2                     \r
                  bg-[var(--secondary-bg)]\r
                  text-[var(--placeholder-color)]\r
                  placeholder-[var(--input-border-color)]\r
                  border-2\r
                  border-[var(--accent-orange-color)]\r
                  rounded-lg\r
                  transition-all\r
                  duration-200\r
                  ease-in-out\r
                  hover:border-[var(--accent1-orange-color)]\r
                  focus:border-[var(--accent1-orange-color)]\r
                  focus:ring-1\r
                  focus:ring-[var(--accent1-orange-color)]\r
                  focus:outline-none\r
                  focus:shadow-md`,id:"message",name:"message",placeholder:"Message....",required:!0,"aria-required":"true"})]}),e.jsxs("button",{type:"submit",className:"relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full mt-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2",children:[e.jsx("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]"}),e.jsx("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-red-400/60 to-amber-600/60 text-sm backdrop-blur-3xl transition-all duration-300 hover:bg-amber-600",children:"Get in touch"})]})]}),r.message&&e.jsx("div",{className:`mt-4 p-4 rounded-lg ${r.isSuccess===null?"bg-gray-100/80 text-gray-800":r.isSuccess?"bg-green-100/80 text-green-600":"bg-red-100/80 text-red-600"} text-center transition-all duration-300`,children:e.jsx("p",{children:r.message})})]}),e.jsx("div",{className:"lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10",children:e.jsx("img",{className:"mt-20 hidden object-cover mx-auto rounded-full lg:block shrink-0 w-80 h-80",src:"./assets/portrait/IMG_2402.webp",alt:"Contact illustration"})})]})})})}export{b as default};
