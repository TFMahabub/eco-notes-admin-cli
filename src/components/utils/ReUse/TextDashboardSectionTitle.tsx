import React from 'react';

function TextDashboardSectionTitle(
  { children, extraClass }: { children: React.ReactNode, extraClass?: string },
) {
  return (
    <p className={`text-lg font-semibold text-textColor tracking-wide ${extraClass}`}>
      {children}
    </p>
  );
}

export default TextDashboardSectionTitle;
