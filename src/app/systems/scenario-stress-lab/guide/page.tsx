import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard Guide | Multi-Asset Scenario Stress Lab",
  description:
    "Short screen-centered guide to reading the Multi-Asset Scenario Stress Lab public dashboard.",
};

const boundaries = [
  [
    "Tail share",
    "생성된 worst-tail 시나리오 안에서 해당 스트레스 유형이 차지하는 비중",
    "실제 사건이 발생할 확률",
  ],
  [
    "Representative path",
    "해당 스트레스 구조를 대표하는 하나의 가능한 경로",
    "앞으로 실제로 발생할 경로에 대한 예측",
  ],
  [
    "B1 − B0 gap",
    "현재 조건을 반영한 B1과 과거 재표본화 B0의 차이",
    "시장 방향을 예측하는 신호",
  ],
  [
    "Portfolio What-if",
    "같은 시나리오에서 자산 비중 변경의 효과를 비교한 결과",
    "최적 포트폴리오 또는 투자 추천",
  ],
  [
    "Dependence shift",
    "stress tail에서 자산 간 동조화 관계가 달라진 정도",
    "매매 타이밍 신호",
  ],
  [
    "ES / tail drawdown",
    "모델 시나리오에서 계산된 손실의 심각도",
    "앞으로 실제 발생할 손실의 보장값",
  ],
];

export default function StressLabDashboardGuidePage() {
  return (
    <main>
      <section className="paper-hero system-hero">
        <div className="shell">
          <div className="paper-track-row">
            <div className="eyebrow">SlackQuant Systems · Quick Guide</div>
            <span className="track-chip">Dashboard Guide v2.0</span>
          </div>
          <h1 className="paper-title">Multi-Asset Scenario Stress Lab</h1>
          <div className="paper-subtitle">
            대시보드를 열면 무엇을 먼저 보고, 각 화면을 어떻게 해석해야 할까?
          </div>
          <div className="actions">
            <a
              className="btn primary ext"
              href="https://multi-asset-scenario-stress-lab.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Live Dashboard
            </a>
            <a
              className="btn soft ext"
              href="/assets/systems/scenario-stress-lab/Multi_Asset_Scenario_Stress_Lab_Dashboard_Guide_v2.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide PDF
            </a>
            <Link className="btn soft" href="/systems/scenario-stress-lab/">
              Back to System Page
            </Link>
          </div>
        </div>
      </section>

      <div className="shell detail-layout system-detail-layout">
        <aside className="toc">
          <strong>빠른 안내</strong>
          <a href="#sequence">확인 순서</a>
          <a href="#stress-lab">1 · Stress Lab</a>
          <a href="#what-if">2 · Portfolio What-if</a>
          <a href="#dependence">3 · Stress Dependence</a>
          <a href="#distribution">4 · Scenario Distribution</a>
          <a href="#workflow">3–5분 빠른 점검</a>
          <a href="#boundaries">해석 원칙</a>
        </aside>

        <article>
          <section className="prose-section" id="sequence">
            <h2>대시보드는 다음 순서로 확인한다</h2>
            <p className="lede">
              이 시스템은 “무슨 일이 일어날까?”를 맞히는 도구가 아니다.
              현재 시장 조건을 반영한 시나리오에서 내 포트폴리오가 어떤
              스트레스 구조에 취약한지를 살펴보는 도구다.
            </p>
            <div className="system-role-grid">
              <div className="system-role-card">
                <div className="kicker">1</div>
                <h3>Stress Lab</h3>
                <p>
                  현재 시나리오의 최악 구간에서 어떤 스트레스 유형이
                  두드러지는지, 대표 경로가 어떤 모습인지 확인한다.
                </p>
              </div>
              <div className="system-role-card">
                <div className="kicker">2</div>
                <h3>Portfolio What-if</h3>
                <p>
                  같은 시나리오를 유지한 채 자산 비중만 바꾸면 손실 구조가
                  어떻게 달라지는지 비교한다.
                </p>
              </div>
              <div className="system-role-card">
                <div className="kicker">3</div>
                <h3>Stress Dependence</h3>
                <p>
                  스트레스 상황에서도 분산효과와 주식–채권 헤지 관계가
                  유지되는지 확인한다.
                </p>
              </div>
              <div className="system-role-card">
                <div className="kicker">4</div>
                <h3>Scenario Distribution</h3>
                <p>
                  전체 시나리오 분포와 왼쪽 꼬리 지표를 통해 손실의 전반적인
                  심각도를 확인한다.
                </p>
              </div>
            </div>
          </section>

          <section className="prose-section" id="stress-lab">
            <h2>1 · Stress Lab — 현재 어떤 스트레스에 취약한가?</h2>
            <p className="body-copy">
              <strong>Current dominant stress</strong>는 현재 B1의 worst-tail
              시나리오에서 가장 큰 비중을 차지하는 스트레스 유형이다.
              <strong> Current tail share</strong>는 그 유형이 B1의 worst tail
              안에서 차지하는 비중이고, <strong>Historical share</strong>는 B0
              historical comparator에서 같은 유형이 차지하는 비중이다.
            </p>
            <div className="evidence-note">
              <strong>예시:</strong> Current 78%, Historical 24%라면 현재 조건을
              반영한 B1의 worst tail에서 해당 스트레스 유형이 과거 블록
              재표본화보다 훨씬 더 자주 나타난다는 뜻이다. “앞으로 그 사건이
              발생할 확률이 78%”라는 뜻은 아니다.
            </div>
            <p className="body-copy">
              대표 자산 움직임(asset moves)과 representative portfolio path는
              선택한 스트레스 유형에서 여러 자산이 어떻게 함께 움직이며
              포트폴리오 손실을 만드는지를 보여준다. 특정 자산 하나가 손실의
              “원인”이라는 의미는 아니다.
            </p>
          </section>

          <section className="prose-section" id="what-if">
            <h2>2 · Portfolio What-if — 비중을 바꾸면 취약성이 얼마나 달라지는가?</h2>
            <p className="body-copy">
              Baseline과 Candidate를 <strong>동일한 5,000개 B1 시나리오</strong>에
              적용해 다시 평가한다. 따라서 Candidate − Baseline의 차이는
              시나리오가 달라져서가 아니라 자산 비중을 바꾼 데서 생긴 차이로
              해석한다.
            </p>
            <div className="system-operating-list">
              <div>
                <strong>ES 5%</strong>
                <span> 가장 나쁜 5% 시나리오의 평균 손실.</span>
              </div>
              <div>
                <strong>Tail drawdown</strong>
                <span> 스트레스 경로에서 나타나는 큰 고점 대비 낙폭.</span>
              </div>
              <div>
                <strong>Median return</strong>
                <span> 전체 20일 시나리오 수익률의 중앙값.</span>
              </div>
              <div>
                <strong>Stress-family trade-off</strong>
                <span>
                  {" "}
                  어떤 스트레스 유형에서는 취약성이 줄고 다른 유형에서는
                  커지는지 확인.
                </span>
              </div>
            </div>
            <div className="evidence-note">
              What-if는 최적화 기능이나 포트폴리오 추천 기능이 아니다. 여러
              후보 비중을 같은 조건에서 비교해 의사결정을 돕는 기능이다.
            </div>
          </section>

          <section className="prose-section" id="dependence">
            <h2>3 · Stress Dependence — 스트레스 상황에서도 헤지가 작동하는가?</h2>
            <p className="body-copy">
              Current B1과 Historical B0의 stress-tail 상관관계를 비교한다.
              특히 SPY–IEF처럼 평소 분산효과를 기대하는 자산쌍의 관계가
              스트레스 구간에서 어떻게 달라지는지를 확인한다.
            </p>
            <div className="evidence-note">
              <strong>예시:</strong> SPY–IEF가 Current +0.37, Historical −0.46이라면
              현재 B1의 stress tail에서는 주식과 중기 국채가 함께 움직이는
              경향이 과거보다 훨씬 강하다는 뜻이다. 전통적인 헤지 관계가
              약해질 수 있는 스트레스 구조를 보여주는 것이지, 다음 시장
              방향을 예측하는 매매 신호는 아니다.
            </div>
          </section>

          <section className="prose-section" id="distribution">
            <h2>4 · Scenario Distribution — 전체 손실 분포는 얼마나 심한가?</h2>
            <p className="body-copy">
              B1과 B0의 20일 포트폴리오 수익률 분포를 함께 비교해 중앙 부분과
              왼쪽 꼬리를 구분해서 본다.
            </p>
            <div className="metrics system-metrics">
              <div className="metric">
                <div className="value">Median</div>
                <div className="label">20일 수익률 분포의 중앙값</div>
              </div>
              <div className="metric">
                <div className="value">5% q.</div>
                <div className="label">하위 5% 구간의 경계값</div>
              </div>
              <div className="metric">
                <div className="value">ES 5%</div>
                <div className="label">가장 나쁜 5%의 평균 손실</div>
              </div>
              <div className="metric">
                <div className="value">Tail DD</div>
                <div className="label">worst-tail 경로의 큰 drawdown</div>
              </div>
            </div>
            <p className="body-copy">
              <strong>Stress Lab</strong>은 “어떤 스트레스 유형이 tail에서
              두드러지는가?”를 보고, <strong>Scenario Distribution</strong>은
              “전체 손실 분포와 왼쪽 꼬리가 얼마나 심한가?”를 본다. 스트레스
              유형의 빈도와 손실의 심각도는 서로 다른 개념이다.
            </p>
          </section>

          <section className="prose-section" id="workflow">
            <h2>3–5분 빠른 점검 순서</h2>
            <div className="system-operating-list">
              <div>
                <strong>1. Stress Lab</strong>
                <span>
                  {" "}
                  현재 두드러지는 스트레스 유형과 B1–B0 비중 차이를 확인한다.
                </span>
              </div>
              <div>
                <strong>2. Representative stress</strong>
                <span> 대표 자산 움직임과 포트폴리오 경로를 확인한다.</span>
              </div>
              <div>
                <strong>3. What-if</strong>
                <span>
                  {" "}
                  현실적인 후보 비중 한두 개를 같은 시나리오에서 비교한다.
                </span>
              </div>
              <div>
                <strong>4. Dependence</strong>
                <span>
                  {" "}
                  핵심 헤지 관계가 스트레스 구간에서도 유지되는지 확인한다.
                </span>
              </div>
              <div>
                <strong>5. Distribution</strong>
                <span>
                  {" "}
                  ES와 tail drawdown으로 손실의 심각도를 확인한다. 최종 판단은
                  사람이 내린다.
                </span>
              </div>
            </div>
          </section>

          <section className="prose-section" id="boundaries">
            <h2>반드시 구분해서 읽어야 할 것</h2>
            <div className="evidence-table-wrap">
              <table className="evidence-table system-evidence-table">
                <thead>
                  <tr>
                    <th>화면의 값</th>
                    <th>의미</th>
                    <th>의미하지 않는 것</th>
                  </tr>
                </thead>
                <tbody>
                  {boundaries.map(([label, yes, no]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      <td>{yes}</td>
                      <td>{no}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="evidence-note">
              <strong>한 문장 요약:</strong> Stress Lab은 미래를 맞히는 시스템이
              아니라, 현재 조건을 반영한 다양한 공동 스트레스 시나리오를 통해
              포트폴리오의 취약성을 구조적으로 점검하는 의사결정 지원 도구다.
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
