import React from 'react';

export interface ExploreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExploreIcon = ({ size, ...props }: ExploreIconProps) => {
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
      
<path d="M12.4999 11.3541C11.8645 11.3541 11.3541 11.8646 11.3541 12.5C11.3541 13.1354 11.8645 13.6458 12.4999 13.6458C13.1353 13.6458 13.6458 13.1354 13.6458 12.5C13.6458 11.8646 13.1353 11.3541 12.4999 11.3541ZM12.4999 2.08331C6.74992 2.08331 2.08325 6.74998 2.08325 12.5C2.08325 18.25 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.25 22.9166 12.5C22.9166 6.74998 18.2499 2.08331 12.4999 2.08331ZM14.7812 14.7812L6.24992 18.75L10.2187 10.2187L18.7499 6.24998L14.7812 14.7812Z" fill="currentColor"/>
    </svg>
  );
};

export default ExploreIcon;
