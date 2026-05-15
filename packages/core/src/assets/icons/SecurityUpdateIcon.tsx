import React from 'react';

export interface SecurityUpdateIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SecurityUpdateIcon = ({ size, ...props }: SecurityUpdateIconProps) => {
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
        d="M5.20825 3.12508V21.8751C5.20825 23.0209 6.14575 23.9584 7.29159 23.9584H17.7083C18.8541 23.9584 19.7916 23.0209 19.7916 21.8751V3.12508C19.7916 1.97925 18.8541 1.04175 17.7083 1.04175H7.29159C6.14575 1.04175 5.20825 1.97925 5.20825 3.12508ZM17.7083 18.7501H7.29159V6.25008H17.7083V18.7501ZM16.6666 12.5001H13.5416V8.33341H11.4583V12.5001H8.33325L12.4999 16.6667L16.6666 12.5001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SecurityUpdateIcon;
