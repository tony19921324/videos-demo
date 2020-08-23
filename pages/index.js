import { useState, useEffect } from 'react';
import store from 'store';

import VideoCard from '@components/VideoCard';
import Skeleton from '@components/Skeleton';
import Pagination from '@components/Pagination';
import searchPopularVideos from '@services/searchPopularVideos';
import pageItems from '@utils/pageItems';

const fakeList = (new Array(16)).fill(0);

function PopularVideos() {
    const [totalVideos, setTotalVideos] = useState(null);
    const [videos, setVideos] = useState(null);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);

    useEffect(() => {
        (async () => {
            const totalVideos = await searchPopularVideos();
            setTotalVideos(totalVideos);
            const videos = pageItems(totalVideos, page, perPage);
            setVideos(videos);
        })()
    }, []);


    function handleToggleLiked(videoId, liked) {

        for (const video of videos) {
            if (video.id === videoId) {
                video.liked = liked;
                const likedVideoIds = store.get('likedVideoIds') || {};

                if (liked)
                    likedVideoIds[videoId] = 1;
                else
                    delete likedVideoIds[videoId];

                store.set('likedVideoIds', likedVideoIds);

                break;
            }
        };

        setVideos([...videos]);
    };

    function handleChangePage(nextPage) {
        const videos = pageItems(totalVideos, nextPage, perPage);
        setPage(nextPage);
        setVideos(videos);
    };

    return (
        <div className='root mx-auto'>
            <div className='page'>
                <Pagination 
                    total={totalVideos ? totalVideos.length : 0}
                    page={page}
                    perPage={perPage}
                    onChangePage={handleChangePage}
                />
            </div>
            <div className='flex flex-wrap justify-center'>
                {videos ?
                    videos.map(video => (
                        <div key={video.id} className='cell'>
                            <VideoCard
                                title={video.title}
                                description={video.description}
                                duration={video.duration}
                                thumbnailUrl={video.thumbnailUrl}
                                liked={video.liked}
                                onToggleLiked={liked => handleToggleLiked(video.id, liked)}
                            />
                        </div>
                    )) :

                    fakeList.map((_, i) => (
                        <div key={i} className='cell'>
                            <Skeleton />
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
                .root {
                    --spacing: 16px;
                    padding: 64px 16px 16px 16px;
                    max-width: 1290px;
                }
                .page {
                    margin: 24px 0;
                }
                .cell {
                    margin: calc(var(--spacing) / 2);
                    margin-bottom: 32px;
                }
            `}</style>
        </div>
    );
};

export default PopularVideos;