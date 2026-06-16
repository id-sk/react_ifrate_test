import React from 'react';

export interface FoodBankIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FoodBankIcon = ({ size, ...props }: FoodBankIconProps) => {
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
      
<path d="M12.5001 3.125L4.16675 9.375V21.875H20.8334V9.375L12.5001 3.125ZM13.0209 13.0208C13.0209 13.8854 12.323 14.5833 11.4584 14.5833V18.75H10.4167V14.5833C9.55216 14.5833 8.85425 13.8854 8.85425 13.0208V9.89583H9.89591V13.0208H10.4167V9.89583H11.4584V13.0208H11.9792V9.89583H13.0209V13.0208ZM15.6251 18.75H14.5834V15.1042H13.5417V11.9792C13.5417 10.8333 14.4792 9.89583 15.6251 9.89583V18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default FoodBankIcon;
