import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Book from './Book';
import BackgroundImg from '../assets/images/books.jpeg';


const HeaderContainer = styled.div`
  padding: 134px 0;
  color: white;
  margin-bottom: 32px;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 42px;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  font-family: proxima-nova, arial, sans-serif;
`;
const background = {
  backgroundImage: `url( ${BackgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
};

const BookListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 24px auto;
`;

class BookList extends Component {
  componentDidMount() {
    const { fetchBookList } = this.props;
    fetchBookList();
  }

  renderBookList() {
    const { bookList } = this.props;
    const list = bookList.map((book) => {
      const author = book.authors.map(aut => (aut.name));
      return (
        <Book
          key={book.id}
          title={book.title}
          img={book.image}
          author={author}
        />
      );
    });
    return list;
  }

  render() {
    const { bookList } = this.props;
    if (!bookList) {
      return (
        <div>
          Loading
        </div>
      );
    }
    return (
      <div>
        <HeaderContainer style={background}>
          <HeaderTitle>
            Free Books
          </HeaderTitle>
        </HeaderContainer>
        <BookListContainer>
          {this.renderBookList()}
        </BookListContainer>
      </div>
    );
  }
}

BookList.propTypes = {
  fetchBookList: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

BookList.defaultProps = {
  bookList: [],
};

export default BookList;
