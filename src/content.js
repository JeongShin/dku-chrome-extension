/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
// import Frame, { FrameContextConsumer } from 'react-frame-component';
import App from './components/App';
import NewTab from './components/NewTab';

// class Main extends React.Component {
//   render() {
//     return (
//       <Frame
//         head={[
//           <link
//             type="text/css"
//             rel="stylesheet"
//             href={chrome.runtime.getURL('/static/css/content.css')}
//           />,
//         ]}
//       >
//         <FrameContextConsumer>
//           {({ document, window }) => {
//             return <App document={document} window={window} isExt={true} />;
//           }}
//         </FrameContextConsumer>
//       </Frame>
//     );
//   }
// }

chrome.topSites.get(console.log); // 자주 방문한 사이트를 조회할 수 있습니다.
chrome.bookmarks.getTree(console.log); // 북마크를 트리 형태로 조회할 수 있습니다.

const app = document.createElement('div');
app.id = 'dku_extension';

document.body.appendChild(app);
ReactDOM.render(<App />, app);

ReactDOM.render(<NewTab />, document.getElementById('root'));

app.style.display = 'none';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') {
    toggle();
  }
});

function toggle() {
  if (app.style.display === 'none') {
    app.style.display = 'block';
  } else {
    app.style.display = 'none';
  }
}
