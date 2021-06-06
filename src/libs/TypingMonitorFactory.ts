import TypingMonitor from './TypingMonitor'

const questions: { [key: string]: string } = {
  "SmartHR": "smarthr",
  "健康保険・厚生年金保険 被保険者資格取得届": "kenkouhokenkouseinenkinhokenhihokensyasikakusyutokutodoke",
  "健康保険被扶養者（異動）届・国民年金第3号被保険者関係届": "kenkouhokenhifuyousyaidoutodokekokuminnnenkindaisangouhihokensyakankeitodoke",
  "健康保険・厚生年金保険 被保険者資格喪失届": "kenkouhokenkouseinenkinhokenhihokensyasikakusoushitsutodoke",
  "健康保険・厚生年金保険 被保険者氏名変更（訂正）届": "kenkouhokenkouseinenkinhokenhihokensyasimeihenkouteiseitodoke",
  "健康保険・厚生年金保険 被保険者住所変更届": "kenkouhokenkouseinenkinhokenhihokensyazyuusyohenkoutodoke",
  "健康保険・厚生年金保険 被保険者報酬月額算定基礎届": "kenkouhokenkouseinenkinhokenhihokensyahousyuugetsugakusanteikisotodoke",
  "健康保険・厚生年金保険 被保険者報酬月額変更届": "kenkouhokenkouseinenkinhokenhihokensyahousyuugetugakuhenkoutodoke",
  "健康保険・厚生年金保険 被保険者賞与支払届/70歳以上被用者賞与支払届": "kenkouhokenkouseinenkinhokenhihokensyasyouyosiharaitodokenanazyussaiizyouhiyousyasyouyosiharaitodoke",
  "健康保険・厚生年金保険 被保険者賞与支払届総括表": "kenkouhokenkouseinenkinhokenhihokensyasyouyosiharaitodokesoukatuhyou",
  "雇用保険 被保険者資格取得届": "koyouhokenhihokensyasikakusyutokutodoke",
  "雇用保険 被保険者資格喪失届": "koyouhokenhihokensyasikakusoushitsutodoke",
  "雇用保険 被保険者資格喪失届提出後の離職票交付の申請": "koyouhokenhihokensyasikakusousitutodoketeisyutugonorisyokuhyoukoufunoshinsei",
  "雇用保険 被保険者離職証明書": "koyouhokenhihokensyarisyokusyoumeisyo",
  "雇用保険 被保険者転勤届": "koyouhokenhihokensyatenkintodoke",
  "雇用保険 高年齢雇用継続給付受給資格確認票・（初回）高年齢雇用継続給付支給申請書": "koyouhokenkounenreikoyoukeizokukyuufuzyukyuusikakukakuninhyou",
  "雇用保険 被保険者六十歳到達時等賃金証明書": "koyouhokenhihokensyarokuzyussaitoutatuzitouchinginsyoumeisyo",
  "雇用保険 高年齢雇用継続給付支給申請書": "koyouhokenkounenreikoyoukeizokukyuufukinsikyuusinseisyo",
  "雇用保険 育児休業給付受給資格確認票・（初回）育児休業給付支給申請書": "koyouhokenikuzikyuugyoukyuufuzyukyuusikakukakuninhyou",
  "雇用保険 休業開始時賃金月額証明書": "koyouhokenkyuugyoukaisizichingingetsugakusyoumeisyo",
  "雇用保険 育児休業給付支給申請書": "koyouhokenikuzikyuugyoukyuufusikyuusinseisyo",
  "労働保険 年度更新申告書": "roudouhokennendokousinshinseisyo",
  "労働保険 概算・増加概算・確定保険料申告書・石綿健康保険被害救済法 一般拠出金申告書": "roudouhokengaisanzoukagaisankakuteihokenryousinkokusyoisiwatakenkouhokenhigaikyuusaihouippankyosyutsukinsinkokusyo",
}

const defaultTarget = "発見できず"
const defaultSequence = "hakkendekizu"

export const CreateMonitor: () => TypingMonitor = () => {
  const keys = Object.keys(questions)
  const target = keys[Math.floor(Math.random() * keys.length)] || defaultTarget
  const sequence = questions[target] || defaultSequence
  return new TypingMonitor(sequence, target)
}