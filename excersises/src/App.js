import "./App.css";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
	const [books, setBooks] = useState([]);
	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const editBookById = async (id, newTitle) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title: newTitle,
		});
		console.log(response);
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data };
			}

			return book;
		});
		setBooks(updatedBooks);
	};
	const deletBookById = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`);

		const updatedBooks = books.filter((book) => {
			return book.id !== id;
		});
		setBooks(updatedBooks);
	};

	const createBook = async (title) => {
		const response = await axios.post("http://localhost:3001/books", {
			title,
		});
		console.log(response);
		const updatedBooks = [...books, response.data];
		setBooks(updatedBooks);
	};

	return (
		<div className="app">
			<BookList books={books} onDelete={deletBookById} onEdit={editBookById} />
			<BookCreate onSubmit={createBook} />
		</div>
	);
}

export default App;
