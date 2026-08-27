import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard Guide | Multi-Asset Scenario Stress Lab",
  description: "Short screen-centered guide to reading the Multi-Asset Scenario Stress Lab public dashboard.",
};

const boundaries = [
  ["Tail share", "Generated stress-tail scenario frequency", "Real-world event probability"],
  ["Representative path", "A feasible example of a stress geometry", "A forecast of the path that will occur"],
  ["B1 − B0 gap", "Conditional vs historical stress-structure contrast", "A market-direction signal"],
  ["Portfolio What-if", "Same-cloud revaluation after changing weights", "An optimizer or recommendation"],
  ["Dependence shift", "A change in modeled stress-tail co-movement", "A timing signal"],
  ["ES / tail drawdown", "Model-implied scenario severity", "A guaranteed realized loss"],
];

export default function StressLabDashboardGuidePage() {
  return (
    <main>
      <section className="paper-hero system-hero">
        <div className="shell">
          <div className="paper-track-row"><div className="eyebrow">SlackQuant Systems · Quick Guide</div><span className="track-chip">Dashboard Guide v2.0</span></div>
          <h1 className="paper-title">Multi-Asset Scenario Stress Lab</h1>
          <div className="paper-subtitle">화면을 켰을 때 무엇을 먼저 보고, 어떻게 읽을 것인가</div>
          <div className="actions">
            <a className="btn primary ext" href="https://multi-asset-scenario-stress-lab.streamlit.app" target="_blank" rel="noopener noreferrer">Open Live Dashboard</a>
            <a className="btn soft" href="/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Dashboard_Guide_v2.0.pdf">Guide PDF</a>
            <Link className="btn soft" href="/systems/scenario-stress-lab/">Back to System Page</Link>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>Quick read</strong>
          <a href="#sequence">Reading sequence</a>
          <a href="#stress-lab">1 · Stress Lab</a>
          <a href="#what-if">2 · Portfolio What-if</a>
          <a href="#dependence">3 · Stress Dependence</a>
          <a href="#distribution">4 · Scenario Distribution</a>
          <a href="#workflow">PM workflow</a>
          <a href="#boundaries">Interpretation boundaries</a>
        </aside>

        <article>
          <section className="prose-section" id="sequence">
            <h2>먼저 네 화면을 이 순서로 본다</h2>
            <p className="lede">이 시스템의 핵심 질문은 “무슨 일이 일어날까?”가 아니라 “현재 조건에서 내 포트폴리오는 어떤 joint stress 구조에 취약한가?”다.</p>
            <div className="system-role-grid">
              <div className="system-role-card"><div className="kicker">1</div><h3>Stress Lab</h3><p>어떤 스트레스 유형이 worst tail에서 많이 나타나고, 대표 경로는 어떤 모습인지 본다.</p></div>
              <div className="system-role-card"><div className="kicker">2</div><h3>Portfolio What-if</h3><p>같은 시나리오 구름에서 비중만 바꾸면 손실 구조가 어떻게 달라지는지 본다.</p></div>
              <div className="system-role-card"><div className="kicker">3</div><h3>Stress Dependence</h3><p>평소의 분산효과나 주식–채권 헤지가 stress tail에서도 유지되는지 본다.</p></div>
              <div className="system-role-card"><div className="kicker">4</div><h3>Scenario Distribution</h3><p>전체 시나리오의 중앙, 왼쪽 꼬리, ES, tail drawdown으로 severity를 확인한다.</p></div>
            </div>
          </section>

          <section className="prose-section" id="stress-lab">
            <h2>1 · Stress Lab — “어떤 방식으로 깨질 수 있나?”</h2>
            <p className="body-copy"><strong>Current dominant stress</strong>는 현재 B1 worst-tail 안에서 가장 큰 share를 가진 stress family다. <strong>Current tail share</strong>는 그 유형이 generated tail scenarios 안에서 차지하는 비중이며, <strong>Historical share</strong>는 B0 historical comparator에서의 비중이다.</p>
            <div className="evidence-note"><strong>예시:</strong> Current 78% vs Historical 24%라면, 현재 conditional scenario tail에서 그 구조가 과거 resampling보다 훨씬 자주 나타난다는 뜻이다. “앞으로 그 사건이 발생할 확률이 78%”라는 뜻은 아니다.</div>
            <p className="body-copy">대표 asset moves와 representative portfolio path는 선택된 stress family의 전형적인 joint geometry를 보여준다. 어느 한 자산이 “원인”이라는 뜻이 아니라 여러 자산이 함께 어떻게 움직이며 포트폴리오 손실을 만드는지 보는 화면이다.</p>
          </section>

          <section className="prose-section" id="what-if">
            <h2>2 · Portfolio What-if — “비중을 바꾸면 취약성이 어떻게 변하나?”</h2>
            <p className="body-copy">Baseline과 Candidate를 <strong>동일한 5,000개 B1 scenario cloud</strong>에 다시 평가한다. 따라서 Candidate − Baseline 차이는 시나리오가 달라져서가 아니라 비중 변경 때문에 생긴 차이로 읽는다.</p>
            <div className="system-operating-list">
              <div><strong>Tail loss · ES 5%</strong><span> 가장 나쁜 5%의 평균 손실 크기.</span></div>
              <div><strong>Tail drawdown</strong><span> 시나리오 경로 안에서 경험할 수 있는 깊은 peak-to-trough 손실.</span></div>
              <div><strong>Median return</strong><span> 전체 scenario cloud의 중앙적인 20일 수익률.</span></div>
              <div><strong>Family trade-off</strong><span> 어떤 stress family에서는 취약성이 줄고 다른 family에서는 커지는지 확인.</span></div>
            </div>
            <div className="evidence-note">What-if는 optimizer가 아니다. “이 포트폴리오가 더 좋다”를 자동으로 추천하지 않는다.</div>
          </section>

          <section className="prose-section" id="dependence">
            <h2>3 · Stress Dependence — “헤지가 stress에서도 작동하나?”</h2>
            <p className="body-copy">Current B1 stress-tail correlation과 Historical B0 stress-tail correlation을 비교한다. 특히 SPY–IEF처럼 평소 분산효과를 기대하는 pair가 tail에서 함께 움직이는 방향으로 바뀌는지 확인한다.</p>
            <div className="evidence-note"><strong>예시:</strong> SPY–IEF가 Current +0.37, Historical −0.46이라면 현재 modeled stress tail에서는 주식과 중기 국채가 함께 움직이는 경향이 훨씬 강하다는 뜻이다. 이는 헤지 약화의 stress 구조를 보여주는 것이지, 다음 시장 방향을 예측하는 timing signal은 아니다.</div>
          </section>

          <section className="prose-section" id="distribution">
            <h2>4 · Scenario Distribution — “전체 tail severity는 어느 정도인가?”</h2>
            <p className="body-copy">B1과 B0의 20일 portfolio-return distribution을 함께 보고, 중앙과 왼쪽 꼬리를 구분해서 읽는다.</p>
            <div className="metrics system-metrics">
              <div className="metric"><div className="value">Median</div><div className="label">전체 scenario cloud의 중앙</div></div>
              <div className="metric"><div className="value">5% q.</div><div className="label">왼쪽 꼬리 진입점</div></div>
              <div className="metric"><div className="value">ES 5%</div><div className="label">worst 5% 평균 손실</div></div>
              <div className="metric"><div className="value">Tail DD</div><div className="label">심한 path drawdown</div></div>
            </div>
            <p className="body-copy"><strong>Stress Lab</strong>은 “어떤 구조가 tail에서 자주 보이는가”를, <strong>Scenario Distribution</strong>은 “전체 손실 분포가 얼마나 심한가”를 본다. 빈도와 심각도는 같은 개념이 아니다.</p>
          </section>

          <section className="prose-section" id="workflow">
            <h2>3–5분 PM workflow</h2>
            <div className="system-operating-list">
              <div><strong>1. Stress Lab</strong><span> dominant stress와 B1 vs B0 share gap을 본다.</span></div>
              <div><strong>2. Representative stress</strong><span> asset geometry와 portfolio path를 본다.</span></div>
              <div><strong>3. What-if</strong><span> 한두 개 현실적인 allocation candidate를 같은 cloud에서 비교한다.</span></div>
              <div><strong>4. Dependence</strong><span> 핵심 hedge pair가 tail에서 깨지는지 확인한다.</span></div>
              <div><strong>5. Distribution</strong><span> ES와 tail drawdown으로 전체 severity를 확인하고 사람이 최종 review한다.</span></div>
            </div>
          </section>

          <section className="prose-section" id="boundaries">
            <h2>꼭 지켜야 할 해석 금지선</h2>
            <div className="evidence-table-wrap">
              <table className="evidence-table system-evidence-table">
                <thead><tr><th>화면 정보</th><th>이렇게 읽는다</th><th>이렇게 읽지 않는다</th></tr></thead>
                <tbody>
                  {boundaries.map(([label, yes, no]) => <tr key={label}><th>{label}</th><td>{yes}</td><td>{no}</td></tr>)}
                </tbody>
              </table>
            </div>
            <div className="evidence-note"><strong>한 문장 요약:</strong> Stress Lab은 미래 사건을 맞히는 시스템이 아니라, 현재 조건에서 가능한 joint stress space를 탐색하고 포트폴리오 취약성을 사람의 판단 전에 구조화하는 시스템이다.</div>
          </section>
        </article>
      </div>
    </main>
  );
}
