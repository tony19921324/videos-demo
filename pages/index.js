import { useState, useEffect } from 'react';

import Layout from '@components/Layout';
import VideosPage from '@components/VideosPage';
import fetchPopularVideos from '@services/fetchPopularVideos';



function PopularVideos() {
    const [totalVideos, setTotalVideos] = useState(null);

    useEffect(() => {
        (async () => {
            const totalVideos = await fetchPopularVideos();
            setTotalVideos(totalVideos);
        })()
    }, []);

    return (
        <Layout>
            <div className='root'>
                <VideosPage totalVideos={totalVideos} />
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