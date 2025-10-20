const BlogList = ({ posts }) => {
	return (
		<div className="blog">
			{posts.map((post) => (
				<div key={post.id} className="post-preview">
					<h2>{post.title}</h2>
					<p>{post.author}</p>
					<button
						// onClick={() => {
						// 	handleDelete(post.id);
						// }}
						className="btn-delete">
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
