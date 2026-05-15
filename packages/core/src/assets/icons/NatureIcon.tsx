import React from 'react';

export interface NatureIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NatureIcon = ({ size, ...props }: NatureIconProps) => {
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
        d="M13.4532 16.7031C17.0678 16.276 19.8803 13.2031 19.8803 9.46354C19.8803 5.43229 16.6199 2.17188 12.5886 2.17188C8.55737 2.17188 5.29696 5.43229 5.29696 9.46354C5.29696 13.0781 7.92196 16.0677 11.3699 16.6406V20.7448H5.11987V22.8281H19.7032V20.7448H13.4532V16.7031Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NatureIcon;
