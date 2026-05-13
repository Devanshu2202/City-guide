import { useEffect, useState } from "react";

export const useFetch = (url: string) => {




    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        console.log("insideurl", url)


        try {
            setLoading(true);

            const res = await fetch(url);
            console.log("insideTryres", res)

            const data = await res.json();

            console.log("insideTry", data)

            setData(data);

        } catch (error) {

            setError(error as Error);

        } finally {

            setLoading(false);

        }
    };
    useEffect(() => {
        console.log("insideuseeffecturl", url)



        fetchData();

    }, [url]);

    console.log("fetchdata", data)

    return { data, loading, error };
};