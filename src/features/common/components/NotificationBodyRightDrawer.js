function NotificationBodyRightDrawer() {
  return (
    <>
      <div className={'grid mt-3 card rounded-box p-3 bg-blue-100'}>
        EC2 instance has been modified
      </div>
      <div className={'grid mt-3 bg-base-200 card rounded-box p-3'}>
        RDS instance is now up and running in your AWS account
      </div>
      <div className={'grid mt-3 card rounded-box p-3 bg-base-200'}>
        S3 bucket has been created in your AWS account
      </div>
      <div className={'grid mt-3 bg-base-200 card rounded-box p-3'}>
        Lambda function has been deployed
      </div>
      <div className={'grid mt-3 card rounded-box p-3 bg-base-200'}>
        CloudFront distribution has been updated
      </div>
      <div className={'grid mt-3 bg-base-200 card rounded-box p-3'}>
        IAM policy has been attached to a user
      </div>
    </>
  )
}

export default NotificationBodyRightDrawer
