import styles from "../styles/Wall.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtweetToStore } from '../reducers/tweet';
import Tweet from "./Tweet";

function Wall() {
    const tweets = useSelector((state) => state.tweet.value);
const dispatch = useDispatch();
const [tweetName, setTweetname] = useState('');

    const buttonTweet = () => {
        dispatch(addtweetToStore({ tweet: tweetName, username : "PO"}))
        setTweetname('');
    }

return (
    
    <div className={styles.container}>
       <div className={styles.col1} >
        <img className={styles.logo} src="white-logo.webp" alt="Logo Blanc" width="50" height="50"/>
       </div>
        <div className={styles.col2}>
            <h3>Home</h3>
        <input type="text" placeholder="What's up?" onChange={(e) => setTweetname(e.target.value)} value={tweetName}/>
        {/* /* button class="bouton-tweet" onclick="tweet()">Tweet</butto */}
        <button onClick={() => buttonTweet()}>tweet</button>
        {tweets.tweet}
        {
            tweets.map(tweet => {
                return (
                    <Tweet author={tweet.username} value={tweet.tweet}/>
                )
            })
        }
        </div>
        <div className={styles.col3}>
            <h3>Trends</h3>
            </div>
             
        </div>
  
);
}
export default Wall;
