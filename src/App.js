import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Authenticator } from "aws-amplify-react";
import styled from "@emotion/styled";

import awsExports from "./aws-exports";
import Screens from "./components/Screens";

const Title = styled("h1")`
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 8px;
`;

<<<<<<< HEAD
=======
const theme = {
  formContainer: {
    margin: 0,
    padding: "8px 24px 24px"
  },
  formSection: {
    backgroundColor: "#ffffff",
    borderRadius: "4px"
  },
  sectionHeader: {
    color: "#fff"
  },
  sectionFooterSecondaryContent: {
    color: "#303952"
  },
  inputLabel: {
    color: "#fff"
  },
  input: {
    backgroundColor: "#f4f9f4",
    color: "#fff"
  },
  hint: {
    color: "#fff"
  },
  button: {
    borderRadius: "3px",
    backgroundColor: "#a7d7c5"
  },
  a: {
    color: "#a7d7c5"
  }
};

>>>>>>> parent of 8359140... theme update
function App() {
  const [state, setState] = useState({ isLoggedIn: false, user: null });

  const checkLoggedIn = () => {
    Auth.currentAuthenticatedUser()
      .then(data => {
        const user = { username: data.username, ...data.attributes };
        setState({ isLoggedIn: true, user });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return state.isLoggedIn ? (
    <Screens />
  ) : (
    <>
      <Title>Super Awesome Dugan Family Messenger</Title>
      <Authenticator
        onStateChange={authState => {
          if (authState === "signedIn") {
            checkLoggedIn();
          }
        }}
        amplifyConfig={awsExports}
<<<<<<< HEAD
       
=======
        //theme={theme}
>>>>>>> parent of 8359140... theme update
      />
    </>
  );
}

export default App;
