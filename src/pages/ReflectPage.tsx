import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/common/Navigation';
import EmotionChart from '../components/reflect/EmotionChart';
import MessageInput from '../components/reflect/MessageInput';
import BottomNavigation from '../components/common/BottomNavigation';

const PageContainer = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #38a3a5;
  font-weight: bold;
  font-size: 24px;
`;

const ReflectPage: React.FC = () => {
  return (
    <PageContainer>
      <Navigation />
      <EmotionChart />
      <MessageInput />
      <LogoContainer>HiT</LogoContainer>
      <BottomNavigation />
    </PageContainer>
  );
};

export default ReflectPage;