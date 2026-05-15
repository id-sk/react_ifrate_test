import React from 'react';

export interface MicExternalOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MicExternalOnIcon = ({ size, ...props }: MicExternalOnIconProps) => {
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
        d="M9.60425 7.29183H4.97925C4.47925 6.73975 4.16675 6.01058 4.16675 5.2085C4.16675 3.47933 5.56258 2.0835 7.29175 2.0835C9.02091 2.0835 10.4167 3.47933 10.4167 5.2085C10.4167 6.01058 10.1042 6.73975 9.60425 7.29183ZM16.6667 2.0835C18.9688 2.0835 20.8334 3.94808 20.8334 6.25016V22.9168H18.7501V6.25016C18.7501 5.10433 17.8126 4.16683 16.6667 4.16683C15.5209 4.16683 14.5834 5.10433 14.5834 6.25016V18.7502C14.5834 21.0522 12.7188 22.9168 10.4167 22.9168C8.11466 22.9168 6.25008 21.0522 6.25008 18.7502H5.20841L4.16675 8.3335H10.4167L9.37508 18.7502H8.33341C8.33341 19.896 9.27091 20.8335 10.4167 20.8335C11.5626 20.8335 12.5001 19.896 12.5001 18.7502V6.25016C12.5001 3.94808 14.3647 2.0835 16.6667 2.0835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MicExternalOnIcon;
