import React from 'react';
import {render} from 'react-dom';
import './css/base.css';
import CommentBox from './js/comments/commentBox';

render(
  <CommentBox url="/api/comments" pollInterval={1000}/>, document.getElementById('content')
);
