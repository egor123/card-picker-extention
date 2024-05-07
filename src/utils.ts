import OBR from '@owlbear-rodeo/sdk'

export const ID = 'com.noname.cards'

export async function getMetadata(): Promise<any> {
  return (await OBR.player.getMetadata())[`${ID}/metadata`]
}

export async function getMetadataValue(
  path: string,
  default_value: any = undefined,
): Promise<any> {
  let metadata = (await OBR.player.getMetadata())[`${ID}/metadata`] as any
  for (const el of path.split('/')) {
    if (metadata === undefined) return default_value
    metadata = metadata[el]
  }
  if (metadata === undefined) return default_value
  return metadata
}

export async function updateMetadata(key: string, value: any) {
  let metadata = (await OBR.player.getMetadata()) as any
  if (!metadata[`${ID}/metadata`]) metadata[`${ID}/metadata`] = {}
  metadata[`${ID}/metadata`][key] = value
  await OBR.player.setMetadata(metadata)
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
