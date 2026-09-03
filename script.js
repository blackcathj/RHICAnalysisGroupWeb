const members = [
  { name: "Jin Huang", role: "Group Leader · sPHENIX Co-Spokesperson", areas: ["leadership", "sphenix", "ai"], tags: ["Leadership", "sPHENIX", "AI"], url: "https://www.bnl.gov/staff/jhuang" },
  { name: "Aihong Tang", role: "Deputy Group Leader · STAR spin, flow & CME", areas: ["leadership", "star"], tags: ["Leadership", "STAR"], url: "https://www.bnl.gov/staff/aihong" },
  { name: "Xiaoxuan Chu", role: "STAR Deputy Spokesperson · nuclear effects", areas: ["star"], tags: ["STAR"], url: "https://www.bnl.gov/staff/xchu" },
  { name: "Prithwish Tribedy", role: "STAR Editorial Board Co-Chair · transport & small systems", areas: ["star"], tags: ["STAR", "Transport"], url: "https://www.bnl.gov/staff/ptribedy" },
  { name: "Rongrong Ma", role: "STAR quarkonium, heavy flavor & jets", areas: ["star"], tags: ["STAR", "QGP"], url: "https://www.bnl.gov/staff/marr" },
  { name: "David P. Morrison", role: "sPHENIX Publication Board Chair · physics review", areas: ["sphenix"], tags: ["sPHENIX", "Publications"], url: "https://www.bnl.gov/staff/dave" },
  { name: "Christopher Pinkenburg", role: "sPHENIX Computing Coordinator", areas: ["sphenix", "ai"], tags: ["sPHENIX", "Computing"], url: "https://www.bnl.gov/staff/pinkenbu" },
  { name: "Mickey Chiu", role: "sPHENIX ultraperipheral physics & partnerships", areas: ["sphenix"], tags: ["sPHENIX", "Mentoring"], url: "https://www.bnl.gov/staff/chiu" },
  { name: "Rachid Nouicer", role: "PHENIX Executive Council · heavy flavor & INTT", areas: ["sphenix"], tags: ["PHENIX", "sPHENIX"], url: "https://www.bnl.gov/staff/nouicer" },
  { name: "Takao Sakaguchi", role: "sPHENIX Tracking Production Manager · quarkonium", areas: ["sphenix"], tags: ["sPHENIX", "PHENIX"], url: "https://www.bnl.gov/staff/takao" },
  { name: "Yeonju Go", role: "sPHENIX Jet Topical Group Convener · photons & AI", areas: ["sphenix", "ai"], tags: ["sPHENIX", "AI"], url: "https://www.bnl.gov/staff/ygo" },
  { name: "Eric Lancon", role: "RHIC data preservation & AI-assisted discovery", areas: ["ai"], tags: ["Data", "AI"], url: "https://www.bnl.gov/staff/elancon" },
  { name: "Dener De Souza Lemos", role: "Postdoctoral researcher · STAR nuclear effects & collectivity", areas: ["star"], tags: ["STAR", "Early career"], url: "https://www.bnl.gov/staff/ddesouzal" },
  { name: "Gabriel Reis Garcia", role: "Postdoctoral researcher · STAR nuclear modification", areas: ["star"], tags: ["STAR", "Early career"], url: "https://www.bnl.gov/staff/ggarcia" },
  { name: "Yuri Fisyak", role: "STAR reconstruction & simulation", areas: ["star"], tags: ["STAR", "Computing"], url: "https://www.bnl.gov/staff/fisyak" },
  { name: "Jerome Lauret", role: "Research & technical staff", areas: ["general"], tags: ["Group member"], url: "https://www.bnl.gov/staff/jeromel" },
  { name: "Ankush Reddy Kanuganti", role: "Research & technical staff", areas: ["general"], tags: ["Group member"], url: "https://www.bnl.gov/staff/akanugant" },
  { name: "Gene Van Buren", role: "Research & technical staff", areas: ["general"], tags: ["Group member"], url: "https://www.bnl.gov/staff/gene" },
  { name: "Jiangyong Jia", role: "Joint Appointment with Stony Brook University", areas: ["general"], tags: ["Joint appointment"], url: "https://www.bnl.gov/staff/jjia" },
  { name: "Jason Webb", role: "Research & technical staff", areas: ["general"], tags: ["Group member"], url: "https://www.bnl.gov/staff/jwebb" },
  { name: "Mariette I. Faulkner", role: "Research group member", areas: ["general"], tags: ["Group member"], url: "https://www.bnl.gov/staff/faulkner" }
];

const publications = [
  {
    date: "2026-08", category: "instrumentation", label: "Detectors & reconstruction",
    title: "The high level trigger and express data production at STAR",
    journal: "Nuclear Instruments and Methods in Physics Research A 1088, 171489 (2026)",
    people: "Aihong Tang", url: "https://doi.org/10.1016/j.nima.2026.171489"
  },
  {
    date: "2026-06-17", category: "spin", label: "Spin & gluon imaging",
    title: "Evidence of Spin-Interference Effects in Exclusive J/ψ Photoproduction in Ultraperipheral Heavy-Ion Collisions",
    journal: "Physical Review Letters 136, 242302 (2026)",
    people: "Prithwish Tribedy", url: "https://doi.org/10.1103/tcdb-ldh8"
  },
  {
    date: "2026-06", category: "quarkonium", label: "Quarkonium & heavy flavor",
    title: "Measurement of inclusive J/ψ production in Au+Au collisions at √sNN = 54.4 GeV at STAR",
    journal: "Physics Letters B 877, 140405 (2026)",
    people: "Rongrong Ma", url: "https://doi.org/10.1016/j.physletb.2026.140405"
  },
  {
    date: "2026-06", category: "instrumentation", label: "Detectors & reconstruction",
    title: "Beam test results of the Intermediate Silicon Tracker for sPHENIX",
    journal: "Nuclear Instruments and Methods in Physics Research A 1086, 171312 (2026)",
    people: "Rachid Nouicer", url: "https://doi.org/10.1016/j.nima.2026.171312"
  },
  {
    date: "2026-05-20", category: "ai", label: "AI & data",
    title: "Reducing Systematic Bias in Machine Learning Applications to Signal Extraction in High-Energy Nuclear Physics",
    journal: "Nuclear Science and Techniques 37, 145 (2026)",
    people: "Rongrong Ma", url: "https://doi.org/10.1007/s41365-026-01985-4"
  },
  {
    date: "2026-05-16", category: "ai", label: "AI & data",
    title: "A roadmap toward scaling, reasoning and self-evolving foundation models for nuclear and particle physics",
    journal: "International Journal of Modern Physics A 41, 2650086 (2026)",
    people: "Jin Huang · Yeonju Go", url: "https://doi.org/10.1142/S0217751X26500867"
  },
  {
    date: "2026-04", category: "ai", label: "AI & data",
    title: "FM4NPP: A Scaling Foundation Model for Nuclear and Particle Physics",
    journal: "ICLR 2026",
    people: "Jin Huang · Yeonju Go · Christopher Pinkenburg", url: "https://arxiv.org/abs/2508.14087"
  },
  {
    date: "2026-03-24", category: "quarkonium", label: "Quarkonium & heavy flavor",
    title: "Observation of Charmonium Sequential Suppression in Heavy-Ion Collisions at RHIC",
    journal: "Physical Review Letters 136, 122302 (2026)",
    people: "Rongrong Ma", url: "https://doi.org/10.1103/ghzh-kv8z"
  },
  {
    date: "2026-03-13", category: "ai", label: "AI & data",
    title: "Variable rate neural compression for sparse detector data",
    journal: "Patterns 7, 101452 (2026)",
    people: "Jin Huang · Yeonju Go", url: "https://doi.org/10.1016/j.patter.2025.101452"
  },
  {
    date: "2026-02-17", category: "spin", label: "Spin, flow & CME",
    title: "Measurement of the longitudinal flow-plane decorrelation using multiplane cumulants in Au+Au, Ru+Ru, and Zr+Zr collisions",
    journal: "Physical Review C 113, 024908 (2026)",
    people: "Prithwish Tribedy", url: "https://doi.org/10.1103/75tf-ljtk"
  },
  {
    date: "2026-02", category: "instrumentation", label: "Detectors & reconstruction",
    title: "The ladder and readout cables of intermediate silicon strip detector for sPHENIX",
    journal: "Nuclear Instruments and Methods in Physics Research A 1082, 171020 (2026)",
    people: "Rachid Nouicer", url: "https://www.sciencedirect.com/science/article/pii/S0168900225008228"
  },
  {
    date: "2026-02", category: "ai", label: "AI & data",
    title: "TPCpp-10M: Simulated proton-proton collisions in a time projection chamber for AI foundation models",
    journal: "Data in Brief 64, 112393 (2026)",
    people: "Jin Huang · Yeonju Go · Christopher Pinkenburg", url: "https://doi.org/10.1016/j.dib.2025.112393"
  },
  {
    date: "2026-01-23", category: "spin", label: "Spin, flow & CME",
    title: "Search for the chiral magnetic effect through beam energy dependence of charge separation using event shape selection",
    journal: "Physical Review C 113, 014912 (2026)",
    people: "Prithwish Tribedy", url: "https://doi.org/10.1103/PJ7S-9YM7"
  },
  {
    date: "2025-12-26", category: "spin", label: "Spin & polarization",
    title: "Energy Independence of the Collins Asymmetry in polarized p+p Collisions",
    journal: "Physical Review Letters 135, 261902 (2025)",
    people: "Xiaoxuan Chu", url: "https://doi.org/10.1103/jgsw-zhny"
  },
  {
    date: "2025-12-26", category: "quarkonium", label: "PHENIX physics",
    title: "Low-mass vector-meson production at forward rapidity in Au+Au collisions at 200 GeV",
    journal: "Physical Review C 112, 064918 (2025)",
    people: "Rachid Nouicer", url: "https://doi.org/10.1103/s25h-my1f"
  },
  {
    date: "2025-11-17", category: "transport", label: "Baryon transport",
    title: "Understanding baryon stopping at the BNL Relativistic Heavy Ion Collider top energies",
    journal: "Physical Review C 112, 054904 (2025)",
    people: "Prithwish Tribedy", url: "https://doi.org/10.1103/ghb2-4y3s"
  },
  {
    date: "2025-11", category: "spin", label: "Spin & polarization",
    title: "Hyperon global polarization in isobar Ru+Ru and Zr+Zr collisions at 200 GeV",
    journal: "Physics Letters B 870, 139891 (2025)",
    people: "Aihong Tang", url: "https://doi.org/10.1016/j.physletb.2025.139891"
  },
  {
    date: "2025-10-27", category: "ai", label: "AI & data",
    title: "Robust and Generalizable Background Subtraction on Images of Calorimeter Jets using Unsupervised Generative Learning",
    journal: "arXiv:2510.23717 (preprint)",
    people: "Yeonju Go · Jin Huang", url: "https://arxiv.org/abs/2510.23717"
  },
  {
    date: "2025-09-10", category: "qgp", label: "QGP, jets & photons",
    title: "Measurement of Two-Point Energy Correlators within Jets in p+p Collisions at √s = 200 GeV",
    journal: "Physical Review Letters 135, 111901 (2025)",
    people: "Rongrong Ma", url: "https://doi.org/10.1103/wv2t-dkgn"
  },
  {
    date: "2025-09", category: "spin", label: "Spin & polarization",
    title: "Probing spin and lifetime correlations in entangled hyperon-antihyperon pairs",
    journal: "Physics Letters B 868, 139820 (2025)",
    people: "Aihong Tang", url: "https://doi.org/10.1016/j.physletb.2025.139820"
  },
  {
    date: "2025-08-21", category: "qgp", label: "QGP, jets & photons",
    title: "Measurement of the transverse energy density in Au+Au collisions at √sNN = 200 GeV with the sPHENIX detector",
    journal: "Physical Review C 112, 024908 (2025)",
    people: "Mickey Chiu", url: "https://doi.org/10.1103/h8d5-swg6"
  },
  {
    date: "2025-08-12", category: "qgp", label: "QGP, jets & photons",
    title: "Measurement of charged hadron multiplicity in Au+Au collisions at √sNN = 200 GeV with the sPHENIX detector",
    journal: "JHEP 08 (2025) 075",
    people: "Mickey Chiu · Rachid Nouicer", url: "https://doi.org/10.1007/JHEP08%282025%29075"
  }
];

const categoryNames = {
  all: "All",
  qgp: "QGP + jets",
  quarkonium: "Quarkonium",
  transport: "Transport",
  spin: "Spin + flow",
  instrumentation: "Detectors",
  ai: "AI + data"
};

const memberGrid = document.querySelector("#memberGrid");
const memberCount = document.querySelector("#memberCount");
const memberSearch = document.querySelector("#memberSearch");
const memberFilterButtons = [...document.querySelectorAll("[data-member-filter]")];
let memberFilter = "all";

const initials = (name) => name
  .replace(/\bP\.\s/, "")
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map(part => part.replace(/[^A-Za-z]/g, "").charAt(0))
  .join("")
  .toUpperCase();

function renderMembers() {
  const query = memberSearch.value.trim().toLowerCase();
  const visible = members.filter(member => {
    const inFilter = memberFilter === "all" || member.areas.includes(memberFilter);
    const haystack = `${member.name} ${member.role} ${member.tags.join(" ")}`.toLowerCase();
    return inFilter && haystack.includes(query);
  });

  memberCount.textContent = `${visible.length} of ${members.length} group members`;
  memberGrid.innerHTML = visible.length ? visible.map(member => `
    <a class="member-card" data-area="${member.areas.join(" ")}" href="${member.url}" target="_blank" rel="noopener" aria-label="${member.name} — open BNL staff page">
      <span class="member-avatar" aria-hidden="true">${initials(member.name)}</span>
      <div>
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
        <div class="member-tags">${member.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
      <span class="member-profile-arrow" aria-hidden="true">↗</span>
    </a>
  `).join("") : `<p class="member-empty">No members match that search.</p>`;
}

memberFilterButtons.forEach(button => button.addEventListener("click", () => {
  memberFilter = button.dataset.memberFilter;
  memberFilterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", active);
  });
  renderMembers();
}));
memberSearch.addEventListener("input", renderMembers);
renderMembers();

const publicationGrid = document.querySelector("#publicationGrid");
const publicationFilters = document.querySelector("#publicationFilters");
const publicationCount = document.querySelector("#publicationCount");
const publicationSearch = document.querySelector("#publicationSearch");
let publicationFilter = "all";

publicationFilters.innerHTML = Object.entries(categoryNames).map(([key, name], index) => `
  <button class="filter ${index === 0 ? "active" : ""}" type="button" data-publication-filter="${key}" aria-pressed="${index === 0}">${name}</button>
`).join("");

function formatDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  const options = day
    ? { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }
    : { month: "short", year: "numeric", timeZone: "UTC" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(Date.UTC(year, (month || 1) - 1, day || 1)));
}

function publicationCard(publication) {
  return `
    <a class="publication-card" href="${publication.url}" target="_blank" rel="noopener">
      <div class="publication-topline">
        <span class="publication-tag">${publication.label}</span>
        <time class="publication-date" datetime="${publication.date}">${formatDate(publication.date)}</time>
      </div>
      <h3>${publication.title}</h3>
      <p class="publication-journal">${publication.journal}</p>
      <span class="publication-arrow" aria-hidden="true">↗</span>
    </a>`;
}

function renderPublications() {
  const query = publicationSearch.value.trim().toLowerCase();
  const visible = publications.filter(publication => {
    const inFilter = publicationFilter === "all" || publication.category === publicationFilter;
    const haystack = `${publication.title} ${publication.journal} ${publication.label}`.toLowerCase();
    return inFilter && haystack.includes(query);
  });
  publicationCount.textContent = `${visible.length} of ${publications.length} works shown`;
  publicationGrid.innerHTML = visible.length
    ? visible.map(publicationCard).join("")
    : `<p class="member-empty">No publications match that search.</p>`;
}

const publicationFilterButtons = [...document.querySelectorAll("[data-publication-filter]")];
publicationFilterButtons.forEach(button => button.addEventListener("click", () => {
  publicationFilter = button.dataset.publicationFilter;
  publicationFilterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", active);
  });
  renderPublications();
}));
publicationSearch.addEventListener("input", renderPublications);
renderPublications();

const modal = document.querySelector("#topicModal");
const modalTitle = document.querySelector("#topicModalTitle");
const modalList = document.querySelector("#topicModalList");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalAll = document.querySelector(".modal-all");
let modalTrigger = null;

function openTopic(topic, trigger) {
  modalTrigger = trigger;
  const list = publications.filter(publication => publication.category === topic);
  modalTitle.textContent = categoryNames[topic];
  modalList.innerHTML = list.map(publication => `
    <a class="modal-publication" href="${publication.url}" target="_blank" rel="noopener">
      <h3>${publication.title}</h3>
      <p>${formatDate(publication.date)} · ${publication.journal} ↗</p>
    </a>
  `).join("");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeTopic() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  modalTrigger?.focus();
}

document.querySelectorAll("[data-open-topic]").forEach(button => {
  button.addEventListener("click", () => openTopic(button.dataset.openTopic, button));
});
modalClose.addEventListener("click", closeTopic);
modalBackdrop.addEventListener("click", closeTopic);
modalAll.addEventListener("click", () => {
  closeTopic();
  publicationFilter = "all";
  publicationFilterButtons.forEach(button => {
    const active = button.dataset.publicationFilter === "all";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active);
  });
  publicationSearch.value = "";
  renderPublications();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeTopic();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const header = document.querySelector(".site-header");
const rail = document.querySelector(".section-rail");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const railLinks = [...document.querySelectorAll(".section-rail a")];
const lightSections = new Set(["mission", "people", "publications"]);

const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const id = visible.target.id;
  const isLight = lightSections.has(id);
  header.classList.toggle("on-light", isLight);
  rail.classList.toggle("on-light", isLight);
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
  railLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
}, { threshold: [0.2, 0.45, 0.7] });
document.querySelectorAll("main > .panel").forEach(section => sectionObserver.observe(section));

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !open);
  menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("open", !open);
});
mainNav.addEventListener("click", event => {
  if (!event.target.closest("a")) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  mainNav.classList.remove("open");
});
