import { React, useState } from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from '@mui/material';

import { itemData } from "./data";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isBelow900px = useMediaQuery(theme.breakpoints.down('md'));

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateToPreviousImage = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      const newImage = itemData[newIndex].img;
      setSelectedImage(newImage);
      setSelectedIndex(newIndex);
    }
  };

  const navigateToNextImage = () => {
    if (selectedIndex < itemData.length - 1) {
      const newIndex = selectedIndex + 1;
      const newImage = itemData[newIndex].img;
      setSelectedImage(newImage);
      setSelectedIndex(newIndex);
    }
    else if (selectedIndex === itemData.length - 1) {
      // Reached the last image, cycle back to the first image
      const newIndex = 0;
      const newImage = itemData[newIndex].img;
      setSelectedImage(newImage);
      setSelectedIndex(newIndex);
    }
  };


  return (
    <>
      <PageWrapper>
        <ImageList
          variant="quilted"
          cols={isBelow900px ? 2 : 4}
          rowHeight={'auto'}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 500, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onClick={() => openLightbox(item.img)}
              />
              <ImageListItemBar
                sx={{ textAlign: 'right' }}
                title={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </PageWrapper>
      <PhotoSlider selectedImage={selectedImage}
        selectedIndex={selectedIndex}
        closeLightbox={closeLightbox}
        navigateToPreviousImage={navigateToPreviousImage}
        navigateToNextImage={navigateToNextImage}
      />
    </>
  );
}
