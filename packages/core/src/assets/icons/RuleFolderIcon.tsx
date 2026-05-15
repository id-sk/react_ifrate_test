import React from 'react';

export interface RuleFolderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RuleFolderIcon = ({ size, ...props }: RuleFolderIconProps) => {
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
        d="M20.8333 6.25008H12.4999L10.4166 4.16675H4.16659C3.02075 4.16675 2.09367 5.10425 2.09367 6.25008L2.08325 18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V8.33341C22.9166 7.18758 21.9791 6.25008 20.8333 6.25008ZM8.15617 16.6667L5.20825 13.7188L6.677 12.2501L8.14575 13.7188L11.8333 10.0313L13.302 11.5001L8.15617 16.6667ZM18.1353 13.5417L19.7916 15.198L18.3228 16.6667L16.6666 15.0105L15.0103 16.6667L13.5416 15.198L15.1978 13.5417L13.5416 11.8855L15.0103 10.4167L16.6666 12.073L18.3228 10.4167L19.7916 11.8855L18.1353 13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RuleFolderIcon;
