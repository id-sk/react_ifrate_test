import React from 'react';

export interface PinInvokeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PinInvokeIcon = ({ size, ...props }: PinInvokeIconProps) => {
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
      
<path d="M22.9166 12.5V18.75C22.9166 19.8958 21.9791 20.8333 20.8333 20.8333H4.16659C3.02075 20.8333 2.08325 19.8958 2.08325 18.75V6.24996C2.08325 5.10413 3.02075 4.16663 4.16659 4.16663H14.5833V6.24996H4.16659V18.75H20.8333V12.5H22.9166ZM22.9166 7.29163C22.9166 5.56246 21.5208 4.16663 19.7916 4.16663C18.0624 4.16663 16.6666 5.56246 16.6666 7.29163C16.6666 9.02079 18.0624 10.4166 19.7916 10.4166C21.5208 10.4166 22.9166 9.02079 22.9166 7.29163ZM11.9478 12.625L8.99992 15.5729L10.4687 17.0416L13.4166 14.0937L15.6249 16.3125V10.4166H9.72909L11.9478 12.625Z" fill="currentColor"/>
    </svg>
  );
};

export default PinInvokeIcon;
