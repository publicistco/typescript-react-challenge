import React from 'react';

import { TextSection } from './TextSection';

function App() {
    return (
        <React.Fragment>
            <TextSection id="welcome" />
            <TextSection id="blog_post" />
            <TextSection id="kitchen_sink" />
        </React.Fragment>
    );
}

export default App;
