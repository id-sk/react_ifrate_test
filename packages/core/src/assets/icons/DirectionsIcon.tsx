import React from 'react';

export interface DirectionsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionsIcon = ({ size, ...props }: DirectionsIconProps) => {
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
        d="M22.3033 11.0262L13.9804 2.69287C13.1679 1.88037 11.845 1.88037 11.0325 2.69287L2.68872 11.0262C1.87622 11.8387 1.87622 13.1616 2.68872 13.9741L11.0325 22.3075C11.845 23.12 13.1679 23.12 13.9804 22.3075L22.3033 13.9741C23.1262 13.1512 23.1262 11.8387 22.3033 11.0262ZM14.0637 15.0991V12.495H10.4179V15.62H8.33455V11.4533C8.33455 10.8804 8.8033 10.4116 9.37622 10.4116H14.0637V7.80745L17.7096 11.4533L14.0637 15.0991Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DirectionsIcon;
