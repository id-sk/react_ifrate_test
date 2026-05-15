import React from 'react';

export interface Timer10SelectIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Timer10SelectIcon = ({ size, ...props }: Timer10SelectIconProps) => {
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
        d="M13.5417 8.33325V16.6666H10.4167V8.33325H13.5417ZM13.5417 5.20825H10.4167C8.68758 5.20825 7.29175 6.60409 7.29175 8.33325V16.6666C7.29175 18.3958 8.68758 19.7916 10.4167 19.7916H13.5417C15.2709 19.7916 16.6667 18.3958 16.6667 16.6666V8.33325C16.6667 6.60409 15.2709 5.20825 13.5417 5.20825ZM1.04175 8.33325H3.12508V19.7916H6.25008V5.20825H1.04175V8.33325ZM19.2709 11.4583C18.4063 11.4583 17.7084 12.1666 17.7084 13.0208V15.1041C17.7084 15.9583 18.4063 16.6666 19.2709 16.6666H21.8751V17.7083H17.7084V19.7916H22.3959C23.2605 19.7916 23.9584 19.0937 23.9584 18.2291V16.1458C23.9584 15.2812 23.2605 14.5833 22.3959 14.5833H19.7917V13.5416H23.9584V11.4583H19.2709Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Timer10SelectIcon;
