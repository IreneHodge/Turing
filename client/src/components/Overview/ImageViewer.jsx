/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ImageViewer = ({
  photos,
  hidePrev,
  selectPrev,
  hideNext,
  selectNext,
  selectedIndex,
  toggleModal,
  move,
  nextInd,
}) =>
  photos ? (
    <>
      <div className={`imageBox ${move}`}>
        <div className='selectPrevImage' hidden={hidePrev} onClick={selectPrev}>
          {`<`}
        </div>
        <div className='selectNextImage' hidden={hideNext} onClick={selectNext}>{`>`}</div>
        <img
          src={photos[selectedIndex].url}
          alt=''
          className='selectedImage'
          onClick={toggleModal}
        />
      </div>
      <div className={`${move ? `moveLeftBox ${move}` : `moveLeftBox`} ${move}`}>
        <img src={photos[nextInd].url} alt='' className='nextImage' />
      </div>
      <div className={`${move ? `moveRightBox ${move}` : `moveRightBox`} ${move}`}>
        <img src={photos[nextInd].url} alt='' className='nextImage' />
      </div>
      <div className={`${move ? `moveUpBox ${move}` : `moveUpBox`} ${move}`}>
        <img src={photos[nextInd].url} alt='' className='nextImage' />
      </div>
    </>
  ) : null;

export default ImageViewer;
