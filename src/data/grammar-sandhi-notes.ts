// 경전 본문과 문법 설명 사이의 불일치/변형 사례 보충 설명
// grammar-steps.ts에서 각 경전별 배열에 spread하여 사용
import type { TeachGrammarStep } from './types'

// ── 행복경 본문 변형 보충 ──

export const MANGALA_SANDHI_NOTES: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '본문 변형: 비음(ṃ) 연성법 상세',
    description:
      '행복경 본문에서 -ṃ으로 끝나는 단어 뒤에 자음이 오면 비음이 변합니다. ' +
      'ṃ+c→ñc, ṃ+모음→m+모음, ṃ+iti→nti 등 규칙적 변형입니다.',
    examples: [
      { pali: 'paṇḍitānañca', breakdown: 'paṇḍitānaṃ + ca → ṃ+c = ñc', meaning: '현명한 이들의 + 그리고' },
      { pali: 'Dānañca', breakdown: 'Dānaṃ + ca → ṃ+c = ñc', meaning: '보시 + 그리고' },
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgalaṃ + uttamaṃ → ṃ+u = m+u', meaning: '최상의 행복을' },
      { pali: 'maṅgalamuttamanti', breakdown: 'maṅgalaṃ + uttamaṃ + iti → ṃ+i = nti', meaning: '최상의 행복이니라' },
    ],
    table: {
      label: 'ṃ 뒤 자음별 변형 규칙',
      rows: [
        { case: 'ṃ + c/ch', ending: 'ñc/ñch', example: 'Dānañca', meaning: 'Dānaṃ+ca' },
        { case: 'ṃ + 모음', ending: 'm + 모음', example: 'maṅgalamuttamaṃ', meaning: 'maṅgalaṃ+uttamaṃ' },
        { case: 'ṃ + iti', ending: 'nti', example: 'maṅgalamuttamanti', meaning: '~uttamaṃ+iti' },
        { case: 'ṃ + y', ending: 'ñy→ññ', example: 'brahmacariyañca', meaning: 'brahmacariyaṃ+ca' },
      ],
    },
    tip: 'ñca가 보이면 원형은 항상 -ṃ + ca입니다. 본문에서 가장 자주 만나는 연성법입니다.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 관계대명사와 지시대명사',
    description:
      '행복경 본문에는 관계대명사(yo/yā/yaṃ)와 지시대명사(so/sā/taṃ/etaṃ)가 나옵니다. ' +
      '문법에서 기초 격변화를 배웠지만, 대명사는 별도의 불규칙 변화를 합니다.',
    examples: [
      { pali: 'yā vācā', breakdown: 'yā(관계대명사 여성 주격) + vācā(말)', meaning: '어떤 말이든' },
      { pali: 'etaṃ', breakdown: '지시대명사 중성 단수 주격', meaning: '이것이 (=이것은)' },
      { pali: 'taṃ tesaṃ', breakdown: 'taṃ(그것이) + tesaṃ(그들에게)', meaning: '그것이 그들에게' },
      { pali: 'yassa na kampati', breakdown: 'yassa(관계대명사 속격 "~의")', meaning: '~인 자의 (마음이) 흔들리지 않는' },
    ],
    tip: '행복경에서 etaṃ maṅgalamuttamaṃ("이것이 최상의 행복")은 10번 반복됩니다. etaṃ은 꼭 기억하세요.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: bhagavā — ant-어간 불규칙 주격',
    description:
      '문법 테이블에서 배운 a-어간(-o 주격)과 달리, bhagavā(세존)는 ant-어간 명사로 ' +
      '주격이 -ā, 속격이 -ato, 구격이 -atā 형태입니다. bhagavant에서 ant가 탈락합니다.',
    examples: [
      { pali: 'bhagavā', breakdown: 'bhagavant + ā (주격: ant 탈락)', meaning: '세존께서' },
      { pali: 'bhagavato', breakdown: 'bhagavant + o (속격)', meaning: '세존의' },
      { pali: 'satimā', breakdown: 'satimant + ā (주격: ant→ā)', meaning: '마음챙기는 (소유형용사)' },
    ],
    table: {
      label: 'ant-어간 vs a-어간 주격 비교',
      rows: [
        { case: 'a-어간 주격', ending: '-o', example: 'dhammo', meaning: '법이' },
        { case: 'ant-어간 주격', ending: '-ā', example: 'bhagavā', meaning: '세존께서' },
        { case: 'mant-어간 주격', ending: '-ā', example: 'satimā', meaning: '새김 있는' },
      ],
    },
    tip: '-vā, -mā로 끝나는 주격은 ant/mant-어간입니다. 행복경·전법륜경·무아경 모두에 나옵니다.',
  },
]

// ── 전법륜경 본문 변형 보충 ──

export const DHAMMACAKKA_SANDHI_NOTES: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '본문 변형: 미래수동분사 (-tabba)',
    description:
      '삼전십이행상에서 사성제 각각의 "해야 할 일"을 미래수동분사(-tabba)로 표현합니다. ' +
      '이 형태는 문법의 동사 현재형 테이블에는 없지만, 전법륜경의 핵심입니다.',
    examples: [
      { pali: 'sevitabbā', breakdown: 'sevati + tabba + ā (남성 복수 주격)', meaning: '가까이해야 할' },
      { pali: 'pariññeyyaṃ', breakdown: 'parijānāti + eyya + ṃ (미래수동분사)', meaning: '두루 알아야 할' },
      { pali: 'pahātabbaṃ', breakdown: 'pajahati + tabba + ṃ', meaning: '버려야 할' },
      { pali: 'bhāvetabbaṃ', breakdown: 'bhāveti + tabba + ṃ', meaning: '닦아야 할' },
      { pali: 'sacchikātabbaṃ', breakdown: 'sacchikaroti + tabba + ṃ', meaning: '실현해야 할' },
    ],
    table: {
      label: '삼전십이행상의 미래수동분사 정리',
      rows: [
        { case: '고제(苦)', ending: 'pariññeyyaṃ', example: '두루 알아야 할', meaning: '알아야(pariññā)' },
        { case: '집제(集)', ending: 'pahātabbaṃ', example: '버려야 할', meaning: '버려야(pahāna)' },
        { case: '멸제(滅)', ending: 'sacchikātabbaṃ', example: '실현해야 할', meaning: '실현해야(sacchikiriyā)' },
        { case: '도제(道)', ending: 'bhāvetabbaṃ', example: '닦아야 할', meaning: '닦아야(bhāvanā)' },
      ],
    },
    tip: '-tabba가 보이면 "~해야 할"이라는 의무·당위입니다. 사성제의 4가지 작용(kicca)을 외우세요.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 불규칙 과거형 udapādi, paccaññāsiṃ',
    description:
      '전법륜경에 자주 반복되는 udapādi(생겨났다)와 paccaññāsiṃ(선언했다)는 ' +
      '일반 과거형 패턴(-esi, -i)과 다른 불규칙 과거형입니다.',
    examples: [
      { pali: 'udapādi', breakdown: 'ud + ā + pad → ud-a-pād-i (접두사 ud + 어근 pad)', meaning: '생겨났다/일어났다' },
      { pali: 'paccaññāsiṃ', breakdown: 'paṭi + ā + ñā + siṃ (1인칭 단수 과거)', meaning: '(나는) 선언했다' },
      { pali: 'abhisambuddho', breakdown: 'abhi + sam + budh + ta → 복합접두사 과거분사', meaning: '완전히 깨달은' },
      { pali: 'Idamavoca', breakdown: 'idaṃ + avoca (vacati의 불규칙 과거)', meaning: '이것을 말씀하셨다' },
    ],
    tip: 'udapādi는 삼전십이행상에서 20번 반복됩니다. "눈이 생겼다, 지혜가 생겼다..." 패턴을 통째로 기억하세요.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 다단어 축약/병합',
    description:
      '전법륜경에는 여러 단어가 하나로 합쳐진 축약 형태가 많습니다. ' +
      '원래 형태를 알아야 뜻을 파악할 수 있습니다.',
    examples: [
      { pali: 'seyyathidaṃ', breakdown: 'seyyathā + idaṃ ("이른바 이것은")', meaning: '이른바/곧' },
      { pali: 'yampicchaṃ', breakdown: 'yaṃ + pi + icchaṃ (3단어 축약)', meaning: '원하는 것을' },
      { pali: 'natthidāni', breakdown: 'natthi + idāni (na+atthi = natthi)', meaning: '이제 없다' },
      { pali: 'tāvāhaṃ', breakdown: 'tāva + ahaṃ (모음 합류)', meaning: '그때까지 나는' },
      { pali: 'athāhaṃ', breakdown: 'atha + ahaṃ (a+a → ā)', meaning: '그래서 나는' },
    ],
    tip: '긴 합성어가 보이면 "어디서 끊어야 하나?"를 생각하세요. iti, idaṃ, ahaṃ 등이 숨어 있는 경우가 많습니다.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 절대분사 (Absolutive)',
    description:
      '절대분사는 "~하고서/~하고 나서"라는 뜻으로, 주절 동사 이전의 행위를 나타냅니다. ' +
      '전법륜경에서 anupagamma, 행복경에서 katvāna가 대표적입니다.',
    examples: [
      { pali: 'anupagamma', breakdown: 'an + upa + gam + ya → "가까이하지 않고서"', meaning: '(두 극단에) 가까이하지 않고' },
      { pali: 'katvāna', breakdown: 'karoti → katvā/katvāna → "하고 나서"', meaning: '행하고서 (행복경)' },
      { pali: 'ābhujitvā', breakdown: 'ābhujati → ābhujitvā → "접고 나서"', meaning: '(가부좌를) 접고서 (사념처경)' },
      { pali: 'vineyya', breakdown: 'vineti → vineyya → "제거하고서"', meaning: '(탐욕·근심을) 제거하고서 (사념처경)' },
    ],
    table: {
      label: '절대분사 형성 패턴',
      rows: [
        { case: '-tvā / -tvāna', ending: '일반 어근', example: 'katvāna (karoti)', meaning: '하고서' },
        { case: '-ya', ending: '접두사 있는 어근', example: 'anupagamma (an+upa+gam)', meaning: '가까이하지 않고' },
        { case: '-eyya', ending: '사역/특수 어근', example: 'vineyya (vineti)', meaning: '제거하고서' },
      ],
    },
    tip: '절대분사는 영어의 "having done ~"과 같습니다. 주절 동사보다 먼저 일어난 행위입니다.',
  },
]

// ── 무아경 본문 변형 보충 ──

export const ANATTA_SANDHI_NOTES: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '본문 변형: 무아경의 연성 축약 총정리',
    description:
      '무아경에는 대명사·동사·부정사가 연성법으로 축약된 형태가 집중적으로 나옵니다. ' +
      '이 축약들을 풀어야 문장 구조를 이해할 수 있습니다.',
    examples: [
      { pali: 'nayidaṃ', breakdown: 'na + ayaṃ + idaṃ → na + ay-idaṃ', meaning: '이것은 ~않을 것이다' },
      { pali: 'esohamasmi', breakdown: 'eso + aham + asmi (3단어 축약)', meaning: '이것은 나이다' },
      { pali: 'nesohamasmi', breakdown: 'na + eso + aham + asmi', meaning: '이것은 내가 아니다' },
      { pali: 'netaṃ', breakdown: 'na + etaṃ', meaning: '이것은 ~아니다' },
      { pali: 'Tasmātiha', breakdown: 'tasmā + iha ("그러므로 여기서")', meaning: '그러므로 여기서' },
      { pali: 'ahosīti', breakdown: 'ahosī + iti', meaning: '되었다 + 라고' },
    ],
    tip: '무아경의 삼상 정형구 "netaṃ mama, nesohamasmi, na meso attā"는 3단어씩 분해하면 명쾌합니다.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 미래수동분사 daṭṭhabbaṃ과 11종 분류',
    description:
      '무아경 결론부에서 오온 각각을 11가지로 분류하고 daṭṭhabbaṃ(보아야 한다)으로 마무리합니다. ' +
      '이 11종 분류의 형용사들이 성(性)에 따라 어미가 변합니다.',
    examples: [
      { pali: 'daṭṭhabbaṃ', breakdown: 'dassati(보다) + tabba + ṃ (중성 미래수동분사)', meaning: '보아야 한다' },
      { pali: 'atītānāgatapaccuppannaṃ', breakdown: 'atīta + anāgata + paccuppanna (과거·미래·현재)', meaning: '과거·미래·현재의 (중성)' },
      { pali: 'ajjhattaṃ vā bahiddhā vā', breakdown: 'ajjhatta(안) + vā + bahiddhā(밖) + vā', meaning: '안이든 밖이든' },
    ],
    table: {
      label: '11종 분류의 성별 어미 변화 (중성 vs 여성)',
      rows: [
        { case: '중성(rūpa)', ending: '-aṃ', example: 'oḷārikaṃ / sukhumaṃ', meaning: '거친/미세한' },
        { case: '여성(vedanā)', ending: '-ā', example: 'oḷārikā / sukhumā', meaning: '거친/미세한' },
        { case: '남성 복수(saṅkhārā)', ending: '-ā / -e', example: 'oḷārikā / ye', meaning: '거친/~하는' },
      ],
    },
    tip: '같은 형용사도 수식하는 명사의 성에 따라 어미가 바뀝니다. rūpaṃ→oḷārikaṃ, vedanā→oḷārikā.',
  },
]

// ── 사념처경 본문 변형 보충 ──

export const SATIPATTHANA_SANDHI_NOTES: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '본문 변형: 사념처경 정형문(refrain) 구조',
    description:
      '사념처경의 각 관찰법 끝에는 동일한 정형문이 반복됩니다. ' +
      '이 정형문은 3부분으로 구성됩니다: ① 안/밖/안팎 ② 생/멸/생멸 ③ "있다"는 새김 확립.',
    examples: [
      { pali: 'ajjhattaṃ vā ... bahiddhā vā ...', breakdown: '안으로 또는 ... 밖으로 또는 ...', meaning: '안/밖 관찰 (부사+vā 택일)' },
      { pali: 'samudayadhammānupassī', breakdown: 'samudaya + dhamma + anupassin', meaning: '생겨남의 법칙을 관찰하는' },
      { pali: 'Atthi kāyoti vā panassa sati paccupaṭṭhitā hoti', breakdown: 'atthi(있다) + kāyo(몸)+iti + panassa(그에게) + sati(새김) + paccupaṭṭhitā(확립된) + hoti(있다)', meaning: '"몸이 있다"는 새김이 그에게 확립되어 있다' },
    ],
    table: {
      label: '정형문 3부분 구조',
      rows: [
        { case: '① 안/밖', ending: 'ajjhattaṃ/bahiddhā/ajjhattabahiddhā', example: '+ vā kāye kāyānupassī viharati', meaning: '안/밖/안팎으로 관찰' },
        { case: '② 생/멸', ending: 'samudaya-/vaya-/samudayavaya-', example: '+ dhammānupassī vā kāyasmiṃ viharati', meaning: '생/멸/생멸 관찰' },
        { case: '③ 새김 확립', ending: 'Atthi kāyoti...', example: '+ sati paccupaṭṭhitā hoti', meaning: '"있다"는 새김 확립' },
      ],
    },
    tip: '이 정형문은 신념처에서만 6번, 전체 사념처경에서 수십 번 반복됩니다. 구조를 외우면 독해 속도가 급상승합니다.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 사념처경의 절대분사와 축약',
    description:
      '사념처경에는 수행 동작을 연결하는 절대분사와 다양한 축약형이 나옵니다.',
    examples: [
      { pali: 'ābhujitvā', breakdown: 'ābhujati → ābhuj + itvā ("접고서")', meaning: '(가부좌를) 접고서' },
      { pali: 'paṇidhāya', breakdown: 'paṇidahati → paṇidhā + ya ("세우고서")', meaning: '(몸을) 세우고서' },
      { pali: 'upaṭṭhapetvā', breakdown: 'upaṭṭhapeti → upaṭṭhap + etvā', meaning: '(새김을) 확립하고서' },
      { pali: 'satova', breakdown: 'sato + eva ("마음챙기며 바로")', meaning: '마음챙기며' },
      { pali: 'panassa', breakdown: 'pana + assa ("그런데 그의/그에게")', meaning: '그런데 그에게' },
      { pali: 'ṭhitomhīti', breakdown: 'ṭhito + amhi + iti (3단어 연성)', meaning: '"서 있다"라고' },
    ],
    tip: '-tvā/-tvāna는 "~하고서", -ya는 접두사가 있는 어근의 절대분사입니다. 호흡·자세·분명한 앎 관찰에서 핵심 연결어입니다.',
  },
  {
    type: 'teach-grammar',
    title: '본문 변형: 처격의 다양한 형태',
    description:
      '사념처경에는 처격(-에서)이 특히 다양한 형태로 나옵니다. 어간 유형에 따라 처격 어미가 다릅니다.',
    examples: [
      { pali: 'kāye / kāyasmiṃ', breakdown: '남성 a-어간: -e (단축) / -asmiṃ (완전)', meaning: '몸에서' },
      { pali: 'vedanāsu', breakdown: '여성 ā-어간 복수: -āsu', meaning: '느낌들에서' },
      { pali: 'citte', breakdown: '중성 a-어간: -e', meaning: '마음에서' },
      { pali: 'dhammesu', breakdown: '남성 a-어간 복수: -esu', meaning: '법들에서' },
      { pali: 'Imasmiṃ veyyākaraṇasmiṃ', breakdown: '중성 a-어간: -asmiṃ (완전형)', meaning: '이 가르침에서 (전법륜경)' },
    ],
    table: {
      label: '처격 어미 변이 정리',
      rows: [
        { case: 'a-어간 단수', ending: '-e / -asmiṃ', example: 'kāye = kāyasmiṃ', meaning: '몸에서' },
        { case: 'a-어간 복수', ending: '-esu', example: 'dhammesu', meaning: '법들에서' },
        { case: 'ā-어간 복수', ending: '-āsu', example: 'vedanāsu', meaning: '느낌들에서' },
        { case: 'i-어간 단수', ending: '-ismiṃ', example: 'aggismiṃ', meaning: '불에서' },
      ],
    },
    tip: '-e와 -asmiṃ은 같은 의미입니다. 경전에서는 운율에 따라 짧은 형(-e)과 긴 형(-asmiṃ)을 섞어 씁니다.',
  },
]
