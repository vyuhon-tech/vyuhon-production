// data/services.ts
export interface Service {
  num: string;
  title: string;
  desc: string;
  chips: string[];
  color: string;
  iconPath: string;
  barColor: string;
}

export const SERVICES: Service[] = [
  { num:"01", title:"Strategy & Advisory", desc:"AI roadmapping, digital transformation, and technology consulting that turns ambition into an executable plan.", chips:["AI Roadmapping","Digital Transformation","AI Governance"], color:"var(--purple)", barColor:"var(--purple)",
    iconPath:"M3 12l3-3 4 4 6-6 5 5" },
  { num:"02", title:"Product & Innovation", desc:"Discovery, roadmaps, and MVPs — full product lifecycle management from first concept to market launch.", chips:["Product Discovery","Roadmaps","MVP Development"], color:"var(--teal)", barColor:"var(--teal)",
    iconPath:"M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" },
  { num:"03", title:"Experience Design", desc:"UX research, UI design, design systems and branding — making complex systems feel effortless to use.", chips:["UX Research","UI Design","Design Systems"], color:"var(--blue)", barColor:"var(--blue)",
    iconPath:"M3 4h18v14H3zM8 21h8M12 18v3" },
  { num:"04", title:"AI & Data", desc:"AI agents, GenAI, LLM integration, automation and analytics — end-to-end AI and data engineering at scale.", chips:["AI Agents","GenAI","LLM Integration"], color:"var(--amber)", barColor:"var(--amber)",
    iconPath:"M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" },
  { num:"05", title:"Engineering", desc:"Full-stack, mobile, cloud, DevOps and QA — code built to ship on time, perform under load, and stay maintainable.", chips:["Full-Stack","Mobile","Cloud & DevOps"], color:"var(--purple)", barColor:"var(--purple)",
    iconPath:"M16 18l6-6-6-6M8 6l-6 6 6 6" },
  { num:"06", title:"Enterprise Implementation", desc:"End-to-end implementation of any enterprise solution — deployment, integration, migration, and adoption, tailored to your requirements regardless of platform or product.", chips:["Implementation & Deployment","Integration & Migration","Adoption & Change"], color:"#DC2626", barColor:"#DC2626",
    iconPath:"M4 3h16v18H4zM8 8h8M8 12h8M8 16h5" },
  { num:"07", title:"Managed Services", desc:"Ongoing support, monitoring, enhancements and optimisation — we stay after launch so what we build keeps improving.", chips:["Support","Monitoring","Optimisation"], color:"var(--teal)", barColor:"var(--teal)",
    iconPath:"M12 8v4l3 3M12 3a9 9 0 100 18A9 9 0 0012 3z" },
];

export const JOURNEY_STEPS = ["Understand","Discover","Strategize","Design","Build","Implement","Adopt","Optimize","Scale"];

export const PILLARS = [
  { num:"01", title:"Strategy & Advisory", sub:"AI, Digital Transformation, Consulting" },
  { num:"02", title:"Product & Innovation", sub:"Discovery, Roadmaps, MVPs" },
  { num:"03", title:"Experience Design", sub:"UX Research, UI/UX, Design Systems" },
  { num:"04", title:"AI & Data", sub:"Agents, GenAI, Automation, LLMs" },
  { num:"05", title:"Engineering", sub:"Full-Stack, Mobile, Cloud, DevOps" },
  { num:"06", title:"Enterprise Implementation", sub:"Deployment, Integration, Migration, Adoption" },
  { num:"07", title:"Managed Services", sub:"Support, Monitoring, Optimisation" },
];
