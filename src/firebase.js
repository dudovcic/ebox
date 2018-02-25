import React from 'react';
// This component's content should actually be placed in public/index.html, but here it is just for fun
class Firebase extends React.Component {

    addFirebaseScript() {
    return { __html: `<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
      <script>
        // Initialize Firebase
        firebase.initializeApp({
          apiKey: "AIzaSyB5xmQnR93GI3F2E9qTygjO57TU1OvArM0",
          authDomain: "ebox-f89e2.firebaseapp.com",
          databaseURL: "https://ebox-f89e2.firebaseio.com",
          projectId: "ebox-f89e2",
          storageBucket: "",
          messagingSenderId: "195491250822"
        });
      </script>`};
  }

  render() {
    return (
        <div dangerouslySetInnerHTML={this.addFirebaseScript()} /> // dangerouslySetInnerHTML to be able to putpotential XSS code into React component and avoid syntax error
      )
  }
}

export default Firebase;
