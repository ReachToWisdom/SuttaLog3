// SSOT: 경전 명구 데이터 — 빠알리 + 한글 발음 + 영어 발음 + 번역

export interface Quote {
  pali: string
  pronKo: string
  pronEn?: string
  ko: string
  source: string
}

export const QUOTES: Quote[] = [
  {
    pali: 'Sabbe saṅkhārā aniccā',
    pronKo: '삽베 상카-라- 아닛짜-',
    pronEn: 'sab-beh sang-khaa-raa a-nit-chaa',
    ko: '모든 형성된 것은 무상하다',
    source: 'Dhp 277',
  },
  {
    pali: 'Sabbe saṅkhārā dukkhā',
    pronKo: '삽베 상카-라- 둑카-',
    pronEn: 'sab-beh sang-khaa-raa duk-khaa',
    ko: '모든 형성된 것은 괴로움이다',
    source: 'Dhp 278',
  },
  {
    pali: 'Sabbe dhammā anattā',
    pronKo: '삽베 담마- 아낫따-',
    pronEn: 'sab-beh dham-maa a-nat-taa',
    ko: '모든 법은 무아이다',
    source: 'Dhp 279',
  },
  {
    pali: 'Appamādo amatapadaṃ',
    pronKo: '앞빠마-도 아마따빠당',
    pronEn: 'ap-pa-maa-do a-ma-ta-pa-dang',
    ko: '방일하지 않음은 불사의 길이다',
    source: 'Dhp 21',
  },
  {
    pali: 'Attā hi attano nātho',
    pronKo: '앗따- 히 앗따노 나-토',
    pronEn: 'at-taa hi at-ta-no naa-tho',
    ko: '자기 자신이 자기의 의지처이다',
    source: 'Dhp 160',
  },
]
