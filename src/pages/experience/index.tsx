import React from 'react'
import experienceStyles from '../../styles/experience.module.scss'
import styles from '../../styles/components.module.scss'

export default function Experience() {
  return (
	<div className={experienceStyles.gridContainer}>
		<h2 className={`${styles.subHeadingText}`}>
			Newton - Software Developer (Sep 2022 - Apr 2023)
		</h2>
		<li>
			Implemented python script in Django backend that would automatically subscribe/unsubscribe users designated as inactive from SendGrid. 
		</li>
		<li>
			Completed migration of email service from Mailgun to SendGrid by porting existing emails (Pre-Authorized Debit Agreement, Large Virtual Crypto Transaction, Automatic Account Verification, Profit Helper), and writing their corresponding unit + integration tests to ensure correctness.
		</li>
		<li>
			Implemented various push notifications for users in the Django backend using OneSignal API (Account Verification, Limit Order Expiry, Large Virtual Crypto Transaction, Manual Verification)
		</li>
		<li>
			Developed push notification microservice with Pulumi using AWS Lambda and Eventbridge for recurring buy failures (Insufficient Funds, Net Trading Limit)
		</li>
		<li>
			Implemented AWS Lambda function that transforms email event data to internal data structure, converts to parquet, and sends to s3 bucket for further processing.
		</li>
	</div>
  )
}
