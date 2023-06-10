'use client';

import React from 'react';
import { Preflight, ThemeProvider, defaultTheme } from '@xstyled/emotion';

const theme = {
  ...defaultTheme,
};

export default function XStyledProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {children}
    </ThemeProvider>
  );
}
