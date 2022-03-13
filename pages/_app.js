import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

const progress = new ProgressBar({
  size:2,
  color:"#FF5A5F",
  className:"z-50",
  delay:100,
});

// router events  
Router.events.on("routeChangeStart",progress.start);
Router.events.on("routeChangeComplete",progress.finish);
Router.events.on("routeChangeError",progress.finish);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
