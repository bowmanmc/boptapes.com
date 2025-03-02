
/*
    Spotify: https://open.spotify.com/playlist/3Xmv0MfKpt5R3yZsLJztTL?si=da9b30bb835c4ac7
    (... > share > copy link to playlist)

    Apple: https://music.apple.com/us/playlist/taste-of-the-b-52s/pl.u-EdAVz8bFY5BA0
    (... > share > copy link)
*/
export function getPlaylistType(url) {
    if (url.includes('\/open\.spotify\.com\/')) {
        return 'spotify';
    }
    else if (url.includes('\/music\.apple\.com\/')) {
        return 'apple';
    }
    else {
        return 'unsupported';
    }
}

/*
    Spotify:
        https://open.spotify.com/embed/playlist/3Xmv0MfKpt5R3yZsLJztTL?utm_source=generator
        converts to
        https://open.spotify.com/playlist/3Xmv0MfKpt5R3yZsLJztTL?si=ef008f8677554b73
    Apple:
        https://music.apple.com/us/playlist/taste-of-the-b-52s/pl.u-EdAVz8bFY5BA0
        converts to
        https://embed.music.apple.com/us/playlist/taste-of-the-b-52s/pl.u-EdAVz8bFY5BA0
*/
export function getEmbedUrl(playlistUrl) {
    const playlistType = getPlaylistType(playlistUrl);
    if (playlistType === 'spotify') {
        return playlistUrl.replace('open.spotify.com', 'open.spotify.com/embed');
    }
    else if (playlistType === 'apple') {
        return playlistUrl.replace('music.apple.com', 'embed.music.apple.com');
    }
    else {
        return null;
    }
}
