import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("Название");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	const clearForm = () => {
			setBody("");
			setTitle("");
			setAuthor("");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setIsPending(true);
		fetch("http://localhost:8000/posts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("New post was added");
			setIsPending(false);
			clearForm();
			navigate('/');
		});
	};

	return (
		<div className="create">
			<h2>Add new post!</h2>
			<form onSubmit={handleSubmit}>
				<label>Post Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>

				<label>Post Content</label>
				<textarea
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}></textarea>

				<label>Author</label>
				<select
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}>
					<option value="" className="displayNone"></option>
					<option value="John Doe">John Doe</option>
					<option value="Mari Jani">Mari Jani</option>
					<option value="Tom Soer">Tom Soer</option>
				</select>
				{isPending && <button disabled>Adding post...</button>}
				{!isPending && <button>Create Post</button>}
			</form>
		</div>
	);
};

export default Create;
