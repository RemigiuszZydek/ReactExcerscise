import BookShow from "./BookShow";

function BookList({ books }) {
	const renderBooks = books.map((book) => {
		return <BookShow key={book.id} book={book} />;
	});
	return <div className="book-list">{renderBooks}</div>;
}
export default BookList;
