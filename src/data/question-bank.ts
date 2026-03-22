import type { QuizStep, FillBlankStep } from './types'

// 문제은행: 각 경전별 수동 제작 문제 (랜덤 출제용)
// 매번 학습 시 이 중에서 랜덤으로 N개 선택

export const QUESTION_BANK: {
  lessonId: string
  questions: (QuizStep | FillBlankStep)[]
}[] = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 행복경 (mangala) — 20문제
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    lessonId: 'mangala',
    questions: [
      // ── 문맥 해석 5개 ──
      {
        type: 'quiz',
        question: '"Asevanā ca bālānaṃ"의 뜻은?',
        options: [
          '어리석은 이들을 가까이하지 않음',
          '어리석은 이들을 공경함',
          '지혜로운 이들을 멀리함',
          '어리석은 이들의 가르침',
        ],
        answer: 0,
        explanation: {
          correct: 'asevanā는 "가까이하지 않음", bālānaṃ은 "어리석은 이들의"입니다.',
          detail: 'a- 접두사가 sevanā(가까이함)에 붙어 반대 의미가 됩니다.',
          tip: 'a-sevanā = "안(a) 가까이함(sevanā)"으로 기억하세요.',
        },
      },
      {
        type: 'quiz',
        question: '"Paṇḍitānañca sevanā"의 뜻은?',
        options: [
          '지혜로운 이들을 가까이함',
          '지혜로운 이들을 피함',
          '어리석은 이들을 가까이함',
          '지혜로운 이들의 재산',
        ],
        answer: 0,
        explanation: {
          correct: 'paṇḍitānaṃ은 "지혜로운 이들의", sevanā는 "가까이함"입니다.',
          tip: 'paṇḍita(판디따) = 현자, 지혜로운 사람',
        },
      },
      {
        type: 'quiz',
        question: '"Pūjā ca pūjanīyānaṃ"의 뜻은?',
        options: [
          '공경받을 만한 이들을 공경함',
          '공경받을 만한 이들을 피함',
          '모든 사람을 공경함',
          '공경받을 이가 없음',
        ],
        answer: 0,
        explanation: {
          correct: 'pūjā는 "공경", pūjanīyānaṃ은 "공경받을 만한 이들의"입니다.',
          detail: 'pūjā와 pūjanīya는 같은 어근에서 나왔습니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Etaṃ maṅgalamuttamaṃ"의 뜻은?',
        options: [
          '이것이 최상의 행복이다',
          '이것은 불행이다',
          '이것이 보통의 행복이다',
          '이것이 최초의 가르침이다',
        ],
        answer: 0,
        explanation: {
          correct: 'etaṃ은 "이것", maṅgala는 "행복/축복", uttamaṃ은 "최상의"입니다.',
          tip: 'uttama = "으뜸" → 최상의',
        },
      },
      {
        type: 'quiz',
        question: '"Bāhusaccañca"의 뜻은?',
        options: [
          '많이 배움(박학)',
          '적게 배움',
          '가르침을 전함',
          '듣지 못함',
        ],
        answer: 0,
        explanation: {
          correct: 'bāhu는 "많은", sacca는 여기서 "배운 것/들은 것"을 의미합니다.',
          detail: '복합어: bāhu(많은) + sacca(배움) = 박학',
        },
      },

      // ── 올바른 형태 5개 ──
      {
        type: 'fill-blank',
        sentence: '___ maṅgalamuttamaṃ',
        translation: '이것이 최상의 행복이다',
        blank: 'etaṃ',
        options: ['etaṃ', 'etena', 'etassa', 'ete'],
        answer: 0,
        explanation: {
          correct: '"이것이"에 해당하는 주격 형태 etaṃ이 맞습니다.',
          detail: 'etena는 "이것에 의해", etassa는 "이것의", ete는 복수입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Asevanā ca ___',
        translation: '어리석은 이들을 가까이하지 않음',
        blank: 'bālānaṃ',
        options: ['bālānaṃ', 'bālā', 'bālaṃ', 'bālena'],
        answer: 0,
        explanation: {
          correct: '"어리석은 이들의"라는 소유/관계를 나타내는 속격 bālānaṃ이 맞습니다.',
          detail: 'bālā는 주격 복수, bālaṃ은 대격 단수입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Patirūpadesavāso ca pubbe ca kata___ ',
        translation: '알맞은 지역에 사는 것과 전에 지은 공덕',
        blank: 'puññatā',
        options: ['puññatā', 'puññaṃ', 'puññena', 'puññassa'],
        answer: 0,
        explanation: {
          correct: 'puññatā는 "공덕이 있음"이라는 추상명사 형태입니다.',
          detail: '-tā는 상태를 나타내는 접미사입니다 (예: suññatā = 공함).',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ ca pūjanīyānaṃ',
        translation: '공경받을 만한 이들을 공경함',
        blank: 'pūjā',
        options: ['pūjā', 'pūjaṃ', 'pūjāya', 'pūjeti'],
        answer: 0,
        explanation: {
          correct: 'pūjā는 명사 주격 "공경(함)"입니다.',
          detail: 'pūjeti는 동사 "공경하다", pūjāya는 여격입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Paṇḍitānañca ___',
        translation: '지혜로운 이들을 가까이함',
        blank: 'sevanā',
        options: ['sevanā', 'sevanaṃ', 'sevati', 'sevitabba'],
        answer: 0,
        explanation: {
          correct: 'sevanā는 "가까이함"이라는 여성 명사입니다.',
          detail: 'sevati는 동사, sevitabba는 "가까이해야 할"이라는 형용사입니다.',
        },
      },

      // ── 쌍 비교 3개 ──
      {
        type: 'quiz',
        question: '"sevanā"와 "asevanā"의 차이는?',
        options: [
          'sevanā는 "가까이함", asevanā는 "가까이하지 않음"',
          '같은 뜻이다',
          'sevanā는 "멀리함", asevanā는 "가까이함"',
          'sevanā는 명사, asevanā는 동사',
        ],
        answer: 0,
        explanation: {
          correct: 'a- 접두사가 붙으면 반대 의미가 됩니다.',
          tip: '한국어 "비(非)-"와 같은 역할입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"pūjā"와 "pūjanīya"의 차이는?',
        options: [
          'pūjā는 "공경(행위)", pūjanīya는 "공경받을 만한(자격)"',
          '같은 뜻이다',
          'pūjā는 "자격", pūjanīya는 "행위"',
          'pūjā는 동사, pūjanīya는 명사',
        ],
        answer: 0,
        explanation: {
          correct: '-nīya 접미사는 "~받을 만한, ~해야 할"이라는 뜻을 더합니다.',
          tip: 'pūja+nīya = 공경+받을 만한',
        },
      },
      {
        type: 'quiz',
        question: '"bāla"와 "paṇḍita"의 관계는?',
        options: [
          '반대 의미: bāla(어리석은), paṇḍita(지혜로운)',
          '같은 의미다',
          'bāla가 paṇḍita보다 높은 단계',
          '전혀 관련 없는 단어',
        ],
        answer: 0,
        explanation: {
          correct: '행복경에서 "어리석은 이를 피하고(asevanā bālānaṃ) 지혜로운 이를 가까이하라(paṇḍitānañca sevanā)"고 대비됩니다.',
        },
      },

      // ── 반대/유사 3개 ──
      {
        type: 'quiz',
        question: '"maṅgala(행복/축복)"의 반대 개념은?',
        options: [
          'amaṅgala(불길함)',
          'dukkha(괴로움)',
          'nibbāna(열반)',
          'sacca(진리)',
        ],
        answer: 0,
        explanation: {
          correct: 'a- 접두사가 붙어 amaṅgala(불길함, 불행)이 됩니다.',
        },
      },
      {
        type: 'quiz',
        question: '행복경에서 "uttama"는 무슨 뜻입니까?',
        options: [
          '최상의',
          '보통의',
          '최하의',
          '중간의',
        ],
        answer: 0,
        explanation: {
          correct: 'uttama는 "으뜸, 최상의"를 뜻합니다.',
          tip: '"으뜸아(uttama)" → 최상의',
        },
      },
      {
        type: 'quiz',
        question: '"gāravo(공경)"와 유사한 뜻의 단어는?',
        options: [
          'pūjā(공경)',
          'dāna(보시)',
          'sīla(계율)',
          'paññā(지혜)',
        ],
        answer: 0,
        explanation: {
          correct: 'gāravo와 pūjā는 모두 "존경, 공경"이라는 뜻입니다.',
          detail: 'dāna는 "베풂", sīla는 "도덕", paññā는 "지혜"입니다.',
        },
      },

      // ── 문장 속 역할 4개 ──
      {
        type: 'quiz',
        question: '"Asevanā ca bālānaṃ"에서 "bālānaṃ"은?',
        options: [
          '"어리석은 이들의" — 누구를 피하는지 대상',
          '"어리석은 이들이" — 행동의 주체',
          '"어리석은 이들에게" — 장소',
          '"어리석은 이들에 의해" — 수단',
        ],
        answer: 0,
        explanation: {
          correct: '-ānaṃ은 "~들의"를 나타내는 복수 속격 어미입니다.',
          tip: '-ānaṃ = "~들의"로 기억하세요.',
        },
      },
      {
        type: 'quiz',
        question: '"Etaṃ maṅgalamuttamaṃ"에서 "etaṃ"은?',
        options: [
          '"이것이" — 문장의 주어',
          '"이것을" — 문장의 목적어',
          '"이것에서" — 장소',
          '"이것에 의해" — 수단',
        ],
        answer: 0,
        explanation: {
          correct: 'etaṃ은 중성 주격/대격이며, 여기서는 주어 역할입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Patirūpadesavāso"에서 "desa"는 무엇입니까?',
        options: [
          '지역/장소',
          '사람',
          '시간',
          '행위',
        ],
        answer: 0,
        explanation: {
          correct: '복합어 분석: pati(알맞은) + rūpa(형태) + desa(지역) + vāso(삶) = 알맞은 지역에 사는 것',
        },
      },
      {
        type: 'quiz',
        question: '"Dhammasākacchā"에서 각 부분의 역할은?',
        options: [
          'dhamma(법) + sākacchā(대화) = 법에 대한 대화',
          'dhamma(괴로움) + sākacchā(제거) = 괴로움 제거',
          'dhamma(장소) + sākacchā(이동) = 장소 이동',
          'dhamma(사람) + sākacchā(만남) = 사람과 만남',
        ],
        answer: 0,
        explanation: {
          correct: '복합어: dhamma(법, 가르침) + sākacchā(토론, 대화)',
          tip: '법담(法談) — 가르침에 대해 토론하는 것',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 전법륜경 (dhammacakka) — 20문제
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    lessonId: 'dhammacakka',
    questions: [
      // ── 사성제 관련 5개 ──
      {
        type: 'quiz',
        question: '사성제(四聖諦)의 첫 번째 "dukkha"는?',
        options: [
          '괴로움(고)',
          '괴로움의 원인',
          '괴로움의 소멸',
          '괴로움의 소멸로 가는 길',
        ],
        answer: 0,
        explanation: {
          correct: 'dukkha(괴로움)는 사성제의 첫 번째 진리입니다.',
          detail: '나머지는 순서대로 samudaya(원인), nirodha(소멸), magga(도)입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Idaṃ dukkhasamudayaṃ ariyasaccaṃ"의 뜻은?',
        options: [
          '이것이 괴로움의 원인에 대한 성스러운 진리이다',
          '이것이 괴로움의 소멸에 대한 성스러운 진리이다',
          '이것이 괴로움에 대한 성스러운 진리이다',
          '이것이 도에 대한 성스러운 진리이다',
        ],
        answer: 0,
        explanation: {
          correct: 'dukkha(괴로움) + samudaya(일어남/원인) = 괴로움의 원인(집제)',
          tip: 'samudaya = sam(함께) + udaya(일어남)',
        },
      },
      {
        type: 'quiz',
        question: '"nirodha"의 뜻은?',
        options: [
          '소멸(멸)',
          '원인(집)',
          '길(도)',
          '괴로움(고)',
        ],
        answer: 0,
        explanation: {
          correct: 'nirodha는 "소멸, 그침"을 뜻하며 사성제의 세 번째입니다.',
          tip: 'ni(아래로) + rodha(막음) → 완전히 멈춤 → 소멸',
        },
      },
      {
        type: 'quiz',
        question: '사성제의 순서로 올바른 것은?',
        options: [
          'dukkha → samudaya → nirodha → magga',
          'samudaya → dukkha → magga → nirodha',
          'magga → nirodha → dukkha → samudaya',
          'nirodha → magga → samudaya → dukkha',
        ],
        answer: 0,
        explanation: {
          correct: '고(苦)→집(集)→멸(滅)→도(道) 순서입니다.',
          tip: '"고집멸도" — 괴로움, 원인, 소멸, 길',
        },
      },
      {
        type: 'quiz',
        question: '"ariyasacca"는 무슨 뜻입니까?',
        options: [
          '성스러운 진리(성제)',
          '세속적 진리',
          '거짓된 견해',
          '고대의 가르침',
        ],
        answer: 0,
        explanation: {
          correct: 'ariya(성스러운) + sacca(진리) = 성제',
          detail: 'ariya는 "고귀한, 성스러운"이라는 뜻의 형용사입니다.',
        },
      },

      // ── 팔정도 관련 5개 ──
      {
        type: 'quiz',
        question: '"sammā"의 뜻은?',
        options: [
          '바른, 올바른',
          '그릇된',
          '최상의',
          '처음의',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā는 "바른, 올바른"이라는 뜻으로, 팔정도 모든 항목에 붙습니다.',
          tip: '팔정도: sammā-diṭṭhi(정견), sammā-saṅkappa(정사유)...',
        },
      },
      {
        type: 'quiz',
        question: '"sammādiṭṭhi"의 뜻은?',
        options: [
          '바른 견해(정견)',
          '바른 생각(정사유)',
          '바른 말(정어)',
          '바른 행위(정업)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + diṭṭhi(견해, 봄) = 정견',
          detail: 'diṭṭhi는 "보다(√dis)"에서 나온 명사입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammāsati"의 뜻은?',
        options: [
          '바른 알아차림(정념)',
          '바른 집중(정정)',
          '바른 노력(정정진)',
          '바른 생계(정명)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + sati(알아차림, 마음챙김) = 정념',
          tip: 'sati(사띠) = 알아차림, 마음챙김',
        },
      },
      {
        type: 'quiz',
        question: '"sammāsamādhi"의 뜻은?',
        options: [
          '바른 집중(정정)',
          '바른 알아차림(정념)',
          '바른 노력(정정진)',
          '바른 견해(정견)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + samādhi(집중, 삼매) = 정정',
          tip: 'samādhi(사마디) = 마음을 한 곳에 모음',
        },
      },
      {
        type: 'quiz',
        question: '팔정도에서 "도덕/계율" 영역에 해당하는 것은?',
        options: [
          'sammāvācā(정어), sammākammanta(정업), sammāājīva(정명)',
          'sammādiṭṭhi(정견), sammāsaṅkappa(정사유)',
          'sammāsati(정념), sammāsamādhi(정정)',
          'sammāvāyāma(정정진)',
        ],
        answer: 0,
        explanation: {
          correct: '계(戒) 영역: 바른 말, 바른 행위, 바른 생계',
          detail: '지혜 영역: 정견+정사유 / 집중 영역: 정정진+정념+정정',
        },
      },

      // ── 중도/극단 관련 3개 ──
      {
        type: 'quiz',
        question: '"majjhimā paṭipadā"의 뜻은?',
        options: [
          '중도(中道), 중간의 길',
          '극단의 길',
          '고행의 길',
          '쾌락의 길',
        ],
        answer: 0,
        explanation: {
          correct: 'majjhimā(중간의) + paṭipadā(길, 수행법) = 중도',
          tip: 'majjhima → 중간 → "마지막(majjhima)"이 아니라 "중간"!',
        },
      },
      {
        type: 'quiz',
        question: '전법륜경에서 피해야 할 두 극단은?',
        options: [
          '감각적 쾌락(kāmasukha)과 자기 학대(attakilamatha)',
          '명상과 학문',
          '보시와 지계',
          '고요함과 통찰',
        ],
        answer: 0,
        explanation: {
          correct: 'kāma-sukha-allika(감각적 쾌락에 빠짐)와 atta-kilamatha(자기 학대/고행)입니다.',
          detail: '이 둘을 피하고 중도(majjhimā paṭipadā)를 따르라고 설하셨습니다.',
        },
      },
      {
        type: 'quiz',
        question: '"attakilamathānuyogo"에서 "atta"는?',
        options: [
          '자기(자신)',
          '자아(영혼)',
          '다른 사람',
          '세상',
        ],
        answer: 0,
        explanation: {
          correct: 'atta(자기) + kilamatha(괴롭힘) + anuyoga(전념) = 자기 학대에 전념함',
          detail: '여기서 atta는 무아경의 "자아(attan)"와 다른 의미로 "자기 자신"을 뜻합니다.',
        },
      },

      // ── 동사 형태 3개 ──
      {
        type: 'quiz',
        question: '"deseti"의 뜻은?',
        options: [
          '설하다, 가르치다',
          '듣다',
          '보다',
          '걷다',
        ],
        answer: 0,
        explanation: {
          correct: 'deseti는 "설하다, 가르치다"라는 뜻의 동사입니다.',
          tip: 'Bhagavā dhammaṃ deseti = 세존께서 법을 설하신다',
        },
      },
      {
        type: 'quiz',
        question: '"abhisambuddha"의 뜻은?',
        options: [
          '완전히 깨달은',
          '아직 깨닫지 못한',
          '가르치는',
          '듣고 있는',
        ],
        answer: 0,
        explanation: {
          correct: 'abhi(완전히) + sam(함께) + buddha(깨달은) = 완전히 깨달은',
          tip: '접두사 abhi-는 "완전히, 위로"의 뜻을 더합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"udapādi"의 뜻은?',
        options: [
          '일어났다(생겨났다)',
          '사라졌다',
          '가르쳤다',
          '앉았다',
        ],
        answer: 0,
        explanation: {
          correct: 'udapādi는 "일어나다, 생기다"의 과거형입니다.',
          detail: '전법륜경에서 "cakkhuṃ udapādi(눈이 생겨났다)"로 사용됩니다.',
        },
      },

      // ── 삼전십이행상 4개 ──
      {
        type: 'quiz',
        question: '삼전십이행상(三轉十二行相)에서 "pariññeyya"의 뜻은?',
        options: [
          '완전히 알아야 할 것',
          '버려야 할 것',
          '실현해야 할 것',
          '닦아야 할 것',
        ],
        answer: 0,
        explanation: {
          correct: 'pariññeyya는 고제(苦諦)에 대한 의무로, "완전히 알아야 할 것"입니다.',
          tip: 'pari(완전히) + ñeyya(알아야 할)',
        },
      },
      {
        type: 'quiz',
        question: '사성제에서 "pahātabba(버려야 할 것)"는 어느 진리에 해당합니까?',
        options: [
          '집제(괴로움의 원인)',
          '고제(괴로움)',
          '멸제(소멸)',
          '도제(길)',
        ],
        answer: 0,
        explanation: {
          correct: '괴로움의 원인(samudaya)은 버려야(pahātabba) 합니다.',
          detail: '고→알아야(pariññeyya), 집→버려야(pahātabba), 멸→실현해야(sacchikātabba), 도→닦아야(bhāvetabba)',
        },
      },
      {
        type: 'quiz',
        question: '"sacchikātabba(실현해야 할 것)"는 어느 진리에 해당합니까?',
        options: [
          '멸제(괴로움의 소멸)',
          '고제(괴로움)',
          '집제(원인)',
          '도제(길)',
        ],
        answer: 0,
        explanation: {
          correct: '괴로움의 소멸(nirodha)은 직접 실현해야(sacchikātabba) 합니다.',
          tip: 'sacchi(눈으로) + kātabba(해야 할) → 직접 체험해야 할',
        },
      },
      {
        type: 'quiz',
        question: '"bhāvetabba(닦아야 할 것)"는 어느 진리에 해당합니까?',
        options: [
          '도제(길, 팔정도)',
          '고제(괴로움)',
          '집제(원인)',
          '멸제(소멸)',
        ],
        answer: 0,
        explanation: {
          correct: '도(magga), 즉 팔정도는 닦아야(bhāvetabba) 합니다.',
          tip: 'bhāvetabba = "발전시켜야 할, 수행해야 할"',
        },
      },
      // ── 추가 fill-blank 5개 ──
      {
        type: 'fill-blank',
        sentence: 'Idaṃ ___ ariyasaccaṃ',
        translation: '이것이 괴로움의 성스러운 진리이다',
        blank: 'dukkhaṃ',
        options: ['dukkhaṃ', 'dukkhasamudayaṃ', 'dukkhanirodhagāminī', 'dukkhanirodhā'],
        answer: 0,
        explanation: {
          correct: '사성제의 첫 번째 진리인 고제(dukkhaṃ)가 맞습니다.',
          detail: 'dukkhasamudayaṃ은 "괴로움의 원인", dukkhanirodhā는 "괴로움의 소멸"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ paṭipadā dvayaṃ antaṃ anupagamma',
        translation: '두 극단에 가까이하지 않는 중간의 길',
        blank: 'majjhimā',
        options: ['majjhimā', 'sammā', 'ariyā', 'dukkhā'],
        answer: 0,
        explanation: {
          correct: 'majjhimā(중간의) paṭipadā(길) = 중도입니다.',
          detail: 'sammā는 "바른", ariyā는 "성스러운"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Ayameva ariyo aṭṭhaṅgiko ___',
        translation: '이 성스러운 팔지분의 길(팔정도)',
        blank: 'maggo',
        options: ['maggo', 'dhammo', 'saṅgho', 'buddho'],
        answer: 0,
        explanation: {
          correct: 'maggo(길, 도)가 맞습니다. 팔정도 = ariyo aṭṭhaṅgiko maggo',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Cakkhuṃ ___, ñāṇaṃ udapādi',
        translation: '눈이 생겨났다, 앎이 생겨났다',
        blank: 'udapādi',
        options: ['udapādi', 'deseti', 'abhavissa', 'passati'],
        answer: 0,
        explanation: {
          correct: 'udapādi는 "생겨났다"의 과거형입니다.',
          detail: 'deseti는 "설한다", passati는 "본다"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Yāyaṃ ___ ponobhavikā nandirāgasahagatā',
        translation: '다시 태어남을 이끄는 갈애',
        blank: 'taṇhā',
        options: ['taṇhā', 'paññā', 'saddhā', 'sati'],
        answer: 0,
        explanation: {
          correct: 'taṇhā(갈애, 갈망)가 괴로움의 원인(집제)입니다.',
          detail: 'paññā는 "지혜", saddhā는 "믿음", sati는 "알아차림"입니다.',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 무아경 (anatta) — 20문제
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    lessonId: 'anatta',
    questions: [
      // ── 오온 구분 5개 ──
      {
        type: 'quiz',
        question: '오온(五蘊)의 첫 번째 "rūpa"의 뜻은?',
        options: [
          '물질(색)',
          '느낌(수)',
          '인식(상)',
          '의지작용(행)',
        ],
        answer: 0,
        explanation: {
          correct: 'rūpa는 "물질, 형태"를 뜻하며 오온의 첫 번째입니다.',
          tip: '색(色)수(受)상(想)행(行)식(識) = rūpa, vedanā, saññā, saṅkhārā, viññāṇa',
        },
      },
      {
        type: 'quiz',
        question: '"vedanā"의 뜻은?',
        options: [
          '느낌(수)',
          '물질(색)',
          '인식(상)',
          '의식(식)',
        ],
        answer: 0,
        explanation: {
          correct: 'vedanā는 "느낌, 감수"를 뜻합니다. 즐거움·괴로움·중립적 느낌을 포함합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"saññā"의 뜻은?',
        options: [
          '인식/지각(상)',
          '느낌(수)',
          '의지작용(행)',
          '물질(색)',
        ],
        answer: 0,
        explanation: {
          correct: 'saññā는 "인식, 지각, 표상"을 뜻합니다.',
          detail: '"이것은 파란색이다"처럼 대상을 인식·구별하는 기능입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"saṅkhārā"의 뜻은?',
        options: [
          '의지작용/형성(행)',
          '의식(식)',
          '느낌(수)',
          '물질(색)',
        ],
        answer: 0,
        explanation: {
          correct: 'saṅkhārā는 "의지적 형성작용, 지어진 것"을 뜻합니다.',
          detail: '의도(cetanā)를 중심으로 한 정신적 형성들입니다.',
        },
      },
      {
        type: 'quiz',
        question: '오온의 올바른 순서는?',
        options: [
          'rūpa → vedanā → saññā → saṅkhārā → viññāṇa',
          'viññāṇa → vedanā → saññā → saṅkhārā → rūpa',
          'vedanā → rūpa → viññāṇa → saññā → saṅkhārā',
          'saññā → vedanā → rūpa → saṅkhārā → viññāṇa',
        ],
        answer: 0,
        explanation: {
          correct: '색(rūpa)→수(vedanā)→상(saññā)→행(saṅkhārā)→식(viññāṇa)',
          tip: '"루(rū) 웨(ve) 산(sañ) 상(saṅ) 윈(viñ)"으로 기억하세요.',
        },
      },

      // ── 삼상 관련 5개 ──
      {
        type: 'quiz',
        question: '"Rūpaṃ bhikkhave anattā"의 뜻은?',
        options: [
          '비구들이여, 물질은 자아가 아니다',
          '비구들이여, 물질은 영원하다',
          '비구들이여, 느낌은 자아가 아니다',
          '비구들이여, 물질은 괴롭다',
        ],
        answer: 0,
        explanation: {
          correct: 'rūpaṃ(물질은) + bhikkhave(비구들이여) + anattā(자아가 아니다)',
        },
      },
      {
        type: 'quiz',
        question: '"aniccaṃ"의 뜻은?',
        options: [
          '무상한(영원하지 않은)',
          '영원한',
          '자아인',
          '즐거운',
        ],
        answer: 0,
        explanation: {
          correct: 'an(아닌) + icca(영원한) = 영원하지 않은, 무상한',
          tip: 'a/an- 접두사 = 부정(~이 아닌)',
        },
      },
      {
        type: 'quiz',
        question: '"Yadaniccaṃ taṃ dukkhaṃ"의 뜻은?',
        options: [
          '무상한 것, 그것은 괴롭다',
          '영원한 것, 그것은 즐겁다',
          '자아인 것, 그것은 행복하다',
          '괴로운 것, 그것은 영원하다',
        ],
        answer: 0,
        explanation: {
          correct: 'yad(~인 것) + aniccaṃ(무상한) + taṃ(그것은) + dukkhaṃ(괴롭다)',
          tip: '무상→고→무아의 논리적 연쇄입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Yaṃ dukkhaṃ tadanattā"의 뜻은?',
        options: [
          '괴로운 것, 그것은 자아가 아니다',
          '즐거운 것, 그것은 자아이다',
          '무상한 것, 그것은 영원하다',
          '자아인 것, 그것은 괴롭다',
        ],
        answer: 0,
        explanation: {
          correct: 'yaṃ(~인 것) + dukkhaṃ(괴로운) + tad(그것은) + anattā(자아가 아니다)',
          detail: '무상(anicca)→괴로움(dukkha)→무아(anattā)의 세 번째 단계입니다.',
        },
      },
      {
        type: 'quiz',
        question: '삼상(三相)에 해당하지 않는 것은?',
        options: [
          'sukha(행복)',
          'anicca(무상)',
          'dukkha(괴로움)',
          'anattā(무아)',
        ],
        answer: 0,
        explanation: {
          correct: '삼상은 anicca(무상), dukkha(괴로움), anattā(무아)입니다. sukha(행복)는 포함되지 않습니다.',
        },
      },

      // ── 조건문 3개 ──
      {
        type: 'quiz',
        question: '"Rūpañca hidaṃ bhikkhave attā abhavissa"에서 "abhavissa"의 뜻은?',
        options: [
          '~이었다면(가정법)',
          '~이다(현재)',
          '~이었다(과거)',
          '~일 것이다(미래)',
        ],
        answer: 0,
        explanation: {
          correct: 'abhavissa는 "~이었다면"이라는 가정법(조건문) 형태입니다.',
          detail: '"만약 물질이 자아였다면"이라는 반사실적 가정입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Nayidaṃ rūpaṃ saṃvatteyya"에서 "saṃvatteyya"의 뜻은?',
        options: [
          '~으로 되어가다(가정법)',
          '~이다(현재)',
          '~이 아니다(부정)',
          '~에서 왔다(과거)',
        ],
        answer: 0,
        explanation: {
          correct: 'saṃvatteyya는 "~으로 되어가다, 진행되다"의 가정법 형태입니다.',
          detail: '"물질이 병으로 되어가지 않을 것이다"라는 뜻으로 사용됩니다.',
        },
      },
      {
        type: 'quiz',
        question: '무아경의 가정법 논증 구조는?',
        options: [
          '"만약 자아라면 병들지 않을 것 → 하지만 병든다 → 그러므로 자아가 아니다"',
          '"자아이므로 병들지 않는다"',
          '"병들지 않으므로 자아이다"',
          '"자아가 아니므로 변하지 않는다"',
        ],
        answer: 0,
        explanation: {
          correct: '귀류법(반사실적 가정)으로 무아를 증명합니다.',
          detail: '자아라면 마음대로 할 수 있어야 하는데, 실제로는 그렇지 않으므로 자아가 아닙니다.',
        },
      },

      // ── 염오→해탈 과정 3개 ──
      {
        type: 'quiz',
        question: '"nibbindati"의 뜻은?',
        options: [
          '싫어하다, 염오하다',
          '집착하다',
          '즐기다',
          '깨닫다',
        ],
        answer: 0,
        explanation: {
          correct: 'nibbindati는 "싫어하다, 염오하다"로, 해탈 과정의 첫 단계입니다.',
          tip: '염오(nibbindati) → 탐욕 떠남(virajjati) → 해탈(vimuccati)',
        },
      },
      {
        type: 'quiz',
        question: '해탈 과정의 올바른 순서는?',
        options: [
          'nibbindati(염오) → virajjati(이욕) → vimuccati(해탈)',
          'vimuccati(해탈) → virajjati(이욕) → nibbindati(염오)',
          'virajjati(이욕) → nibbindati(염오) → vimuccati(해탈)',
          'vimuccati(해탈) → nibbindati(염오) → virajjati(이욕)',
        ],
        answer: 0,
        explanation: {
          correct: '염오(싫어짐) → 이욕(탐욕에서 벗어남) → 해탈(풀려남)',
          tip: '"싫→벗→풀" — 싫어하고, 벗어나고, 풀려나다',
        },
      },
      {
        type: 'quiz',
        question: '"Vimuttasmiṃ vimuttamiti ñāṇaṃ hoti"의 뜻은?',
        options: [
          '해탈했을 때 "해탈했다"라는 앎이 있다',
          '해탈하지 못했다는 앎이 있다',
          '깨달음을 구한다는 뜻이다',
          '아직 수행 중이라는 앎이다',
        ],
        answer: 0,
        explanation: {
          correct: '해탈의 완성: 해탈 후 스스로 해탈했음을 아는 지혜(반조지)가 생깁니다.',
          detail: 'vimutta(해탈한) + iti(~라고) + ñāṇa(앎) + hoti(있다)',
        },
      },

      // ── 반대어 4개 ──
      {
        type: 'quiz',
        question: '"nicca(영원한)"의 반대는?',
        options: [
          'anicca(무상한)',
          'dukkha(괴로운)',
          'anattā(무아)',
          'sukha(즐거운)',
        ],
        answer: 0,
        explanation: {
          correct: 'a- 접두사가 붙어 anicca(영원하지 않은, 무상한)가 됩니다.',
        },
      },
      {
        type: 'quiz',
        question: '"attā(자아)"의 반대는?',
        options: [
          'anattā(무아, 자아가 아닌)',
          'anicca(무상한)',
          'dukkha(괴로운)',
          'nicca(영원한)',
        ],
        answer: 0,
        explanation: {
          correct: 'an- 접두사가 붙어 anattā(자아가 아닌)가 됩니다.',
          tip: '모음 앞에서 a-가 an-으로 변합니다: an+attā',
        },
      },
      {
        type: 'quiz',
        question: '"sukha(즐거운)"의 반대는?',
        options: [
          'dukkha(괴로운)',
          'anicca(무상한)',
          'anattā(무아)',
          'nicca(영원한)',
        ],
        answer: 0,
        explanation: {
          correct: 'sukha(즐거움)의 반대는 dukkha(괴로움)입니다.',
          tip: 'su-(좋은) ↔ du-(나쁜), kha(바퀴축구멍) → 축이 잘 맞으면 편안, 안 맞으면 괴로움',
        },
      },
      {
        type: 'quiz',
        question: '"rāga(탐욕)"의 반대 상태는?',
        options: [
          'virāga(탐욕에서 벗어남)',
          'dukkha(괴로움)',
          'anicca(무상)',
          'moha(어리석음)',
        ],
        answer: 0,
        explanation: {
          correct: 'vi- 접두사가 붙어 virāga(이욕, 탐욕에서 벗어남)가 됩니다.',
          tip: 'vi-는 "~에서 벗어남, 분리"의 뜻입니다.',
        },
      },

      // ── 추가 fill-blank/quiz 5개 ──
      {
        type: 'fill-blank',
        sentence: '___ bhikkhave anattā',
        translation: '비구들이여, 물질은 자아가 아니다',
        blank: 'rūpaṃ',
        options: ['rūpaṃ', 'vedanā', 'saññā', 'viññāṇaṃ'],
        answer: 0,
        explanation: {
          correct: '무아경 첫 구절에서 다섯 온 중 첫 번째인 rūpaṃ(물질)이 옵니다.',
          detail: '이후 vedanā, saññā, saṅkhārā, viññāṇa 순으로 같은 구절이 반복됩니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Rūpaṃ bhikkhave anattā. Rūpañca hidaṃ bhikkhave attā ___, nayidaṃ rūpaṃ ābādhāya saṃvatteyya',
        translation: '비구들이여, 물질은 자아가 아니다. 만약 물질이 자아였다면, 물질이 병으로 되어가지 않을 것이다',
        blank: 'abhavissa',
        options: ['abhavissa', 'hoti', 'bhavissati', 'ahosi'],
        answer: 0,
        explanation: {
          correct: 'abhavissa는 "~이었다면"이라는 가정법 형태입니다.',
          detail: 'hoti는 현재형 "이다", bhavissati는 미래형 "일 것이다"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Nibbindaṃ ___, virāgā vimuccati',
        translation: '염오하여 탐욕에서 벗어나고, 이욕에 의해 해탈한다',
        blank: 'virajjati',
        options: ['virajjati', 'rajjati', 'passati', 'jānāti'],
        answer: 0,
        explanation: {
          correct: 'virajjati는 "탐욕에서 벗어나다(이욕)"입니다.',
          detail: 'rajjati는 "집착하다"로 반대 의미, passati는 "보다"입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Evaṃ passaṃ bhikkhave sutavā ariyasāvako"에서 "passaṃ"의 뜻은?',
        options: [
          '이와 같이 보는(관찰하는)',
          '이와 같이 듣는',
          '이와 같이 말하는',
          '이와 같이 앉는',
        ],
        answer: 0,
        explanation: {
          correct: 'passaṃ은 passati(보다)의 현재분사로 "보면서, 관찰하면서"입니다.',
          tip: '통찰지(vipassanā)의 어근도 같은 passati(보다)에서 옵니다.',
        },
      },
      {
        type: 'quiz',
        question: '무아경에서 "netaṃ mama, nesohamasmi, na meso attā"의 뜻은?',
        options: [
          '"이것은 나의 것이 아니다, 이것은 내가 아니다, 이것은 나의 자아가 아니다"',
          '"이것은 나의 것이다, 이것은 내가 맞다, 이것은 나의 자아이다"',
          '"이것은 영원하다, 이것은 즐겁다, 이것은 아름답다"',
          '"이것은 무상하다, 이것은 괴롭다, 이것은 공하다"',
        ],
        answer: 0,
        explanation: {
          correct: '삼부정문(三否定文): 나의 것 아님 + 내가 아님 + 나의 자아 아님',
          tip: 'na etaṃ mama(나의 것 아님), na eso aham asmi(내가 아님), na me so attā(나의 자아 아님)',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 사념처경 1부 (satipatthana-1) — 15문제
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    lessonId: 'satipatthana-1',
    questions: [
      // ── 사념처 정의 3개 ──
      {
        type: 'quiz',
        question: '"satipaṭṭhāna"는 무슨 뜻입니까?',
        options: [
          '알아차림의 확립(념처)',
          '바른 집중',
          '바른 견해',
          '바른 노력',
        ],
        answer: 0,
        explanation: {
          correct: 'sati(알아차림) + upaṭṭhāna(확립, 가까이 세움) = 알아차림의 확립',
          tip: '사띠빳타나 = 마음챙김을 확립하는 수행법',
        },
      },
      {
        type: 'quiz',
        question: '사념처의 네 가지 대상이 아닌 것은?',
        options: [
          'paññā(지혜)',
          'kāya(몸)',
          'vedanā(느낌)',
          'dhamma(법)',
        ],
        answer: 0,
        explanation: {
          correct: '사념처: 신(kāya), 수(vedanā), 심(citta), 법(dhamma). paññā(지혜)는 포함되지 않습니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Ātāpī sampajāno satimā"의 뜻은?',
        options: [
          '열심히, 분명히 알며, 알아차리며',
          '편안히, 느긋하게, 쉬면서',
          '빠르게, 급하게, 서둘러',
          '즐겁게, 기쁘게, 행복하게',
        ],
        answer: 0,
        explanation: {
          correct: 'ātāpī(열심히/정진하여) + sampajāno(분명히 알며) + satimā(알아차림이 있는)',
          detail: '사념처 수행의 세 가지 핵심 자세입니다.',
        },
      },

      // ── 호흡관찰 3개 ──
      {
        type: 'quiz',
        question: '"assasati"의 뜻은?',
        options: [
          '숨을 들이쉬다',
          '숨을 내쉬다',
          '숨을 멈추다',
          '걷다',
        ],
        answer: 0,
        explanation: {
          correct: 'assasati는 "숨을 들이쉬다"입니다.',
          tip: 'assasati(들이쉼) ↔ passasati(내쉼)',
        },
      },
      {
        type: 'quiz',
        question: '"passasati"의 뜻은?',
        options: [
          '숨을 내쉬다',
          '숨을 들이쉬다',
          '보다',
          '앉다',
        ],
        answer: 0,
        explanation: {
          correct: 'passasati는 "숨을 내쉬다"입니다.',
          detail: 'passati(보다)와 혼동하지 마세요!',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Dīghaṃ ___ dīghaṃ assasāmīti pajānāti',
        translation: '길게 들이쉬면서 "길게 들이쉰다"고 분명히 안다',
        blank: 'assasanto',
        options: ['assasanto', 'passasanto', 'gacchanto', 'nisīdanto'],
        answer: 0,
        explanation: {
          correct: 'assasanto는 "들이쉬면서"라는 현재분사입니다.',
          detail: 'passasanto는 "내쉬면서", gacchanto는 "가면서"입니다.',
        },
      },

      // ── 자세관찰 3개 ──
      {
        type: 'quiz',
        question: '"gacchanto"의 뜻은?',
        options: [
          '걸어가면서',
          '서 있으면서',
          '앉아 있으면서',
          '누워 있으면서',
        ],
        answer: 0,
        explanation: {
          correct: 'gacchanto는 gacchati(가다)의 현재분사로, "가면서"입니다.',
          tip: '4가지 자세: gacchanti(걸을 때), tiṭṭhati(서 있을 때), nisīdati(앉을 때), sayati(누울 때)',
        },
      },
      {
        type: 'quiz',
        question: '사념처의 네 가지 자세(iriyāpatha)에 해당하지 않는 것은?',
        options: [
          'dhāvati(뛰다)',
          'gacchati(걷다)',
          'tiṭṭhati(서 있다)',
          'nisīdati(앉다)',
        ],
        answer: 0,
        explanation: {
          correct: '네 자세: 걷기(gacchati), 서기(tiṭṭhati), 앉기(nisīdati), 눕기(sayati). 뛰기는 포함되지 않습니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ vā gacchantoti pajānāti',
        translation: '걸어가면서 "걸어간다"고 분명히 안다',
        blank: 'gacchanto',
        options: ['gacchanto', 'tiṭṭhanto', 'nisīdanto', 'sayāno'],
        answer: 0,
        explanation: {
          correct: '걷는 동작에 대한 알아차림이므로 gacchanto(걸으면서)가 맞습니다.',
        },
      },

      // ── 정형문 패턴 3개 ──
      {
        type: 'quiz',
        question: '"ajjhattaṃ"의 뜻은?',
        options: [
          '안으로(내적으로)',
          '밖으로(외적으로)',
          '안팎으로',
          '위로',
        ],
        answer: 0,
        explanation: {
          correct: 'ajjhattaṃ은 "안으로, 내적으로"를 뜻합니다.',
          tip: 'ajjhattaṃ(안) ↔ bahiddhā(밖)',
        },
      },
      {
        type: 'quiz',
        question: '"bahiddhā"의 뜻은?',
        options: [
          '밖으로(외적으로)',
          '안으로(내적으로)',
          '위로',
          '아래로',
        ],
        answer: 0,
        explanation: {
          correct: 'bahiddhā는 "밖으로, 외적으로"를 뜻합니다.',
          detail: '정형문에서 "ajjhattaṃ vā bahiddhā vā(안으로든 밖으로든)"으로 함께 나옵니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Samudayadhammānupassī vā kāyasmiṃ viharati"에서 "samudayadhamma"의 뜻은?',
        options: [
          '일어나는 성질',
          '사라지는 성질',
          '영원한 성질',
          '변하지 않는 성질',
        ],
        answer: 0,
        explanation: {
          correct: 'samudaya(일어남) + dhamma(성질/법) = 일어나는 성질',
          detail: 'vayadhamma(사라지는 성질)와 쌍으로 관찰합니다.',
        },
      },

      // ── 32신체/4대 3개 ──
      {
        type: 'quiz',
        question: '사대(四大, cattāro dhātuyo)에 해당하지 않는 것은?',
        options: [
          'ākāsa(공간)',
          'pathavī(땅)',
          'āpo(물)',
          'vāyo(바람)',
        ],
        answer: 0,
        explanation: {
          correct: '사대: pathavī(땅), āpo(물), tejo(불), vāyo(바람). ākāsa(공간)는 포함되지 않습니다.',
        },
      },
      {
        type: 'quiz',
        question: '"tejo"는 사대 중 무엇입니까?',
        options: [
          '불(화대)',
          '땅(지대)',
          '물(수대)',
          '바람(풍대)',
        ],
        answer: 0,
        explanation: {
          correct: 'tejo는 "불, 열"을 뜻하며 사대의 세 번째입니다.',
          tip: '지(pathavī)·수(āpo)·화(tejo)·풍(vāyo)',
        },
      },
      {
        type: 'quiz',
        question: '"Atthi imasmiṃ kāye kesā lomā nakhā"에서 "kāye"의 뜻은?',
        options: [
          '몸에(처격)',
          '몸이(주격)',
          '몸을(대격)',
          '몸의(속격)',
        ],
        answer: 0,
        explanation: {
          correct: 'kāye는 kāya(몸)의 처격으로 "몸에, 몸 안에"를 뜻합니다.',
          tip: '-e 어미 = "~에, ~에서" (처격)',
        },
      },

      // ── 추가 5개 ──
      {
        type: 'fill-blank',
        sentence: 'Kāye kāyānupassī viharati ātāpī ___ satimā',
        translation: '몸에서 몸을 관찰하며 머문다, 열심히 분명히 알며 알아차리며',
        blank: 'sampajāno',
        options: ['sampajāno', 'sukhito', 'dukkhito', 'passanto'],
        answer: 0,
        explanation: {
          correct: 'sampajāno는 "분명히 아는, 명확히 알아차리는"이라는 뜻입니다.',
          detail: 'sam(완전히) + pajāna(아는) = 분명히 아는',
        },
      },
      {
        type: 'quiz',
        question: '"ānāpānasati"의 뜻은?',
        options: [
          '호흡에 대한 알아차림',
          '걷기 명상',
          '자세 관찰',
          '몸의 부분 관찰',
        ],
        answer: 0,
        explanation: {
          correct: 'ānāpāna(들숨날숨) + sati(알아차림) = 호흡 알아차림',
          tip: 'āna(들숨) + apāna(날숨) + sati(알아차림)',
        },
      },
      {
        type: 'quiz',
        question: '"Nisīdati pallaṅkaṃ ābhujitvā"의 뜻은?',
        options: [
          '가부좌를 틀고 앉는다',
          '서서 걷는다',
          '누워서 쉰다',
          '일어서서 본다',
        ],
        answer: 0,
        explanation: {
          correct: 'nisīdati(앉다) + pallaṅkaṃ(가부좌) + ābhujitvā(틀고) = 가부좌를 틀고 앉는다',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Uddhaṃ pādatalā adho ___',
        translation: '아래로는 발바닥부터 위로는 머리카락까지',
        blank: 'kesamatthakā',
        options: ['kesamatthakā', 'kāyasmiṃ', 'pathavī', 'assasati'],
        answer: 0,
        explanation: {
          correct: 'kesamatthakā는 "머리카락 끝까지"를 뜻합니다. 32신체 관찰의 범위를 나타냅니다.',
          tip: 'kesa(머리카락) + matthaka(꼭대기) = 머리카락 꼭대기',
        },
      },
      {
        type: 'quiz',
        question: '"vayadhammānupassī"의 뜻은?',
        options: [
          '사라지는 성질을 관찰하는',
          '일어나는 성질을 관찰하는',
          '영원한 성질을 관찰하는',
          '즐거운 성질을 관찰하는',
        ],
        answer: 0,
        explanation: {
          correct: 'vaya(사라짐, 소멸) + dhamma(성질) + anupassī(관찰하는) = 사라지는 성질을 관찰하는',
          tip: 'samudaya(일어남) ↔ vaya(사라짐)',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 사념처경 2부 (satipatthana-2) — 15문제
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    lessonId: 'satipatthana-2',
    questions: [
      // ── 수념처 3개 ──
      {
        type: 'quiz',
        question: '수념처에서 세 가지 느낌이 아닌 것은?',
        options: [
          'moha(어리석음)',
          'sukha(즐거운 느낌)',
          'dukkha(괴로운 느낌)',
          'adukkhamasukha(괴롭지도 즐겁지도 않은 느낌)',
        ],
        answer: 0,
        explanation: {
          correct: '세 가지 느낌: sukha(즐거움), dukkha(괴로움), adukkhamasukha(중립). moha는 느낌이 아닙니다.',
        },
      },
      {
        type: 'quiz',
        question: '"adukkhamasukha"의 뜻은?',
        options: [
          '괴롭지도 즐겁지도 않은(중립적)',
          '매우 괴로운',
          '매우 즐거운',
          '괴롭고 즐거운',
        ],
        answer: 0,
        explanation: {
          correct: 'a-dukkha-m-a-sukha = 괴롭지(dukkha) 않고(a) 즐겁지(sukha) 않은(a)',
          tip: '부정 접두사 a-가 두 번 사용된 복합어입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ vedanaṃ vediyamāno sukhaṃ vedanaṃ vediyāmīti pajānāti',
        translation: '즐거운 느낌을 느끼면서 "즐거운 느낌을 느낀다"고 분명히 안다',
        blank: 'sukhaṃ',
        options: ['sukhaṃ', 'dukkhaṃ', 'adukkhamasukhaṃ', 'mohaṃ'],
        answer: 0,
        explanation: {
          correct: '즐거운 느낌에 대한 알아차림이므로 sukhaṃ이 맞습니다.',
        },
      },

      // ── 심념처 3개 ──
      {
        type: 'quiz',
        question: '"sarāgaṃ cittaṃ"의 뜻은?',
        options: [
          '탐욕이 있는 마음',
          '탐욕이 없는 마음',
          '성냄이 있는 마음',
          '어리석은 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'sa(~이 있는) + rāga(탐욕) + cittaṃ(마음) = 탐욕이 있는 마음',
          tip: 'sa- = ~이 있는, 반대는 vīta-(~이 없는)',
        },
      },
      {
        type: 'quiz',
        question: '"vītarāgaṃ cittaṃ"의 뜻은?',
        options: [
          '탐욕이 없는 마음',
          '탐욕이 있는 마음',
          '성냄이 있는 마음',
          '집중된 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'vīta(떠난, 없는) + rāga(탐욕) = 탐욕이 떠난/없는 마음',
          tip: 'sa-rāga(탐욕 있는) ↔ vīta-rāga(탐욕 없는)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 관찰하는 마음 상태의 쌍이 아닌 것은?',
        options: [
          'sukha/dukkha(즐거움/괴로움)',
          'sarāga/vītarāga(탐욕 있는/없는)',
          'sadosa/vītadosa(성냄 있는/없는)',
          'samoha/vītamoha(어리석음 있는/없는)',
        ],
        answer: 0,
        explanation: {
          correct: 'sukha/dukkha는 수념처(느낌 관찰)에 해당합니다. 심념처는 마음의 상태를 관찰합니다.',
        },
      },

      // ── 오개/오온/육입처 3개 ──
      {
        type: 'quiz',
        question: '오개(五蓋, pañca nīvaraṇā)에 해당하지 않는 것은?',
        options: [
          'sammādiṭṭhi(바른 견해)',
          'kāmacchanda(감각적 욕망)',
          'byāpāda(악의)',
          'thīnamiddha(해태혼침)',
        ],
        answer: 0,
        explanation: {
          correct: '오개: 감각적 욕망, 악의, 해태혼침, 들뜸후회, 의심. 바른 견해는 팔정도에 속합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"uddhaccakukkucca"의 뜻은?',
        options: [
          '들뜸과 후회',
          '감각적 욕망',
          '해태와 혼침',
          '의심',
        ],
        answer: 0,
        explanation: {
          correct: 'uddhacca(들뜸) + kukkucca(후회) = 오개의 네 번째',
          tip: '마음이 들뜨고(uddhacca) 후회하는(kukkucca) 상태입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"chasu ajjhattikāyatanesu"에서 "cha"의 뜻은?',
        options: [
          '여섯(6)',
          '다섯(5)',
          '넷(4)',
          '셋(3)',
        ],
        answer: 0,
        explanation: {
          correct: 'cha는 숫자 "6"입니다. 여섯 내적 감각 영역(육입처)을 뜻합니다.',
          tip: '눈·귀·코·혀·몸·마음의 여섯 감각 기관',
        },
      },

      // ── 칠각지 3개 ──
      {
        type: 'quiz',
        question: '칠각지(satta bojjhaṅgā)의 첫 번째는?',
        options: [
          'satisambojjhaṅga(알아차림의 깨달음 요소)',
          'vīriyasambojjhaṅga(정진의 깨달음 요소)',
          'pītisambojjhaṅga(기쁨의 깨달음 요소)',
          'samādhisambojjhaṅga(집중의 깨달음 요소)',
        ],
        answer: 0,
        explanation: {
          correct: 'sati(알아차림)가 칠각지의 첫 번째이자 기반입니다.',
          tip: 'sati → dhammavicaya → vīriya → pīti → passaddhi → samādhi → upekkhā',
        },
      },
      {
        type: 'quiz',
        question: '"dhammavicaya"의 뜻은?',
        options: [
          '법에 대한 탐구(택법)',
          '마음의 집중',
          '몸의 고요함',
          '평온한 관찰',
        ],
        answer: 0,
        explanation: {
          correct: 'dhamma(법) + vicaya(탐구, 분별) = 법에 대한 탐구, 택법',
          detail: '칠각지의 두 번째 요소입니다.',
        },
      },
      {
        type: 'quiz',
        question: '칠각지의 마지막 "upekkhā"의 뜻은?',
        options: [
          '평온(사)',
          '기쁨(희)',
          '고요함(경안)',
          '집중(정)',
        ],
        answer: 0,
        explanation: {
          correct: 'upekkhā는 "평온, 균형 잡힌 관찰"을 뜻하며 칠각지의 마지막입니다.',
          tip: '치우치지 않고 균형 있게 관찰하는 마음 상태',
        },
      },

      // ── 팔정도 정의 3개 ──
      {
        type: 'quiz',
        question: '"sammāvāyāma"의 뜻은?',
        options: [
          '바른 노력(정정진)',
          '바른 알아차림(정념)',
          '바른 집중(정정)',
          '바른 말(정어)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + vāyāma(노력) = 바른 노력, 정정진',
          detail: '이미 생긴 불선을 버리고, 아직 안 생긴 선을 일으키는 노력입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammāsaṅkappa"의 뜻은?',
        options: [
          '바른 생각/의도(정사유)',
          '바른 견해(정견)',
          '바른 행위(정업)',
          '바른 생계(정명)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + saṅkappa(생각, 의도) = 바른 생각',
          detail: '이욕·악의 없음·해치지 않음의 세 가지 바른 생각입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Katamo ca bhikkhave sammā___? Yaṃ kho bhikkhave ariyaṃ niyyānikaṃ',
        translation: '비구들이여, 바른 견해란 무엇인가? 성스러운 출리의...',
        blank: 'diṭṭhi',
        options: ['diṭṭhi', 'saṅkappa', 'vācā', 'kammanta'],
        answer: 0,
        explanation: {
          correct: 'sammādiṭṭhi(바른 견해)가 팔정도의 정의 맥락에서 맞습니다.',
          detail: 'saṅkappa는 "생각", vācā는 "말", kammanta는 "행위"입니다.',
        },
      },

      // ── 추가 5개 ──
      {
        type: 'fill-blank',
        sentence: '___ vedanaṃ vediyamāno dukkhaṃ vedanaṃ vediyāmīti pajānāti',
        translation: '괴로운 느낌을 느끼면서 "괴로운 느낌을 느낀다"고 분명히 안다',
        blank: 'dukkhaṃ',
        options: ['dukkhaṃ', 'sukhaṃ', 'adukkhamasukhaṃ', 'upekkhā'],
        answer: 0,
        explanation: {
          correct: '괴로운 느낌에 대한 알아차림이므로 dukkhaṃ이 맞습니다.',
        },
      },
      {
        type: 'quiz',
        question: '"vicikicchā"의 뜻은?',
        options: [
          '의심(오개의 다섯 번째)',
          '감각적 욕망',
          '악의',
          '해태혼침',
        ],
        answer: 0,
        explanation: {
          correct: 'vicikicchā는 "의심, 회의"를 뜻하며 오개의 다섯 번째입니다.',
          tip: '오개: 감각적 욕망, 악의, 해태혼침, 들뜸후회, 의심',
        },
      },
      {
        type: 'quiz',
        question: '"passaddhi"의 뜻은?',
        options: [
          '고요함(경안)',
          '기쁨(희)',
          '집중(정)',
          '알아차림(염)',
        ],
        answer: 0,
        explanation: {
          correct: 'passaddhi는 "고요함, 가라앉음, 경안"으로 칠각지의 다섯 번째입니다.',
          tip: '칠각지 순서: 염→택법→정진→희→경안→정→사',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Sadosaṃ vā cittaṃ sadosaṃ cittanti pajānāti. ___ vā cittaṃ vītadosaṃ cittanti pajānāti',
        translation: '성냄이 있는 마음을 "성냄이 있는 마음"이라고 안다. 성냄이 없는 마음을...',
        blank: 'vītadosaṃ',
        options: ['vītadosaṃ', 'sadosaṃ', 'sarāgaṃ', 'samohaṃ'],
        answer: 0,
        explanation: {
          correct: 'vīta(떠난) + dosa(성냄) = 성냄이 없는',
          detail: 'sa-dosa(성냄 있는) ↔ vīta-dosa(성냄 없는)의 대비입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammāājīva"의 뜻은?',
        options: [
          '바른 생계(정명)',
          '바른 행위(정업)',
          '바른 말(정어)',
          '바른 노력(정정진)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + ājīva(생계, 삶의 방식) = 바른 생계',
          detail: '살생·도둑질·거짓말 등으로 생계를 꾸리지 않는 것입니다.',
        },
      },
    ],
  },
]
