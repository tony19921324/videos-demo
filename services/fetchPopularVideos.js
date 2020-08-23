import axios from 'axios';
import store from 'store';

const fetchPopularVideos = async () => {

    const result1 = await axios(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&maxResults=100&regionCode=TW&key=AIzaSyB1QdKBuDnoEFqKWKdiCWuJUfiXv4y9hHY`)
        .then(res => res.data)
        .catch(() => null);

    const result2 = await axios(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&maxResults=100&regionCode=TW&pageToken=${result1?.nextPageToken}&key=AIzaSyB1QdKBuDnoEFqKWKdiCWuJUfiXv4y9hHY`)
        .then(res => res.data)
        .catch(() => null);

    const items = [...result1?.items, ...result2?.items];

    const likedVideoIds = store.get('likedVideoIds');

    return items?.map(item => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.medium.url,
        duration: item.contentDetails.duration,
        liked: Boolean(likedVideoIds[item.id])
    }));
};

export default fetchPopularVideos;