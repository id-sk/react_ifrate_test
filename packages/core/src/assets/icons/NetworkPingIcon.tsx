import React from 'react';

export interface NetworkPingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NetworkPingIcon = ({ size, ...props }: NetworkPingIconProps) => {
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
        d="M12.4999 15.2812L3.552 6.34375L2.08325 7.8125L10.9374 16.6667H4.16659V18.75H20.8333V16.6667H14.0624L19.427 11.3021C19.6978 11.4062 19.9999 11.4583 20.3124 11.4583C21.7499 11.4583 22.9166 10.2917 22.9166 8.85417C22.9166 7.41667 21.7499 6.25 20.3124 6.25C18.8749 6.25 17.7083 7.41667 17.7083 8.85417C17.7083 9.21875 17.7812 9.55208 17.9166 9.86458L12.4999 15.2812Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NetworkPingIcon;
