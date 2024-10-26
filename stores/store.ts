export function createUrl(relativeUrl: string) {
    let host = window.location.host;
	console.log(relativeUrl);
    //if (process.env.NODE_ENV !== 'development' && relativeUrl.startsWith('api')) {
        //host = 'api.meshtastic.org';
        //relativeUrl = relativeUrl.replace('api/', '');
    //}
    const base = `${window.location.protocol}//${host}`;
    return `${base}/${relativeUrl}`;
}
