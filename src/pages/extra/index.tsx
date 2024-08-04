import React from 'react'
import styles from "@/pages/extra/Extra.module.scss";

export default function index() {
  return (
      <div className={styles.container}>
          <h2>What ...? You&apos;re still here? </h2>
          {/*<h2>Still creeping? Here are some things I enjoy!</h2>*/}
          <h2>Pickleball</h2>
          <div className={styles.mainContainer}>
              <p className={styles.description}> hey this will show up right uh wait what i</p>
          </div>
          <h2>Tennis</h2>
          <div className={styles.mainContainer}>
              <p className={styles.description}> hey this will show up right uh wait what i</p>
          </div>
          <h2>Chess</h2>
          <div className={styles.mainContainer}>
              <p className={styles.description}> hey this will show up right uh wait what i</p>
          </div>
      </div>
  )
}
