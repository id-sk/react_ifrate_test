import React from 'react';

export interface AddLinkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddLinkIcon = ({ size, ...props }: AddLinkIconProps) => {
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
      
<path d="M8.33325 9.89592H16.6666V11.9792H8.33325V9.89592ZM20.9374 10.9376H22.9166C22.9166 8.06258 20.5833 5.72925 17.7083 5.72925H13.5416V7.70841H17.7083C19.4895 7.70841 20.9374 9.15633 20.9374 10.9376ZM4.06242 10.9376C4.06242 9.15633 5.51034 7.70841 7.29159 7.70841H11.4583V5.72925H7.29159C4.41659 5.72925 2.08325 8.06258 2.08325 10.9376C2.08325 13.8126 4.41659 16.1459 7.29159 16.1459H11.4583V14.1667H7.29159C5.51034 14.1667 4.06242 12.7188 4.06242 10.9376ZM19.7916 10.9376H17.7083V14.0626H14.5833V16.1459H17.7083V19.2709H19.7916V16.1459H22.9166V14.0626H19.7916V10.9376Z" fill="currentColor"/>
    </svg>
  );
};

export default AddLinkIcon;
