
function Skeleton() {
    return (
        <div className='root'>
            <div className='pic loading'></div>
            <div className='row loading'></div>
            <div className='row half loading'></div>
            <div className='row half loading'></div>
            <style jsx>{`
                .root {
                    width: 290px;
                }
                .pic {
                    height: 163px;
                }
                .row {
                    height: 1rem;
                    margin: 4px 0;
                }
                .half {
                    width: 50%;
                }
                .loading {
                    background: rgba(0, 0, 0, 0.15);
                    animation: loading 1.5s ease-in-out infinite;
                }
                @keyframes loading {
                    0% { opacity: 1; }
                    50% { opacity: .3; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    )
};

export default Skeleton;