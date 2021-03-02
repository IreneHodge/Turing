/* eslint-disable react/prop-types */
import React from 'react';
import ReviewResponse from './ReviewResponse.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewRecommendation from './ReviewRecommendation.jsx';
import ReviewHelpfulCount from './ReviewHelpfulCount.jsx';

const ReviewsList = ({ review }) => (
  <div className='reviewListItem'>
    <ReviewHeader review={review} />
    <h3>{review.summary}</h3>
    <p>{review.body}</p>
    <ReviewPhotos review={review} />
    <ReviewRecommendation review={review} />
    {review.response && <ReviewResponse review={review} />}
    <ReviewHelpfulCount review={review} />
  </div>
);

export default ReviewsList;
