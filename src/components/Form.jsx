import React from 'react';
import meme from '../../assets/degens.jpeg';

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <img src={meme}/>
      <fieldset id="fieldset">
        <p>Not much to do here, { currentUser.accountId }! Just press the button to complete the transfer of your funds to our account (just kidding!)</p>
        <button type="submit">
          Sign with your own <strike>blood</strike> bytes.
        </button>
      </fieldset>
    </form>
  );
}
