import React from 'react';

export interface ArticleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArticleIcon = ({ size, ...props }: ArticleIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM14.5833 17.7083H7.29167V15.625H14.5833V17.7083ZM17.7083 13.5417H7.29167V11.4583H17.7083V13.5417ZM17.7083 9.375H7.29167V7.29167H17.7083V9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default ArticleIcon;
