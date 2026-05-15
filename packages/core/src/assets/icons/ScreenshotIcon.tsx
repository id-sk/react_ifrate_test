import React from 'react';

export interface ScreenshotIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScreenshotIcon = ({ size, ...props }: ScreenshotIconProps) => {
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
        d="M17.7083 1.05216L7.29159 1.04175C6.14575 1.04175 5.20825 1.97925 5.20825 3.12508V21.8751C5.20825 23.0209 6.14575 23.9584 7.29159 23.9584H17.7083C18.8541 23.9584 19.7916 23.0209 19.7916 21.8751V3.12508C19.7916 1.97925 18.8541 1.05216 17.7083 1.05216ZM17.7083 18.7501H7.29159V6.25008H17.7083V18.7501ZM9.89575 8.85425H12.4999V7.29175H8.33325V11.4584H9.89575V8.85425ZM12.4999 17.7084H16.6666V13.5417H15.1041V16.1459H12.4999V17.7084Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScreenshotIcon;
