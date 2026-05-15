import React from 'react';

export interface InterestsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InterestsIcon = ({ size, ...props }: InterestsIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.31242 14.0623C5.01034 14.0623 3.14575 15.9269 3.14575 18.229C3.14575 20.5311 5.01034 22.3957 7.31242 22.3957C9.6145 22.3957 11.4791 20.5311 11.4791 18.229C11.4791 15.9269 9.6145 14.0623 7.31242 14.0623ZM13.5416 14.0623V22.3957H21.8749V14.0623H13.5416ZM7.29159 2.604L2.08325 11.979H12.4999L7.29159 2.604ZM20.052 3.12484C18.9478 3.12484 18.1666 3.70817 17.7083 4.34359C17.2499 3.70817 16.4687 3.12484 15.3645 3.12484C13.7395 3.12484 12.4999 4.45817 12.4999 5.98942C12.4999 8.07275 15.0208 9.55192 17.7083 11.979C20.3958 9.55192 22.9166 8.07275 22.9166 5.98942C22.9166 4.45817 21.677 3.12484 20.052 3.12484Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InterestsIcon;
