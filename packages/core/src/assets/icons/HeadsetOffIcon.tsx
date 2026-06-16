import React from 'react';

export interface HeadsetOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HeadsetOffIcon = ({ size, ...props }: HeadsetOffIconProps) => {
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
      
<path d="M12.8802 3.79175C16.9115 3.79175 20.1719 7.05217 20.1719 11.0834V13.1667H17.1302L22.2552 18.2917V11.0834C22.2552 5.90633 18.0573 1.70841 12.8802 1.70841C10.849 1.70841 8.96354 2.35425 7.43229 3.45841L8.93229 4.95841C10.0677 4.21883 11.4219 3.79175 12.8802 3.79175ZM2.74479 1.41675L1.42188 2.75008L4.89062 6.20842C4.01562 7.62508 3.50521 9.30217 3.50521 11.0834V18.3751C3.50521 20.1042 4.90104 21.5001 6.63021 21.5001H9.75521V13.1667H5.58854V11.0834C5.58854 9.86467 5.89062 8.72925 6.41146 7.72925L16.0052 17.3334V21.5001H19.1302C19.4427 21.5001 19.7448 21.4376 20.026 21.3543L22.2552 23.5834L23.5781 22.2605L2.74479 1.41675Z" fill="currentColor"/>
    </svg>
  );
};

export default HeadsetOffIcon;
