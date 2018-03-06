import React from 'react';
import Styles from './styles.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const x = [];
    for ( let i = 0; i < 10; i++) {
      x.push(
        <div key={i} className={Styles.content}>
            <div>
              <p>Some content name</p>
            </div>
            <div>
              <p>Some tons of content, it's so crazy how much content is here</p>
            </div>
        </div>);
    }
    return x;
  }
}

export default Content;
