import React from 'react';

export interface Looks6IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Looks6Icon = ({ size, ...props }: Looks6IconProps) => {
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
      
<path d="M11.4583 15.625H13.5417V13.5417H11.4583V15.625ZM19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM15.625 9.375H11.4583V11.4583H13.5417C14.6875 11.4583 15.625 12.3854 15.625 13.5417V15.625C15.625 16.7812 14.6875 17.7083 13.5417 17.7083H11.4583C10.3125 17.7083 9.375 16.7812 9.375 15.625V9.375C9.375 8.21875 10.3125 7.29167 11.4583 7.29167H15.625V9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default Looks6Icon;
