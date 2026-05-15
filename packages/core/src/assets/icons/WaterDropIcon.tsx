import React from 'react';

export interface WaterDropIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WaterDropIcon = ({ size, ...props }: WaterDropIconProps) => {
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
        d="M12.5001 2.0835C6.948 6.82308 4.16675 10.9168 4.16675 14.3752C4.16675 19.5627 8.12508 22.9168 12.5001 22.9168C16.8751 22.9168 20.8334 19.5627 20.8334 14.3752C20.8334 10.9168 18.0522 6.82308 12.5001 2.0835ZM8.15633 14.5835C8.54175 14.5835 8.85425 14.8543 8.92716 15.2293C9.35425 17.5418 11.3022 18.3335 12.7188 18.2189C13.1667 18.1981 13.5417 18.5522 13.5417 19.0002C13.5417 19.4168 13.2084 19.7606 12.7917 19.7814C10.573 19.9168 7.97925 18.646 7.3855 15.4897C7.30216 15.021 7.67716 14.5835 8.15633 14.5835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WaterDropIcon;
