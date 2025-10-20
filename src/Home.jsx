import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

	const { data, isLoading, error } = useFetch("http://localhost:8000/posts");

	return (
		<div className="home">
			{error && <div>{ error }</div>}
			{isLoading && <h3>Loading...</h3>}
			{data && <BlogList posts={data} />}
		</div>
	);
};

export default Home;
