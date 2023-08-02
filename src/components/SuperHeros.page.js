import { useEffect, useState } from "react";
import axios from "axios";

export const SuperHeros = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // https://akabab.github.io/superhero-api/api/all.json
        axios.get('http://localhost:4000/superheros')
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    , []);

  return (
    <>
        <div>
            <h2>SuperHeros</h2>
            {data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </div>
    </>
  );
};
