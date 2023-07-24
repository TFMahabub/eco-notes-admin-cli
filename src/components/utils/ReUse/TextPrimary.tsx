import React from 'react';

function TextPrimary({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) {
  return (
    <h4 className={`text-3xl font-bold ${extraClass}`}>
      {children}
    </h4>
  );
}

export default TextPrimary;
