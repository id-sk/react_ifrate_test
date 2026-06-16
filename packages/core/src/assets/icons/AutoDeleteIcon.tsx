import React from 'react';

export interface AutoDeleteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AutoDeleteIcon = ({ size, ...props }: AutoDeleteIconProps) => {
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
      
<path d="M15.6251 2.08329H11.9792L10.9376 1.04163H5.72925L4.68758 2.08329H1.04175V4.16663H15.6251V2.08329Z" fill="currentColor"/>
<path d="M16.6667 9.37496C15.9376 9.37496 15.2397 9.47913 14.5834 9.67704V5.20829H2.08341V17.7083C2.08341 18.8541 3.02091 19.7916 4.16675 19.7916H10.0834C11.2501 22.25 13.7605 23.9583 16.6667 23.9583C20.698 23.9583 23.9584 20.6979 23.9584 16.6666C23.9584 12.6354 20.698 9.37496 16.6667 9.37496ZM16.6667 21.875C13.7917 21.875 11.4584 19.5416 11.4584 16.6666C11.4584 13.7916 13.7917 11.4583 16.6667 11.4583C19.5417 11.4583 21.8751 13.7916 21.8751 16.6666C21.8751 19.5416 19.5417 21.875 16.6667 21.875Z" fill="currentColor"/>
<path d="M17.1876 12.5H15.6251V17.7083L19.3751 19.8958L20.2084 18.6458L17.1876 16.875V12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default AutoDeleteIcon;
