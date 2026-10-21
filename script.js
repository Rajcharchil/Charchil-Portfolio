const $ = (s) => document.querySelector(s);
const filled = (value) => typeof value === "string" && value.trim() !== "" && value.trim() !== "#";
const esc = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const visible = (list) => (Array.isArray(list) ? list : []).filter((item) => item && item.hidden !== true);
const LOOKUP = Object.assign({}, ICONS, ISSUERS, COMPANIES);
const NAME_TO_ICON = {
  github: "github", linkedin: "linkedin", email: "mail", "let's talk ↗": "mail",
  "download cv": "download", "download resume": "download", repository: "github",
  "live demo": "external-link", "download apk": "android", documentation: "book",
  certificate: "filetext",
  java: "java", kotlin: "kotlin", python: "python", javascript: "javascript",
  "c++": "cplusplus", html: "html5", css: "css3", "html and css": ["html5", "css3"],
  sql: "database", selenium: "selenium", "selenium webdriver": "selenium",
  appium: "appium", testng: "testng", junit: "junit", restassured: "restassured",
  "page object model": "pom", retrofit: "retrofit", "json server": "jsonserver",
  "rest api": "restapi", "api testing": "restapi", "csv / json data": "filejson",
  xml: "filecode", xpath: "filecode", "data-driven testing": "table",
  arima: "chart", lstm: "chart", postman: "postman", swagger: "swagger",
  "swagger (openapi)": "swagger", jira: "jira", "jenkins (ci/cd)": "jenkins",
  jenkins: "jenkins", git: "git", "git and github": ["git", "github"],
  "github actions": "githubactions", linux: "linux",
  "android (kotlin)": "android", "android studio": "androidstudio",
  "android testing": "android", "android development": "android",
  eclipse: "eclipse", firebase: "firebase", "allure reports": "allure",
  tensorflow: "tensorflow", opencv: "opencv", streamlit: "streamlit",
  "gemini api": "googlegemini", lottie: "lottie",
  "manual testing": "clipboard", functional: "clipboard", regression: "clipboard",
  smoke: "clipboard", sanity: "clipboard", "test case design": "listchecks",
  "cross-browser": "globe", "web testing": "globe", "web development": "globe",
  "web test automation": "globe", "responsive design": "window",
  "sdlc and stlc": "workflow", "defect tracking": "bug",
  "agile / scrum": "users", agile: "users", "automation testing": "bot",
  "data analysis": "chartcol", "llms and agentic ai (coursework)": "sparkles",
  "claude ai": "anthropic", claude: "anthropic", anthropic: "anthropic",
  chatgpt: "openai", openai: "openai", "prompt engineering": "sparkles",
  "agentic ai / ai agents": "workflow", "generative ai & llms": "sparkles",
  "ai-assisted testing": "bot", "cursor (ai ide)": "cursor", cursor: "cursor",
  resilience: "heart", perseverance: "repeat", "rapid learning": "zap",
  "inquisitive thinking": "search", "team collaboration": "handshake",
  "mobile test automation": "smartphone", "ai / hackathon": "sparkles",
  "vedapixel tech solutions pvt. ltd.": "vedapixel", techugo: "techugo",
  "zidio development": "zidio",
  "lovely professional university, punjab": "lpu",
  "lovely professional university": "lpu",
  "holy cross public school, muzaffarpur, bihar": "holycross",
  hackai: "hackai"
};

const initialsOf = (label) => {
  const words = String(label || "").replace(/[^A-Za-z0-9+]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const MONO_COLORS = ["#2563EB", "#059669", "#D97706", "#9333EA", "#DC2626", "#0891B2", "#DB2777", "#0E7490"];
const monoSrc = (label) => {
  const t = initialsOf(label);
  let hash = 0;
  for (const ch of String(label || "")) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const bg = MONO_COLORS[hash % MONO_COLORS.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${bg}"/><text x="16" y="21" text-anchor="middle" font-family="Manrope,system-ui,sans-serif" font-size="12" font-weight="700" fill="#ffffff">${t}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const logoTile = (keys, size, decorative, labelHint) => {
  const list = Array.isArray(keys) ? keys : [keys];
  return list.map((key) => {
    const item = typeof key === "string" ? LOOKUP[key] : null;
    const label = (item && item.label) || labelHint || (typeof key === "string" ? key : "?");
    const src = item && item.src ? item.src : monoSrc(label);
    const alt = decorative ? "" : ((item && item.alt) || `${label} logo`);
    const aria = decorative ? ' aria-hidden="true"' : "";
    return `<span class="logo-tile" style="--logo:${size}px"><img class="logo" src="${esc(src)}" alt="${esc(alt)}" width="${size}" height="${size}" loading="lazy" decoding="async"${aria} data-label="${esc(label)}"></span>`;
  }).join("");
};

const iconKeysFor = (name) => {
  const key = String(name || "").trim().toLowerCase();
  if (NAME_TO_ICON[key]) return NAME_TO_ICON[key];
  if (LOOKUP[key]) return key;
  return null;
};

const logoFor = (name, size, decorative) => logoTile(iconKeysFor(name), size, decorative !== false, name);

const chips = (list) => (list || []).filter(filled).map((label) => `<span>${logoFor(label, 18)}${esc(label)}</span>`).join("");

document.addEventListener("error", (event) => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || !img.classList.contains("logo")) return;
  img.src = monoSrc(img.getAttribute("data-label") || "?");
}, true);

const picture = (src, alt, fallback) => {
  if (!filled(src) && !filled(fallback)) return "";
  // A missing cover must not 404. The fallback is shown until coverFallback is cleared.
  const primary = filled(fallback) ? fallback : src;
  return `<img src="${esc(primary)}" alt="${filled(alt) ? esc(alt) : ""}" loading="lazy" width="600" height="375">`;
};

const projectImage = (project) => {
  const fromGallery = project.gallery && project.gallery.find((shot) => shot && filled(shot.src));
  const src = filled(project.cover) ? project.cover : fromGallery && fromGallery.src;
  const alt = (fromGallery && filled(fromGallery.alt) && fromGallery.alt) || project.title;
  return picture(src, alt, project.coverFallback);
};

const cover = (project) => {
  const colors = project.colors || ["#111111", "#222222"];
  const lines = (project.log || []).map((line) => `<div><em>&gt;</em> ${line}</div>`).join("");
  const cat = filled(project.category) ? `<span class="cat-mark">${logoFor(project.category, 18)}</span>` : "";
  return `<div class="cover" style="--c1:${colors[0]};--c2:${colors[1]}">${cat}${lines}${projectImage(project)}</div>`;
};

const when = (item) => [item.start, item.end].filter(filled).join(" - ");
const skillName = (item) => (typeof item === "string" ? item : item && item.name);
const skillColor = (item) => (item && typeof item === "object" && filled(item.color) ? item.color : "");

const projects = visible(SITE.projects);
const profile = SITE.profile || {};
const contact = SITE.contact || {};
const experience = visible(SITE.experience);
const education = visible(SITE.education);
const achievements = visible(SITE.achievements);
const certifications = visible(SITE.certifications);
const skills = visible(SITE.skills);

const grid = $("#grid");
if (grid) {
  grid.innerHTML = projects.map((project, index) => {
    const tags = chips((project.tags || []).slice(0, 2));
    const tagline = filled(project.tagline) ? `<p class="tagline">${project.tagline}</p>` : "";
    return `<button class="proj" data-i="${index}" aria-label="Open ${project.title}">${cover(project)}<h3>${project.title}</h3>${tagline}${tags ? `<div class="tags">${tags}</div>` : ""}</button>`;
  }).join("");
}

const aboutCopy = $("#about-copy");
if (aboutCopy) {
  const paragraphs = (SITE.about && SITE.about.paragraphs) || [];
  aboutCopy.innerHTML = paragraphs.filter(filled).map((text) => `<p>${esc(text)}</p>`).join("");
}
const aboutMeta = $("#about-meta");
if (aboutMeta) aboutMeta.textContent = filled(profile.location) ? profile.location : "";

const contactTitle = $("#contact-title");
if (contactTitle) contactTitle.textContent = filled(profile.title) ? profile.title : "";
const contactLine = $("#contact-line");
if (contactLine) contactLine.textContent = filled(profile.availability) ? profile.availability : "";
const printContact = $("#print-contact");
if (printContact) {
  printContact.textContent = [profile.location, contact.email, contact.linkedin, contact.github].filter(filled).join(" · ");
}

const mainSkills = skills
  .filter((group) => group.group !== "Soft skills")
  .flatMap((group) => (group.items || []).map(skillName).filter(filled));
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: contact.email,
  url: "https://rajcharchil.github.io/Charchil-Portfolio/",
  sameAs: [contact.linkedin, contact.github].filter(filled),
  alumniOf: { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
  knowsAbout: mainSkills
};
const personJson = document.createElement("script");
personJson.type = "application/ld+json";
personJson.textContent = JSON.stringify(person);
document.head.appendChild(personJson);
const contactActions = $("#contact-actions");
if (contactActions) {
  const buttons = [];
  if (filled(contact.email)) buttons.push(`<a class="btn dark" href="mailto:${esc(contact.email)}">${logoFor("Email", 18)}${esc(contact.email)} &#8599;</a>`);
  if (filled(contact.linkedin)) buttons.push(`<a class="btn" href="${esc(contact.linkedin)}" target="_blank" rel="noopener">${logoFor("LinkedIn", 18)}LinkedIn</a>`);
  if (filled(contact.github)) buttons.push(`<a class="btn" href="${esc(contact.github)}" target="_blank" rel="noopener">${logoFor("GitHub", 18)}GitHub</a>`);
  if (filled(profile.cv)) buttons.push(`<a class="btn" href="${esc(profile.cv)}">${logoFor("Download resume", 18)}Download resume</a>`);
  contactActions.innerHTML = buttons.join("");
}

const decorateTextLink = (el, name, size) => {
  if (!el || el.querySelector(".logo-tile")) return;
  el.insertAdjacentHTML("afterbegin", logoFor(name, size || 20));
};
document.querySelectorAll(".social a").forEach((a) => decorateTextLink(a, a.textContent.trim(), 20));
document.querySelectorAll(".nav a.btn").forEach((a) => decorateTextLink(a, "Email", 18));
document.querySelectorAll(".hero a.btn.light").forEach((a) => decorateTextLink(a, "Download CV", 18));
document.querySelectorAll("a.resume").forEach((a) => decorateTextLink(a, "Download resume", 18));
const expList = $("#exp");
if (expList) {
  expList.innerHTML = experience.map((job) => {
    const note = filled(job.summary) ? ` data-note="${esc(job.summary)}"` : "";
    const badge = job.current === true ? `<span class="now">Current</span>` : "";
    const where = filled(job.location) ? `<p class="job-where">${esc(job.location)}</p>` : "";
    const summary = filled(job.summary) ? `<p class="job-sum">${esc(job.summary)}</p>` : "";
    const points = (job.highlights || []).filter(filled);
    const list = points.length ? `<ul class="job-points">${points.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : "";
    const skillChips = (job.skills || []).filter(filled).map((name) => `<span>${logoFor(name, 18)}${esc(name)}</span>`).join("");
    const skillsRow = skillChips ? `<div class="tags job-skills">${skillChips}</div>` : "";
    const companyKey = iconKeysFor(job.company) || (
      /vedapixel/i.test(job.company) ? "vedapixel" :
      /techugo/i.test(job.company) ? "techugo" :
      /zidio/i.test(job.company) ? "zidio" : null
    );
    const companyLogo = logoTile(companyKey, 32, false, job.company);
    return `<li${note}><div class="job-top"><div class="job-id">${companyLogo}<div><b>${esc(job.company)}</b><span class="job-role">${esc(job.role)}</span></div></div><div class="job-meta">${badge}<time>${esc(when(job))}</time></div></div>${where}${summary}${list}${skillsRow}</li>`;
  }).join("");
}

const skillGrid = $("#tools");
if (skillGrid) {
  const seenSkills = new Set();
  skillGrid.innerHTML = skills.map((group) => {
    const pills = (group.items || [])
      .map((item) => {
        const name = skillName(item);
        if (!filled(name)) return "";
        const key = name.trim().toLowerCase();
        if (seenSkills.has(key)) return "";
        seenSkills.add(key);
        const color = skillColor(item);
        return `<span${color ? ` style="--c:${color}"` : ""}>${logoFor(name, 18)}${esc(name)}</span>`;
      })
      .join("");
    const note = filled(group.note)
      ? `<p class="skill-note">${logoTile(group.noteLogos || ["meta", "coursera"], 18, true)} ${esc(group.note)}</p>`
      : "";
    return `<div class="skill-cat"><h3>${group.group}</h3><div class="skill-tags">${pills}</div>${note}</div>`;
  }).join("");
}

const slugOf = (title) => String(title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const CERT_WEBP = new Set();
const certSrc = (cert) => {
  const slug = slugOf(cert.title);
  if (slug && CERT_WEBP.has(slug)) return `assets/certs/${slug}.webp`;
  return filled(cert.image) ? cert.image : "";
};
const certShots = certifications
  .map((cert) => ({ cert, src: certSrc(cert) }))
  .filter((item) => filled(item.src));
const shotIndex = new Map(certShots.map((item, index) => [item.cert, index]));

const certCount = $("#certcount");
if (certCount) {
  const n = certifications.length;
  certCount.textContent = `${n} certificate${n === 1 ? "" : "s"}`;
}

const certMarks = (cert) => {
  const blob = `${cert.issuer || ""} ${cert.title || ""}`.toLowerCase();
  const main = [];
  const badges = [];
  if (blob.includes("hong kong")) main.push("hkust");
  else if (blob.includes("minnesota")) main.push("umn");
  else if (blob.includes("vanderbilt")) main.push("vanderbilt");
  else if (blob.includes("colorado")) main.push("cuboulder");
  else if (blob.includes("deeplearning")) main.push("deeplearningai");
  else if (blob.includes("scrimba")) main.push("scrimba");
  else if (blob.includes("google")) main.push("google");
  else if (blob.includes("nptel") || blob.includes("iit kharagpur")) main.push("nptel");
  else if (blob.includes("udemy")) main.push("udemy");
  else if (blob.includes("lovely professional")) main.push("lpu");
  else if (blob.includes("forage")) main.push("forage");
  else if ((cert.issuer || "").toLowerCase() === "course certificate") main.push("course-certificate");
  else if (blob.includes("coursera")) main.push("coursera");
  if (blob.includes("aws")) badges.push("aws");
  if (blob.includes("iit kharagpur") && !main.includes("iitkgp")) badges.push("iitkgp");
  if (blob.includes("j.p. morgan") || blob.includes("jp morgan")) badges.push("jpmorgan");
  if (blob.includes("coursera") && main[0] !== "coursera") badges.push("coursera");
  if (!main.length) main.push(null);
  return `<span class="issuer-marks">${logoTile(main[0], 32, false, cert.issuer)}${badges.length ? logoTile(badges, 18, true) : ""}</span>`;
};

const certCard = (cert) => {
  const src = certSrc(cert);
  const shot = shotIndex.has(cert) ? ` data-shot="${shotIndex.get(cert)}"` : "";
  const thumb = src ? `<img src="${esc(src)}" alt="" width="320" height="180" loading="lazy">` : "";
  const body = `${thumb}${certMarks(cert)}<span class="issuer">${esc(cert.issuer)}</span><b>${esc(cert.title)}</b><time>${esc(cert.date)}</time>`;
  if (!src) return `<article class="cert-card">${body}</article>`;
  return `<button class="cert-card" type="button"${shot}>${body}</button>`;
};

const certRow = (cert) => {
  const src = certSrc(cert);
  const note = filled(cert.note) ? `<small class="cert-note">${esc(cert.note)}</small>` : "";
  const verify = filled(cert.verifyUrl) ? `<a href="${esc(cert.verifyUrl.trim())}" target="_blank" rel="noopener">Verify</a>` : "";
  const inner = `${certMarks(cert)}<div><b>${esc(cert.title)}</b><span>${esc(cert.issuer)}</span>${note}${verify}</div><time>${esc(cert.date)}</time>`;
  if (!src || !shotIndex.has(cert)) return `<li>${inner}</li>`;
  return `<li><button type="button" class="cert-row" data-shot="${shotIndex.get(cert)}">${inner}</button></li>`;
};

const certFeatured = $("#certfeatured");
if (certFeatured) {
  certFeatured.innerHTML = certifications.filter((cert) => cert.featured === true).map(certCard).join("");
}

const certList = $("#certlist");
const certFilters = $("#certfilters");
const CERT_CATS = [
  "Software testing and engineering",
  "Agile and project management",
  "AI and GenAI",
  "Cloud and networking",
  "Programming and DSA"
];
let certFilter = "All";
let certExpanded = false;
const CERT_PREVIEW = 6;
const certToggle = $("#certtoggle");

const paintCerts = () => {
  if (!certList) return;
  const shown = certFilter === "All" ? certifications : certifications.filter((cert) => cert.category === certFilter);
  const visible = certExpanded ? shown : shown.slice(0, CERT_PREVIEW);
  certList.innerHTML = visible.map(certRow).join("");
  certList.querySelectorAll("li").forEach((li) => { li.dataset.r = ""; });
  if (certToggle) {
    certToggle.hidden = shown.length <= CERT_PREVIEW;
    certToggle.setAttribute("aria-expanded", certExpanded ? "true" : "false");
    certToggle.textContent = certExpanded ? "Show fewer certificates" : `Show all ${shown.length} certificates`;
  }
};

if (certFilters) {
  certFilters.innerHTML = ["All", ...CERT_CATS].map((name) => `<button type="button" aria-pressed="${name === certFilter}">${esc(name)}</button>`).join("");
  certFilters.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    certFilter = button.textContent;
    certExpanded = false;
    [...certFilters.children].forEach((chip) => chip.setAttribute("aria-pressed", chip === button ? "true" : "false"));
    paintCerts();
  });
}
if (certToggle) {
  certToggle.addEventListener("click", () => {
    certExpanded = !certExpanded;
    paintCerts();
    if (!certExpanded) certToggle.scrollIntoView({ block: "nearest" });
  });
}
paintCerts();

const eduList = $("#edu");
if (eduList) {
  eduList.innerHTML = education
    .map((item) => {
      const meta = [item.level, item.score].filter(filled)
        .map((text) => `<span class="mini-chip">${esc(text)}</span>`).join("");
      return `<li class="edu-card"><div class="edu-head">${logoFor(item.school, 40, true)}<div class="edu-id"><b>${esc(item.degree)}</b><span>${esc(item.school)}</span></div>${filled(item.period) ? `<span class="edu-period">${esc(item.period)}</span>` : ""}</div>${meta ? `<div class="edu-chips">${meta}</div>` : ""}</li>`;
    })
    .join("");
}

const achieveList = $("#achieve");
const achieveHead = $("#achieve-head");
if (achieveList) {
  const awards = achievements.filter((item) => filled(item.title));
  achieveList.innerHTML = awards
    .map((item, index) => {
      if (index > 0) {
        return `<li class="award-more">${logoTile("hackai", 24, true)}<span><b>${esc(item.title)}</b>${filled(item.date) ? ` · ${esc(item.date)}` : ""}</span></li>`;
      }
      const metric = filled(item.metric)
        ? `<div class="award-metric"><strong>${esc(item.metric)}</strong><span>${esc(item.metricLabel || "")}</span></div>` : "";
      const tags = (item.tags || []).filter(filled)
        .map((text) => `<span class="mini-chip">${esc(text)}</span>`).join("");
      const projectBtn = filled(item.projectSlug)
        ? `<button class="btn dark award-btn" type="button" data-project-slug="${esc(item.projectSlug)}">View the project</button>` : "";
      return `<li class="award-card"><div class="award-top">${logoTile("hackai", 40, true)}${filled(item.place) ? `<span class="award-badge">${esc(item.place)}</span>` : ""}${filled(item.date) ? `<span class="award-date">${esc(item.date)}</span>` : ""}</div>${metric}<b class="award-title">${esc(item.title)}</b>${filled(item.detail) ? `<p class="award-detail">${esc(item.detail)}</p>` : ""}${tags ? `<div class="award-tags">${tags}</div>` : ""}${projectBtn}</li>`;
    })
    .join("");
  const empty = achieveList.children.length === 0;
  achieveList.hidden = empty;
  if (achieveHead) achieveHead.hidden = empty;
  achieveList.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-project-slug]");
    if (!btn) return;
    const index = projects.findIndex((p) => p.slug === btn.dataset.projectSlug);
    if (index < 0) return;
    const card = document.querySelector(`.proj[data-i="${index}"]`);
    if (card) card.click();
  });
}

// Project detail dialog (with View Transitions API)
const dlg = $("#detail");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const listItems = (ul, items) => {
  ul.replaceChildren();
  (items || []).filter(filled).forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
  return ul.children.length > 0;
};

const showBlock = (el, on) => { if (el) el.hidden = !on; };

const LINK_BUTTONS = [
  ["repo", "Repository"],
  ["demo", "Live demo"],
  ["apk", "Download APK"],
  ["docs", "Documentation"],
  ["certificate", "Certificate"]
];

const shotsOf = (project) => (project.gallery || []).filter((shot) => shot && filled(shot.src));

let lightShots = [];
let lightIndex = 0;
let lightReturn = null;

const lightbox = $("#lightbox");
const lightImg = $("#lightimg");
const lightCap = $("#lightcap");

const paintLight = () => {
  const shot = lightShots[lightIndex];
  if (!shot) return;
  lightImg.src = shot.src;
  lightImg.alt = filled(shot.alt) ? shot.alt : "";
  const caption = filled(shot.caption) ? shot.caption : "";
  lightCap.textContent = caption;
  lightCap.hidden = !caption;
  const many = lightShots.length > 1;
  $("#lightprev").hidden = !many;
  $("#lightnext").hidden = !many;
};

const closeLightbox = () => {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  lightImg.removeAttribute("src");
  const back = lightReturn;
  lightReturn = null;
  if (back) back.focus();
};

const openLightbox = (shots, index, opener) => {
  lightShots = shots;
  lightIndex = index;
  lightReturn = opener || document.activeElement;
  paintLight();
  lightbox.hidden = false;
  $("#lightx").focus();
};

const stepLight = (dir) => {
  if (lightShots.length < 2) return;
  lightIndex = (lightIndex + dir + lightShots.length) % lightShots.length;
  paintLight();
};

const focusables = (root) => [...root.querySelectorAll("button, a[href], [tabindex='0']")].filter((el) => !el.hidden && !el.closest("[hidden]"));

const populateDetail = (p) => {
  closeLightbox();
  $("#dtitle").setAttribute("aria-label", p.title);
  let n = 0;
  $("#dtitle").innerHTML = p.title.split(" ").map((w) => `<span class="w" aria-hidden="true">${[...w].map((ch) => `<span style="animation-delay:${n++ * 30}ms">${ch}</span>`).join("")}</span>`).join(" ");
  const tagline = $("#dtagline");
  tagline.textContent = filled(p.tagline) ? p.tagline : "";
  tagline.hidden = !filled(p.tagline);
  $("#dtags").innerHTML = chips(p.tags);
  const date = filled(p.date) ? p.date : "";
  const role = filled(p.role) ? p.role : "";
  $("#dtime").textContent = date;
  $("#dtime").hidden = !date;
  $("#drole").textContent = role;
  $("#drole").hidden = !role;
  $("#dmeta").hidden = !date && !role;
  const goal = filled(p.goal) ? p.goal : "";
  $("#dgoal").textContent = goal;
  showBlock($("#dgoal-wrap"), !!goal);
  showBlock($("#ddid-wrap"), listItems($("#ddid"), p.whatIDid));
  showBlock($("#dresults-wrap"), listItems($("#dresults"), p.results));
  const tools = chips(p.tools);
  $("#dtools").innerHTML = tools;
  showBlock($("#dtools-wrap"), !!tools);
  const actions = $("#dactions");
  actions.replaceChildren();
  const links = p.links || {};
  let primaryLink = true;
  LINK_BUTTONS.forEach(([key, label]) => {
    if (!filled(links[key])) return;
    const a = document.createElement("a");
    a.className = primaryLink ? "btn dark" : "btn";
    primaryLink = false;
    a.href = links[key].trim();
    a.target = "_blank";
    a.rel = "noopener";
    const iconKey = { repo: "github", demo: "external-link", apk: "android", docs: "book", certificate: "filetext" }[key];
    a.innerHTML = `${logoTile(iconKey, 18, true, label)}${esc(label)}`;
    actions.appendChild(a);
  });
  const gallery = $("#dgallery");
  const shots = shotsOf(p);
  gallery.replaceChildren();
  gallery.className = "gallery" + (shots.length ? ` count-${shots.length}` : "");
  shots.forEach((shot, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shot";
    const img = document.createElement("img");
    img.src = shot.src;
    img.alt = filled(shot.alt) ? shot.alt : "";
    img.loading = "lazy";
    img.width = 600;
    img.height = 375;
    img.addEventListener("error", () => button.remove());
    button.appendChild(img);
    if (filled(shot.caption)) {
      const cap = document.createElement("span");
      cap.textContent = shot.caption;
      button.appendChild(cap);
    }
    button.addEventListener("click", () => openLightbox(shots, index, button));
    gallery.appendChild(button);
  });
  gallery.hidden = shots.length === 0;
  const colors = p.colors || ["#111111", "#222222"];
  const dcover = $("#dcover");
  dcover.style.cssText = `--c1:${colors[0]};--c2:${colors[1]}`;
  dcover.innerHTML = (p.log || []).map((line) => `<div><em>&gt;</em> ${line}</div>`).join("") + projectImage(p);
  dcover.hidden = shots.length > 0;
  dlg.showModal();
  dlg.scrollTop = 0;
};

$("#grid").addEventListener("click", (e) => {
  const b = e.target.closest(".proj");
  if (!b) return;
  const p = projects[b.dataset.i];
  if (document.startViewTransition && !reduceMotion) {
    document.startViewTransition(() => populateDetail(p));
  } else {
    populateDetail(p);
  }
});

const closeDetail = () => {
  if (document.startViewTransition && !reduceMotion) {
    document.startViewTransition(() => dlg.close());
  } else {
    dlg.close();
  }
};
$("#back").addEventListener("click", closeDetail);
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) closeDetail();
});
const trapTab = (root, e) => {
  if (e.key !== "Tab") return;
  const items = focusables(root);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;
  if (e.shiftKey && (active === first || !root.contains(active))) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && (active === last || !root.contains(active))) {
    e.preventDefault();
    first.focus();
  }
};

dlg.addEventListener("keydown", (e) => {
  if (lightbox && !lightbox.hidden) return;
  if (e.key === "Escape") {
    e.preventDefault();
    closeDetail();
    return;
  }
  trapTab(dlg, e);
});
dlg.addEventListener("cancel", (e) => {
  if (lightbox && !lightbox.hidden) {
    e.preventDefault();
    closeLightbox();
  }
});
if (lightbox) {
  $("#lightx").addEventListener("click", closeLightbox);
  $("#lightprev").addEventListener("click", () => stepLight(-1));
  $("#lightnext").addEventListener("click", () => stepLight(1));
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
      return;
    }
    if (e.key === "Tab") e.stopPropagation();
    if (e.key === "ArrowRight") { e.preventDefault(); stepLight(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); stepLight(-1); }
    if (e.key !== "Tab") return;
    const items = focusables(lightbox);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

// Certificate modal
const cd = $("#certdlg");
let certAt = 0;

const showCert = (index) => {
  if (!certShots.length || !cd) return;
  certAt = (index + certShots.length) % certShots.length;
  const { cert, src } = certShots[certAt];
  const shot = $("#certimg");
  shot.alt = cert.title;
  shot.src = src;
  const cap = $("#certcap");
  cap.replaceChildren();
  cap.append(document.createTextNode(cert.title));
  const meta = document.createElement("span");
  meta.textContent = [cert.issuer, cert.date].filter(filled).join(" · ");
  cap.append(meta);
  if (filled(cert.note)) {
    const note = document.createElement("small");
    note.textContent = cert.note;
    cap.append(note);
  }
  const slot = $("#certverify-slot");
  if (slot) {
    slot.replaceChildren();
    if (filled(cert.verifyUrl)) {
      const verify = document.createElement("a");
      verify.className = "btn";
      verify.href = cert.verifyUrl.trim();
      verify.target = "_blank";
      verify.rel = "noopener";
      verify.textContent = "Verify";
      slot.appendChild(verify);
    }
  }
  const many = certShots.length > 1;
  $("#certprev").hidden = !many;
  $("#certnext").hidden = !many;
  if (!cd.open) cd.showModal();
};

const openCertFrom = (node) => {
  if (!node || node.dataset.shot === undefined) return;
  showCert(Number(node.dataset.shot));
  $("#certx").focus();
};

const certRoot = $("#certs");
if (certRoot) {
  certRoot.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    openCertFrom(e.target.closest("[data-shot]"));
  });
  certRoot.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const node = e.target.closest("[data-shot]");
    if (!node || node.tagName === "BUTTON") return;
    e.preventDefault();
    openCertFrom(node);
  });
}
if (cd) {
  $("#certx").addEventListener("click", () => cd.close());
  $("#certprev").addEventListener("click", () => showCert(certAt - 1));
  $("#certnext").addEventListener("click", () => showCert(certAt + 1));
  cd.addEventListener("click", (e) => e.target === cd && cd.close());
  cd.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); cd.close(); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); showCert(certAt + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); showCert(certAt - 1); }
    trapTab(cd, e);
  });
}

// Experience hover note that follows cursor (mouse only)
const fl = $("#float");
const exp = $("#exp");
if (fl && exp && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  exp.addEventListener("mousemove", (e) => {
    const li = e.target.closest("#exp > li");
    if (!li || !li.dataset.note) return fl.classList.remove("on");
    fl.textContent = li.dataset.note;
    const pad = 12;
    let x = e.clientX + 18;
    let y = e.clientY - 20;
    if (x + fl.offsetWidth > innerWidth - pad) x = Math.max(pad, e.clientX - fl.offsetWidth - 18);
    if (y + fl.offsetHeight > innerHeight - pad) y = Math.max(pad, innerHeight - fl.offsetHeight - pad);
    if (y < pad) y = pad;
    fl.style.transform = `translate(${x}px, ${y}px)`;
    fl.classList.add("on");
  }, { passive: true });
  exp.addEventListener("mouseleave", () => fl.classList.remove("on"));
}

// Hero name: split into letters for the cinematic intro
const splitName = () => {
  const el = $(".name");
  if (!el || el.classList.contains("split")) return;
  el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
  let i = 0;
  el.querySelectorAll(":scope > span").forEach((word) => {
    const letters = [...word.textContent].map((ch) => {
      const s = document.createElement("span");
      s.className = "ltr";
      s.textContent = ch;
      s.style.setProperty("--i", i++);
      return s;
    });
    word.setAttribute("aria-hidden", "true");
    word.replaceChildren(...letters);
  });
  el.style.setProperty("--n", i);
  el.classList.add("split");
};
splitName();

/* FIX BUG 1: Keep hero name completely inside container without clipping */
const fitName = () => {
  const el = $(".name");
  const hero = $(".hero");
  if (!el || !hero) return;
  el.style.fontSize = "";
  el.style.maxWidth = "none";
  el.style.width = "max-content";
  const w = el.scrollWidth;
  el.style.width = "";
  el.style.maxWidth = "";
  const max = hero.clientWidth * 0.72;
  if (w > max && w > 0) {
    const currentSize = parseFloat(getComputedStyle(el).fontSize);
    el.style.fontSize = `${(currentSize * max) / w}px`;
  }
};
addEventListener("resize", fitName, { passive: true });
document.fonts.ready.then(fitName);
setTimeout(fitName, 50);

// Mark elements for scroll-linked motion
document
  .querySelectorAll(".proj,.about p,#exp > li,#edu li,#achieve li,.certs li,.cert-card,.skill-cat,.sec-head h2,.cta>*")
  .forEach((el) => (el.dataset.r = ""));

// Navigation Scroll-Spy with IntersectionObserver
const navLinks = [...document.querySelectorAll(".nav nav a[href^='#']")];
const navSections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navLinks.forEach((a) => {
            if (a.getAttribute("href") === id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        }
      });
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
  );
  navSections.forEach((s) => spy.observe(s));
}

// Background frame scrub animation (300 frames) with Performance Optimizations
const initBgCanvas = () => {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return { setProgress: () => {}, resize: () => {} };
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return { setProgress: () => {}, resize: () => {} };
  ctx.imageSmoothingEnabled = true;

  const TOTAL_FRAMES = 300;
  const isMobile = window.innerWidth < 768;
  const isSaveData = Boolean(navigator.connection?.saveData) || reduceMotion;

  const framePath = (idx) => {
    const num = Math.min(TOTAL_FRAMES, Math.max(1, idx + 1));
    return `ezgif-5ce37f822002666b-jpg/ezgif-frame-${String(num).padStart(3, "0")}.jpg?v=2`;
  };

  const images = new Array(TOTAL_FRAMES);
  const loaded = new Array(TOTAL_FRAMES).fill(false);
  let targetFrame = 0;
  let currentFrame = 0;
  let isAnimating = false;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // never above 2
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    drawFrame(Math.round(currentFrame));
  };

  const getClosestImage = (target) => {
    if (loaded[target] && images[target]) return images[target];
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = target - offset;
      if (prev >= 0 && loaded[prev] && images[prev]) return images[prev];
      const next = target + offset;
      if (next < TOTAL_FRAMES && loaded[next] && images[next]) return images[next];
    }
    return null;
  };

  const drawFrame = (frameIdx) => {
    const img = getClosestImage(frameIdx);
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    if (!cw || !ch) return;

    const nw = img.naturalWidth || 1920;
    const nh = img.naturalHeight || 1080;
    const canvasRatio = cw / ch;
    const imgRatio = nw / nh;

    let sx = 0, sy = 0, sw = nw, sh = nh;
    if (canvasRatio > imgRatio) {
      sw = nw;
      sh = nw / canvasRatio;
      sx = 0;
      sy = (nh - sh) / 2;
    } else {
      sh = nh;
      sw = nh * canvasRatio;
      sx = (nw - sw) / 2;
      sy = 0;
    }

    // Desktop: shift crop ~10% so the face sits right of centre (left stays calm for text).
    // Mobile: bias the crop upward so the face stays in the upper part of a tall screen.
    if (isMobile) {
      if (sh < nh) sy = Math.max(0, sy - nh * 0.1);
    } else if (sw < nw) {
      const faceShift = nw * 0.1;
      const maxSx = nw - sw;
      sx = Math.min(maxSx, sx + faceShift);
    }

    sx = Math.round(sx);
    sy = Math.round(sy);
    sw = Math.max(1, Math.round(sw));
    sh = Math.max(1, Math.round(sh));

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  const renderLoop = () => {
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) < 0.02) {
      currentFrame = targetFrame;
      drawFrame(Math.round(currentFrame));
      isAnimating = false;
      return;
    }
    currentFrame += diff * 0.12;
    drawFrame(Math.round(currentFrame));
    requestAnimationFrame(renderLoop);
  };

  const started = new Array(TOTAL_FRAMES).fill(false);
  const radius = isMobile || isSaveData ? 1 : 3;
  const ensureFrame = (idx) => {
    if (idx < 0 || idx >= TOTAL_FRAMES || started[idx]) return;
    started[idx] = true;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      images[idx] = img;
      loaded[idx] = true;
      if (Math.abs(currentFrame - idx) <= radius) drawFrame(Math.round(currentFrame));
    };
    img.src = framePath(idx);
  };
  const prefetchAround = (frame) => {
    const center = Math.round(frame);
    for (let delta = 0; delta <= radius; delta++) {
      ensureFrame(center - delta);
      ensureFrame(center + delta);
    }
  };

  const setProgress = (progress) => {
    const p = Math.min(1, Math.max(0, progress));
    targetFrame = p * (TOTAL_FRAMES - 1);
    prefetchAround(targetFrame);
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(renderLoop);
    }
  };
  ensureFrame(0);

  resize();
  window.addEventListener("resize", resize, { passive: true });

  return { setProgress, resize };
};

const bgCanvas = initBgCanvas();

const toTop = document.querySelector(".to-top");
const syncTop = () => {
  if (!toTop) return;
  const box = document.querySelector(".hero");
  const past = box ? box.getBoundingClientRect().bottom < 64 : scrollY > innerHeight * 0.6;
  toTop.classList.toggle("on", past);
  toTop.tabIndex = past ? 0 : -1;
  toTop.setAttribute("aria-hidden", past ? "false" : "true");
};
addEventListener("scroll", syncTop, { passive: true });
syncTop();

const sticker = document.querySelector(".sticker");
if (sticker) {
  sticker.addEventListener("click", (e) => {
    const target = document.querySelector("#contact");
    if (!target) return;
    e.preventDefault();
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.pushState(null, "", "#contact");
  });
}

// Scroll motion loop (rAF)
if (!reduceMotion) {
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const items = [...document.querySelectorAll("[data-r]")];
  const cards = [...document.querySelectorAll(".card")];
  const heads = [...document.querySelectorAll(".sec-head")];
  const hero = $(".hero");
  let queued = false;

  const update = () => {
    queued = false;
    syncTop();
    const vh = innerHeight;
    document.documentElement.style.setProperty("--y", scrollY);

    if (hero) {
      const hr = hero.getBoundingClientRect();
      hero.style.setProperty("--h", clamp(-hr.top / (hr.height * 0.85)));
    }

    cards.forEach((c) => c.style.setProperty("--l", clamp((vh * 0.55 - c.getBoundingClientRect().bottom) / (vh * 0.55))));

    items.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      const enter = clamp((vh * 0.94 - top) / (vh * 0.42));
      const leave = clamp((bottom - vh * 0.06) / (vh * 0.5));
      el.style.setProperty("--e", Math.min(enter, leave));
    });

    heads.forEach((h) => h.style.setProperty("--gx", (h.getBoundingClientRect().top - vh * 0.5) * -0.25));

    // Smooth scrub mapping for canvas
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    const rawProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
    const smoothProgress = Math.pow(rawProgress, 0.65);
    bgCanvas.setProgress(smoothProgress);
  };

  const queue = () => queued || ((queued = true), requestAnimationFrame(update));
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue, { passive: true });
  update();
}

// Mouse Interactions: Spotlight glow, 3D Tilt, Magnetic Button
const isMouse = matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion;

if (isMouse) {
  // 1. Spotlight glow on glass cards
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    }, { passive: true });
  });

  // 2. Subtle 3D tilt on project cards
  document.querySelectorAll(".proj").forEach((proj) => {
    proj.addEventListener("pointermove", (e) => {
      const rect = proj.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      proj.style.transform = `perspective(800px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-4px)`;
    }, { passive: true });
    proj.addEventListener("pointerleave", () => {
      proj.style.transform = "";
    });
  });

  // 3. Magnetic hover on primary buttons
  document.querySelectorAll(".btn.dark").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    }, { passive: true });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}
