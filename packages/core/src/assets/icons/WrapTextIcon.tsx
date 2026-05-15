import React from 'react';

export interface WrapTextIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WrapTextIcon = ({ size, ...props }: WrapTextIconProps) => {
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
        d="M3.64575 18.7501H9.89575V16.6667H3.64575V18.7501ZM20.3124 4.16675H3.64575V6.25008H20.3124V4.16675ZM17.1874 10.4167H3.64575V12.5001H17.4478C18.5937 12.5001 19.5312 13.4376 19.5312 14.5834C19.5312 15.7292 18.5937 16.6667 17.4478 16.6667H15.1041V14.5834L11.9791 17.7084L15.1041 20.8334V18.7501H17.1874C19.4895 18.7501 21.3541 16.8855 21.3541 14.5834C21.3541 12.2813 19.4895 10.4167 17.1874 10.4167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WrapTextIcon;
