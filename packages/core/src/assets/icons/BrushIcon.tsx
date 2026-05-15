import React from 'react';

export interface BrushIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BrushIcon = ({ size, ...props }: BrushIconProps) => {
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
        d="M7.81124 14.5845C6.08207 14.5845 4.68624 15.9803 4.68624 17.7095C4.68624 19.0741 3.47791 19.7928 2.60291 19.7928C3.56124 21.0636 5.19666 21.8761 6.76957 21.8761C9.07166 21.8761 10.9362 20.0116 10.9362 17.7095C10.9362 15.9803 9.5404 14.5845 7.81124 14.5845ZM22.0925 4.82406L20.6967 3.42822C20.2904 3.02197 19.6342 3.02197 19.2279 3.42822L9.89457 12.7616L12.7592 15.6261L22.0925 6.29281C22.4987 5.88656 22.4987 5.23031 22.0925 4.82406Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrushIcon;
