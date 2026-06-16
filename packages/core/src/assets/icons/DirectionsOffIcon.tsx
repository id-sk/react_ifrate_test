import React from 'react';

export interface DirectionsOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionsOffIcon = ({ size, ...props }: DirectionsOffIconProps) => {
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
      
<path d="M13.6796 10.1017H14.3775V7.49756L18.0234 11.1434L16.3671 12.7996L19.9296 16.3517L22.6275 13.6538C23.44 12.8413 23.44 11.5184 22.6275 10.7059L14.3046 2.37256C13.4921 1.56006 12.1692 1.56006 11.3567 2.37256L8.64836 5.07048L13.6796 10.1017ZM3.24211 2.61214L1.76294 4.08089L5.70044 8.01839L3.00252 10.7163C2.19002 11.5288 2.19002 12.8517 3.00252 13.6642L11.3463 21.9976C12.1588 22.8101 13.4817 22.8101 14.2942 21.9976L16.9817 19.2996L20.9192 23.2371L22.3879 21.7684L3.24211 2.61214ZM10.7317 15.3101H8.64836V11.1434C8.64836 11.0913 8.66919 11.0496 8.67961 10.9976L10.7317 13.0496V15.3101Z" fill="currentColor"/>
    </svg>
  );
};

export default DirectionsOffIcon;
