import * as React from 'react';
import { useLocalAuthentication } from 'expo-local-authentication';

function App() {
  const [isAuthenticating, setIsAuthenticating] = React.useState(false);
  const [authenticationResult, setAuthenticationResult] = React.useState(null);
  const { authenticateAsync, cancelAuthenticateAsync } = useLocalAuthentication();

  const handleAuthentication = async () => {
    setIsAuthenticating(true);
    try {
      const result = await authenticateAsync();
      setAuthenticationResult(result);
    } catch (error) {
      setAuthenticationResult({ error });
    } finally {
      setIsAuthenticating(false);
    }
  };

  React.useEffect(() => {
    return () => {
      cancelAuthenticateAsync(); //Ensure cancellation on unmount
    };
  }, []);

  if (isAuthenticating) {
    return <Text>Authenticating...</Text>;
  }

  if (authenticationResult?.error) {
    return <Text>Authentication failed: {authenticationResult.error.message}</Text>;
  }

  if (authenticationResult?.success) {
    return <Text>Authentication successful!</Text>;
  }

  return (
    <View>
      <Button title="Authenticate" onPress={handleAuthentication} />
    </View>
  );
}

export default App;