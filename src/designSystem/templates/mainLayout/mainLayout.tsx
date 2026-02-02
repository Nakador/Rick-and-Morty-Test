import React from 'react';
import { Button } from '../../atoms/button/button';
import { LayoutContainer, Header, Main } from './mainLayout.styles';
import { ScrollToTop } from '../../atoms/scrollToTop/scrollToTop';
import { Text } from '../../atoms/text/text';
import { useTheme } from '../../../app/providers/themeProvider/useTheme';

export interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  id?: string;
}

const rickAsset = "/assets/rick-svgrepo-com.svg";

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title,
  id = 'main-layout'
}) => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <LayoutContainer id={id} data-testid={id}>
      <Header>
        <img src={rickAsset} alt="assets/rick-svgrepo-com.svg" width={60} height={60}/>
        <Text as="h1" size="xxl" weight="900" color="primary" align="center">{title}</Text>
        <Button onClick={toggleTheme} aria-label="Toggle theme">
          {themeMode === 'light' ? '🌙' : '☀️'}
        </Button>
      </Header>
      <Main>
        {children}
      </Main>
      <ScrollToTop />
    </LayoutContainer>
  );
};
