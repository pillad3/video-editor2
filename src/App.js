import React from 'react';
import ClipLibrary from './ClipLibrary';
import Timeline from './Timeline';
import PlaybackScreen from './PlaybackScreen';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ClipLibrary />
        <PlaybackScreen />
        <Timeline />
      </div>
    );
  }
}

export default App;
