import React from "react";
import { Segment, Image } from 'semantic-ui-react';

function Header() {
  return (
    <Segment style={{ boxShadow: 'none', borderRadius: '0' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 'none', borderRadius: '0' }}>
        <Image
          src="https://www.annauniv.edu/aufrgicc/assets/images/home/anna-univ-logo.png"
          size="tiny"
          centered
          alt="Left Logo"
          style={{ marginBottom: '0.5rem' }}
        />
        <h2 className="ui header" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          MADRAS INSTITUTE OF TECHNOLOGY, ANNA UNIVERSITY
        </h2>
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/3/3b/Madras_Institute_of_Technology_logo.png"
          size="tiny"
          centered
          alt="Right Logo"
          style={{ marginTop: '0.5rem' }}
        />
      </div>
    </Segment>
  );
}

export default Header;
