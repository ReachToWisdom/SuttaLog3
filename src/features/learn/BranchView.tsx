// 행복경 완료 후 분기점 화면 — 다음 학습 경로 선택
interface BranchViewProps {
  onChooseExtra: () => void   // 보배경/자비경 선택
  onChooseNext: () => void    // 전법륜경으로
}

export default function BranchView({ onChooseExtra, onChooseNext }: BranchViewProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{ background: 'var(--color-surface)' }}>

      <div className="w-full max-w-md">
        {/* 완료 축하 헤더 */}
        <div className="text-center mb-8 intro-fade-up">
          <div className="bounce-in inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
            style={{
              background: 'var(--color-primary-gradient)',
              boxShadow: 'var(--color-primary-glow)',
            }}>
            <span className="text-4xl">🪷</span>
          </div>
          <h1 className="text-2xl font-bold mb-1"
            style={{ color: 'var(--color-text)' }}>
            행복경 완료!
          </h1>
        </div>

        {/* 배운 것 카드 */}
        <div className="card-shadow rounded-2xl p-5 mb-4 intro-fade-up"
          style={{
            background: 'var(--color-surface-elevated)',
            border: '1px solid var(--color-border-light)',
          }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-success inline-flex items-center justify-center w-7 h-7 rounded-full text-sm">
              ✅
            </span>
            <h2 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
              배운 것
            </h2>
          </div>
          <ul className="space-y-2 ml-1">
            {[
              '발음 (모음 8자 + 자음 33자)',
              '연성법 16가지',
              '기초 단어 85개',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm intro-fade-up-delay"
                style={{
                  color: 'var(--color-text-secondary)',
                  animationDelay: `${0.1 + i * 0.08}s`,
                }}>
                <span style={{ color: 'var(--color-accent)' }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 다음에 배울 것 카드 */}
        <div className="card-shadow rounded-2xl p-5 mb-8 intro-fade-up-delay"
          style={{
            background: 'var(--color-surface-elevated)',
            border: '1px solid var(--color-border-light)',
            animationDelay: '0.15s',
          }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-primary inline-flex items-center justify-center w-7 h-7 rounded-full text-sm">
              📖
            </span>
            <h2 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
              다음에 배울 것
            </h2>
          </div>
          <ul className="space-y-2 ml-1">
            {[
              '문법 (격변화, 동사활용)',
              '산문 독해',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm intro-fade-up-delay"
                style={{
                  color: 'var(--color-text-secondary)',
                  animationDelay: `${0.25 + i * 0.08}s`,
                }}>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 안내 텍스트 */}
        <p className="text-center text-xs mb-6 intro-fade-up-delay px-2"
          style={{
            color: 'var(--color-text-tertiary)',
            animationDelay: '0.3s',
            lineHeight: '1.6',
          }}>
          기초를 더 다지고 싶다면 같은 난이도의<br />
          보배경·자비경을 추가로 학습하세요.
        </p>

        {/* 버튼 영역 */}
        <div className="flex gap-3 intro-fade-up-delay"
          style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onChooseExtra}
            className="btn-secondary flex-1 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all"
            style={{ minWidth: 0 }}
          >
            보배경·자비경 먼저
          </button>
          <button
            onClick={onChooseNext}
            className="btn-primary flex-1 py-3.5 px-4 rounded-xl font-semibold text-sm transition-all"
            style={{ minWidth: 0 }}
          >
            전법륜경으로 →
          </button>
        </div>
      </div>
    </div>
  )
}
