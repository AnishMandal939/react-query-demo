import axios from "axios";
import { useQuery } from "react-query"; // to fetch data
const fetchSuperHeros = () =>{
  return axios.get('http://localhost:4000/superheros1')
}
export const RQSuperHeros = () => {
  // key, function to fetch data, returns promise
  const {isLoading, data,isError, error} = useQuery('super-heros', fetchSuperHeros)
  if(isLoading){
    return (
      <div>Loading...</div>
    )
  }
  if(isError){
    return <h4>{error.message}</h4>
  }
    return (
      <>
      <h2>RQSuperHeros page</h2>
      <ul>
        {data?.data.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
      </>
    )
  }
  