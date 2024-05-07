import OBR from '@owlbear-rodeo/sdk'
import { ID, delay, getMetadataValue, updateMetadata } from './utils.ts'
import { getRandomCardIdx, getAllDeckNames } from './decks/deck.ts'

async function getPermision() {
  for (const player of await OBR.party.getPlayers()) {
    if (player.role == 'GM') {
      let metadata = player.metadata[`${ID}/metadata`] as any
      if (!metadata) continue
      if (metadata['is_allowed']) return true
      return false
    }
  }
  return true
}

async function isAllowed() {
  if ((await OBR.player.getRole()) == 'GM') return true
  return await getPermision()
}

async function drawButton() {
  let btn = document.querySelector('#btn__draw') as HTMLButtonElement
  btn.onclick = async () => {
    let deck_name = await getMetadataValue('deck', getAllDeckNames()[0])
    let data = {
      deck: deck_name,
      card: getRandomCardIdx(deck_name),
      player: await OBR.player.getName(),
    }
    if (await isAllowed()) {
      let is_public = await getMetadataValue('is_public', true)
      if (is_public) {
        await OBR.broadcast.sendMessage(`${ID}/close`, data, {
          destination: 'ALL',
        })
        await delay(500) // time to let all popups close //FIXME
        await OBR.broadcast.sendMessage(`${ID}/init`, data, {
          destination: 'ALL',
        })
      } else {
        await OBR.broadcast.sendMessage(`${ID}/init`, data, {
          destination: 'LOCAL',
        })
      }
    } else {
      await OBR.notification.show('Your GM has disabled this feature')
    }
  }
}

async function permissionButton(permision: boolean | null = null) {
  let btn = document.querySelector('#btn__permision') as HTMLButtonElement
  let icon = btn.querySelector('.icon') as HTMLElement
  let tooltip = btn.querySelector('.tooltip') as HTMLElement

  if ((await OBR.player.getRole()) == 'PLAYER') {
    btn.style.display = 'none'
    return
  }
  btn.style.display = 'inline-block'

  async function update(value: boolean) {
    icon.style.mask = `url(${
      value ? '/allowed.svg' : '/prohibited.svg'
    }) 0% 0% / 30px`
    tooltip.textContent = value
      ? 'Players Can Draw Cards'
      : 'Players Cannot Draw Cards'
    await updateMetadata('is_allowed', value)
  }
  await update(permision ? permision : await getPermision())

  btn.onclick = async () => {
    let value = !(await getMetadataValue('is_allowed'))
    if (!value)
      OBR.broadcast.sendMessage(`${ID}/close`, {}, { destination: 'ALL' })
    await update(value)
    await OBR.broadcast.sendMessage(`${ID}/update-permision`, value, {
      destination: 'REMOTE',
    })
  }
}

async function visibilityButton() {
  let btn = document.querySelector('#btn__visibility') as HTMLButtonElement
  let icon = btn.querySelector('.icon') as HTMLElement
  let tooltip = btn.querySelector('.tooltip') as HTMLElement

  async function update(value: boolean) {
    icon.style.mask = `url(${
      value ? '/visible.svg' : '/hidden.svg'
    }) 0% 0% / 30px`
    tooltip.textContent = value ? 'Public Draw' : 'Hidden Draw'
    await updateMetadata('is_public', value)
  }
  await update(await getMetadataValue('is_public', true))

  btn.onclick = async () => {
    await update(!(await getMetadataValue('is_public', true)))
  }
}

async function configureSelect() {
  let select = document.querySelector('#btn__select') as HTMLSelectElement
  let decks = getAllDeckNames()
  let current_deck = await getMetadataValue('deck', decks[0])

  decks.forEach((deck) => {
    const option: HTMLOptionElement = document.createElement('option')
    option.text = deck
    select.add(option)
  })

  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i] == current_deck) {
      select.selectedIndex = i
      break
    }
  }
  select.onchange = (_) => {
    console.log(select.options[select.selectedIndex].value)
    updateMetadata('deck', select.options[select.selectedIndex].value)
  }
}

export async function configureMenu() {
  drawButton()
  permissionButton()
  visibilityButton()
  configureSelect()

  OBR.broadcast.onMessage(`${ID}/update-permision`, (data) =>
    permissionButton(data.data as boolean),
  )
}
