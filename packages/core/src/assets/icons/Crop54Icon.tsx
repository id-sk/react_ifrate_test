import React from 'react';

export interface Crop54IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Crop54Icon = ({ size, ...props }: Crop54IconProps) => {
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
        d="M19.7917 4.1665H5.20833C4.0625 4.1665 3.125 5.104 3.125 6.24984V18.7498C3.125 19.8957 4.0625 20.8332 5.20833 20.8332H19.7917C20.9375 20.8332 21.875 19.8957 21.875 18.7498V6.24984C21.875 5.104 20.9375 4.1665 19.7917 4.1665ZM19.7917 18.7498H5.20833V6.24984H19.7917V18.7498Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Crop54Icon;
