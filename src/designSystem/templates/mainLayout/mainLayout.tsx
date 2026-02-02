import React from 'react';
import { Button } from '../../atoms/button/button';
import { ImageAtom } from '../../atoms/image/image';
import {
  LayoutContainer,
  Header,
  Main,
  HeaderRight,
  HeaderLeft,
  HeaderCenter,
  Title,
} from './mainLayout.styles';
import { ScrollToTop } from '../../atoms/scrollToTop/scrollToTop';
import { useTheme } from '../../../app/providers/themeProvider/useTheme';

export interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  id?: string;
}

const rickAsset = '/assets/rick-svgrepo-com.svg';

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title, id = 'main-layout' }) => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <LayoutContainer id={id} data-testid={id}>
      <Header>
        <HeaderLeft>
          <ImageAtom src={rickAsset} alt="Rick Icon" width={60} height={60} />
        </HeaderLeft>
        <HeaderCenter>
          <Title as="h1" size="xxl" color="primary" align="center">
            {title}
          </Title>
        </HeaderCenter>
        <HeaderRight>
          <Button onClick={toggleTheme} aria-label="Toggle theme">
            {themeMode === 'light' ? '🌙' : '☀️'}
          </Button>
        </HeaderRight>
      </Header>
      <Main>{children}</Main>
      <ScrollToTop />
    </LayoutContainer>
  );
};
