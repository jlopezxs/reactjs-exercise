import React from 'react';
import Chat from './components/chat';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Chat/>, mountNode);
