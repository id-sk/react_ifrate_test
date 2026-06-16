import React from 'react';

export interface CreditScoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CreditScoreIcon = ({ size, ...props }: CreditScoreIconProps) => {
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
      
<path d="M20.8333 3.125H4.16659C3.01034 3.125 2.09367 4.05208 2.09367 5.20833L2.08325 17.7083C2.08325 18.8646 3.01034 19.7917 4.16659 19.7917H9.37492V17.7083H4.16659V11.4583H22.9166V5.20833C22.9166 4.05208 21.9895 3.125 20.8333 3.125ZM20.8333 7.29167H4.16659V5.20833H20.8333V7.29167ZM15.552 18.9271L12.6041 15.9792L11.1353 17.4479L15.552 21.875L22.9166 14.5104L21.4478 13.0417L15.552 18.9271Z" fill="currentColor"/>
    </svg>
  );
};

export default CreditScoreIcon;
