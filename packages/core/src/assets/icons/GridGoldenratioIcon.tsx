import React from 'react';

export interface GridGoldenratioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GridGoldenratioIcon = ({ size, ...props }: GridGoldenratioIconProps) => {
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
        d="M22.9166 11.4583V9.37492H15.6249V2.08325H13.5416V9.37492H11.4583V2.08325H9.37492V9.37492H2.08325V11.4583H9.37492V13.5416H2.08325V15.6249H9.37492V22.9166H11.4583V15.6249H13.5416V22.9166H15.6249V15.6249H22.9166V13.5416H15.6249V11.4583H22.9166ZM13.5416 13.5416H11.4583V11.4583H13.5416V13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GridGoldenratioIcon;
