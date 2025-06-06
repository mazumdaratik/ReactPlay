import Header from './Header'
import SearchBar from './SearchBar'
import BookList from './BookList'

export default function Boimela() {
  return (
    <div className='mx-auto p-4'>
        <Header />
        <SearchBar />
        <BookList />
    </div>
  )
}

