# json server to get mock data
npm i json-server
- now create db.json file in root directory - this will be our mock data
to server json data - add scripts inside package.json - "server": "json-server --watch db.json --port 3001"

react-router-dom
axios fro data fetching

- npm i react-query
- setup react-query provider in App.js
import { QueryClient, QueryClientProvider } from 'react-query';

// instance of query-client
const queryClient = new QueryClient();

same like redux

rtk applied in RQSuperheros


- in this we are using useQuery hook to fetch data
- useQuery hook takes 2 arguments - 1st is query key and 2nd is function which will return promise
- useQuery hook returns object with 3 properties - isLoading, isError, data
- we can use these properties to show loading, error and data
- we can also use useQueryClient hook to invalidate cache
- we can also use useMutation hook to update data

useQuery hook - is used in RQSuperheros component

## react query devtools

1- import devtools in app.js