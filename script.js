/*
  只需修改下面的 PROFILE，就能把示例内容换成你的真实信息。
  没有链接的项目会保持为预览状态，不会跳转。
*/
const PROFILE = {
  name: "JIANSONG ZHANG",
  initials: "JZ",
  role: "AI Researcher & Engineer",
  location: "Wuhan, China · GitHub @Janson14332",
  status: "B.Eng. candidate in Automation · HUST",
  bio: "I build efficient learning systems across spiking neural networks, multi-agent reinforcement learning, and computer vision.",
  about: "My research connects efficient learning algorithms with deployable intelligent systems.",
  email: "github.com/Janson14332",
  github: "https://github.com/Janson14332",
  projects: [
    { name: "SlidingPSN-SlowFast", url: "" },
    { name: "Dual-Layer Policy Network", url: "" },
    { name: "Adaptive SegFormer", url: "" },
    { name: "InterHand Virtual Keyboard", url: "" },
  ],
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
};

const words = PROFILE.name.trim().split(/\s+/);
setText("[data-name]", PROFILE.name);
setText("[data-initials]", PROFILE.initials);
setText("[data-hero-first]", words.slice(0, -1).join(" ") || words[0]);
setText("[data-hero-last]", `${words.length > 1 ? words.at(-1) : "NAME"}.`);
setText("[data-role]", PROFILE.role);
setText("[data-location]", PROFILE.location);
setText("[data-status]", PROFILE.status);
setText("[data-bio]", PROFILE.bio);
setText("[data-about]", PROFILE.about);
setText("[data-email]", PROFILE.email);
setText("[data-year]", new Date().getFullYear());

document.title = `${PROFILE.name} — Research Portfolio`;
document.querySelector("[data-email-link]").href = PROFILE.github;
document.querySelector("[data-email-link]").target = "_blank";
document.querySelector("[data-email-link]").rel = "noreferrer";
document.querySelector("[data-github]").href = PROFILE.github;

const projectNames = ["[data-project-one]", "[data-project-two]", "[data-project-three]", "[data-project-four]"];
document.querySelectorAll("[data-project-link]").forEach((link, index) => {
  const project = PROFILE.projects[index];
  setText(projectNames[index], project.name);

  if (project.url) {
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noreferrer";
  } else {
    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

