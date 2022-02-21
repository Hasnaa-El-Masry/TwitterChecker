import axios from "axios";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";

function TwitterInfo({userName}) {
  const haveAccount = true;

  let config = {
    headers: {
      "Access-Control-Allow-Origin":"*",
      'Content-Type':'application/json',
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAPoQZQEAAAAAiehjJSsU8kTcXUqQ%2FX%2BtpwbbxpQ%3DaEvdEsZayIlBNTJ9jScl2RmKF7LP8Kaz54wVbrpbjQrNW36r3N",
    },
  };

  useEffect(() => {
    axios
    
      .get(`https://api.twitter.com/1.1/search/tweets.json?q=from:@${userName}exclude:replies&count=7`, config)

      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className={styles.twitter_info}>
      {!haveAccount && (
        <div className={styles.twitter_info__notFount}>
          <h3>Sorry You don't Have a Twitter Account!</h3>
        </div>
      )}

      {haveAccount && (
        <div className={styles.twitter_info_account}>
          <h3>Hasnaa Elmasry</h3>
          <p></p>
          <p>Last Tweet!</p>
        </div>
      )}
    </div>
  );
}

export default TwitterInfo;
