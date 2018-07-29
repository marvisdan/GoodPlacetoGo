import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import BookList from '../components/BookList';

function mapStateToProps(state) {
  return {
    bookList: state.books.data,
    loading: state.loading,
  };
}

function mapDispatchToProps(disptach) {
  return {
    fetchBookList: () => disptach(fetchBooks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
