import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import videoPlaceholder from '../../assets/images/video-placeholder.png';
import { GaleryContainer } from './styles';
import { IMedia } from '../../interfaces/IMedia';

interface GalleryProps {
    medias: IMedia[];
}

const Gallery: React.FC<GalleryProps> = ({ medias }) => {
    const images = medias.map((media) => {
        const isVideo = media.name.split('.').pop() === 'mp4';

        if (isVideo) {
            return {
                original: videoPlaceholder,
                thumbnail: videoPlaceholder,
                renderItem: () => (
                    <video style={{ width: '100%', height: 'auto' }} src={'http://localhost:3333/api/v1/images/' + media.name} controls />
                ),
            };
        }

        return {
            original: 'http://localhost:3333/api/v1/images/' + media.name,
            thumbnail: 'http://localhost:3333/api/v1/images/' + media.name,
        };
    });

    return (

        <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false} />

    );
};

export default Gallery;