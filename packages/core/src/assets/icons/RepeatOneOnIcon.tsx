import React from 'react';

export interface RepeatOneOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RepeatOneOnIcon = ({ size, ...props }: RepeatOneOnIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M21.8751 1.04163H3.12508C1.97925 1.04163 1.04175 1.97913 1.04175 3.12496V21.875C1.04175 23.0208 1.97925 23.9583 3.12508 23.9583H21.8751C23.0209 23.9583 23.9584 23.0208 23.9584 21.875V3.12496C23.9584 1.97913 23.0209 1.04163 21.8751 1.04163ZM7.29175 7.29163H17.7084V10.4166L21.8751 6.24996L17.7084 2.08329V5.20829H5.20841V11.4583H7.29175V7.29163ZM17.7084 17.7083H7.29175V14.5833L3.12508 18.75L7.29175 22.9166V19.7916H19.7917V13.5416H17.7084V17.7083ZM13.5417 15.625V9.37496H12.5001L10.4167 10.4166V11.4583H11.9792V15.625H13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default RepeatOneOnIcon;
