import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
// import UserBadge from './UserBadge';


const BookContainer = styled.div`
    width: 186px;
    margin-right: 19px;
    margin-left: 5px;
    margin-bottom: 24px;
    padding: 6px 0;
`;

const ImgContainer = styled.div`
    width: 186px;
    height: auto;
    overflow: hidden;
    height: 279px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px;
`;

const Img = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;
    margin-bottom: 12px;
`;

const Author = styled.strong`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #888;
    margin: 0 5px 0;
    font-size: 14px;
    font-family: 'proxima-nova', sans-serif;
`;
const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  font-family: Merriweather, Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  color: #333;
`;

const Book = ({ img, title, author }) => (
  <BookContainer>
    <ImgContainer>
      <Img alt="" src={img} />
    </ImgContainer>
    <ButtonContainer>
      {/* <UserBadge /> */}
      <Button />
    </ButtonContainer>
    <Title>
      {title}
    </Title>
    <div>
      <span>
        par
      </span>
      <Author>
        {author}
      </Author>
    </div>
  </BookContainer>
);

Book.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default Book;
