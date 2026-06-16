import React from 'react';

export interface BatchPredictionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BatchPredictionIcon = ({ size, ...props }: BatchPredictionIconProps) => {
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
      
<path d="M17.7083 8.33331H7.29159C6.14575 8.33331 5.20825 9.27081 5.20825 10.4166V20.8333C5.20825 21.9791 6.14575 22.9166 7.29159 22.9166H17.7083C18.8541 22.9166 19.7916 21.9791 19.7916 20.8333V10.4166C19.7916 9.27081 18.8541 8.33331 17.7083 8.33331ZM13.5416 21.3541H11.4583V19.7916H13.5416V21.3541ZM13.5416 18.75H11.4583C11.4583 17.1875 8.85409 15.625 8.85409 13.5416C8.85409 11.5312 10.4895 9.89581 12.4999 9.89581C14.5103 9.89581 16.1458 11.5312 16.1458 13.5416C16.1458 15.625 13.5416 17.1875 13.5416 18.75ZM18.7499 6.77081H6.24992C6.24992 5.90623 6.94784 5.20831 7.81242 5.20831H17.1874C18.052 5.20831 18.7499 5.90623 18.7499 6.77081ZM17.7083 3.64581H7.29159C7.29159 2.78123 7.9895 2.08331 8.85409 2.08331H16.1458C17.0103 2.08331 17.7083 2.78123 17.7083 3.64581Z" fill="currentColor"/>
    </svg>
  );
};

export default BatchPredictionIcon;
