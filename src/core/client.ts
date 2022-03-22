import {createUploadLink} from "apollo-upload-client";
import {onError} from 'apollo-link-error';
import {ApolloClient, ApolloLink, InMemoryCache} from 'apollo-boost';
import {AsyncStorage} from "react-native";


const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ORIGIN
});

const errorLink: any = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);

    // if (graphQLErrors[0].message === "Unauthorized") {
    //   localStorage.removeItem("token");
    // }
  }

  if (networkError) {
    console.log('networkError', networkError);
  }
});

const middleware = new ApolloLink((operation, forward) => {
  // const token = await AsyncStorage.getItem('token');
  operation.setContext(({headers = {}}, cookies: any) => ({
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : '',
    },
    credentials: "include",
  }));
  return forward(operation);
});

const link = ApolloLink.from([errorLink, middleware, uploadLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache: cache,
});

export default client;


