import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';

const App = () => {

  const webgiViewerRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className='App'>
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      <WebgiViewer ref={webgiViewerRef} />
    </div>
  )
}

export default App;
