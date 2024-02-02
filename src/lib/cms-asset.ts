export function getCmsAssetUrl(assetId: string) {
    const url = new URL(`/assets/${assetId}`, process.env.CMS_ENDPOINT).toString();
    console.log(url)
    return url;
}
