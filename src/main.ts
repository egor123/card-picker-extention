import './styles/style.css'
import OBR from '@owlbear-rodeo/sdk'
import { ID, updateMetadata } from './utils.ts'
import { configureMenu } from './menu.ts'

OBR.onReady(async () => {
  configureMenu()

  OBR.broadcast.onMessage(`${ID}/init`, async (data) => {
    await updateMetadata('data', data.data)
    OBR.popover.open({
      id: `${ID}/card-popup`,
      url: '/card-popup.html',
      height: 800,
      width: 400,
      anchorOrigin: {
        horizontal: 'CENTER',
        vertical: 'CENTER',
      },
      transformOrigin: {
        horizontal: 'CENTER',
        vertical: 'CENTER',
      },
    })
  })
})
