import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true);

                const res = await fetch(url);
                const data = await res.json();

                setData(data);

            } catch (error) {

                setError(error);

            } finally {

                setLoading(false);

            }
        };

        fetchData();

    }, [url]);

    return { data, loading, error };
};