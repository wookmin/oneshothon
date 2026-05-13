import "./style.css";
import { inject } from "@vercel/analytics";

inject();

import scanImg from "../assets/영수증 스캔하기.png";
import tripImg from "../assets/나의 여행 목록 페이지.png";
import statsImg from "../assets/통계 페이지 (상세보기 및 바 그래프 적용).png";

const t = {
  ko: {
    navCta: "사전 신청하기",
    heroTitle: "해외여행 지출,<br>이제 하나로",
    heroSub: "찍고, 기록하고, 분석까지.<br>여행의 모든 소비를 한 앱에서.",
    heroCta: "사전 신청하기 →",
    feat1Tag: "AI 영수증 스캔",
    feat1Title: "찍으면 끝.",
    feat1Desc: "카메라로 영수증을 찍으면 AI가 금액과 카테고리를 자동 인식해 바로 기록해드려요.",
    feat2Tag: "여행별 예산 관리",
    feat2Title: "모든 여행을 한눈에",
    feat2Desc: "여행마다 예산을 설정하고, 실시간으로 지출 현황을 확인하세요.",
    feat3Tag: "AI 소비 인사이트",
    feat3Title: "소비 패턴을 분석해드려요",
    feat3Desc: "카테고리별 지출 분석과 AI 인사이트로 다음 여행은 더 스마트하게.",
    ctaTitle: "지금 신청하고 가장 먼저 만나보세요",
    ctaDesc: "출시되면 가장 먼저 알려드릴게요.",
    ctaBtn: "사전 신청하기 →",
    toast: "곧 출시 예정이에요! 기대해주세요",
    alt1: "AI 영수증 스캔 화면",
    alt2: "여행 목록 화면",
    alt3: "AI 소비 인사이트 화면",
  },
  en: {
    navCta: "Pre-register",
    heroTitle: "Travel expenses,<br>all in one place",
    heroSub: "Scan, record, and analyze.<br>Every travel expense in one app.",
    heroCta: "Pre-register →",
    feat1Tag: "AI Receipt Scan",
    feat1Title: "Just snap it.",
    feat1Desc: "Point your camera at any receipt and AI instantly captures the amount and category.",
    feat2Tag: "Trip Budget Tracking",
    feat2Title: "All your trips at a glance",
    feat2Desc: "Set a budget for each trip and track your spending in real time.",
    feat3Tag: "AI Spending Insights",
    feat3Title: "We analyze your spending patterns",
    feat3Desc: "Category breakdowns and AI insights to make your next trip even smarter.",
    ctaTitle: "Be the first to know when we launch",
    ctaDesc: "We'll notify you as soon as we're live.",
    ctaBtn: "Pre-register →",
    toast: "Coming soon — stay tuned!",
    alt1: "AI receipt scan screen",
    alt2: "Trip list screen",
    alt3: "AI spending insights screen",
  },
  zh: {
    navCta: "预约注册",
    heroTitle: "海外旅行支出，<br>一个应用搞定",
    heroSub: "拍照、记录、分析。<br>旅行中所有消费，尽在一处。",
    heroCta: "预约注册 →",
    feat1Tag: "AI 收据扫描",
    feat1Title: "拍一下就完成。",
    feat1Desc: "用相机拍摄收据，AI 自动识别金额和分类，即时记录。",
    feat2Tag: "行程预算管理",
    feat2Title: "一目了然掌握所有行程",
    feat2Desc: "为每次旅行设置预算，实时查看支出情况。",
    feat3Tag: "AI 消费洞察",
    feat3Title: "分析您的消费规律",
    feat3Desc: "按类别分析支出，结合 AI 洞察，让下次旅行更聪明。",
    ctaTitle: "立即注册，抢先体验",
    ctaDesc: "上线时第一时间通知您。",
    ctaBtn: "预约注册 →",
    toast: "即将上线，敬请期待！",
    alt1: "AI 收据扫描界面",
    alt2: "行程列表界面",
    alt3: "AI 消费洞察界面",
  },
};

function detectLang() {
  const locales = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || "ko"];

  for (const locale of locales) {
    const code = locale.toLowerCase();
    if (code.startsWith("zh")) return "zh";
    if (code.startsWith("ko")) return "ko";
    if (code.startsWith("en")) return "en";
  }

  return "en";
}

function renderApp() {
  const lang = detectLang();
  const l = t[lang];

  document.documentElement.lang = lang;

  document.getElementById("app").innerHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="/" class="logo">oneshot</a>
        <a href="#pre-register" class="btn-nav">${l.navCta}</a>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-inner animate-in">
        <h1>${l.heroTitle}</h1>
        <p class="hero-sub">${l.heroSub}</p>
        <a href="#pre-register" class="btn-primary">${l.heroCta}</a>
      </div>
    </section>

    <section class="feature feature--alt">
      <div class="feature-inner animate-in">
        <div class="phone-wrap">
          <div class="phone-frame">
            <img src="${scanImg}" alt="${l.alt1}" />
          </div>
        </div>
        <div class="feature-text">
          <span class="feature-tag">${l.feat1Tag}</span>
          <h2>${l.feat1Title}</h2>
          <p>${l.feat1Desc}</p>
        </div>
      </div>
    </section>

    <section class="feature">
      <div class="feature-inner feature-inner--reverse animate-in">
        <div class="phone-wrap">
          <div class="phone-frame">
            <img src="${tripImg}" alt="${l.alt2}" />
          </div>
        </div>
        <div class="feature-text">
          <span class="feature-tag">${l.feat2Tag}</span>
          <h2>${l.feat2Title}</h2>
          <p>${l.feat2Desc}</p>
        </div>
      </div>
    </section>

    <section class="feature feature--alt">
      <div class="feature-inner animate-in">
        <div class="phone-wrap">
          <div class="phone-frame">
            <img src="${statsImg}" alt="${l.alt3}" />
          </div>
        </div>
        <div class="feature-text">
          <span class="feature-tag">${l.feat3Tag}</span>
          <h2>${l.feat3Title}</h2>
          <p>${l.feat3Desc}</p>
        </div>
      </div>
    </section>

    <section class="cta-section" id="pre-register">
      <div class="cta-inner animate-in">
        <h2>${l.ctaTitle}</h2>
        <p class="cta-desc">${l.ctaDesc}</p>
        <button class="btn-cta" id="cta-btn">${l.ctaBtn}</button>
      </div>
    </section>

    <div class="toast" id="toast">${l.toast}</div>

    <footer class="footer">
      <div class="footer-inner">
        <span class="logo">oneshot</span>
        <p>© 2026 oneshot. All rights reserved.</p>
      </div>
    </footer>
  `;

  document.querySelector(".btn-nav").addEventListener("click", () => {
    trackEvent("cta_click", { button_location: "nav" });
  });

  document.querySelector(".btn-primary").addEventListener("click", () => {
    trackEvent("cta_click", { button_location: "hero" });
  });

  document.getElementById("cta-btn").addEventListener("click", () => {
    trackEvent("cta_click", { button_location: "cta" });
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  });

  document.querySelectorAll(".animate-in").forEach((el) => observer.observe(el));
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

renderApp();

window.addEventListener("languagechange", renderApp);
