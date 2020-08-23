import axios from 'axios';
import store from 'store';

const fetchLikedVideos = async () => {

    const likedVideoIds = store.get('likedVideoIds');
    const idList = [];
    for (const videoId in likedVideoIds) {
        if (likedVideoIds[videoId])
            idList.push(videoId);
    };

    const items = await axios(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${idList.join(',')}&maxResults=100&regionCode=TW&key=AIzaSyB1QdKBuDnoEFqKWKdiCWuJUfiXv4y9hHY`)
        .then(res => res.data.items)
        .catch(() => null);

    return items?.map(item => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.medium.url,
        duration: item.contentDetails.duration,
        liked: Boolean(likedVideoIds[item.id])
    }));
};

export default fetchLikedVideos;