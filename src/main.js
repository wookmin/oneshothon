import "./style.css";

import scanImg from "../assets/영수증 스캔하기.png";
import tripImg from "../assets/나의 여행 목록 페이지.png";
import statsImg from "../assets/통계 페이지 (상세보기 및 바 그래프 적용).png";

document.getElementById("app").innerHTML = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="/" class="logo">oneshot</a>
      <a href="#pre-register" class="btn-nav">사전 신청하기</a>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-inner animate-in">
      <h1>해외여행 지출,<br>이제 하나로</h1>
      <p class="hero-sub">찍고, 기록하고, 분석까지.<br>여행의 모든 소비를 한 앱에서.</p>
      <a href="#pre-register" class="btn-primary">사전 신청하기 →</a>
    </div>
  </section>

  <section class="feature feature--alt">
    <div class="feature-inner animate-in">
      <div class="phone-wrap">
        <div class="phone-frame">
          <img src="${scanImg}" alt="AI 영수증 스캔 화면" />
        </div>
      </div>
      <div class="feature-text">
        <span class="feature-tag">AI 영수증 스캔</span>
        <h2>찍으면 끝.</h2>
        <p>카메라로 영수증을 찍으면 AI가 금액과 카테고리를 자동 인식해 바로 기록해드려요.</p>
      </div>
    </div>
  </section>

  <section class="feature">
    <div class="feature-inner feature-inner--reverse animate-in">
      <div class="phone-wrap">
        <div class="phone-frame">
          <img src="${tripImg}" alt="여행 목록 화면" />
        </div>
      </div>
      <div class="feature-text">
        <span class="feature-tag">여행별 예산 관리</span>
        <h2>모든 여행을 한눈에</h2>
        <p>여행마다 예산을 설정하고, 실시간으로 지출 현황을 확인하세요.</p>
      </div>
    </div>
  </section>

  <section class="feature feature--alt">
    <div class="feature-inner animate-in">
      <div class="phone-wrap">
        <div class="phone-frame">
          <img src="${statsImg}" alt="AI 소비 인사이트 화면" />
        </div>
      </div>
      <div class="feature-text">
        <span class="feature-tag">AI 소비 인사이트</span>
        <h2>소비 패턴을 분석해드려요</h2>
        <p>카테고리별 지출 분석과 AI 인사이트로 다음 여행은 더 스마트하게.</p>
      </div>
    </div>
  </section>

  <section class="cta-section" id="pre-register">
    <div class="cta-inner animate-in">
      <h2>지금 신청하고 가장 먼저 만나보세요</h2>
      <p class="cta-desc">출시되면 가장 먼저 알려드릴게요.</p>
      <button class="btn-cta" id="cta-btn">사전 신청하기 →</button>
    </div>
  </section>

  <div class="toast" id="toast">곧 출시 예정이에요! 기대해주세요</div>

  <footer class="footer">
    <div class="footer-inner">
      <span class="logo">oneshot</span>
      <p>© 2026 oneshot. All rights reserved.</p>
    </div>
  </footer>
`;

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

document.querySelectorAll(".animate-in").forEach((el) => observer.observe(el));

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

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
