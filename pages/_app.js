
import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tweet from '../reducers/tweet';

const store = configureStore({
 reducer: { tweet },
});

function App({ Component, pageProps }) {
 return (
   <Provider store={store}>
     <Head>
       <title>Hacktweet</title>
     </Head>
     <Component {...pageProps} />
   </Provider>
 );
}

export default App;