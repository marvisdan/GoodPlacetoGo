export const constant = {
  REQUESTED_BOOKS: 'REQUESTED_BOOKS',
  REQUESTED_BOOKS_SUCCEDED: 'REQUESTED_BOOKS_SUCCEDED',
  REQUESTED_BOOKS_FAILED: 'REQUESTED_BOOKS_FAILED',
  FETCHED_BOOKS: 'FETCHED_BOOKS',
};

export const requestBooks = () => ({
  type: constant.REQUESTED_BOOKS,
});

export const requestBooksSuccess = data => ({
  type: constant.REQUESTED_BOOKS_SUCCEDED,
  data,
});

export const requestBooksError = () => ({
  type: constant.REQUESTED_BOOKS_FAILED,
});

export const fetchBooks = () => ({
  type: constant.FETCHED_BOOKS,
});
