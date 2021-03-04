/* eslint-disable react/prop-types */
import React from 'react';

import QAHeader from './QAHeader.jsx';
import AnswersList from './AnswersList.jsx';
import QAFooter from './QAFooter.jsx';

const QAListItem = ({ questionData }) => (
  <div className='QAListItem'>
    <QAHeader questionData={questionData} />
    <AnswersList answers={questionData.answers} />
    <QAFooter questionData={questionData} />
  </div>
);

export default QAListItem;