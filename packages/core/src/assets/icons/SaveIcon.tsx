import React from 'react';

export interface SaveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SaveIcon = ({ size, ...props }: SaveIconProps) => {
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
        d="M17.7083 3.125H5.20833C4.05208 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.05208 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V7.29167L17.7083 3.125ZM12.5 19.7917C10.7708 19.7917 9.375 18.3958 9.375 16.6667C9.375 14.9375 10.7708 13.5417 12.5 13.5417C14.2292 13.5417 15.625 14.9375 15.625 16.6667C15.625 18.3958 14.2292 19.7917 12.5 19.7917ZM15.625 9.375H5.20833V5.20833H15.625V9.375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SaveIcon;
