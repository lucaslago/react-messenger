import React      from 'react';
import {render}   from 'react-dom';
import CommentBox from './js/comments/CommentBox.jsx';
import './css/base.css';

render(
  <CommentBox url="/api/comments" pollInterval={1000}/>, document.getElementById('content')
);
