import clsx from 'clsx';

function VideoCard({
    title,
    description,
    duration,
    thumbnailUrl,
    likedButtonText,
    liked,
    onToggleLiked,
}) {
    
    function handleToggleLiked() {
        onToggleLiked(!liked)
    };

    return (
        <div className='root'>
            <img src={thumbnailUrl} />
            <div className='like-row flex justify-between'>
                <button className={clsx(liked && 'liked')} onClick={handleToggleLiked}>{likedButtonText || '收藏'}</button>
                <div className='duration'>{duration}</div>
            </div>
            <div className='title ellipsis'>{title}</div>
            <div className='description ellipsis'>{description}</div>
            <style jsx>{`
                .root {
                    max-width: 290px;
                }
                img {
                    width: 290px;
                }
                button {
                    cursor: pointer;
                    padding: 4px;
                    color: #606060;
                    border: 1px solid #606060;
                    font-size: 0.875rem;
                    background: #fff;
                    transition: .2s;
                }
                button:hover {
                    border-color: #CC0000;
                    color: #CC0000;
                }
                .liked {
                    font-weight: bold;
                    border: 1px solid #CC0000;
                    color: #CC0000;
                }
                .like-row {
                    margin: 4px 0;
                }
                .duration {
                    bottom: 4px;
                    right: 4px;
                    padding: 4px;
                    font-size: 0.875rem;
                    background: #000;
                    color: #fff;
                }
                .title {
                    font-weight: bold;
                }
                .description {
                    color: #606060;
                }
                .ellipsis {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            `}</style>
        </div>
    )
};

export default VideoCard;