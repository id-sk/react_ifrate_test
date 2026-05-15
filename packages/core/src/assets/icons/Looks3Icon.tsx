import React from 'react';

export interface Looks3IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Looks3Icon = ({ size, ...props }: Looks3IconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM15.625 10.9375C15.625 11.8021 14.9271 12.5 14.0625 12.5C14.9271 12.5 15.625 13.1979 15.625 14.0625V15.625C15.625 16.7812 14.6875 17.7083 13.5417 17.7083H9.375V15.625H13.5417V13.5417H11.4583V11.4583H13.5417V9.375H9.375V7.29167H13.5417C14.6875 7.29167 15.625 8.21875 15.625 9.375V10.9375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Looks3Icon;
