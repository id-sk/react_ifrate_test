import React from 'react';

export interface WbAutoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WbAutoIcon = ({ size, ...props }: WbAutoIconProps) => {
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
        d="M7.23966 13.1769H9.6355L8.43758 9.37484L7.23966 13.1769ZM23.0209 7.2915L21.7709 13.8436L20.2084 7.2915H18.5417L16.9897 13.8436L15.7292 7.2915H14.9376C13.4063 5.38525 11.073 4.1665 8.43758 4.1665C3.83341 4.1665 0.104248 7.89567 0.104248 12.4998C0.104248 17.104 3.83341 20.8332 8.43758 20.8332C11.698 20.8332 14.5209 18.9478 15.8855 16.2186L15.9897 16.6665H17.8126L19.3751 10.3123L20.9376 16.6665H22.7605L24.8959 7.2915H23.0209ZM10.8334 16.6665L10.1042 14.5832H6.77091L6.04175 16.6665H4.06258L7.39591 7.2915H9.47925L12.8126 16.6665H10.8334Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WbAutoIcon;
