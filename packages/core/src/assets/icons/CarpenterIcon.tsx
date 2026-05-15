import React from 'react';

export interface CarpenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CarpenterIcon = ({ size, ...props }: CarpenterIconProps) => {
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
        d="M20.8523 15.1432L7.59188 1.88281L3.53979 5.9349L12.0085 18.0911C11.196 18.9036 11.196 20.2266 12.0085 21.0391L13.4773 22.5078C14.2898 23.3203 15.6127 23.3203 16.4252 22.5078L20.8419 18.0911C21.6648 17.2786 21.6648 15.9557 20.8523 15.1432ZM14.9565 21.0286L13.4877 19.5599L17.9044 15.1432L19.3731 16.612L14.9565 21.0286Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CarpenterIcon;
