import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
	const renderBooks = books.map((book) => {
		return <BookShow key={book.id} book={book} onDelete={onDelete} />;
	});
	return <div className="book-list">{renderBooks}</div>;
}
export default BookList;
