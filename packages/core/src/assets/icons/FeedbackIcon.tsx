import React from 'react';

export interface FeedbackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FeedbackIcon = ({ size, ...props }: FeedbackIconProps) => {
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
        d="M20.8333 2.08331H4.16659C3.02075 2.08331 2.09367 3.02081 2.09367 4.16665L2.08325 22.9166L6.24992 18.75H20.8333C21.9791 18.75 22.9166 17.8125 22.9166 16.6666V4.16665C22.9166 3.02081 21.9791 2.08331 20.8333 2.08331ZM13.5416 14.5833H11.4583V12.5H13.5416V14.5833ZM13.5416 10.4166H11.4583V6.24998H13.5416V10.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FeedbackIcon;
