import React from 'react';

export interface CountertopsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CountertopsIcon = ({ size, ...props }: CountertopsIconProps) => {
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
      
<path d="M18.7499 10.4165V7.2915C18.7499 5.56234 17.3541 4.1665 15.6249 4.1665C13.8958 4.1665 12.4999 5.56234 12.4999 7.2915H14.5833C14.5833 6.71859 15.052 6.24984 15.6249 6.24984C16.1978 6.24984 16.6666 6.71859 16.6666 7.2915V10.4165H8.33325C9.47909 10.4165 10.4166 9.479 10.4166 8.33317V4.1665H4.16659V8.33317C4.16659 9.479 5.10409 10.4165 6.24992 10.4165H2.08325V12.4998H4.16659V20.8332H20.8333V12.4998H22.9166V10.4165H18.7499ZM13.5416 18.7498H11.4583V12.4998H13.5416V18.7498Z" fill="currentColor"/>
    </svg>
  );
};

export default CountertopsIcon;
