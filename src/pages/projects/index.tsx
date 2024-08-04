import React from 'react'
import ExpenseTrackerGif from '../../assets/project_gifs/expense_tracker.gif'
import styles from '@/pages/projects/Projects.module.scss'

export default function index() {
  return (
      <div className={styles.container}>
          {/*<h2> Things i&apos;ve worked on!</h2>*/}
          <h2> What have I done?</h2>
          {/*<h2>Container</h2>*/}
          {/*<div className={styles.mainContainer}>*/}
          {/*    <p className={styles.description}> What is it?</p>*/}
          {/*    <p className={styles.description}> What did I learn from it?</p>*/}
          {/*</div>*/}
          <h2>Coast Companion</h2>
          <div className={styles.mainContainer}>
              <div className={styles.contentContainer}>
                  <p className={styles.description}> A chatbot that answers questions related to onboarding processes at Coast Capital based on the onboarding files uploaded by users to its knowledge base. </p>
                  <p className={styles.description}> Coast Companion was a project sponsored by coast capital and was my initial foray into leveraging generative AI services offered by AWS. As a preliminary chatbot, coast companion was made with expandability in mind so that it could answer all kinds of questions depending on the files uploaded to its knowledgebase. </p>
              </div>
         </div>
          <h2>Campus Explorer</h2>
          <div className={styles.mainContainer}>
              <div className={styles.contentContainer}>
                  <p className={styles.description}> A web app that enables users to query over ubc course and room datasets. Users can filter for courses based on averages, subjects, professors, etc.... They can also filter for rooms based on size, equipment, chairs, etc... </p>
                  <p className={styles.description}> Campus explorer was an opportunity for me to flex my react skills and to delver deeper into the world of TypeScript. </p>
              </div>
          </div>
          <h2>Expense Tracking App</h2>
          <div className={styles.mainContainer}>
              <div className={styles.contentContainer}>
                  <p className={styles.description}> An expense tracking app that allows users to budget their finances. Users can add a category and a budget, for example groceries $200. As the weeks go on they would record how much they spent and would see when or if they have gone over the budgets they allocated for the month.</p>
                  <p className={styles.description}> Expense tracker was a chance for me to further develop my frontend skills and move from HTML to React.</p>
              </div>
          </div>
      </div>
  )
}
