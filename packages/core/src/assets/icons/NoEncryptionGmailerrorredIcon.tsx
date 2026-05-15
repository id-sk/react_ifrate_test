import React from 'react';

export interface NoEncryptionGmailerrorredIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoEncryptionGmailerrorredIcon = ({ size, ...props }: NoEncryptionGmailerrorredIconProps) => {
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
        d="M10.0052 6.08333C10.0052 4.30208 11.4531 2.85417 13.2344 2.85417C15.0156 2.85417 16.4635 4.30208 16.4635 6.08333V8.16667H12.0156L21.5677 17.7188V10.25C21.5677 9.10417 20.6302 8.16667 19.4844 8.16667H18.4427V6.08333C18.4427 3.20833 16.1094 0.875 13.2344 0.875C10.9323 0.875 8.99479 2.38542 8.30729 4.45833L10.0052 6.15625V6.08333ZM2.92188 2.02083L1.45312 3.48958L6.25521 8.30208C5.47396 8.60417 4.90104 9.36458 4.90104 10.25V20.6667C4.90104 21.8125 5.83854 22.75 6.98438 22.75H19.4844C19.8385 22.75 20.1615 22.6562 20.4531 22.5L22.0781 24.125L23.5469 22.6562L2.92188 2.02083ZM13.2344 17.5417C12.0885 17.5417 11.151 16.6042 11.151 15.4583C11.151 14.8437 11.4323 14.2917 11.8594 13.9062L14.7865 16.8333C14.401 17.2604 13.849 17.5417 13.2344 17.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NoEncryptionGmailerrorredIcon;
