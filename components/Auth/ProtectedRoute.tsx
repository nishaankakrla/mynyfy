
import React from 'react';

/**
 * Temporarily disabled Auth Guard for rapid UI development.
 * This component now simply renders its children.
 */
export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
