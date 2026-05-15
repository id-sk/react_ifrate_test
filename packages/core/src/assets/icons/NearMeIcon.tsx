import React from 'react';

export interface NearMeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NearMeIcon = ({ size, ...props }: NearMeIconProps) => {
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
        d="M21.875 3.125L3.125 10.9687V11.9896L10.25 14.75L13 21.875H14.0208L21.875 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NearMeIcon;
