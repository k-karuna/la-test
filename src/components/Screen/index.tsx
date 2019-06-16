import React from 'react';
import Root from './Root';
import Header from '@/components/Header';
import MainSection from '@/components/MainSection';

/**
 * Base layout of the  screen.
 */
const Screen = (props: {}) => {
  return (
    <Root>
      <Header rootAddress="#" ieoAddress="#" username="Bruce Wayne" />
      <MainSection />
    </Root>
  );
};

// Export.
export default Screen;
