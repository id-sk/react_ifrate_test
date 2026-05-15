import React from 'react';

export interface HandymanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HandymanIcon = ({ size, ...props }: HandymanIconProps) => {
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
        d="M22.5924 19.4465L17.0715 13.9256H16.0403L13.3944 16.5715V17.6027L18.9153 23.1235C19.3215 23.5298 19.9778 23.5298 20.384 23.1235L22.5924 20.9152C22.9986 20.5194 22.9986 19.8527 22.5924 19.4465Z"
        fill="currentColor"
      />
      <path
        d="M18.0819 11.134L19.5507 9.6652L21.759 11.8735C22.9778 10.6548 22.9778 8.67562 21.759 7.45687L18.0715 3.76937L16.6028 5.23812V2.30062L15.8736 1.56104L12.1861 5.24854L12.9257 5.98812H15.8736L14.4049 7.45687L15.509 8.56104L12.4986 11.5715L8.19653 7.26937V5.7902L5.0507 2.64437L2.10278 5.59229L5.25903 8.74854H6.72778L11.0299 13.0506L10.1445 13.936H7.93612L2.41528 19.4569C2.00903 19.8631 2.00903 20.5194 2.41528 20.9256L4.62362 23.134C5.02987 23.5402 5.68612 23.5402 6.09237 23.134L11.6132 17.6131V15.4048L16.9778 10.0402L18.0819 11.134Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HandymanIcon;
