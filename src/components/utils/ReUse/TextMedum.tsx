import React from 'react';

function TextMedium({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) {
  return (
    <h4 className={`text-lg font-normal ${extraClass}`}>
      {children}
    </h4>
  );
}

export default TextMedium;
