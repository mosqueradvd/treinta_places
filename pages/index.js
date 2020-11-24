import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Loader } from "@googlemaps/js-api-loader";

import { initMap } from "../data/geolocalize";
import { createPlaces } from "../data/createplaces";

const loader = new Loader({
  apiKey: "AIzaSyB3MYAwUredg1Hua0rNkCuRxyoIdkD1s4k",
  version: "weekly",
});
loader
  .load()
  .then(() => {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    initMap();
  })
  .then(() => {
    createPlaces();
  });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treinta Places</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3MYAwUredg1Hua0rNkCuRxyoIdkD1s4k&libraries=places&callback=initMap"
        ></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Treinta Places!</a>
        </h1>

        <div className={styles.mapContainer}>
          <div id="map"></div>
        </div>
        <div id="more"></div>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
