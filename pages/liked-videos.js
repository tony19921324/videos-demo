import { useState, useEffect } from 'react';

import VideosPage from '@components/VideosPage';
import fetchLikedVideos from '@services/fetchLikedVideos';
import Layout from '@components/Layout';



function PopularVideos() {
    const [totalVideos, setTotalVideos] = useState(null);

    useEffect(() => {
        (async () => {
            const totalVideos = await fetchLikedVideos();
            setTotalVideos(totalVideos);
        })()
    }, []);

    return (
        <Layout>
            <div className='root'>
                <VideosPage totalVideos={totalVideos} type='liked-videos' />
                <style jsx>{`
                    .root {
                        padding: 64px 16px 16px 16px;
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default PopularVideos;