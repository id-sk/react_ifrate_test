import React from 'react';

export interface SimCardDownloadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SimCardDownloadIcon = ({ size, ...props }: SimCardDownloadIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M18.7501 2.08325H10.4167L4.16675 8.33325V20.8333C4.16675 21.9791 5.10425 22.9166 6.25008 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V4.16659C20.8334 3.02075 19.8959 2.08325 18.7501 2.08325ZM12.5001 17.7083L8.33341 13.5416H11.4584V9.39575L13.5417 9.37492V13.5416H16.6667L12.5001 17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default SimCardDownloadIcon;
