import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isLoading, error } = useFetch("http://localhost:8000/posts/" + id);

	return (
		<div className="blog-datails">
			{isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}

			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p className="author">Written by: {blog.author}</p>
					<div className="blog-body">{blog.body}</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
