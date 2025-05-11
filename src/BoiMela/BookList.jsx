import BookRow from "./BookRow"

const BOOKS = [
    {
        id: 101,
        title: "Animal Farm",
        author: "George Orwell",
        featured: false,
    },
    {
        id: 102,
        title: "Ancient History",
        author: "Humayun Ahmed",
        featured: false,
    },
    {
        id: 103,
        title: "The Macbeth",
        author: "Willium Shakespear",
        featured: false,
    },
    {
        id: 104,
        title: "Guie de Mupasa",
        author: "George Orwell",
        featured: false,
    },
    {
        id: 105,
        title: "Great Gatsby",
        author: "Scott Pitergeraid",
        featured: false,
    },
];

function BookList(){
    return(
        <ul className="space-y-4 ">
        {
            BOOKS.map ((book) => 
                <li key={book.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg" >
                    <BookRow book={book} />
                </li>
            )
        }
        </ul>
    ) 
}
export default BookList