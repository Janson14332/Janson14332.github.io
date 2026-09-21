/*
  只需修改下面的 PROFILE，就能把示例内容换成你的真实信息。
  没有链接的项目会保持为预览状态，不会跳转。
*/
const PROFILE = {
  name: "JANSON 14332",
  initials: "J",
  role: "AI / 深度学习开发者",
  location: "GitHub @Janson14332",
  status: "持续构建、学习与分享",
  bio: "我关注多智能体强化学习与视觉感知，用代码把研究想法变成可复现的实验与系统。",
  about: "我关注多智能体系统如何学习协作，以及视觉模型如何更好地理解复杂场景。",
  email: "github.com/Janson14332",
  github: "https://github.com/Janson14332",
  projects: [
    { name: "MASAC / MADDPG", url: "https://github.com/Janson14332/MASAC" },
    { name: "HILA", url: "https://github.com/Janson14332/hila" },
    { name: "MORE EXPERIMENTS", url: "https://github.com/Janson14332" },
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

document.title = `${PROFILE.name} — 个人主页`;
document.querySelector("[data-email-link]").href = PROFILE.github;
document.querySelector("[data-email-link]").target = "_blank";
document.querySelector("[data-email-link]").rel = "noreferrer";
document.querySelector("[data-github]").href = PROFILE.github;

const projectNames = ["[data-project-one]", "[data-project-two]", "[data-project-three]"];
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

