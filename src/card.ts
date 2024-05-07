import './styles/card.css'
import OBR from '@owlbear-rodeo/sdk'
import { ID, getMetadataValue, delay } from './utils.ts'
import { getDeck } from './decks/deck.ts'

let card = document.querySelector('.card') as HTMLElement
let card_back = document.querySelector('.card__side--back') as HTMLElement
let card_front = document.querySelector('.card__side--front') as HTMLElement
let card_name = document.querySelector('.card__side--name') as HTMLElement
let card_description = document.querySelector(
  '.card__side--description',
) as HTMLElement
let card_effect = document.querySelector('.card__side--effect') as HTMLElement
let player_field = document.querySelector('.player__field') as HTMLElement

OBR.onReady(async () => {
  OBR.broadcast.onMessage(`${ID}/close`, async () => {
    await OBR.popover.close(`${ID}/card-popup`)
  })
  let data = (await getMetadataValue('data')) as any
  flipCard(data.deck, data.card, data.player)
})

// 1) .card.is-active
// 2) .card.is-switched
// 3) .card__side--description.is-visible
// 4) .card__side--effect.is-visible

async function flipCard(deck_name: string, number: number, player: string) {
  let deck = getDeck(deck_name)
  if (deck == null) return

  player_field.innerHTML = `<b>Drawn by:</b> ${player}`
  card_front.style.backgroundImage = `url(${deck.back_url})`
  let card_inf = deck.cards[number]
  card_back.style.backgroundImage = `url(${card_inf.url})`
  card_name.textContent = card_inf.name
  card_description.innerHTML = `<b>${card_inf.desc}</b>`
  card_effect.innerHTML = `<b>Effect:</b> ${card_inf.effect}`

  await delay(500)

  card.classList.toggle('is-active', true)

  await delay(3000)

  card.classList.toggle('is-switched', true)

  if (card_inf.desc) {
    await delay(3000)
    card_description.classList.toggle('is-visible', true)
  }

  if (card_inf.effect) {
    await delay(3000)
    card_effect.classList.toggle('is-visible', true)
  }

  await delay(30000)

  OBR.popover.close(`${ID}/card-popup`)
}
