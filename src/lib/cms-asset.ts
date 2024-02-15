export function getCmsAssetUrl(assetId: string) {
  return new URL(`/assets/${assetId}`, process.env.CMS_ENDPOINT).toString();
}
