import { useState, useEffect } from "react";

const useFetch = (url, updateFlag) => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { signal: abortCont.signal })
			.then((res) => {
				if (res.ok !== true) {
					throw Error("Could not fetch from server");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("Fetch был остановлен нами принудительно в связи с размантажом компонента");
				} else {
					setError(err.message);
					setLoading(false);
				}
			}, [updateFlag]);

		return () => {
			abortCont.abort();
		};
	});

	return {
		data,
		isLoading,
		error,
	};
};

export default useFetch;
