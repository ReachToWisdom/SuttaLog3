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
  // 전법륜경 (dhammacakka) — 40문제
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

      // ── 추가 15문제 (25→40) ──
      {
        type: 'quiz',
        question: '"kāmasukhallikānuyogo"에서 "kāma"는 무엇을 뜻합니까?',
        options: [
          '감각적 쾌락',
          '자기 학대',
          '중도',
          '집중',
        ],
        answer: 0,
        explanation: {
          correct: 'kāma(감각적 쾌락) + sukha(즐거움) + allika(빠짐) + anuyoga(전념) = 감각적 쾌락에 빠져 전념함',
          detail: '두 극단 중 첫 번째: 감각적 쾌락에 빠지는 것입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"kāmasukhallikānuyogo"와 "attakilamathānuyogo"의 차이는?',
        options: [
          '감각적 쾌락에 빠짐 vs 자기 학대에 전념함',
          '둘 다 같은 뜻이다',
          '바른 수행 vs 그릇된 수행',
          '명상 vs 학문',
        ],
        answer: 0,
        explanation: {
          correct: '첫째는 감각적 쾌락에 탐닉, 둘째는 극단적 고행으로 자기를 괴롭히는 것입니다.',
          tip: '붓다는 이 두 극단을 피하고 중도(majjhimā paṭipadā)를 가르치셨습니다.',
        },
      },
      {
        type: 'quiz',
        question: 'taṇhā의 세 종류 중 "kāmataṇhā"의 뜻은?',
        options: [
          '감각적 쾌락에 대한 갈애',
          '존재에 대한 갈애',
          '비존재에 대한 갈애',
          '해탈에 대한 갈애',
        ],
        answer: 0,
        explanation: {
          correct: 'kāma(감각적 쾌락) + taṇhā(갈애) = 감각적 쾌락에 대한 갈망',
          detail: '세 가지: kāmataṇhā(욕애), bhavataṇhā(유애), vibhavataṇhā(무유애)',
        },
      },
      {
        type: 'quiz',
        question: '"bhavataṇhā"는 무엇에 대한 갈애입니까?',
        options: [
          '존재(있음)에 대한 갈애',
          '감각적 쾌락에 대한 갈애',
          '비존재(없음)에 대한 갈애',
          '열반에 대한 갈애',
        ],
        answer: 0,
        explanation: {
          correct: 'bhava(존재, 있음) + taṇhā(갈애) = 존재에 대한 갈망',
          tip: '영원히 존재하고 싶어하는 갈망입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"vibhavataṇhā"는 무엇에 대한 갈애입니까?',
        options: [
          '비존재(없어짐)에 대한 갈애',
          '존재에 대한 갈애',
          '감각적 쾌락에 대한 갈애',
          '깨달음에 대한 갈애',
        ],
        answer: 0,
        explanation: {
          correct: 'vi(떠남) + bhava(존재) + taṇhā(갈애) = 없어지고 싶은 갈망',
          detail: '단멸론(斷滅論)으로 이어지는 극단적 견해입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammāsaṅkappo"는 팔정도의 몇 번째입니까?',
        options: [
          '두 번째(정사유)',
          '첫 번째(정견)',
          '세 번째(정어)',
          '네 번째(정업)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammāsaṅkappo(바른 생각/의도)는 팔정도의 두 번째입니다.',
          detail: '순서: 정견→정사유→정어→정업→정명→정정진→정념→정정',
        },
      },
      {
        type: 'quiz',
        question: '"sammāājīvo"는 팔정도에서 어느 영역에 해당합니까?',
        options: [
          '계(戒) 영역 — 도덕',
          '혜(慧) 영역 — 지혜',
          '정(定) 영역 — 집중',
          '어디에도 속하지 않음',
        ],
        answer: 0,
        explanation: {
          correct: 'sammāājīvo(바른 생계)는 정어·정업과 함께 계(戒) 영역에 속합니다.',
          tip: '계: 정어+정업+정명 / 정: 정정진+정념+정정 / 혜: 정견+정사유',
        },
      },
      {
        type: 'quiz',
        question: '전법륜경에서 "akuppā me vimutti"의 뜻은?',
        options: [
          '나의 해탈은 흔들리지 않는다',
          '나의 해탈은 아직 완성되지 않았다',
          '나의 견해는 바르지 않다',
          '나의 수행은 시작되었다',
        ],
        answer: 0,
        explanation: {
          correct: 'akuppā(흔들리지 않는) + me(나의) + vimutti(해탈) = 나의 해탈은 흔들림 없다',
          detail: '붓다께서 깨달음 직후 선언하신 말씀입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Idaṃ dukkhanirodhagāminī paṭipadā ariyasaccaṃ"에서 "gāminī"의 뜻은?',
        options: [
          '~으로 이끄는, ~으로 가는',
          '~에서 벗어나는',
          '~을 파괴하는',
          '~에 머무는',
        ],
        answer: 0,
        explanation: {
          correct: 'gāminī는 "~으로 이끄는, 가는"이라는 뜻의 형용사입니다.',
          detail: 'dukkha(괴로움) + nirodha(소멸) + gāminī(이끄는) + paṭipadā(길) = 괴로움의 소멸로 이끄는 길',
        },
      },
      {
        type: 'quiz',
        question: '삼전십이행상에서 "이 고제를 완전히 알았다(pariññātaṃ)"는 몇 번째 전(轉)에 해당합니까?',
        options: [
          '세 번째 전(이작지, kataññāṇa)',
          '첫 번째 전(법지, saccañāṇa)',
          '두 번째 전(당작지, kiccañāṇa)',
          '네 번째 전',
        ],
        answer: 0,
        explanation: {
          correct: '"이미 했다(kata)"는 세 번째 전, 즉 실천 완료의 앎입니다.',
          detail: '1전: "이것이 고제다" / 2전: "완전히 알아야 한다" / 3전: "완전히 알았다"',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Yāyaṃ taṇhā ponobhavikā nandirāgasahagatā tatra tatra ___',
        translation: '다시 태어남을 이끌고 환희와 탐욕을 동반하여 여기저기서 즐기는 갈애',
        blank: 'abhinandanī',
        options: ['abhinandanī', 'abhisambuddha', 'abhijānāmi', 'abhipassati'],
        answer: 0,
        explanation: {
          correct: 'abhinandanī는 "즐기는, 기뻐하는"이라는 뜻의 형용사입니다.',
          detail: 'abhi(강조) + nandanī(즐김) = 크게 즐기는',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Dveme bhikkhave antā pabbajitena na ___',
        translation: '비구들이여, 출가자가 가까이해서는 안 되는 두 극단이 있다',
        blank: 'sevitabbā',
        options: ['sevitabbā', 'desitabbā', 'passitabbā', 'bhāvetabbā'],
        answer: 0,
        explanation: {
          correct: 'sevitabbā는 "가까이해야 할"이라는 의무분사입니다. na sevitabbā = 가까이해서는 안 되는',
          detail: 'desitabbā는 "설해야 할", bhāvetabbā는 "닦아야 할"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Seyyathidaṃ sammādiṭṭhi sammāsaṅkappo sammā___ sammākammanto',
        translation: '이른바 바른 견해, 바른 생각, 바른 말, 바른 행위',
        blank: 'vācā',
        options: ['vācā', 'sati', 'samādhi', 'vāyāma'],
        answer: 0,
        explanation: {
          correct: 'sammāvācā(바른 말, 정어)는 팔정도의 세 번째입니다.',
          tip: '팔정도 순서: 정견→정사유→정어→정업→정명→정정진→정념→정정',
        },
      },
      {
        type: 'quiz',
        question: '전법륜경에서 "cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi"에서 열거된 다섯 가지는?',
        options: [
          '눈, 앎, 지혜, 명지, 광명',
          '귀, 코, 혀, 몸, 마음',
          '색, 수, 상, 행, 식',
          '고, 집, 멸, 도, 열반',
        ],
        answer: 0,
        explanation: {
          correct: 'cakkhu(눈), ñāṇa(앎), paññā(지혜), vijjā(명지/밝은 앎), āloka(광명/빛)',
          detail: '사성제 각각에 대해 이 다섯 가지가 생겨났다고 합니다.',
        },
      },
      {
        type: 'quiz',
        question: '전법륜경에서 "majjhimā paṭipadā"가 눈을 뜨게 하는 세 가지 결과는?',
        options: [
          '적멸(upasamāya), 통찰(abhiññāya), 깨달음(sambodhāya)',
          '탐욕, 성냄, 어리석음',
          '계율, 집중, 지혜',
          '보시, 지계, 수행',
        ],
        answer: 0,
        explanation: {
          correct: '중도는 cakkhukaraṇī(눈을 만들고), ñāṇakaraṇī(앎을 만들어) upasamāya(적멸), abhiññāya(통찰), sambodhāya(정각)로 이끕니다.',
        },
      },

      // ── 확장: 팔정도 개별 정의 8개 ──
      {
        type: 'quiz',
        question: '"sammādiṭṭhi"는 전법륜경에서 어떻게 정의됩니까?',
        options: [
          '사성제에 대한 바른 앎',
          '모든 것이 공(空)하다는 견해',
          '자아가 있다는 견해',
          '신에 대한 믿음',
        ],
        answer: 0,
        explanation: {
          correct: '전법륜경에서 정견은 고·집·멸·도 사성제에 대한 올바른 이해입니다.',
          tip: 'diṭṭhi(견해) = √dis(보다)에서 나온 명사',
        },
      },
      {
        type: 'quiz',
        question: '"sammāsaṅkappo"의 세 가지 내용은?',
        options: [
          'nekkhamma(이욕), abyāpāda(악의 없음), avihiṃsā(해치지 않음)',
          'dāna(보시), sīla(지계), bhāvanā(수행)',
          'sīla(계), samādhi(정), paññā(혜)',
          'saddhā(믿음), vīriya(정진), sati(알아차림)',
        ],
        answer: 0,
        explanation: {
          correct: '바른 생각의 세 내용: 감각 욕망에서 벗어남(nekkhamma), 악의 없음(abyāpāda), 해치지 않음(avihiṃsā)',
          detail: 'nekkhamma는 nis(밖으로) + kamma → 욕망에서 벗어남',
        },
      },
      {
        type: 'quiz',
        question: '"sammāvācā"의 뜻은?',
        options: [
          '바른 말(정어)',
          '바른 행위(정업)',
          '바른 생계(정명)',
          '바른 견해(정견)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + vācā(말) = 바른 말. 거짓말·이간질·거친 말·잡담을 삼감.',
          tip: 'vācā는 "말, 언어"라는 뜻의 여성 명사입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammākammanta"의 뜻은?',
        options: [
          '바른 행위(정업)',
          '바른 말(정어)',
          '바른 생계(정명)',
          '바른 노력(정정진)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + kammanta(행위, 업) = 바른 행위. 살생·도둑질·음행을 삼감.',
          tip: 'kammanta는 kamma(업)에서 파생된 명사입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammāvāyāma"의 뜻은?',
        options: [
          '바른 노력(정정진)',
          '바른 알아차림(정념)',
          '바른 집중(정정)',
          '바른 생계(정명)',
        ],
        answer: 0,
        explanation: {
          correct: 'sammā(바른) + vāyāma(노력, 정진) = 바른 노력. 사정근(四正勤)을 뜻합니다.',
          detail: '4가지 노력: 생긴 불선 버리기, 안 생긴 불선 안 생기게, 안 생긴 선 일으키기, 생긴 선 증장',
        },
      },

      // ── 확장: 사성제 정형 표현 4개 ──
      {
        type: 'quiz',
        question: '고성제의 정형 표현 "jātipi dukkhā, jarāpi dukkhā"에서 "jāti"와 "jarā"는?',
        options: [
          '태어남과 늙음',
          '죽음과 병',
          '슬픔과 탄식',
          '고통과 괴로움',
        ],
        answer: 0,
        explanation: {
          correct: 'jāti(태어남) + jarā(늙음) — 고제의 첫 두 가지 괴로움입니다.',
          detail: '전체: 태어남(jāti), 늙음(jarā), 병(byādhi), 죽음(maraṇa)도 괴로움입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"appiyehi sampayogo dukkho"의 뜻은?',
        options: [
          '싫어하는 것과 만남이 괴롭다',
          '좋아하는 것과 만남이 괴롭다',
          '좋아하는 것과 헤어짐이 괴롭다',
          '원하는 것을 얻음이 괴롭다',
        ],
        answer: 0,
        explanation: {
          correct: 'appiya(싫어하는) + sampayoga(만남, 결합) = 원수와의 만남은 괴로움',
          detail: '고제 8고 중 하나. 반대로 piyehi vippayogo는 "사랑하는 것과의 이별"입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"piyehi vippayogo dukkho"의 뜻은?',
        options: [
          '사랑하는 것과 헤어짐이 괴롭다',
          '싫어하는 것과 만남이 괴롭다',
          '원하는 것을 얻지 못함이 괴롭다',
          '태어남이 괴롭다',
        ],
        answer: 0,
        explanation: {
          correct: 'piya(사랑하는) + vippayoga(이별, 분리) = 사랑하는 것과의 이별은 괴로움',
          tip: 'vi(분리) + pa + yoga(결합) = 떨어짐',
        },
      },
      {
        type: 'quiz',
        question: '"yampicchaṃ na labhati tampi dukkhaṃ"의 뜻은?',
        options: [
          '원하는 것을 얻지 못하는 것도 괴롭다',
          '원하는 것을 얻는 것이 즐겁다',
          '원하지 않는 것을 얻는 것이 즐겁다',
          '괴로움은 사라진다',
        ],
        answer: 0,
        explanation: {
          correct: 'yaṃ(~인 것) + iccha(원하는) + na labhati(얻지 못하다) = 구불득고(求不得苦)',
          detail: '고제 8고의 일곱 번째 — 원하는 것을 얻지 못하는 괴로움입니다.',
        },
      },

      // ── 확장: 삼전 동사 형태 구분 ──
      {
        type: 'quiz',
        question: '삼전(三轉)에서 제1전 "saccañāṇa(법지)"는 어떤 앎입니까?',
        options: [
          '"이것이 고제다"라는 진리 자체에 대한 앎',
          '"고제를 알아야 한다"라는 의무에 대한 앎',
          '"고제를 알았다"라는 완성에 대한 앎',
          '"고제는 존재하지 않는다"라는 앎',
        ],
        answer: 0,
        explanation: {
          correct: 'sacca(진리) + ñāṇa(앎) = "이것이 괴로움의 진리다"라고 아는 것 (인식)',
          detail: '1전: 인식(sacca) / 2전: 의무(kicca) / 3전: 완성(kata)',
        },
      },
      {
        type: 'quiz',
        question: '삼전에서 제2전 "kiccañāṇa(당작지)"는 어떤 앎입니까?',
        options: [
          '"고제를 완전히 알아야 한다"라는 의무에 대한 앎',
          '"이것이 고제다"라는 인식에 대한 앎',
          '"고제를 이미 알았다"라는 완성에 대한 앎',
          '"고제는 중요하지 않다"라는 앎',
        ],
        answer: 0,
        explanation: {
          correct: 'kicca(해야 할 것, 의무) + ñāṇa(앎) = "~해야 한다"는 의무에 대한 앎',
          tip: '고→pariññeyya(알아야), 집→pahātabba(버려야), 멸→sacchikātabba(실현해야), 도→bhāvetabba(닦아야)',
        },
      },
      {
        type: 'quiz',
        question: '삼전에서 제3전 "kataññāṇa(이작지)"는 어떤 앎입니까?',
        options: [
          '"고제를 완전히 알았다(pariññātaṃ)"라는 완성에 대한 앎',
          '"이것이 고제다"라는 인식에 대한 앎',
          '"고제를 알아야 한다"라는 의무에 대한 앎',
          '"고제는 무의미하다"라는 앎',
        ],
        answer: 0,
        explanation: {
          correct: 'kata(이미 한) + ñāṇa(앎) = "이미 완수했다"는 완성에 대한 앎',
          detail: '4 × 3 = 12행상. 사성제 각각에 대해 3전을 모두 완성해야 정등각을 선언할 수 있습니다.',
        },
      },

      // ── 확장: 중도의 정의 ──
      {
        type: 'quiz',
        question: '"cakkhukaraṇī"의 뜻은?',
        options: [
          '눈을 만드는(뜨게 하는)',
          '앎을 만드는',
          '지혜를 만드는',
          '광명을 만드는',
        ],
        answer: 0,
        explanation: {
          correct: 'cakkhu(눈) + karaṇī(만드는) = 눈을 뜨게 하는. 중도의 공덕을 묘사합니다.',
          detail: '중도는 cakkhukaraṇī(눈을 뜨게 하고) ñāṇakaraṇī(앎을 만든다)고 합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"ñāṇakaraṇī"의 뜻은?',
        options: [
          '앎을 만드는(생기게 하는)',
          '눈을 만드는',
          '소멸을 만드는',
          '번뇌를 만드는',
        ],
        answer: 0,
        explanation: {
          correct: 'ñāṇa(앎) + karaṇī(만드는) = 앎을 생기게 하는',
          tip: '중도는 cakkhukaraṇī이자 ñāṇakaraṇī입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Cakkhukaraṇī ___ upasamāya abhiññāya sambodhāya nibbānāya saṃvattati',
        translation: '눈을 뜨게 하고 앎을 만들어 적멸·통찰·깨달음·열반으로 이끈다',
        blank: 'ñāṇakaraṇī',
        options: ['ñāṇakaraṇī', 'cakkhukaraṇī', 'dhammakaraṇī', 'sukhakaraṇī'],
        answer: 0,
        explanation: {
          correct: 'ñāṇakaraṇī(앎을 만드는)가 cakkhukaraṇī 다음에 옵니다.',
          detail: 'upasamāya(적멸을 위해), abhiññāya(통찰을 위해), sambodhāya(깨달음을 위해), nibbānāya(열반을 위해)',
        },
      },

      // ── 확장: 꼰단냐 증과 구절 ──
      {
        type: 'quiz',
        question: '전법륜경에서 꼰단냐가 깨달았을 때 붓다께서 하신 말씀은?',
        options: [
          '"Aññāsi vata bho Koṇḍañño" — 꼰단냐가 알았구나',
          '"Sādhu sādhu" — 좋다 좋다',
          '"Ehi bhikkhu" — 비구여 오라',
          '"Namo tassa" — 그분께 경배',
        ],
        answer: 0,
        explanation: {
          correct: 'aññāsi(알았다) + vata(참으로) + bho(그대) + Koṇḍañño = "꼰단냐가 참으로 알았구나!"',
          detail: '이로부터 Koṇḍañña는 "Aññā-Koṇḍañña(아는 꼰단냐)"라는 이름을 얻었습니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Aññā-Koṇḍañña"에서 "aññā"의 뜻은?',
        options: [
          '완전한 앎(궁극적 지혜)',
          '다른 사람',
          '모르는',
          '의심',
        ],
        answer: 0,
        explanation: {
          correct: 'aññā는 "완전한 앎, 궁극적 지혜"를 뜻합니다. 아라한과의 지혜입니다.',
          tip: '"알았다(aññāsi)"에서 파생된 명사입니다.',
        },
      },

      // ── 확장: hīno gammo 해석 ──
      {
        type: 'quiz',
        question: '"hīno gammo pothujjaniko anariyo anatthasaṃhito"는 어떤 극단을 묘사합니까?',
        options: [
          '감각적 쾌락에 빠짐(kāmasukhallikānuyoga)',
          '자기 학대(attakilamathānuyoga)',
          '중도(majjhimā paṭipadā)',
          '팔정도(ariyo aṭṭhaṅgiko maggo)',
        ],
        answer: 0,
        explanation: {
          correct: 'hīna(저열한), gamma(저속한), pothujjanika(범부의), anariya(성스럽지 않은), anattha-saṃhita(이로움이 없는)',
          detail: '감각적 쾌락에 빠지는 것을 다섯 가지 형용사로 비난하는 표현입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"dukkho anariyo anatthasaṃhito"는 어떤 극단을 묘사합니까?',
        options: [
          '자기 학대(attakilamathānuyoga)',
          '감각적 쾌락에 빠짐(kāmasukhallikānuyoga)',
          '중도(majjhimā paṭipadā)',
          '사성제 수행',
        ],
        answer: 0,
        explanation: {
          correct: '자기 학대는 dukkha(괴로운), anariya(성스럽지 않은), anattha-saṃhita(이로움이 없는)로 묘사됩니다.',
          detail: '두 극단의 묘사 방식이 다릅니다: 쾌락은 5형용사, 고행은 3형용사.',
        },
      },

      // ── 확장: 전법륜경 핵심 빈칸 ──
      {
        type: 'fill-blank',
        sentence: 'Idaṃ ___ ariyasaccaṃ — jātipi dukkhā, jarāpi dukkhā',
        translation: '이것이 괴로움의 성스러운 진리이다 — 태어남도 괴롭고, 늙음도 괴롭다',
        blank: 'dukkhaṃ',
        options: ['dukkhaṃ', 'sukhaṃ', 'nirodhaṃ', 'maggaṃ'],
        answer: 0,
        explanation: {
          correct: '고성제(dukkhaṃ ariyasaccaṃ)의 정의 첫 구절입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Saṅkhittena pañc___ dukkhā',
        translation: '요약하면 다섯 가지 취온이 괴롭다',
        blank: 'upādānakkhandhā',
        options: ['upādānakkhandhā', 'khandhā', 'indriyāni', 'āyatanāni'],
        answer: 0,
        explanation: {
          correct: 'pañcupādānakkhandhā(다섯 취온) = 집착 대상인 오온. 고제의 요약 정의입니다.',
          detail: 'upādāna(취착, 집착) + khandha(더미, 온) = 집착의 대상인 무더기',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Taṇhā ponobhavikā nandirāgasahagatā tatra tatra abhinandanī. Seyyathidaṃ ___ bhavataṇhā vibhavataṇhā',
        translation: '다시 태어남을 이끌고 환희와 탐욕을 동반하며 여기저기서 즐기는 갈애. 이른바 욕애, 유애, 무유애',
        blank: 'kāmataṇhā',
        options: ['kāmataṇhā', 'taṇhā', 'rāga', 'lobha'],
        answer: 0,
        explanation: {
          correct: '3종 갈애의 첫 번째: kāmataṇhā(감각적 쾌락에 대한 갈애)',
          detail: 'kāmataṇhā(욕애) → bhavataṇhā(유애) → vibhavataṇhā(무유애)',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Aññāsi vata bho ___',
        translation: '꼰단냐가 참으로 알았구나',
        blank: 'Koṇḍañño',
        options: ['Koṇḍañño', 'Bhaddiya', 'Vappa', 'Mahānāma'],
        answer: 0,
        explanation: {
          correct: '꼰단냐(Koṇḍañña)는 전법륜경을 듣고 첫 번째로 법안(dhammacakkhu)을 얻은 비구입니다.',
          detail: '다섯 비구: Koṇḍañña, Bhaddiya, Vappa, Mahānāma, Assaji',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ me vimutti, ayamantimā jāti',
        translation: '나의 해탈은 흔들리지 않으며, 이것이 마지막 태어남이다',
        blank: 'akuppā',
        options: ['akuppā', 'kuppā', 'dukkhā', 'aniccā'],
        answer: 0,
        explanation: {
          correct: 'akuppā(흔들리지 않는) + me(나의) + vimutti(해탈) = 확고한 해탈 선언',
          tip: 'a- 접두사가 kuppā(흔들리는)에 붙어 "흔들리지 않는"이 됩니다.',
        },
      },
      {
        type: 'quiz',
        question: '"ponobhavikā"의 뜻은?',
        options: [
          '다시 태어남을 이끄는',
          '한 번만 태어나는',
          '더 이상 태어나지 않는',
          '행복을 주는',
        ],
        answer: 0,
        explanation: {
          correct: 'puna(다시) + bhavika(존재와 관련된) = 다시 존재하게 하는, 재생을 이끄는',
          detail: '갈애(taṇhā)의 특성을 설명하는 핵심 형용사입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"nandirāgasahagatā"에서 "nandirāga"의 뜻은?',
        options: [
          '환희와 탐욕',
          '슬픔과 괴로움',
          '평온과 지혜',
          '분노와 악의',
        ],
        answer: 0,
        explanation: {
          correct: 'nandi(환희, 기쁨) + rāga(탐욕) = 기뻐하며 탐하는 것',
          detail: 'sahagatā는 "동반하는"이란 뜻. 갈애는 환희와 탐욕을 동반합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"upasamāya"의 뜻은?',
        options: [
          '적멸(고요함)을 위해',
          '깨달음을 위해',
          '열반을 위해',
          '통찰을 위해',
        ],
        answer: 0,
        explanation: {
          correct: 'upasama(적멸, 고요함) + āya(위해) = 적멸을 위해',
          detail: '중도의 목적 4가지: upasamāya(적멸), abhiññāya(통찰), sambodhāya(정각), nibbānāya(열반)',
        },
      },
      {
        type: 'quiz',
        question: '전법륜경에서 "pañcavaggiyā bhikkhū"는 누구입니까?',
        options: [
          '다섯 무리의 비구(최초의 청법 대중)',
          '다섯 명의 왕',
          '다섯 가지 계율',
          '다섯 개의 온',
        ],
        answer: 0,
        explanation: {
          correct: 'pañca(다섯) + vaggiya(무리의) + bhikkhū(비구들) = 꼰단냐 등 다섯 비구',
          detail: '붓다의 출가 전 고행 시절 동료였던 Koṇḍañña, Vappa, Bhaddiya, Mahānāma, Assaji입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sambodhāya"의 뜻은?',
        options: [
          '완전한 깨달음(정등각)을 위해',
          '적멸을 위해',
          '통찰을 위해',
          '열반을 위해',
        ],
        answer: 0,
        explanation: {
          correct: 'sambodha(정등각, 완전한 깨달음) + āya(위해) = 깨달음을 위해',
          tip: 'sam(완전히) + bodha(깨달음) = 정등각',
        },
      },
      {
        type: 'quiz',
        question: '"nibbānāya saṃvattati"에서 "saṃvattati"의 뜻은?',
        options: [
          '~으로 이끈다(향하다)',
          '~에서 벗어난다',
          '~에 머문다',
          '~을 파괴한다',
        ],
        answer: 0,
        explanation: {
          correct: 'saṃvattati는 "~으로 향하다, ~으로 이끌다"라는 뜻의 동사입니다.',
          detail: '중도는 열반(nibbāna)으로 이끈다(saṃvattati)고 합니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Dveme bhikkhave antā ___ na sevitabbā',
        translation: '비구들이여, 출가자가 가까이해서는 안 되는 두 극단이 있다',
        blank: 'pabbajitena',
        options: ['pabbajitena', 'gahaṭṭhena', 'bhikkhunā', 'sāvakena'],
        answer: 0,
        explanation: {
          correct: 'pabbajitena는 "출가자에 의해"라는 뜻의 조격(구격)입니다.',
          detail: 'pabbajita(출가자) — 재가자(gahaṭṭha)의 반대. 집을 떠난 수행자를 뜻합니다.',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 무아경 (anatta) — 40문제
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

      // ── 추가 15문제 (25→40) ──
      {
        type: 'quiz',
        question: '"Evaṃ me rūpaṃ hotu, evaṃ me rūpaṃ mā ahosī"의 뜻은?',
        options: [
          '"나의 물질이여 이렇게 되어라, 나의 물질이여 이렇게 되지 마라"',
          '"물질은 영원하다, 물질은 변하지 않는다"',
          '"나의 물질을 관찰하라, 나의 물질에 집착하라"',
          '"물질이 생겨났다, 물질이 사라졌다"',
        ],
        answer: 0,
        explanation: {
          correct: '자아라면 마음대로 명령할 수 있어야 하는데 그럴 수 없다는 논증입니다.',
          detail: 'hotu는 "되어라"(명령법), mā ahosī는 "되지 마라"(금지)입니다.',
        },
      },
      {
        type: 'quiz',
        question: '오온 중 "이 문장에서 다루는 온은? — Vedanā aniccā"',
        options: [
          '수온(느낌)',
          '색온(물질)',
          '상온(인식)',
          '행온(의지작용)',
        ],
        answer: 0,
        explanation: {
          correct: 'vedanā는 "느낌(수온)"입니다. "느낌은 무상하다"라는 뜻입니다.',
        },
      },
      {
        type: 'quiz',
        question: '오온 중 "이 문장에서 다루는 온은? — Saṅkhārā aniccā"',
        options: [
          '행온(의지작용)',
          '색온(물질)',
          '수온(느낌)',
          '식온(의식)',
        ],
        answer: 0,
        explanation: {
          correct: 'saṅkhārā는 "의지작용(행온)"입니다. 복수형이 특징적입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"nibbindati"에서 "virajjati"로의 전환은 무엇을 의미합니까?',
        options: [
          '싫어진 후(염오) 탐욕에서 벗어남(이욕)',
          '탐욕이 더 강해짐',
          '새로운 집착이 생김',
          '깨달음 후 다시 윤회함',
        ],
        answer: 0,
        explanation: {
          correct: 'nibbindati(싫어짐/염오) 다음 단계가 virajjati(탐욕에서 벗어남/이욕)입니다.',
          tip: '무상→고→무아를 보고 → 싫어지고(nibbindati) → 탐욕이 떠나고(virajjati) → 해탈(vimuccati)',
        },
      },
      {
        type: 'quiz',
        question: '"virajjati"에서 "vimuccati"로의 전환은 무엇을 의미합니까?',
        options: [
          '탐욕에서 벗어난 후(이욕) 완전히 풀려남(해탈)',
          '집착이 더 강해짐',
          '다시 윤회에 떨어짐',
          '새로운 견해가 생김',
        ],
        answer: 0,
        explanation: {
          correct: 'virajjati(이욕) 다음 단계가 vimuccati(해탈, 풀려남)입니다.',
          detail: '해탈 후에는 "Khīṇā jāti(태어남이 다했다)"라는 앎이 생깁니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Khīṇā jāti, vusitaṃ brahmacariyaṃ"의 뜻은?',
        options: [
          '"태어남이 다했다, 청정한 삶을 살았다"',
          '"태어남이 시작되었다, 수행을 시작한다"',
          '"태어남이 계속된다, 삶이 이어진다"',
          '"태어남을 원한다, 수행을 구한다"',
        ],
        answer: 0,
        explanation: {
          correct: 'khīṇā(다한) + jāti(태어남), vusitaṃ(살아온) + brahmacariyaṃ(청정한 삶)',
          detail: '아라한의 최종 선언: 더 이상 태어남이 없음을 아는 것입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"atītānāgatapaccuppannaṃ"의 뜻은?',
        options: [
          '과거·미래·현재의',
          '안과 밖의',
          '거칠고 미세한',
          '멀고 가까운',
        ],
        answer: 0,
        explanation: {
          correct: 'atīta(과거) + anāgata(미래) + paccuppanna(현재) = 세 시간에 걸친',
          detail: '오온의 11가지 분류법 중 시간에 따른 구분입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"ajjhattaṃ vā bahiddhā vā"에서 두 단어의 의미는?',
        options: [
          '안(내적)이든 밖(외적)이든',
          '위든 아래든',
          '과거든 미래든',
          '거칠든 미세하든',
        ],
        answer: 0,
        explanation: {
          correct: 'ajjhattaṃ(안으로/내적으로) + bahiddhā(밖으로/외적으로) = 안팎 모두',
          detail: '자기 자신의 오온(내적)과 다른 사람의 오온(외적) 모두를 관찰합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"oḷārikaṃ vā sukhumaṃ vā"의 뜻은?',
        options: [
          '거친 것이든 미세한 것이든',
          '안이든 밖이든',
          '과거든 미래든',
          '즐거운 것이든 괴로운 것이든',
        ],
        answer: 0,
        explanation: {
          correct: 'oḷārika(거친, 조대한) + sukhuma(미세한, 섬세한) = 크기에 따른 구분',
          detail: '오온의 11가지 분류 중 하나입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"etaṃ mama"에서 "mama"의 뜻은?',
        options: [
          '"나의 것" — 소유에 대한 집착',
          '"나는" — 자기 정체성',
          '"나의 자아" — 실체에 대한 집착',
          '"나에게" — 방향',
        ],
        answer: 0,
        explanation: {
          correct: 'mama는 "나의 (것)"으로, 소유·소속에 대한 집착(taṇhā)을 나타냅니다.',
          detail: '세 가지 집착: etaṃ mama(나의 것), esohamasmi(내가 이것이다), eso me attā(나의 자아다)',
        },
      },
      {
        type: 'quiz',
        question: '"esohamasmi"에서 표현되는 집착은?',
        options: [
          '"이것이 나다" — 자기 정체성에 대한 집착(māna)',
          '"이것은 나의 것이다" — 소유에 대한 집착',
          '"이것이 나의 자아다" — 실체에 대한 집착',
          '"이것은 영원하다" — 영원에 대한 집착',
        ],
        answer: 0,
        explanation: {
          correct: 'eso(이것이) + aham(나) + asmi(이다) = "이것이 나다"라는 자만(māna)',
          detail: '세 집착 중 māna(자만)에 해당합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"eso me attā"에서 표현되는 집착은?',
        options: [
          '"이것이 나의 자아다" — 실체에 대한 집착(diṭṭhi)',
          '"이것이 나의 것이다" — 소유에 대한 집착',
          '"이것이 나다" — 정체성에 대한 집착',
          '"이것은 괴롭다" — 괴로움에 대한 인식',
        ],
        answer: 0,
        explanation: {
          correct: 'eso(이것이) + me(나의) + attā(자아) = 자아가 있다는 견해(diṭṭhi)',
          detail: '세 집착 중 사견(diṭṭhi)에 해당합니다.',
        },
      },
      {
        type: 'quiz',
        question: '무아경을 들은 "pañcavaggiyā bhikkhū(다섯 비구)"는 누구입니까?',
        options: [
          '붓다의 출가 전 수행 동료였던 다섯 수행자',
          '붓다의 가족 다섯 명',
          '다섯 명의 왕',
          '다섯 명의 브라만',
        ],
        answer: 0,
        explanation: {
          correct: 'pañcavaggiyā(다섯 무리의) bhikkhū(비구들) = 꼰단냐 등 다섯 수행자입니다.',
          detail: '전법륜경에 이어 두 번째 설법인 무아경을 듣고 모두 아라한이 되었습니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Yaṃ ___ taṃ dukkhaṃ, yaṃ dukkhaṃ tadanattā',
        translation: '무상한 것 그것은 괴롭다, 괴로운 것 그것은 자아가 아니다',
        blank: 'aniccaṃ',
        options: ['aniccaṃ', 'niccaṃ', 'sukhaṃ', 'attā'],
        answer: 0,
        explanation: {
          correct: '무상(anicca)→고(dukkha)→무아(anattā)의 삼상 논증입니다.',
          detail: 'niccaṃ(영원한)은 반대 의미이므로 틀립니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Khīṇā jāti, vusitaṃ brahmacariyaṃ, kataṃ karaṇīyaṃ, nāparaṃ ___',
        translation: '태어남이 다했고, 청정한 삶을 살았고, 할 일을 다했고, 더 이상 이런 상태로의 돌아옴이 없다',
        blank: 'itthattāyāti',
        options: ['itthattāyāti', 'bhavissatīti', 'hotīti', 'desitabbanti'],
        answer: 0,
        explanation: {
          correct: 'nāparaṃ(더 이상 없다) + itthattāya(이런 상태로) = 더 이상 윤회 없음',
          detail: '아라한의 최종 선언 전문입니다.',
        },
      },

      // ── 확장: 오온 각각의 "만약 ~라면" 구문 5개 ──
      {
        type: 'quiz',
        question: '"Vedanā ca hidaṃ bhikkhave attā abhavissa, nayidaṃ vedanā ābādhāya saṃvatteyya"의 뜻은?',
        options: [
          '"만약 느낌이 자아라면, 느낌이 병으로 되지 않을 것이다"',
          '"느낌은 자아이므로 병들지 않는다"',
          '"느낌은 영원하므로 변하지 않는다"',
          '"느낌이 있으므로 자아가 있다"',
        ],
        answer: 0,
        explanation: {
          correct: '오온 각각에 대한 가정법 논증입니다. 느낌도 자아가 아님을 증명합니다.',
          detail: 'abhavissa(~이었다면) + saṃvatteyya(되어가다) — 가정법 구문',
        },
      },
      {
        type: 'quiz',
        question: '"Saññā ca hidaṃ bhikkhave attā abhavissa"에서 다루는 온은?',
        options: [
          '상온(인식) — 만약 인식이 자아라면',
          '수온(느낌) — 만약 느낌이 자아라면',
          '행온(의지작용) — 만약 형성이 자아라면',
          '식온(의식) — 만약 의식이 자아라면',
        ],
        answer: 0,
        explanation: {
          correct: 'saññā(인식, 지각)에 대한 가정법 논증입니다.',
          detail: '같은 구문이 rūpa → vedanā → saññā → saṅkhārā → viññāṇa 순으로 반복됩니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Saṅkhārā ca hidaṃ bhikkhave attā abhavissaṃsu"에서 특이한 점은?',
        options: [
          'abhavissaṃsu가 복수형 가정법이다(saṅkhārā가 복수이므로)',
          '능동태가 아니라 수동태이다',
          '미래형이 사용되었다',
          '명령법이 사용되었다',
        ],
        answer: 0,
        explanation: {
          correct: 'saṅkhārā는 복수형이므로 동사도 복수 가정법 abhavissaṃsu가 사용됩니다.',
          detail: '다른 온은 단수형 abhavissa를 쓰지만, 행온(saṅkhārā)만 복수입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Viññāṇañca hidaṃ bhikkhave attā abhavissa"에서 다루는 온은?',
        options: [
          '식온(의식) — 만약 의식이 자아라면',
          '색온(물질) — 만약 물질이 자아라면',
          '수온(느낌) — 만약 느낌이 자아라면',
          '상온(인식) — 만약 인식이 자아라면',
        ],
        answer: 0,
        explanation: {
          correct: 'viññāṇa(의식)에 대한 가정법 논증으로, 오온의 마지막입니다.',
          detail: 'viññāṇa(vi+ñāṇa) = 분별하여 아는 것, 의식',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ ca hidaṃ bhikkhave attā abhavissa, nayidaṃ ___ ābādhāya saṃvatteyya',
        translation: '만약 물질이 자아라면, 물질이 병으로 되지 않을 것이다',
        blank: 'rūpaṃ',
        options: ['rūpaṃ', 'vedanā', 'saññā', 'viññāṇaṃ'],
        answer: 0,
        explanation: {
          correct: '무아경 가정법 논증의 첫 번째 온은 rūpaṃ(물질)입니다.',
        },
      },

      // ── 확장: 오온의 "영원하냐 무상하냐" 5개 ──
      {
        type: 'quiz',
        question: '"Rūpaṃ bhikkhave niccaṃ vā aniccaṃ vā"에서 비구들은 뭐라고 답합니까?',
        options: [
          '"Aniccaṃ bhante" — 무상합니다, 스승이시여',
          '"Niccaṃ bhante" — 영원합니다, 스승이시여',
          '"Sukhaṃ bhante" — 즐겁습니다, 스승이시여',
          '"Attā bhante" — 자아입니다, 스승이시여',
        ],
        answer: 0,
        explanation: {
          correct: '붓다의 질문에 비구들은 "무상합니다(Aniccaṃ bhante)"라고 답합니다.',
          detail: '무상(anicca) → 고(dukkha) → 무아(anattā)의 논리가 이어집니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Vedanā niccā vā aniccā vā?"에 대한 올바른 답은?',
        options: [
          '"Aniccā bhante" — 무상합니다',
          '"Niccā bhante" — 영원합니다',
          '"Attā bhante" — 자아입니다',
          '"Sukkhā bhante" — 즐겁습니다',
        ],
        answer: 0,
        explanation: {
          correct: 'vedanā(느낌)도 무상(aniccā)합니다. 여성 명사이므로 aniccā로 씁니다.',
          tip: '남성/중성: aniccaṃ / 여성: aniccā',
        },
      },
      {
        type: 'quiz',
        question: '"Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vā?"의 뜻은?',
        options: [
          '"무상한 것은 괴로운 것입니까 즐거운 것입니까?"',
          '"영원한 것은 괴로운 것입니까 즐거운 것입니까?"',
          '"자아인 것은 괴로운 것입니까 즐거운 것입니까?"',
          '"무상한 것은 영원합니까 아닙니까?"',
        ],
        answer: 0,
        explanation: {
          correct: '무상한 것이 괴로운지 즐거운지 묻는 붓다의 두 번째 질문입니다.',
          detail: '비구들은 "Dukkhaṃ bhante(괴롭습니다)"라고 답합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"Saṅkhārā niccā vā aniccā vā?"에서 saṅkhārā의 문법적 특징은?',
        options: [
          '항상 복수형으로 쓰인다',
          '항상 단수형으로 쓰인다',
          '남성 명사이다',
          '중성 명사이다',
        ],
        answer: 0,
        explanation: {
          correct: 'saṅkhārā는 남성 복수형으로 쓰입니다. 여러 의지적 형성을 의미하므로.',
          detail: '다른 온: rūpaṃ(중성 단수), vedanā(여성 단수), saññā(여성 단수), viññāṇaṃ(중성 단수)',
        },
      },
      {
        type: 'quiz',
        question: '"Viññāṇaṃ niccaṃ vā aniccaṃ vā?"에서 "viññāṇaṃ"의 성(性)은?',
        options: [
          '중성(中性)',
          '남성(男性)',
          '여성(女性)',
          '양성(兩性)',
        ],
        answer: 0,
        explanation: {
          correct: 'viññāṇaṃ은 중성 명사입니다. -aṃ 어미가 중성 단수 주격을 나타냅니다.',
          tip: '중성: rūpaṃ, viññāṇaṃ / 여성: vedanā, saññā / 남성 복수: saṅkhārā',
        },
      },

      // ── 확장: 11종 분류 ──
      {
        type: 'quiz',
        question: '오온의 11종 분류에서 "hīnaṃ vā paṇītaṃ vā"의 뜻은?',
        options: [
          '열등한 것이든 뛰어난 것이든',
          '가까운 것이든 먼 것이든',
          '과거이든 미래이든',
          '거친 것이든 미세한 것이든',
        ],
        answer: 0,
        explanation: {
          correct: 'hīna(열등한, 저열한) + paṇīta(뛰어난, 수승한) = 질적 구분',
          detail: '11종: 과거·미래·현재, 안·밖, 거친·미세한, 열등한·뛰어난, 먼·가까운',
        },
      },
      {
        type: 'quiz',
        question: '오온의 11종 분류에서 "dūre vā santike vā"의 뜻은?',
        options: [
          '먼 것이든 가까운 것이든',
          '거친 것이든 미세한 것이든',
          '열등한 것이든 뛰어난 것이든',
          '안이든 밖이든',
        ],
        answer: 0,
        explanation: {
          correct: 'dūre(먼) + santike(가까운) = 공간적 거리에 따른 구분',
          detail: '11종 분류의 마지막 쌍입니다.',
        },
      },

      // ── 확장: 세 집착의 구분 ──
      {
        type: 'quiz',
        question: '무아경의 세 가지 집착 중 "etaṃ mama"는 어떤 번뇌와 연결됩니까?',
        options: [
          'taṇhā(갈애) — 소유에 대한 집착',
          'māna(자만) — 정체성에 대한 집착',
          'diṭṭhi(사견) — 자아관에 대한 집착',
          'avijjā(무명) — 무지',
        ],
        answer: 0,
        explanation: {
          correct: '"이것은 나의 것이다(etaṃ mama)"는 소유욕, 즉 갈애(taṇhā)에 해당합니다.',
          detail: '세 집착: taṇhā(나의 것) + māna(내가 이것) + diṭṭhi(나의 자아)',
        },
      },
      {
        type: 'quiz',
        question: '무아경의 세 가지 집착 중 "esohamasmi"는 어떤 번뇌와 연결됩니까?',
        options: [
          'māna(자만) — "이것이 나다"라는 교만',
          'taṇhā(갈애) — 소유에 대한 집착',
          'diṭṭhi(사견) — 자아관에 대한 집착',
          'dosa(성냄) — 분노',
        ],
        answer: 0,
        explanation: {
          correct: '"이것이 나다(esohamasmi)"는 자만(māna), 자기 정체성에 대한 교만입니다.',
          detail: 'asmi-māna(나다라는 자만)라고도 합니다.',
        },
      },

      // ── 확장: 아라한과 선언 ──
      {
        type: 'quiz',
        question: '아라한과 선언의 네 구절 중 "kataṃ karaṇīyaṃ"의 뜻은?',
        options: [
          '해야 할 것을 다 했다',
          '태어남이 다했다',
          '청정한 삶을 살았다',
          '더 이상 돌아옴이 없다',
        ],
        answer: 0,
        explanation: {
          correct: 'kata(한) + karaṇīya(해야 할 것) = 할 일을 모두 마쳤다',
          detail: '아라한 4구: (1)태어남 다함 (2)청정행 완수 (3)할 일 다 함 (4)더 이상 윤회 없음',
        },
      },
      {
        type: 'quiz',
        question: '아라한과 선언의 "vusitaṃ brahmacariyaṃ"에서 "brahmacariya"는?',
        options: [
          '청정한 삶(범행)',
          '세속적 삶',
          '고행의 삶',
          '은둔의 삶',
        ],
        answer: 0,
        explanation: {
          correct: 'brahma(거룩한, 청정한) + cariya(행위, 삶) = 청정한 삶, 범행',
          detail: 'vusita(살아온, 완수한) = 이 범행을 완수했다는 뜻입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Khīṇā ___, vusitaṃ brahmacariyaṃ',
        translation: '태어남이 다했고, 청정한 삶을 살았다',
        blank: 'jāti',
        options: ['jāti', 'jarā', 'maraṇa', 'dukkha'],
        answer: 0,
        explanation: {
          correct: 'khīṇā(다한) + jāti(태어남) = 태어남이 다했다. 아라한과 선언의 첫 구절입니다.',
          detail: 'jarā는 "늙음", maraṇa는 "죽음"입니다.',
        },
      },

      // ── 확장: 추가 빈칸·퀴즈 ──
      {
        type: 'quiz',
        question: '무아경에서 다섯 비구가 모두 아라한이 된 후, 세상의 아라한 수는?',
        options: [
          '6명 (붓다 포함)',
          '5명',
          '7명',
          '10명',
        ],
        answer: 0,
        explanation: {
          correct: '붓다 + 다섯 비구 = 세상에 6명의 아라한이 존재하게 되었습니다.',
          detail: '전법륜경(첫 설법) 후 무아경(두 번째 설법)을 듣고 모두 아라한과를 얻었습니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Evaṃ passaṃ bhikkhave sutavā ariya___ rūpasmimpi nibbindati',
        translation: '이와 같이 보면서, 배운 성스러운 제자는 물질에 대해서도 싫어한다',
        blank: 'sāvako',
        options: ['sāvako', 'bhikkhu', 'devo', 'brāhmaṇo'],
        answer: 0,
        explanation: {
          correct: 'ariyasāvaka(성스러운 제자) — sutavā(배운, 많이 들은) ariyasāvaka는 무아를 배운 성제자입니다.',
          detail: 'sāvaka(제자) = su(듣다) + aka(자) = 듣는 자, 제자',
        },
      },
      {
        type: 'quiz',
        question: '"labbhā ca panassa — evaṃ me rūpaṃ hotu"에서 "labbhā"의 뜻은?',
        options: [
          '"~할 수 있다"는 가능성을 나타냄',
          '"~해야 한다"는 의무를 나타냄',
          '"~하지 마라"는 금지를 나타냄',
          '"~할 것이다"는 미래를 나타냄',
        ],
        answer: 0,
        explanation: {
          correct: 'labbhā는 "얻을 수 있는, 가능한"이란 뜻입니다. "마음대로 할 수 있어야 한다"는 전제.',
          detail: '자아라면 마음대로 명령(hotu=되어라)할 수 있어야 하지만 실제로 그럴 수 없습니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Yaṃ ___ taṃ dukkhaṃ',
        translation: '무상한 것, 그것은 괴롭다',
        blank: 'aniccaṃ',
        options: ['aniccaṃ', 'niccaṃ', 'sukhaṃ', 'attā'],
        answer: 0,
        explanation: {
          correct: '삼상 논증의 첫 연결: 무상(anicca)한 것은 괴로움(dukkha)입니다.',
          tip: '무상→고→무아의 논리적 연쇄입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Yaṃ dukkhaṃ ___ — netaṃ mama, nesohamasmi, na meso attā',
        translation: '괴로운 것, 그것은 자아가 아니다 — 이것은 나의 것이 아니다...',
        blank: 'tadanattā',
        options: ['tadanattā', 'tadattā', 'tadsukhaṃ', 'tadaniccaṃ'],
        answer: 0,
        explanation: {
          correct: 'tad(그것은) + anattā(자아가 아니다) = 삼상 논증의 최종 결론',
          detail: '그러므로 "이것은 나의 것이 아니다(netaṃ mama)"라고 봐야 합니다.',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 사념처경 1부 (satipatthana-1) — 40문제
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

      // ── 추가 20문제 (20→40) ──
      {
        type: 'quiz',
        question: '호흡관찰에서 "dīghaṃ assasanto"의 뜻은?',
        options: [
          '길게 들이쉬면서',
          '짧게 들이쉬면서',
          '길게 내쉬면서',
          '짧게 내쉬면서',
        ],
        answer: 0,
        explanation: {
          correct: 'dīghaṃ(길게) + assasanto(들이쉬면서) = 길게 들이쉬면서',
          tip: 'dīgha(긴) ↔ rassa(짧은), assasati(들이쉼) ↔ passasati(내쉼)',
        },
      },
      {
        type: 'quiz',
        question: '"rassaṃ passasanto"의 뜻은?',
        options: [
          '짧게 내쉬면서',
          '길게 내쉬면서',
          '짧게 들이쉬면서',
          '길게 들이쉬면서',
        ],
        answer: 0,
        explanation: {
          correct: 'rassaṃ(짧게) + passasanto(내쉬면서) = 짧게 내쉬면서',
          detail: 'rassa는 "짧은"이라는 뜻으로, dīgha(긴)의 반대입니다.',
        },
      },
      {
        type: 'quiz',
        question: '네 자세 중 "ṭhito"의 뜻은?',
        options: [
          '서 있는',
          '걸어가는',
          '앉아 있는',
          '누워 있는',
        ],
        answer: 0,
        explanation: {
          correct: 'ṭhito는 tiṭṭhati(서다)의 과거분사로 "서 있는"이란 뜻입니다.',
          tip: '4자세: gacchanto(걸으며), ṭhito(서서), nisinno(앉아서), sayāno(누워서)',
        },
      },
      {
        type: 'quiz',
        question: '네 자세 중 "nisinno"의 뜻은?',
        options: [
          '앉아 있는',
          '서 있는',
          '걸어가는',
          '누워 있는',
        ],
        answer: 0,
        explanation: {
          correct: 'nisinno는 nisīdati(앉다)의 과거분사로 "앉아 있는"이란 뜻입니다.',
        },
      },
      {
        type: 'quiz',
        question: '네 자세 중 "sayāno"의 뜻은?',
        options: [
          '누워 있는',
          '앉아 있는',
          '서 있는',
          '걸어가는',
        ],
        answer: 0,
        explanation: {
          correct: 'sayāno는 sayati(눕다)의 현재분사로 "누워 있는"이란 뜻입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sampajānakārī"의 뜻은?',
        options: [
          '분명히 알면서 행하는 자',
          '모르면서 행하는 자',
          '멈추어 있는 자',
          '명상하는 자',
        ],
        answer: 0,
        explanation: {
          correct: 'sampajāna(분명히 아는) + kārī(행하는 자) = 분명한 앎으로 행하는 사람',
          detail: '나아감·돌아옴·봄·옷입음·먹음·대소변·걸음 등 일상 동작에서의 알아차림입니다.',
        },
      },
      {
        type: 'quiz',
        question: 'sampajānakārī 구절에서 "ābhoge paṭibhoge"의 뜻은?',
        options: [
          '구부림과 펴기에서',
          '나아감과 돌아옴에서',
          '먹음과 마심에서',
          '잠듦과 깨어남에서',
        ],
        answer: 0,
        explanation: {
          correct: 'ābhoga(구부림) + paṭibhoga(펴기) = 팔다리를 구부리고 펴는 동작',
          detail: '일상의 모든 동작에서 분명히 알아차리며 행하라는 가르침입니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "kesā"의 뜻은?',
        options: [
          '머리카락',
          '체모',
          '손톱',
          '이(치아)',
        ],
        answer: 0,
        explanation: {
          correct: 'kesā는 "머리카락"으로, 32신체부분 관찰의 첫 번째입니다.',
          tip: 'kesā(머리카락), lomā(체모), nakhā(손톱), dantā(이), taco(피부) — 처음 5개를 기억하세요.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "lomā, nakhā, dantā, taco"는 각각?',
        options: [
          '체모, 손톱, 이(치아), 피부',
          '머리카락, 뼈, 피, 살',
          '심장, 간, 폐, 콩팥',
          '눈, 귀, 코, 혀',
        ],
        answer: 0,
        explanation: {
          correct: 'lomā(체모), nakhā(손톱), dantā(이/치아), taco(피부)',
          detail: '32신체부분 중 처음 다섯: 머리카락·체모·손톱·이·피부',
        },
      },
      {
        type: 'quiz',
        question: '4대 요소에서 "pathavīdhātu"는?',
        options: [
          '땅의 요소(단단함, 부드러움)',
          '물의 요소(젖음, 응집)',
          '불의 요소(열, 차가움)',
          '바람의 요소(움직임, 밀어냄)',
        ],
        answer: 0,
        explanation: {
          correct: 'pathavī(땅) + dhātu(요소) = 단단함·부드러움의 성질',
          detail: '문자 그대로 "땅"이 아니라 물질의 "단단한 성질"을 뜻합니다.',
        },
      },
      {
        type: 'quiz',
        question: '4대 요소에서 "āpodhātu"는?',
        options: [
          '물의 요소(젖음, 응집)',
          '땅의 요소(단단함)',
          '불의 요소(열)',
          '바람의 요소(움직임)',
        ],
        answer: 0,
        explanation: {
          correct: 'āpo(물) + dhātu(요소) = 젖음·응집의 성질',
          tip: '실제 물이 아니라, 물질이 달라붙고 응집하는 성질입니다.',
        },
      },
      {
        type: 'quiz',
        question: '4대 요소에서 "vāyodhātu"는?',
        options: [
          '바람의 요소(움직임, 밀어냄)',
          '불의 요소(열)',
          '물의 요소(응집)',
          '땅의 요소(단단함)',
        ],
        answer: 0,
        explanation: {
          correct: 'vāyo(바람) + dhātu(요소) = 움직임·밀어냄의 성질',
          detail: '호흡, 소화의 바람 등 몸 안의 움직이는 성질입니다.',
        },
      },
      {
        type: 'quiz',
        question: '묘지관에서 시체가 "uddhumātakaṃ"인 상태는?',
        options: [
          '부풀어 오른 상태',
          '뼈만 남은 상태',
          '가루가 된 상태',
          '동물에게 먹힌 상태',
        ],
        answer: 0,
        explanation: {
          correct: 'uddhumātaka는 "부풀어 오른"이란 뜻으로, 묘지관의 첫 번째 단계입니다.',
          detail: '시체의 변화: 부풀음→변색→먹힘→뼈→흩어짐→가루',
        },
      },
      {
        type: 'quiz',
        question: '묘지관에서 "aṭṭhikasaṅkhalikaṃ"의 뜻은?',
        options: [
          '뼈가 연결된 해골 상태',
          '부풀어 오른 상태',
          '벌레에 먹히는 상태',
          '완전히 가루가 된 상태',
        ],
        answer: 0,
        explanation: {
          correct: 'aṭṭhika(뼈) + saṅkhalika(사슬/연결) = 뼈가 이어진 해골',
          detail: '시체 관찰의 후반부 단계입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"ajjhattabahiddhā"의 뜻은?',
        options: [
          '안팎 모두',
          '안에서만',
          '밖에서만',
          '위아래',
        ],
        answer: 0,
        explanation: {
          correct: 'ajjhatta(안) + bahiddhā(밖) = 안팎 모두, 내외 함께',
          detail: '정형문에서 세 번째: ajjhattaṃ(안) → bahiddhā(밖) → ajjhattabahiddhā(안팎)',
        },
      },
      {
        type: 'quiz',
        question: '"samudayadhammānupassī"에서 "anupassī"의 뜻은?',
        options: [
          '반복적으로 관찰하는',
          '한 번 보는',
          '듣는',
          '말하는',
        ],
        answer: 0,
        explanation: {
          correct: 'anu(따라서, 반복하여) + passī(보는) = 반복적으로 관찰하는',
          tip: 'anupassanā(수시 관찰)라는 명사 형태로도 자주 쓰입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Dīghaṃ ___ dīghaṃ passasāmīti pajānāti',
        translation: '길게 내쉬면서 "길게 내쉰다"고 분명히 안다',
        blank: 'passasanto',
        options: ['passasanto', 'assasanto', 'gacchanto', 'nisīdanto'],
        answer: 0,
        explanation: {
          correct: 'passasanto는 "내쉬면서"라는 현재분사입니다.',
          detail: 'assasanto는 "들이쉬면서"이므로 혼동하지 마세요.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Rassaṃ ___ rassaṃ assasāmīti pajānāti',
        translation: '짧게 들이쉬면서 "짧게 들이쉰다"고 분명히 안다',
        blank: 'assasanto',
        options: ['assasanto', 'passasanto', 'tiṭṭhanto', 'sayāno'],
        answer: 0,
        explanation: {
          correct: 'assasanto(들이쉬면서)가 맞습니다. rassaṃ(짧게)과 함께 쓰였습니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Atthi imasmiṃ kāye kesā lomā nakhā dantā ___',
        translation: '이 몸에 머리카락, 체모, 손톱, 이, 피부가 있다',
        blank: 'taco',
        options: ['taco', 'hadayaṃ', 'aṭṭhi', 'lohitaṃ'],
        answer: 0,
        explanation: {
          correct: 'taco는 "피부"로, 32신체부분의 처음 5개 중 마지막입니다.',
          detail: 'hadayaṃ은 "심장", aṭṭhi는 "뼈", lohitaṃ은 "피"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Seyyathāpi bhikkhave ___ kūṭāgārasmiṃ vā nānāvidhaṃ dhaññaṃ',
        translation: '비구들이여, 마치 두 개의 입구가 있는 자루에 여러 가지 곡식이 있는 것처럼',
        blank: 'ubhatomukhā',
        options: ['ubhatomukhā', 'ekamukhā', 'timukhā', 'amukhā'],
        answer: 0,
        explanation: {
          correct: 'ubhatomukhā는 "양쪽에 입구가 있는"이란 뜻입니다. 4대 요소 관찰의 비유입니다.',
          detail: 'ubhato(양쪽) + mukhā(입구) = 양쪽이 열린 자루',
        },
      },

      // ── 확장: 호흡관찰 4단계 ──
      {
        type: 'quiz',
        question: '호흡관찰의 세 번째 단계 "Sabbakāyapaṭisaṃvedī assasissāmīti sikkhati"의 뜻은?',
        options: [
          '"온 몸을 경험하면서 들이쉬리라"고 훈련한다',
          '"길게 들이쉰다"고 안다',
          '"짧게 들이쉰다"고 안다',
          '"몸의 형성을 가라앉히면서 들이쉬리라"고 훈련한다',
        ],
        answer: 0,
        explanation: {
          correct: 'sabba(온) + kāya(몸) + paṭisaṃvedī(경험하면서) = 온 몸을 느끼며 호흡',
          detail: '호흡 4단계: (1)길게 (2)짧게 (3)온 몸 경험 (4)몸의 형성 가라앉힘',
        },
      },
      {
        type: 'quiz',
        question: '호흡관찰의 네 번째 단계 "Passambhayaṃ kāyasaṅkhāraṃ"의 뜻은?',
        options: [
          '몸의 형성(호흡)을 가라앉히면서',
          '온 몸을 경험하면서',
          '길게 들이쉬면서',
          '짧게 내쉬면서',
        ],
        answer: 0,
        explanation: {
          correct: 'passambhayaṃ(가라앉히면서) + kāyasaṅkhāra(몸의 형성/호흡) = 호흡을 고요하게 함',
          detail: 'kāyasaṅkhāra는 "몸의 조건 형성"으로, 여기서는 호흡을 뜻합니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ kāyasaṅkhāraṃ assasissāmīti sikkhati',
        translation: '몸의 형성을 가라앉히면서 들이쉬리라고 훈련한다',
        blank: 'passambhayaṃ',
        options: ['passambhayaṃ', 'paṭisaṃvedī', 'dīghaṃ', 'rassaṃ'],
        answer: 0,
        explanation: {
          correct: 'passambhayaṃ은 "가라앉히면서, 고요하게 하면서"라는 뜻의 현재분사입니다.',
          tip: 'passambhati(가라앉다)의 사역형 분사',
        },
      },
      {
        type: 'fill-blank',
        sentence: '___ assasissāmīti sikkhati, sabbakāyapaṭisaṃvedī passasissāmīti sikkhati',
        translation: '온 몸을 경험하면서 들이쉬리라고 훈련하고, 온 몸을 경험하면서 내쉬리라고 훈련한다',
        blank: 'sabbakāyapaṭisaṃvedī',
        options: ['sabbakāyapaṭisaṃvedī', 'dīghaṃ assasanto', 'passambhayaṃ', 'rassaṃ passasanto'],
        answer: 0,
        explanation: {
          correct: 'sabba(온) + kāya(몸) + paṭisaṃvedī(경험하면서) — 호흡의 3단계입니다.',
        },
      },

      // ── 확장: 분명한 앎(sampajañña) 7동작 ──
      {
        type: 'quiz',
        question: 'sampajānakārī 구절에서 "abhikkante paṭikkante"의 뜻은?',
        options: [
          '나아감과 돌아옴에서',
          '구부림과 펴기에서',
          '먹음과 마심에서',
          '잠듦과 깨어남에서',
        ],
        answer: 0,
        explanation: {
          correct: 'abhikkanta(나아감) + paṭikkanta(돌아옴) = 앞으로 가고 뒤로 돌아오는 동작',
          detail: '일상 동작에서의 분명한 앎(sampajañña) 7동작 중 첫 번째 쌍입니다.',
        },
      },
      {
        type: 'quiz',
        question: 'sampajānakārī 구절에서 "asite pīte khāyite sāyite"의 뜻은?',
        options: [
          '먹고, 마시고, 씹고, 맛보는 것에서',
          '걸을 때와 서 있을 때에서',
          '옷을 입고 벗는 것에서',
          '앉을 때와 누울 때에서',
        ],
        answer: 0,
        explanation: {
          correct: 'asita(먹음), pīta(마심), khāyita(씹음), sāyita(맛봄) — 음식 관련 4동작',
          detail: '일상의 모든 동작에서 분명히 알아차리라는 가르침입니다.',
        },
      },
      {
        type: 'quiz',
        question: 'sampajānakārī 구절에서 "uccārapassāvakamme"의 뜻은?',
        options: [
          '대소변을 보는 것에서',
          '걸을 때와 서 있을 때에서',
          '옷을 입고 벗는 것에서',
          '먹고 마시는 것에서',
        ],
        answer: 0,
        explanation: {
          correct: 'uccāra(대변) + passāva(소변) + kamma(행위) = 대소변을 보는 행위에서도 분명히 앎',
          detail: '어떤 동작도 빠뜨리지 않고 알아차리라는 가르침의 철저함을 보여줍니다.',
        },
      },

      // ── 확장: 32신체 주요 부분 ──
      {
        type: 'quiz',
        question: '32신체부분에서 "maṃsaṃ"의 뜻은?',
        options: [
          '살(근육)',
          '뼈',
          '피',
          '피부',
        ],
        answer: 0,
        explanation: {
          correct: 'maṃsa는 "살, 근육"을 뜻합니다. 32신체부분 중 하나입니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "aṭṭhi"의 뜻은?',
        options: [
          '뼈',
          '살',
          '피',
          '심장',
        ],
        answer: 0,
        explanation: {
          correct: 'aṭṭhi는 "뼈"를 뜻합니다.',
          tip: '묘지관에서 "aṭṭhikasaṅkhalika(뼈가 연결된 해골)"와 같은 어근입니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "hadayaṃ"의 뜻은?',
        options: [
          '심장',
          '폐',
          '간',
          '콩팥',
        ],
        answer: 0,
        explanation: {
          correct: 'hadaya는 "심장"을 뜻합니다.',
          detail: '고대 인도에서는 심장이 마음의 자리라고 여겨졌습니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "yakanaṃ"의 뜻은?',
        options: [
          '간(肝)',
          '폐',
          '심장',
          '위(胃)',
        ],
        answer: 0,
        explanation: {
          correct: 'yakana는 "간(肝)"을 뜻합니다. 32신체부분 중 하나입니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "papphāsaṃ"의 뜻은?',
        options: [
          '폐(肺)',
          '심장',
          '간',
          '콩팥',
        ],
        answer: 0,
        explanation: {
          correct: 'papphāsa는 "폐(肺)"를 뜻합니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "antaṃ"의 뜻은?',
        options: [
          '창자(장)',
          '심장',
          '뼈',
          '피부',
        ],
        answer: 0,
        explanation: {
          correct: 'anta는 "창자, 장(腸)"을 뜻합니다.',
          detail: 'antaguṇaṃ(장간막)과 함께 나옵니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "lohitaṃ"의 뜻은?',
        options: [
          '피(혈액)',
          '살',
          '뼈',
          '기름',
        ],
        answer: 0,
        explanation: {
          correct: 'lohita는 "피, 혈액"을 뜻합니다.',
          tip: 'lohita는 "붉은"이란 뜻도 있습니다.',
        },
      },

      // ── 확장: 4대 요소 비유 ──
      {
        type: 'quiz',
        question: '사대 관찰에서 도살자의 비유는 무엇을 설명합니까?',
        options: [
          '소를 도살한 후 부분들로 나누듯, 몸을 4대 요소로 분석하라',
          '소를 돌보듯 몸을 돌보라',
          '소처럼 인내하라',
          '소를 키우듯 수행하라',
        ],
        answer: 0,
        explanation: {
          correct: '숙련된 도살자(dakkho goghātako)가 소를 잡아 교차로에서 부분별로 나누는 비유입니다.',
          detail: '전체 몸을 "나"로 보지 않고, 지·수·화·풍의 요소로 분석하라는 가르침.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Seyyathāpi bhikkhave dakkho goghātako vā goghātakantevāsī vā gāviṃ vadhitvā ___ vā cātumaghāpathe',
        translation: '마치 숙련된 도살자가 소를 잡아 네 거리에서 부분별로 나누듯',
        blank: 'catumahāpathe',
        options: ['catumahāpathe', 'gāme', 'vane', 'nagare'],
        answer: 0,
        explanation: {
          correct: 'catumahāpatha(네 거리, 큰 교차로)에서 부분들을 나열하는 비유입니다.',
          detail: 'catu(넷) + mahā(큰) + patha(길) = 사거리',
        },
      },

      // ── 확장: 9묘지관 단계 ──
      {
        type: 'quiz',
        question: '묘지관에서 "vinīlakaṃ"의 뜻은?',
        options: [
          '푸르스름하게 변색된',
          '부풀어 오른',
          '벌레에 먹히는',
          '뼈만 남은',
        ],
        answer: 0,
        explanation: {
          correct: 'vinīlaka는 "푸르스름한, 변색된"이란 뜻입니다. 묘지관의 두 번째 단계입니다.',
          detail: '시체 변화 순서: (1)uddhumātaka(부풀음) → (2)vinīlaka(변색) → (3)vipubbaka(고름 흐름)',
        },
      },
      {
        type: 'quiz',
        question: '묘지관에서 "vipubbakaṃ"의 뜻은?',
        options: [
          '고름이 흐르는',
          '부풀어 오른',
          '변색된',
          '뼈가 흩어진',
        ],
        answer: 0,
        explanation: {
          correct: 'vipubbaka는 "고름이 흐르는"이란 뜻입니다. 세 번째 단계.',
          detail: 'vi(강조) + pubba(고름) + ka(접미사) = 고름이 나오는',
        },
      },
      {
        type: 'quiz',
        question: '묘지관에서 "vikkhāyitakaṃ"의 뜻은?',
        options: [
          '동물에게 뜯어먹힌',
          '부풀어 오른',
          '뼈만 남은',
          '가루가 된',
        ],
        answer: 0,
        explanation: {
          correct: 'vikkhāyitaka는 "먹히고 뜯긴"이란 뜻입니다.',
          detail: '까마귀·매·독수리 등에 의해 뜯어먹히는 단계를 관찰합니다.',
        },
      },
      {
        type: 'quiz',
        question: '묘지관의 최종 단계에서 뼈는 어떻게 됩니까?',
        options: [
          '가루(cuṇṇaka)가 되어 흩어진다',
          '돌처럼 단단해진다',
          '불에 타서 사라진다',
          '물에 녹아 없어진다',
        ],
        answer: 0,
        explanation: {
          correct: '뼈가 부서져 가루(cuṇṇaka)가 되고 바람에 흩어지는 것이 최종 단계입니다.',
          detail: '9묘지관: 부풀음→변색→고름→먹힘→해골(힘줄연결)→뼈흩어짐→하얗게→쌓임→가루',
        },
      },
      {
        type: 'quiz',
        question: '묘지관에서 관찰한 후 내리는 결론은?',
        options: [
          '"이 몸도 이와 같은 성질이 있어 이렇게 될 것이며 이를 벗어날 수 없다"',
          '"이 몸은 영원하므로 걱정할 필요 없다"',
          '"다른 사람의 몸만 이렇다"',
          '"나의 몸은 특별하므로 이렇게 되지 않는다"',
        ],
        answer: 0,
        explanation: {
          correct: '"Ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatīto" — 나의 몸도 같은 성질이다.',
          detail: '타인의 시체를 보고 자신의 몸도 같은 운명임을 관찰하는 것이 묘지관의 핵심입니다.',
        },
      },

      // ── 확장: 정형구 추가 ──
      {
        type: 'fill-blank',
        sentence: 'Kāye kāyānupassī viharati ātāpī sampajāno satimā vineyya loke ___',
        translation: '몸에서 몸을 관찰하며 머문다, 열심히 분명히 알며 알아차리며, 세상에 대한 탐욕과 슬픔을 제거하며',
        blank: 'abhijjhādomanassaṃ',
        options: ['abhijjhādomanassaṃ', 'sukhadomanassaṃ', 'rāgadosaṃ', 'mohalobhaṃ'],
        answer: 0,
        explanation: {
          correct: 'abhijjhā(탐욕) + domanassa(슬픔, 근심) = 탐욕과 슬픔을 vineyya(제거하며)',
          detail: '사념처 정형문의 핵심 마무리 구절입니다. 모든 4개 념처에 동일하게 나옵니다.',
        },
      },
      {
        type: 'quiz',
        question: '"vineyya"의 뜻은?',
        options: [
          '제거하며(벗어나며)',
          '증가시키며',
          '관찰하며',
          '즐기며',
        ],
        answer: 0,
        explanation: {
          correct: 'vineyya는 "제거하며, 벗어나며"라는 뜻의 절대사(absolutive)입니다.',
          detail: 'vi(분리) + neyya(이끌어야 할) → 벗어남. abhijjhā(탐)와 domanassa(우)를 제거합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"abhijjhādomanassaṃ"에서 "domanassa"의 뜻은?',
        options: [
          '슬픔, 근심, 마음의 불쾌함',
          '기쁨, 즐거움',
          '탐욕, 욕망',
          '분노, 성냄',
        ],
        answer: 0,
        explanation: {
          correct: 'domanassa는 du(나쁜) + manas(마음) → 마음의 나쁜 상태 = 슬픔, 근심',
          tip: 'somanassa(기쁨) ↔ domanassa(슬픔)',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Uddhaṃ ___ adho kesamatthakā tacapariyāpannaṃ',
        translation: '위로는 머리카락부터 아래로는 발바닥까지 피부에 둘러싸인',
        blank: 'pādatalā',
        options: ['pādatalā', 'kesamatthakā', 'kāyasmiṃ', 'hadayaṃ'],
        answer: 0,
        explanation: {
          correct: 'pāda(발) + tala(바닥) = 발바닥. 32신체관찰의 범위: 발바닥에서 머리카락까지.',
          detail: 'tacapariyāpanna = taca(피부) + pariyāpanna(둘러싸인) = 피부로 둘러싸인 몸',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "nhāru"의 뜻은?',
        options: [
          '힘줄(건)',
          '뼈',
          '살',
          '피부',
        ],
        answer: 0,
        explanation: {
          correct: 'nhāru는 "힘줄, 건(腱)"을 뜻합니다.',
          detail: '32신체: 머리카락·체모·손톱·이·피부·살·힘줄·뼈·골수·콩팥...',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "aṭṭhimiñjaṃ"의 뜻은?',
        options: [
          '골수',
          '뼈',
          '힘줄',
          '살',
        ],
        answer: 0,
        explanation: {
          correct: 'aṭṭhi(뼈) + miñja(속, 수) = 골수(骨髓). 뼈 속의 부드러운 조직입니다.',
        },
      },
      {
        type: 'quiz',
        question: '32신체부분에서 "vakkaṃ"의 뜻은?',
        options: [
          '콩팥(신장)',
          '간',
          '폐',
          '심장',
        ],
        answer: 0,
        explanation: {
          correct: 'vakka는 "콩팥, 신장"을 뜻합니다. 32신체부분 중 하나입니다.',
        },
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 사념처경 2부 (satipatthana-2) — 40문제
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

      // ── 추가 20문제 (20→40) ──
      {
        type: 'quiz',
        question: '수념처에서 "sāmisaṃ sukhaṃ vedanaṃ"의 뜻은?',
        options: [
          '세간적인(물질적) 즐거운 느낌',
          '출세간적인 즐거운 느낌',
          '괴로운 느낌',
          '중립적 느낌',
        ],
        answer: 0,
        explanation: {
          correct: 'sāmisa(세간적, 물질적) + sukhaṃ(즐거운) + vedanaṃ(느낌)',
          detail: 'sāmisa는 "고기가 있는"이란 원뜻에서 "세간적, 물질적"이란 의미로 쓰입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"nirāmisaṃ sukhaṃ vedanaṃ"의 뜻은?',
        options: [
          '출세간적인(비물질적) 즐거운 느낌',
          '세간적인 즐거운 느낌',
          '괴로운 느낌',
          '중립적 느낌',
        ],
        answer: 0,
        explanation: {
          correct: 'nirāmisa(출세간적, 비물질적) + sukhaṃ(즐거운) + vedanaṃ(느낌)',
          tip: 'sāmisa(세간적) ↔ nirāmisa(출세간적). nir-는 "~이 없는"이란 접두사입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sāmisa"와 "nirāmisa"의 차이는?',
        options: [
          'sāmisa는 감각 대상과 관련된 느낌, nirāmisa는 감각 대상과 무관한 느낌',
          '둘 다 같은 뜻이다',
          'sāmisa는 괴로운, nirāmisa는 즐거운',
          'sāmisa는 내적, nirāmisa는 외적',
        ],
        answer: 0,
        explanation: {
          correct: 'sāmisa(세간적)는 오감의 대상에서 오는 느낌, nirāmisa(출세간적)는 명상 등에서 오는 느낌입니다.',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "sadosaṃ cittaṃ"의 뜻은?',
        options: [
          '성냄이 있는 마음',
          '성냄이 없는 마음',
          '탐욕이 있는 마음',
          '어리석음이 있는 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'sa(~이 있는) + dosa(성냄) + cittaṃ(마음) = 성냄이 있는 마음',
          tip: 'sa-dosa ↔ vīta-dosa(성냄 없는)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "samohaṃ cittaṃ"의 뜻은?',
        options: [
          '어리석음이 있는 마음',
          '어리석음이 없는 마음',
          '탐욕이 있는 마음',
          '성냄이 있는 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'sa(~이 있는) + moha(어리석음) + cittaṃ(마음) = 어리석음이 있는 마음',
          detail: '삼독: rāga(탐욕), dosa(성냄), moha(어리석음)',
        },
      },
      {
        type: 'quiz',
        question: '"vītamohaṃ cittaṃ"의 뜻은?',
        options: [
          '어리석음이 없는 마음',
          '어리석음이 있는 마음',
          '탐욕이 없는 마음',
          '성냄이 없는 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'vīta(떠난) + moha(어리석음) = 어리석음이 떠난/없는 마음',
          tip: 'vīta-는 "~이 떠난, 없는"이란 접두사. sa-와 반대입니다.',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "saṅkhittaṃ cittaṃ"의 뜻은?',
        options: [
          '수축된(위축된) 마음',
          '산란한 마음',
          '집중된 마음',
          '해탈한 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'saṅkhittaṃ은 "수축된, 위축된, 움츠린"이란 뜻입니다.',
          tip: 'saṅkhittaṃ(수축) ↔ vikkhittaṃ(산란)',
        },
      },
      {
        type: 'quiz',
        question: '"vikkhittaṃ cittaṃ"의 뜻은?',
        options: [
          '산란한(흩어진) 마음',
          '수축된 마음',
          '집중된 마음',
          '해탈한 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'vikkhittaṃ은 "산란한, 흩어진"이란 뜻입니다.',
          detail: '해태(thīna)로 위축되거나, 들뜸(uddhacca)으로 산란해진 상태를 관찰합니다.',
        },
      },
      {
        type: 'quiz',
        question: '오개 중 "kāmacchanda"의 뜻은?',
        options: [
          '감각적 욕망',
          '악의/성냄',
          '해태와 혼침',
          '의심',
        ],
        answer: 0,
        explanation: {
          correct: 'kāma(감각적 쾌락) + chanda(욕망, 의욕) = 감각적 욕망',
          detail: '오개의 첫 번째 장애입니다.',
        },
      },
      {
        type: 'quiz',
        question: '오개 중 "byāpāda"의 뜻은?',
        options: [
          '악의/성냄',
          '감각적 욕망',
          '해태와 혼침',
          '들뜸과 후회',
        ],
        answer: 0,
        explanation: {
          correct: 'byāpāda는 "악의, 적의, 성냄"을 뜻하며 오개의 두 번째입니다.',
          tip: 'vi(잘못) + āpāda(향함) → 해치려는 마음',
        },
      },
      {
        type: 'quiz',
        question: '오개 중 "thīnamiddha"의 뜻은?',
        options: [
          '해태와 혼침(나태함과 졸림)',
          '감각적 욕망',
          '악의',
          '의심',
        ],
        answer: 0,
        explanation: {
          correct: 'thīna(해태, 나태) + middha(혼침, 졸림) = 마음이 처지고 졸리는 상태',
          detail: '오개의 세 번째. 에너지가 부족한 상태입니다.',
        },
      },
      {
        type: 'quiz',
        question: '칠각지에서 "vīriya"의 뜻은?',
        options: [
          '정진(노력)',
          '알아차림',
          '기쁨',
          '평온',
        ],
        answer: 0,
        explanation: {
          correct: 'vīriya는 "정진, 노력, 에너지"를 뜻하며 칠각지의 세 번째입니다.',
          tip: '칠각지 순서: sati → dhammavicaya → vīriya → pīti → passaddhi → samādhi → upekkhā',
        },
      },
      {
        type: 'quiz',
        question: '칠각지에서 "pīti"의 뜻은?',
        options: [
          '기쁨(희열)',
          '정진',
          '고요함',
          '집중',
        ],
        answer: 0,
        explanation: {
          correct: 'pīti는 "기쁨, 희열"을 뜻하며 칠각지의 네 번째입니다.',
          detail: '수행이 진전될 때 자연스럽게 일어나는 기쁨입니다.',
        },
      },
      {
        type: 'quiz',
        question: '사념처경에서 "sammādiṭṭhi"는 무엇에 대한 앎으로 정의됩니까?',
        options: [
          '사성제(고·집·멸·도)에 대한 앎',
          '오온에 대한 앎',
          '12연기에 대한 앎',
          '6입처에 대한 앎',
        ],
        answer: 0,
        explanation: {
          correct: '사념처경의 법념처에서 sammādiṭṭhi를 "사성제에 대한 지혜"로 정의합니다.',
          detail: '바른 견해 = 괴로움·원인·소멸·길에 대한 바른 이해',
        },
      },
      {
        type: 'quiz',
        question: '"sammāvācā"가 삼가는 네 가지는?',
        options: [
          '거짓말, 이간질, 거친 말, 쓸데없는 잡담',
          '탐욕, 성냄, 어리석음, 자만',
          '살생, 도둑질, 음행, 거짓말',
          '감각적 욕망, 악의, 혼침, 들뜸',
        ],
        answer: 0,
        explanation: {
          correct: 'musāvādā(거짓말), pisuṇāya vācāya(이간질), pharusāya vācāya(거친 말), samphappalāpā(잡담)',
          tip: '네 가지 언어적 악행을 삼가는 것이 바른 말입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammākammanto"가 삼가는 세 가지는?',
        options: [
          '살생, 도둑질(주지 않은 것 취함), 음행',
          '거짓말, 이간질, 거친 말',
          '탐욕, 성냄, 어리석음',
          '감각적 욕망, 악의, 의심',
        ],
        answer: 0,
        explanation: {
          correct: 'pāṇātipātā(살생), adinnādānā(도둑질), kāmesu micchācārā(음행)',
          detail: '세 가지 신체적 악행을 삼가는 것이 바른 행위입니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sammāsamādhi"의 정의에서 제1선정(paṭhamaṃ jhānaṃ)의 특징은?',
        options: [
          'vitakka(일으킨 생각)와 vicāra(지속적 고찰)가 있고 pīti(기쁨)와 sukha(즐거움)가 있다',
          'vitakka와 vicāra가 사라지고 pīti와 sukha만 있다',
          'pīti가 사라지고 upekkhā(평온)와 sukha만 있다',
          'sukha도 사라지고 upekkhā만 있다',
        ],
        answer: 0,
        explanation: {
          correct: '초선: 감각 욕구에서 벗어나 vitakka(심), vicāra(사)를 동반한 pīti(희)와 sukha(락)가 있습니다.',
          detail: '2선: vitakka·vicāra 소멸 / 3선: pīti 소멸 / 4선: sukha 소멸, upekkhā만 남음',
        },
      },
      {
        type: 'quiz',
        question: '제4선정(catutthaṃ jhānaṃ)의 핵심 특징은?',
        options: [
          'upekkhā(평온)와 sati(알아차림)의 청정, 괴로움도 즐거움도 없음',
          'pīti(기쁨)와 sukha(즐거움)가 있음',
          'vitakka(일으킨 생각)와 vicāra(지속적 고찰)가 있음',
          '모든 인식이 사라짐',
        ],
        answer: 0,
        explanation: {
          correct: '제4선: adukkhamasukha(괴롭지도 즐겁지도 않음) + upekkhāsatipārisuddhi(평온과 알아차림의 청정)',
          tip: '4선정으로 갈수록: 거친 요소(심→사→희→락)가 하나씩 사라집니다.',
        },
      },
      {
        type: 'quiz',
        question: '사념처경의 수행 과보에서 최단 기간은?',
        options: [
          '7일',
          '7개월',
          '1년',
          '7년',
        ],
        answer: 0,
        explanation: {
          correct: '사념처를 바르게 수행하면 최장 7년, 최단 7일 만에 과보를 얻을 수 있다고 합니다.',
          detail: '과보: 현생에서 아라한과 또는 남은 집착이 있으면 불환과(anāgāmi)',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Adukkhamasukhaṃ vā vedanaṃ vediyamāno ___ vedanaṃ vediyāmīti pajānāti',
        translation: '괴롭지도 즐겁지도 않은 느낌을 느끼면서 "~느낌을 느낀다"고 분명히 안다',
        blank: 'adukkhamasukhaṃ',
        options: ['adukkhamasukhaṃ', 'sukhaṃ', 'dukkhaṃ', 'nirāmisaṃ'],
        answer: 0,
        explanation: {
          correct: '중립적 느낌(adukkhamasukha)에 대한 알아차림 정형문입니다.',
          tip: 'a-dukkha-m-a-sukha = 괴롭지도(a-dukkha) 즐겁지도(a-sukha) 않은',
        },
      },

      // ── 확장: 수념처 6종 느낌 ──
      {
        type: 'quiz',
        question: '수념처에서 "sāmisaṃ dukkhaṃ vedanaṃ"의 뜻은?',
        options: [
          '세간적인(물질적) 괴로운 느낌',
          '출세간적인 괴로운 느낌',
          '세간적인 즐거운 느낌',
          '출세간적인 즐거운 느낌',
        ],
        answer: 0,
        explanation: {
          correct: 'sāmisa(세간적) + dukkha(괴로운) + vedanā(느낌) = 감각 대상에서 오는 괴로움',
          detail: '예: 좋아하는 음식을 먹지 못할 때의 괴로움',
        },
      },
      {
        type: 'quiz',
        question: '수념처에서 "nirāmisaṃ dukkhaṃ vedanaṃ"의 뜻은?',
        options: [
          '출세간적인(비물질적) 괴로운 느낌',
          '세간적인 괴로운 느낌',
          '출세간적인 즐거운 느낌',
          '중립적 느낌',
        ],
        answer: 0,
        explanation: {
          correct: 'nirāmisa(출세간적) + dukkha(괴로운) + vedanā(느낌)',
          detail: '예: 아직 깨닫지 못했다는 수행자의 안타까움',
        },
      },
      {
        type: 'quiz',
        question: '수념처에서 "sāmisaṃ adukkhamasukhaṃ vedanaṃ"의 뜻은?',
        options: [
          '세간적인 중립적 느낌',
          '출세간적인 중립적 느낌',
          '세간적인 즐거운 느낌',
          '세간적인 괴로운 느낌',
        ],
        answer: 0,
        explanation: {
          correct: 'sāmisa(세간적) + adukkhamasukha(괴롭지도 즐겁지도 않은) = 세간적 중립 느낌',
          detail: '6종 느낌: 세간적(3) + 출세간적(3) × 즐거움·괴로움·중립',
        },
      },
      {
        type: 'quiz',
        question: '수념처에서 관찰하는 느낌은 총 몇 종류입니까?',
        options: [
          '6종 (세간적·출세간적 × 즐거움·괴로움·중립)',
          '3종 (즐거움·괴로움·중립)',
          '9종',
          '12종',
        ],
        answer: 0,
        explanation: {
          correct: '기본 3종(sukha, dukkha, adukkhamasukha) × 2(sāmisa, nirāmisa) = 6종입니다.',
          detail: '기본형 3종 + 세간/출세간 구분 = 총 6가지 느낌을 관찰합니다.',
        },
      },

      // ── 확장: 심념처 16상태 (8쌍) ──
      {
        type: 'quiz',
        question: '심념처에서 "mahaggathaṃ cittaṃ"의 뜻은?',
        options: [
          '넓어진(고양된) 마음',
          '좁아진 마음',
          '해탈한 마음',
          '해탈하지 않은 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'mahaggata(넓어진, 고양된) = mahā(큰) + gata(간) = 크게 된 마음',
          detail: '선정에 든 마음을 뜻합니다. 반대: amahaggata(고양되지 않은)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "amahaggathaṃ cittaṃ"의 뜻은?',
        options: [
          '고양되지 않은(좁은) 마음',
          '고양된(넓은) 마음',
          '해탈한 마음',
          '집중된 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'a(아닌) + mahaggata(고양된) = 선정에 들지 않은 보통 마음',
          tip: 'mahaggata(고양) ↔ amahaggata(미고양)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "sauttaraṃ cittaṃ"의 뜻은?',
        options: [
          '더 뛰어난 것이 있는(아직 위가 있는) 마음',
          '더 뛰어난 것이 없는(최상의) 마음',
          '집중된 마음',
          '산란한 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'sa(있는) + uttara(위, 더 나은) = 아직 위가 있는 마음, 더 발전 가능한 마음',
          detail: 'sauttara(위가 있는) ↔ anuttara(위 없는, 최상의)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "anuttaraṃ cittaṃ"의 뜻은?',
        options: [
          '위가 없는(최상의) 마음',
          '아직 위가 있는 마음',
          '집중되지 않은 마음',
          '해탈하지 않은 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'an(없는) + uttara(위) = 최상의, 더 이상 위가 없는 마음',
          tip: 'anuttara(아눗따라) = "위 없는" → 최상, 최고의',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "samāhitaṃ cittaṃ"의 뜻은?',
        options: [
          '집중된(삼매에 든) 마음',
          '산란한 마음',
          '탐욕 있는 마음',
          '해탈한 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'samāhita(집중된) = samādhi(삼매)의 과거분사. 삼매에 든 마음입니다.',
          tip: 'samāhita(집중) ↔ asamāhita(비집중)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "asamāhitaṃ cittaṃ"의 뜻은?',
        options: [
          '집중되지 않은(삼매에 들지 않은) 마음',
          '집중된 마음',
          '해탈한 마음',
          '고양된 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'a(아닌) + samāhita(집중된) = 삼매에 들지 않은 마음',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "vimuttaṃ cittaṃ"의 뜻은?',
        options: [
          '해탈한(풀려난) 마음',
          '해탈하지 않은 마음',
          '집중된 마음',
          '산란한 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'vimutta(해탈한) = vi(떠남) + mutta(풀린) = 번뇌에서 풀려난 마음',
          tip: 'vimutta(해탈) ↔ avimutta(미해탈)',
        },
      },
      {
        type: 'quiz',
        question: '심념처에서 "avimuttaṃ cittaṃ"의 뜻은?',
        options: [
          '해탈하지 않은 마음',
          '해탈한 마음',
          '집중된 마음',
          '고양된 마음',
        ],
        answer: 0,
        explanation: {
          correct: 'a(아닌) + vimutta(해탈한) = 아직 해탈하지 않은 마음',
          detail: '심념처 8쌍 16상태: 탐/비탐, 진/비진, 치/비치, 수축/산란, 고양/비고양, 유상/무상, 집중/비집중, 해탈/비해탈',
        },
      },

      // ── 확장: 오개 5단계 ──
      {
        type: 'quiz',
        question: '오개 관찰의 5단계에서 첫 번째는?',
        options: [
          '"나에게 감각적 욕망이 있다"고 안다',
          '"나에게 감각적 욕망이 없다"고 안다',
          '"아직 생기지 않은 감각적 욕망이 생겨남을 안다"',
          '"생긴 감각적 욕망의 버림을 안다"',
        ],
        answer: 0,
        explanation: {
          correct: '1단계: 있으면 "있다"고 앎. santaṃ vā ajjhattaṃ kāmacchandaṃ "atthi me ajjhattaṃ kāmacchando"ti pajānāti',
          detail: '5단계: (1)있음 앎 (2)없음 앎 (3)생겨남 앎 (4)버림 앎 (5)미래에 안 생김 앎',
        },
      },
      {
        type: 'quiz',
        question: '오개 관찰에서 "yathā ca anuppannassa kāmacchandassa uppādo hoti taṃ pajānāti"의 뜻은?',
        options: [
          '아직 생기지 않은 감각적 욕망이 어떻게 생기는지 안다',
          '이미 생긴 감각적 욕망을 어떻게 버리는지 안다',
          '감각적 욕망이 있다고 안다',
          '감각적 욕망이 없다고 안다',
        ],
        answer: 0,
        explanation: {
          correct: 'anuppanna(아직 안 생긴) + kāmacchanda(감각적 욕망) + uppāda(생겨남) = 3단계',
          detail: '장애가 생기는 조건을 아는 것이 중요합니다.',
        },
      },
      {
        type: 'quiz',
        question: '오개 관찰에서 최종 5단계 "āyatiṃ anuppādāya"의 뜻은?',
        options: [
          '미래에 생기지 않도록',
          '현재 있는 것을 버리도록',
          '과거에 있었던 것을 기억하도록',
          '다른 사람의 장애를 알도록',
        ],
        answer: 0,
        explanation: {
          correct: 'āyatiṃ(미래에) + anuppādāya(생기지 않기 위해) = 미래에 장애가 재발하지 않도록 함',
          detail: '완전한 관찰: 있음→없음→생겨남→버림→미래안생김의 5단계를 모두 알아차립니다.',
        },
      },

      // ── 확장: 칠각지 7개 정의 ──
      {
        type: 'quiz',
        question: '칠각지의 올바른 순서는?',
        options: [
          'sati → dhammavicaya → vīriya → pīti → passaddhi → samādhi → upekkhā',
          'samādhi → sati → pīti → vīriya → dhammavicaya → passaddhi → upekkhā',
          'upekkhā → passaddhi → samādhi → pīti → vīriya → dhammavicaya → sati',
          'vīriya → pīti → sati → samādhi → upekkhā → passaddhi → dhammavicaya',
        ],
        answer: 0,
        explanation: {
          correct: '염(sati) → 택법(dhammavicaya) → 정진(vīriya) → 희(pīti) → 경안(passaddhi) → 정(samādhi) → 사(upekkhā)',
          tip: '"염택정희경정사"로 외웁니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Satisambojjhaṅga → ___ → vīriyasambojjhaṅga',
        translation: '알아차림의 깨달음 요소 → ? → 정진의 깨달음 요소',
        blank: 'dhammavicayasambojjhaṅga',
        options: ['dhammavicayasambojjhaṅga', 'pītisambojjhaṅga', 'passaddhisambojjhaṅga', 'samādhisambojjhaṅga'],
        answer: 0,
        explanation: {
          correct: '택법(dhammavicaya)은 칠각지의 두 번째로, 알아차림과 정진 사이에 옵니다.',
          detail: 'dhamma(법) + vicaya(탐구) + sam + bojjhaṅga(깨달음 요소)',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Pītisambojjhaṅga → ___ → samādhisambojjhaṅga',
        translation: '기쁨의 깨달음 요소 → ? → 집중의 깨달음 요소',
        blank: 'passaddhisambojjhaṅga',
        options: ['passaddhisambojjhaṅga', 'vīriyasambojjhaṅga', 'upekkhasambojjhaṅga', 'satisambojjhaṅga'],
        answer: 0,
        explanation: {
          correct: '경안(passaddhi)은 기쁨과 집중 사이, 칠각지의 다섯 번째입니다.',
          detail: '기쁨(pīti) 다음에 고요함(passaddhi)이 오고, 이것이 집중(samādhi)으로 이어집니다.',
        },
      },

      // ── 확장: 사성제 상세 ──
      {
        type: 'quiz',
        question: '사념처경의 고성제에서 "sokaparidevadukkhadomanassupāyāsā"의 뜻은?',
        options: [
          '슬픔, 비탄, 고통, 근심, 절망',
          '기쁨, 행복, 평온, 희열, 안락',
          '탐욕, 성냄, 어리석음, 자만, 의심',
          '계, 정, 혜, 해탈, 해탈지견',
        ],
        answer: 0,
        explanation: {
          correct: 'soka(슬픔), parideva(비탄), dukkha(고통), domanassa(근심), upāyāsa(절망) — 고제의 정신적 괴로움 5가지',
          detail: '신체적: 태어남·늙음·병·죽음 / 정신적: 슬픔·비탄·고통·근심·절망',
        },
      },
      {
        type: 'quiz',
        question: '멸성제의 동의어 중 "virāgo"의 뜻은?',
        options: [
          '탐욕의 떠남(이욕)',
          '소멸',
          '버림',
          '보내줌',
        ],
        answer: 0,
        explanation: {
          correct: 'virāga(이욕) = vi(떠남) + rāga(탐욕) = 탐욕에서 벗어남',
          detail: '멸제 동의어: nirodha(소멸), virāga(이욕), cāga(버림), paṭinissagga(포기), mutti(해방), anālaya(집착 없음)',
        },
      },
      {
        type: 'quiz',
        question: '멸성제의 동의어 중 "cāgo"의 뜻은?',
        options: [
          '버림, 포기',
          '탐욕',
          '생겨남',
          '집착',
        ],
        answer: 0,
        explanation: {
          correct: 'cāga는 "버림, 포기, 보시"를 뜻합니다. 갈애를 완전히 버리는 것.',
          tip: 'cāga는 일상에서는 "보시, 관대함"의 뜻으로도 쓰입니다.',
        },
      },
      {
        type: 'quiz',
        question: '멸성제의 동의어 중 "paṭinissaggo"의 뜻은?',
        options: [
          '놓아버림, 포기',
          '잡음, 취착',
          '생겨남',
          '즐김',
        ],
        answer: 0,
        explanation: {
          correct: 'paṭinissagga = paṭi(돌려) + ni(아래로) + sagga(보냄) = 놓아버림, 포기',
          detail: '멸성제는 갈애를 완전히 놓아버리는 것입니다.',
        },
      },
      {
        type: 'quiz',
        question: '집성제에서 3종 갈애(taṇhā)의 순서는?',
        options: [
          'kāmataṇhā → bhavataṇhā → vibhavataṇhā',
          'bhavataṇhā → kāmataṇhā → vibhavataṇhā',
          'vibhavataṇhā → bhavataṇhā → kāmataṇhā',
          'kāmataṇhā → vibhavataṇhā → bhavataṇhā',
        ],
        answer: 0,
        explanation: {
          correct: '욕애(kāmataṇhā) → 유애(bhavataṇhā) → 무유애(vibhavataṇhā)',
          detail: '감각적 쾌락에 대한 갈애, 존재에 대한 갈애, 비존재에 대한 갈애',
        },
      },

      // ── 확장: 팔정도 상세 정의 ──
      {
        type: 'quiz',
        question: '사념처경에서 "sammāvācā"의 상세 정의에 포함되는 "musāvādā veramaṇī"는?',
        options: [
          '거짓말을 삼감',
          '이간질을 삼감',
          '거친 말을 삼감',
          '잡담을 삼감',
        ],
        answer: 0,
        explanation: {
          correct: 'musāvāda(거짓말) + veramaṇī(삼감) = 거짓말 삼가기',
          detail: '정어의 4요소: musāvādā(거짓말), pisuṇāya vācāya(이간질), pharusāya vācāya(거친 말), samphappalāpā(잡담) 삼감',
        },
      },
      {
        type: 'quiz',
        question: '"pisuṇāya vācāya veramaṇī"의 뜻은?',
        options: [
          '이간질하는 말을 삼감',
          '거짓말을 삼감',
          '거친 말을 삼감',
          '쓸데없는 잡담을 삼감',
        ],
        answer: 0,
        explanation: {
          correct: 'pisuṇā vācā(이간질하는 말) + veramaṇī(삼감) = 이간질 삼가기',
          tip: 'pisuṇa = "중상하는, 이간시키는"',
        },
      },
      {
        type: 'quiz',
        question: '"pharusāya vācāya veramaṇī"의 뜻은?',
        options: [
          '거친(욕설, 험한) 말을 삼감',
          '거짓말을 삼감',
          '이간질을 삼감',
          '잡담을 삼감',
        ],
        answer: 0,
        explanation: {
          correct: 'pharusa vācā(거친 말, 욕설) + veramaṇī(삼감)',
          tip: 'pharusa = "거친, 험한, 가혹한"',
        },
      },
      {
        type: 'quiz',
        question: '"samphappalāpā veramaṇī"의 뜻은?',
        options: [
          '쓸데없는 잡담을 삼감',
          '거짓말을 삼감',
          '이간질을 삼감',
          '거친 말을 삼감',
        ],
        answer: 0,
        explanation: {
          correct: 'samphappalāpa(쓸데없는 잡담, 허담) + veramaṇī(삼감)',
          detail: '정어(sammāvācā)의 네 번째이자 마지막 요소입니다.',
        },
      },

      // ── 확장: 4선정 특징 ──
      {
        type: 'quiz',
        question: '제2선정(dutiyaṃ jhānaṃ)의 특징은?',
        options: [
          'vitakka·vicāra가 사라지고 ajjhattaṃ sampasādana(내적 고요)과 pīti·sukha가 있다',
          'vitakka·vicāra가 있고 pīti·sukha가 있다',
          'pīti가 사라지고 sukha·upekkhā가 있다',
          'sukha도 사라지고 upekkhā만 있다',
        ],
        answer: 0,
        explanation: {
          correct: '2선: vitakka·vicāra(심·사)가 멈추고, 내적 고요함(sampasādana)과 마음의 통일(ekodibhāva)이 있으며 pīti·sukha가 남음',
          tip: '초선→2선: 거친 사유(vitakka·vicāra)가 사라짐',
        },
      },
      {
        type: 'quiz',
        question: '제3선정(tatiyaṃ jhānaṃ)의 특징은?',
        options: [
          'pīti(기쁨)가 사라지고 upekkhā(평온)와 sukha(즐거움)만 남아 sati(알아차림)로 머문다',
          'vitakka·vicāra가 있고 pīti·sukha가 있다',
          'vitakka·vicāra가 사라지고 pīti·sukha만 있다',
          'sukha도 사라지고 upekkhā만 있다',
        ],
        answer: 0,
        explanation: {
          correct: '3선: pīti(희열)가 떠나고, 평온(upekkhā)에 머물며 즐거움(sukha)을 몸으로 경험',
          detail: '"sukhañca kāyena paṭisaṃvedeti(즐거움을 몸으로 경험한다)" — 3선의 특징적 구절',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Vitakkavicārānaṃ vūpasamā ajjhattaṃ ___ cetaso ekodibhāvaṃ',
        translation: '심·사가 가라앉아 내적으로 고요해지고 마음이 하나됨',
        blank: 'sampasādanaṃ',
        options: ['sampasādanaṃ', 'uddhaccaṃ', 'pītiṃ', 'dukkhaṃ'],
        answer: 0,
        explanation: {
          correct: 'sampasādana(고요해짐, 맑아짐) — 2선정의 핵심 특징입니다.',
          detail: 'cetaso ekodibhāva = 마음(cetas)의 하나됨(ekodibhāva) = 삼매의 통일',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Sukhassa ca pahānā dukkhassa ca pahānā ___ somanassadomanassānaṃ atthaṅgamā',
        translation: '즐거움과 괴로움을 버리고, 이전에 기쁨과 슬픔이 사라지므로',
        blank: 'pubbeva',
        options: ['pubbeva', 'pacchā', 'idāni', 'sabbadā'],
        answer: 0,
        explanation: {
          correct: 'pubbeva(이전에, 앞서) — 4선정에서 기쁨과 슬픔은 이미 이전 선정에서 사라졌음을 나타냄',
          detail: '4선: 즐거움(sukha)까지 버리고, 괴롭지도 즐겁지도 않은 upekkhāsatipārisuddhi만 남음',
        },
      },

      // ── 확장: 오개 나머지 ──
      {
        type: 'fill-blank',
        sentence: 'Santaṃ vā ajjhattaṃ ___ "atthi me ajjhattaṃ byāpādo"ti pajānāti',
        translation: '안으로 악의가 있으면 "나에게 안으로 악의가 있다"고 분명히 안다',
        blank: 'byāpādaṃ',
        options: ['byāpādaṃ', 'kāmacchandaṃ', 'thīnamiddhaṃ', 'vicikicchaṃ'],
        answer: 0,
        explanation: {
          correct: 'byāpāda(악의, 적의) — 오개의 두 번째 장애에 대한 정형문입니다.',
          detail: '같은 5단계 정형문이 5개 장애 각각에 적용됩니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Santaṃ vā ajjhattaṃ ___ "atthi me ajjhattaṃ uddhaccakukkuccaṃ"ti pajānāti',
        translation: '안으로 들뜸과 후회가 있으면 "나에게 안으로 들뜸과 후회가 있다"고 안다',
        blank: 'uddhaccakukkuccaṃ',
        options: ['uddhaccakukkuccaṃ', 'byāpādaṃ', 'kāmacchandaṃ', 'vicikicchaṃ'],
        answer: 0,
        explanation: {
          correct: 'uddhacca(들뜸) + kukkucca(후회) — 오개의 네 번째 장애',
          tip: '마음이 이리저리 들뜨고(uddhacca) 과거의 잘못에 대해 후회하는(kukkucca) 상태',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Santaṃ vā ajjhattaṃ ___ "atthi me ajjhattaṃ vicikicchā"ti pajānāti',
        translation: '안으로 의심이 있으면 "나에게 안으로 의심이 있다"고 안다',
        blank: 'vicikicchaṃ',
        options: ['vicikicchaṃ', 'byāpādaṃ', 'kāmacchandaṃ', 'thīnamiddhaṃ'],
        answer: 0,
        explanation: {
          correct: 'vicikicchā(의심, 회의) — 오개의 다섯 번째이자 마지막 장애',
          detail: '붓다·법·승가·수행에 대한 의심으로, 수행의 진전을 막는 장애입니다.',
        },
      },

      // ── 확장: 사념처경 과보/결론 ──
      {
        type: 'quiz',
        question: '사념처경에서 "ekāyano ayaṃ bhikkhave maggo"의 뜻은?',
        options: [
          '"비구들이여, 이것은 유일한 길이다"',
          '"비구들이여, 이것은 여러 길 중 하나이다"',
          '"비구들이여, 이것은 쉬운 길이다"',
          '"비구들이여, 이것은 어려운 길이다"',
        ],
        answer: 0,
        explanation: {
          correct: 'ekāyana(유일한, 하나로 가는) + magga(길) = 유일한 길',
          detail: '사념처 수행이 정화·슬픔 극복·열반 실현의 "유일한 길"이라고 선언합니다.',
        },
      },
      {
        type: 'quiz',
        question: '사념처경에서 수행의 과보는?',
        options: [
          '아라한과(arahatta) 또는 불환과(anāgāmitā)',
          '수다원과만',
          '사다함과만',
          '세간적 행복만',
        ],
        answer: 0,
        explanation: {
          correct: '"diṭṭheva dhamme aññā(현생에서 아라한과), sati vā upādisese anāgāmitā(남은 집착이 있으면 불환과)"',
          detail: '최장 7년, 최단 7일 만에 이 과보를 얻을 수 있다고 합니다.',
        },
      },
      {
        type: 'quiz',
        question: '"sattannaṃ vassānaṃ"에서 "satta"와 "vassānaṃ"의 뜻은?',
        options: [
          '7과 년(해)의 — 7년',
          '7과 달의 — 7개월',
          '7과 일의 — 7일',
          '3과 년의 — 3년',
        ],
        answer: 0,
        explanation: {
          correct: 'satta(7) + vassa(우기, 해) + naṃ(~의, 속격) = 7년의',
          detail: '사념처경에서 최장 수행 기간입니다. 최단은 "sattāhaṃ(7일)"입니다.',
        },
      },
      {
        type: 'fill-blank',
        sentence: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ ___ sokaparidevānaṃ samatikkamāya',
        translation: '비구들이여, 이것은 중생들의 정화, 슬픔과 비탄의 극복을 위한 유일한 길이다',
        blank: 'visuddhiyā',
        options: ['visuddhiyā', 'dukkhāya', 'sukhāya', 'maggāya'],
        answer: 0,
        explanation: {
          correct: 'visuddhi(정화, 청정) + yā(위해) = 정화를 위해',
          detail: '사념처경 서두의 핵심 선언문입니다.',
        },
      },
    ],
  },
]
