import React from 'react';
import Iframe from'react-iframe';

const Trello = () => {
    return (
        <div class="screen">
          <Iframe id="trello" src="https://trello.com/b/qzIRAfmd.html" style={{ width: '100%', height: '100%', frameBorder:"0"}}></Iframe>
        </div>
    );
};

export default Trello;
