import React from 'react';

export interface CommentsDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CommentsDisabledIcon = ({ size, ...props }: CommentsDisabledIconProps) => {
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
        d="M18.2136 13.9011H19.4324V11.8178H16.1303L15.0886 10.7761H19.4324V8.69279H13.0053L11.9636 7.65112H19.4324V5.56779H9.88029L5.71362 1.40112H21.5157C22.6615 1.40112 23.599 2.33862 23.599 3.48446V19.2865L18.2136 13.9011ZM2.86987 1.50529L1.40112 2.97404L2.76571 4.34904V15.9845C2.76571 17.1303 3.70321 18.0678 4.84904 18.0678H16.4845L22.0157 23.599L23.4845 22.1303L2.86987 1.50529ZM6.93237 8.69279H7.10946L9.19279 10.7761H6.93237V8.69279ZM6.93237 13.9011V11.8178H10.2345L12.3178 13.9011H6.93237Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CommentsDisabledIcon;
