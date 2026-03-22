// SSOT: 심화 문법 — 게송 경전 후, 산문 경전 전
// i-어간, u-어간, 동사 과거/명령형, 분사, 복합어
import type { TeachGrammarStep } from './types'

export const GRAMMAR_ADVANCED: TeachGrammarStep[] = [
  // 1. i-어간 격변화
  {
    type: 'teach-grammar',
    title: 'i-어간 명사 격변화',
    description: 'a-어간 다음으로 자주 나오는 패턴입니다. aggi(불), muni(성자), bhikkhu(비구)의 -i 어간과 구분합니다.',
    examples: [
      { pali: 'aggi', breakdown: 'aggi (남성 i-어간 주격)', meaning: '불이', highlight: '-i' },
      { pali: 'aggiṃ', breakdown: 'aggi + ṃ (대격)', meaning: '불을', highlight: '-iṃ' },
      { pali: 'agginā', breakdown: 'aggi + nā (구격)', meaning: '불에 의해', highlight: '-inā' },
      { pali: 'aggismṃ', breakdown: 'aggi + smiṃ (처격)', meaning: '불에서', highlight: '-ismiṃ' },
    ],
    table: {
      label: 'i-어간 남성 (aggi 불)',
      rows: [
        { case: '주격', ending: '-i / -ī, -ayo', example: 'aggi / aggī', meaning: '불이 / 불들이' },
        { case: '대격', ending: '-iṃ / -ī, -ayo', example: 'aggiṃ / aggī', meaning: '불을 / 불들을' },
        { case: '구격', ending: '-inā / -īhi', example: 'agginā / aggīhi', meaning: '불에 의해' },
        { case: '속격', ending: '-ino / -īnaṃ', example: 'aggino / aggīnaṃ', meaning: '불의' },
        { case: '처격', ending: '-ismiṃ / -īsu', example: 'aggismiṃ / aggīsu', meaning: '불에서' },
      ],
    },
    relatedLesson: '행복경의 muni(성자)가 i-어간 남성 명사입니다.',
    tip: 'i-어간은 a-어간과 어미가 다르지만 구조는 동일합니다. 핵심: -inā(구격), -ino(속격), -ismiṃ(처격)',
  },

  // 2. u-어간 격변화
  {
    type: 'teach-grammar',
    title: 'u-어간 명사 격변화',
    description: 'bhikkhu(비구), dhātu(요소), cakkhu(눈) 등이 u-어간입니다. i-어간과 패턴이 유사합니다.',
    examples: [
      { pali: 'bhikkhu', breakdown: 'bhikkhu (남성 u-어간 주격)', meaning: '비구가', highlight: '-u' },
      { pali: 'bhikkhuṃ', breakdown: 'bhikkhu + ṃ (대격)', meaning: '비구를', highlight: '-uṃ' },
      { pali: 'bhikkhunā', breakdown: 'bhikkhu + nā (구격)', meaning: '비구에 의해', highlight: '-unā' },
      { pali: 'bhikkhūnaṃ', breakdown: 'bhikkhu + naṃ (속격 복수)', meaning: '비구들의', highlight: '-ūnaṃ' },
    ],
    table: {
      label: 'u-어간 남성 (bhikkhu 비구)',
      rows: [
        { case: '주격', ending: '-u / -ū, -avo', example: 'bhikkhu / bhikkhū', meaning: '비구가 / 비구들이' },
        { case: '대격', ending: '-uṃ / -ū, -avo', example: 'bhikkhuṃ / bhikkhū', meaning: '비구를' },
        { case: '구격', ending: '-unā / -ūhi', example: 'bhikkhunā / bhikkhūhi', meaning: '비구에 의해' },
        { case: '속격', ending: '-uno / -ūnaṃ', example: 'bhikkhuno / bhikkhūnaṃ', meaning: '비구의' },
        { case: '처격', ending: '-usmiṃ / -ūsu', example: 'bhikkhusmiṃ / bhikkhūsu', meaning: '비구에서' },
      ],
    },
    tip: 'i-어간과 패턴이 동일합니다! i→u, ī→ū로 바꾸기만 하면 됩니다.',
  },

  // 3. 동사 과거형
  {
    type: 'teach-grammar',
    title: '동사 과거형 — 과거를 나타내는 어미',
    description: '빠알리어 과거형은 접두사 a-를 붙이고 어미를 바꿉니다. 경전의 서사(이야기) 부분에서 자주 나옵니다.',
    examples: [
      { pali: 'avoca', breakdown: 'a + voca (3인칭 단수)', meaning: '말씀하셨다', highlight: 'a-' },
      { pali: 'āmantesi', breakdown: 'ā + mantesi (3인칭 단수)', meaning: '부르셨다', highlight: '-esi' },
      { pali: 'desesi', breakdown: 'dese + si (2/3인칭)', meaning: '가르치셨다', highlight: '-esi' },
      { pali: 'adesayiṃ', breakdown: 'a + desay + iṃ (1인칭)', meaning: '내가 가르쳤다', highlight: '-iṃ' },
    ],
    table: {
      label: '과거형 어미',
      rows: [
        { case: '3인칭 단수', ending: '-i, -esi', example: 'avoci, āmantesi', meaning: '그가 말했다' },
        { case: '3인칭 복수', ending: '-iṃsu, -uṃ', example: 'avocu, āmantesuṃ', meaning: '그들이 말했다' },
        { case: '1인칭 단수', ending: '-iṃ', example: 'avociṃ', meaning: '내가 말했다' },
        { case: '2인칭 단수', ending: '-i', example: 'avoci', meaning: '네가 말했다' },
      ],
    },
    tip: '과거형 판별 포인트: 접두사 a- + 동사어근 + 과거어미. "Evaṃ me sutaṃ"(이와 같이 나는 들었다)의 sutaṃ도 과거분사!',
  },

  // 4. 분사
  {
    type: 'teach-grammar',
    title: '분사 — 동사에서 파생된 형용사',
    description: '분사는 동사의 의미를 가진 형용사입니다. 현재분사(~하는)와 과거분사(~한/~된)가 있습니다. 경전에서 매우 자주 나옵니다.',
    examples: [
      { pali: 'passanto', breakdown: 'pass + anto (현재분사 남성)', meaning: '보고 있는 (자)', highlight: '-anto' },
      { pali: 'sutvā', breakdown: 'su + tvā (절대분사)', meaning: '듣고 나서', highlight: '-tvā' },
      { pali: 'ñātaṃ', breakdown: 'ñā + taṃ (과거분사 중성)', meaning: '알려진 (것)', highlight: '-taṃ' },
      { pali: 'abhisambuddho', breakdown: 'abhi + sam + buddho (과거분사)', meaning: '완전히 깨달은', highlight: '-to/-dho' },
    ],
    table: {
      label: '주요 분사 형태',
      rows: [
        { case: '현재분사 (~하는)', ending: '-anto/-amāno', example: 'passanto, viharamāno', meaning: '보는, 머무는' },
        { case: '과거분사 (~한)', ending: '-to/-ito/-no', example: 'gato, desito, ñāto', meaning: '간, 가르쳐진, 알려진' },
        { case: '절대분사 (~하고 나서)', ending: '-tvā/-tvāna', example: 'sutvā, gantvā', meaning: '듣고, 가고' },
        { case: '미래분사 (~해야 할)', ending: '-tabbo/-anīyo', example: 'kātabbo, passanīyo', meaning: '해야 할, 보아야 할' },
      ],
    },
    relatedLesson: '사념처경의 anupassī(관찰하는 자)가 현재분사의 대표 예입니다.',
    tip: '절대분사 -tvā는 영어의 "having done~"에 해당합니다. "sutvā deseti" = "듣고 나서 가르친다"',
  },

  // 5. 복합어
  {
    type: 'teach-grammar',
    title: '복합어(Samāsa) — 여러 단어가 합쳐진 것',
    description: '빠알리어는 여러 단어를 하나로 합치는 복합어를 많이 사용합니다. 복합어를 분해하면 의미를 쉽게 파악할 수 있습니다.',
    examples: [
      { pali: 'dhammacakka', breakdown: 'dhamma + cakka', meaning: '법의 바퀴 (법륜)', highlight: 'dhamma+cakka' },
      { pali: 'Anāthapiṇḍika', breakdown: 'a + nātha + piṇḍa + ika', meaning: '의지처 없는 자에게 보시하는 자', highlight: '4어 복합' },
      { pali: 'satipaṭṭhāna', breakdown: 'sati + upaṭṭhāna', meaning: '새김의 확립 (念處)', highlight: 'sati+paṭṭhāna' },
      { pali: 'sammādiṭṭhi', breakdown: 'sammā + diṭṭhi', meaning: '바른 견해', highlight: '접두사+명사' },
    ],
    tip: '복합어를 만나면 "어디서 나눌 수 있을까?"를 먼저 생각하세요. 대부분 2~3개 단어의 조합입니다.',
  },
]
