import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  padding: 15px;
  margin: 15px;
  background-color: white;
  border-radius: 20px;
  height: 150px;
  position: relative;
`;

const InputArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  color: #38a3a5;
  font-size: 24px;
`;

const AttachIcon = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: #38a3a5;
  font-size: 24px;
  transform: rotate(45deg);
`;

const MessageInput: React.FC = () => {
  return (
    <InputContainer>
      <ArrowIcon>≫</ArrowIcon>
      <InputArea placeholder="Enter your message" />
      <AttachIcon>📎</AttachIcon>
    </InputContainer>
  );
};

export default MessageInput;