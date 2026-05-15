import "./style.css";
import { inject } from "@vercel/analytics";

inject();

import cardImg from "../assets/design/travel-card-history.png";
import patternImg from "../assets/design/spending-pattern-analysis.png";
import recommendImg from "../assets/design/personalized-travel-recommendation.png";
import scanImg from "../assets/design/receipt-scan.png";
import budgetImg from "../assets/design/trip-budget-management.png";

const t = {
  ko: {
    navCta: "사전 신청하기",
    heroTitle: "해외여행 지출,<br>이제 하나로",
    heroSub: "찍고, 기록하고, 분석까지.<br>여행의 모든 소비를 한 앱에서.",
    heroCta: "사전 신청하기 →",
    feat1Tag: "트래블 카드 내역",
    feat1Title: "카드 내역도 바로 불러와요",
    feat1Desc: "트래블 카드 사용 내역을 앱에서 한눈에 확인하고 여행 지출을 더 쉽게 관리하세요.",
    feat2Tag: "소비패턴 분석",
    feat2Title: "내 소비 흐름을 한눈에",
    feat2Desc: "카테고리별 소비 패턴을 분석해 어디에 얼마나 쓰는지 쉽게 파악할 수 있어요.",
    feat3Tag: "맞춤 여행 추천",
    feat3Title: "소비 취향에 맞는 여행을 추천해드려요",
    feat3Desc: "평소 소비 스타일과 관심사를 바탕으로 다음 여행지와 스팟을 더 똑똑하게 추천해드려요.",
    feat4Tag: "AI 영수증 스캔",
    feat4Title: "찍으면 끝.",
    feat4Desc: "카메라로 영수증을 찍으면 AI가 금액과 카테고리를 자동 인식해 바로 기록해드려요.",
    feat5Tag: "여행별 예산 관리",
    feat5Title: "모든 여행을 한눈에",
    feat5Desc: "여행마다 예산을 설정하고, 실시간으로 지출 현황을 확인하세요.",
    ctaTitle: "지금 신청하고 가장 먼저 만나보세요",
    ctaDesc: "출시되면 가장 먼저 알려드릴게요.",
    ctaBtn: "사전 신청하기 →",
    toast: "곧 출시 예정이에요! 기대해주세요",
    alt1: "트래블 카드 내역 화면",
    alt2: "소비패턴 분석 화면",
    alt3: "맞춤 여행 추천 화면",
    alt4: "AI 영수증 스캔 화면",
    alt5: "여행별 예산 관리 화면",
  },
  en: {
    navCta: "Pre-register",
    heroTitle: "Travel expenses,<br>all in one place",
    heroSub: "Scan, record, and analyze.<br>Every travel expense in one app.",
    heroCta: "Pre-register →",
    feat1Tag: "Travel Card History",
    feat1Title: "Import card transactions instantly",
    feat1Desc: "See your travel card transactions in one place and manage trip spending with less manual work.",
    feat2Tag: "Spending Pattern Analysis",
    feat2Title: "See how you spend at a glance",
    feat2Desc: "Understand where your money goes with clear category-based spending analysis.",
    feat3Tag: "Personalized Travel Picks",
    feat3Title: "Recommendations tailored to your spending style",
    feat3Desc: "Get smarter destination and spot suggestions based on your spending habits and preferences.",
    feat4Tag: "AI Receipt Scan",
    feat4Title: "Just snap it.",
    feat4Desc: "Point your camera at any receipt and AI instantly captures the amount and category.",
    feat5Tag: "Trip Budget Tracking",
    feat5Title: "All your trips at a glance",
    feat5Desc: "Set a budget for each trip and track your spending in real time.",
    ctaTitle: "Be the first to know when we launch",
    ctaDesc: "We'll notify you as soon as we're live.",
    ctaBtn: "Pre-register →",
    toast: "Coming soon — stay tuned!",
    alt1: "Travel card history screen",
    alt2: "Spending pattern analysis screen",
    alt3: "Personalized travel recommendation screen",
    alt4: "AI receipt scan screen",
    alt5: "Trip budget tracking screen",
  },
  zh: {
    navCta: "预约注册",
    heroTitle: "海外旅行支出，<br>一个应用搞定",
    heroSub: "拍照、记录、分析。<br>旅行中所有消费，尽在一处。",
    heroCta: "预约注册 →",
    feat1Tag: "旅行卡消费记录",
    feat1Title: "卡片消费记录一键导入",
    feat1Desc: "在应用中集中查看旅行卡消费记录，更轻松地管理旅行支出。",
    feat2Tag: "消费模式分析",
    feat2Title: "一眼看懂消费习惯",
    feat2Desc: "通过分类分析了解您的消费流向，掌握支出结构。",
    feat3Tag: "定制旅行推荐",
    feat3Title: "根据消费偏好推荐旅行",
    feat3Desc: "基于您的消费习惯与兴趣，推荐更适合的旅行地和地点。",
    feat4Tag: "AI 收据扫描",
    feat4Title: "拍一下就完成。",
    feat4Desc: "用相机拍摄收据，AI 自动识别金额和分类，即时记录。",
    feat5Tag: "行程预算管理",
    feat5Title: "一目了然掌握所有行程",
    feat5Desc: "为每次旅行设置预算，实时查看支出情况。",
    ctaTitle: "立即注册，抢先体验",
    ctaDesc: "上线时第一时间通知您。",
    ctaBtn: "预约注册 →",
    toast: "即将上线，敬请期待！",
    alt1: "旅行卡消费记录界面",
    alt2: "消费模式分析界面",
    alt3: "定制旅行推荐界面",
    alt4: "AI 收据扫描界面",
    alt5: "行程预算管理界面",
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
            <img src="${cardImg}" alt="${l.alt1}" />
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
            <img src="${patternImg}" alt="${l.alt2}" />
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
            <img src="${recommendImg}" alt="${l.alt3}" />
          </div>
        </div>
        <div class="feature-text">
          <span class="feature-tag">${l.feat3Tag}</span>
          <h2>${l.feat3Title}</h2>
          <p>${l.feat3Desc}</p>
        </div>
      </div>
    </section>

    <section class="feature">
      <div class="feature-inner feature-inner--reverse animate-in">
        <div class="phone-wrap">
          <div class="phone-frame">
            <img src="${scanImg}" alt="${l.alt4}" />
          </div>
        </div>
        <div class="feature-text">
          <span class="feature-tag">${l.feat4Tag}</span>
          <h2>${l.feat4Title}</h2>
          <p>${l.feat4Desc}</p>
        </div>
      </div>
    </section>

    <section class="feature feature--alt">
      <div class="feature-inner animate-in">
        <div class="phone-wrap">
          <div class="phone-frame">
            <img src="${budgetImg}" alt="${l.alt5}" />
          </div>
        </div>
        <div class="feature-text">
          <span class="feature-tag">${l.feat5Tag}</span>
          <h2>${l.feat5Title}</h2>
          <p>${l.feat5Desc}</p>
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
