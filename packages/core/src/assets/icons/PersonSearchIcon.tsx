import React from 'react';

export interface PersonSearchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonSearchIcon = ({ size, ...props }: PersonSearchIconProps) => {
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
      
<path d="M10.4166 11.4583C12.7178 11.4583 14.5833 9.59285 14.5833 7.29167C14.5833 4.99048 12.7178 3.125 10.4166 3.125C8.1154 3.125 6.24992 4.99048 6.24992 7.29167C6.24992 9.59285 8.1154 11.4583 10.4166 11.4583Z" fill="currentColor"/>
<path d="M10.7812 13.5521C7.93742 13.4479 2.08325 14.8646 2.08325 17.7083V19.7917H12.0208C9.44784 16.9167 10.7395 13.6562 10.7812 13.5521Z" fill="currentColor"/>
<path d="M20.2395 17.7292C20.6145 17.1146 20.8333 16.3958 20.8333 15.625C20.8333 13.3229 18.9687 11.4583 16.6666 11.4583C14.3645 11.4583 12.4999 13.3229 12.4999 15.625C12.4999 17.9271 14.3645 19.7917 16.6666 19.7917C17.4374 19.7917 18.1562 19.5625 18.7708 19.1979L21.4478 21.875L22.9166 20.4062L20.2395 17.7292ZM16.6666 17.7083C15.5208 17.7083 14.5833 16.7708 14.5833 15.625C14.5833 14.4792 15.5208 13.5417 16.6666 13.5417C17.8124 13.5417 18.7499 14.4792 18.7499 15.625C18.7499 16.7708 17.8124 17.7083 16.6666 17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default PersonSearchIcon;
