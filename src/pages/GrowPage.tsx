import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/common/Navigation';
import CategorySection from '../components/grow/CategorySection';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

const LogoContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #38a3a5;
  font-weight: bold;
  font-size: 24px;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 10px;
`;

const GrowPage: React.FC = () => {
  const learnModules = [
    { id: 'ei', title: 'Emotional Intelligence', bgColor: 'linear-gradient(135deg, #00bcd4, #2196f3)' },
    { id: 'nvc', title: 'Non-violent Communication', bgColor: 'linear-gradient(135deg, #ffb0ed, #ff99cc)' },
    { id: 'cb', title: 'Cognitive Biases', bgColor: 'linear-gradient(135deg, #8860d0, #5e60ce)' },
    { id: 'de', title: 'De-escalation', bgColor: 'linear-gradient(135deg, #ff5e62, #ff9966)' },
    { id: 'lf', title: 'Logical Fallacies', bgColor: 'linear-gradient(135deg, #8a5a44, #c89b7b)' },
    { id: 'al', title: 'Active Listening', bgColor: 'linear-gradient(135deg, #43cea2, #85ffbd)' },
  ];

  const playModules = [
    { id: 'cf', title: 'Constructive Feedback', bgColor: 'linear-gradient(135deg, #d4fc79, #96e6a1)' },
    { id: 'ra', title: 'Replying to Agression', bgColor: 'linear-gradient(135deg, #f6d365, #fda085)' },
    { id: 'hm', title: 'Handling Miscommunication', bgColor: 'linear-gradient(135deg, #ff9a9e, #fad0c4)' },
    { id: 'co', title: 'Convincing Others', bgColor: 'linear-gradient(135deg, #89f7fe, #66a6ff)' },
  ];

  const testModules = [
    { id: 'knowledge', title: 'Knowledge', bgColor: 'linear-gradient(135deg, #ff7e5f, #feb47b)' },
    { id: 'skills', title: 'Skills', bgColor: 'linear-gradient(135deg, #0f0c29, #302b63)' },
  ];

  const handleModuleClick = (moduleId: string) => {
    console.log(`Module clicked: ${moduleId}`);
    // Future implementation: Navigate to module content
  };

  return (
    <PageContainer>
      <Navigation />
      <ContentContainer>
        <CategorySection 
          title="Learn" 
          modules={learnModules} 
          onModuleClick={handleModuleClick}
        />
        <CategorySection 
          title="Play" 
          modules={playModules} 
          onModuleClick={handleModuleClick}
        />
        <CategorySection 
          title="Test" 
          modules={testModules} 
          onModuleClick={handleModuleClick}
        />
      </ContentContainer>
      <LogoContainer>HiT</LogoContainer>
    </PageContainer>
  );
};

export default GrowPage;