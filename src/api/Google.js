import * as Google from 'expo-google-app-auth';
import Constants from 'expo-constants';

const scopes = ['profile', 'email'];

const loginAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      iosClientId: Constants.manifest.extra.googleAppId.ios,
      scopes,
    });

    if (result.type === 'success') {
      return Promise.resolve(result.accessToken);
      this.setState({
        signedIn: true,
        name: result.user.name,
        photoUrl: result.user.photoUrl,
      });
    }

    return Promise.reject('No success');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GoogleApi = {
  loginAsync,
};
