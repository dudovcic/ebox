import React from 'react';
import Styles from './styles.css';

class Content extends React.Component {

  render() {
    return new Array(10).fill(null).map((comp, i) => {
      return (
      <div key={i} className={Styles.content}>
        <div>
          <p>Some content name</p>
        </div>
        <div>
          <p>Some tons of content, it's so crazy how much content is here</p>
        </div>
      </div>);
    })
  }
}

export default Content;
