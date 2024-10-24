//import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
//  withAuthenticator,
  Button,
//  Heading,
//  Image,
//  View,
//  Card,
  Authenticator 
} from "@aws-amplify/ui-react";


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <Button onClick={signOut}>Sign out</Button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;