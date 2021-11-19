import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [messages, setMessages] = useState([]);


  const onSubmit = (e) => {
    e.preventDefault();

    const { fieldset, message, donation } = e.target.elements;

    fieldset.disabled = true;

    contract.get_greeting(
      { account_id: 'isonar.testnet' }
    ).then((greeting) => {
      setMessages(greeting);
    });
  };

  const signIn = () => {
    console.log(nearConfig.contractName);
    wallet.requestSignIn(
      nearConfig.contractName,
      'NEARvember'
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <main>
      <header>
        <h1>NEARvember Day 3 Challenge</h1>
        { currentUser
          ? <button onClick={signOut}>I'm done with this. Log me out</button>
          : <button onClick={signIn}>Wanna to say hello blockchain-style? Log in!</button>
        }
      </header>
      { currentUser
        ? <Form onSubmit={onSubmit} currentUser={currentUser} />
        : <SignIn/>
      }
      { !!currentUser && !!messages.length && <Messages messages={messages}/> }
    </main>
  );
};

App.propTypes = {
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;
