import Amplify from '@aws-amplify/core';

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      region: process.env.REACT_APP_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID
    },
    Storage: {
      bucket: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_BUCKET_REGION,
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID
    }
  });
}
