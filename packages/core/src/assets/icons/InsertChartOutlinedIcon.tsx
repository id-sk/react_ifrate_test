import React from 'react';

export interface InsertChartOutlinedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertChartOutlinedIcon = ({ size, ...props }: InsertChartOutlinedIconProps) => {
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
      
<path d="M9.37508 17.7083H7.29175V10.4167H9.37508V17.7083ZM13.5417 17.7083H11.4584V7.29167H13.5417V17.7083ZM17.7084 17.7083H15.6251V13.5417H17.7084V17.7083ZM20.3126 19.8958H4.68758V5.20833H20.3126V19.8958ZM20.3126 3.125H4.68758C3.54175 3.125 2.60425 4.0625 2.60425 5.20833V19.7917C2.60425 20.9375 3.54175 21.875 4.68758 21.875H20.3126C21.4584 21.875 22.3959 20.9375 22.3959 19.7917V5.20833C22.3959 4.0625 21.4584 3.125 20.3126 3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default InsertChartOutlinedIcon;
