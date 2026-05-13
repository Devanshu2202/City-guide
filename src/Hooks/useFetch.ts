import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            const res = await fetch(url);
            const json = await res.json() as T;

            setData(json);

        } catch (error) {

            setError(error as Error);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
};