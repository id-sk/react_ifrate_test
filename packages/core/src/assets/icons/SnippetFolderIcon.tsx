import React from 'react';

export interface SnippetFolderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SnippetFolderIcon = ({ size, ...props }: SnippetFolderIconProps) => {
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
      
<path d="M16.5416 10.9376L18.2291 12.6251V16.1459H15.1041V10.9376H16.5416ZM22.9166 8.33341V18.7501C22.9166 19.8959 21.9791 20.8334 20.8333 20.8334H4.16659C3.02075 20.8334 2.08325 19.8959 2.08325 18.7501L2.09367 6.25008C2.09367 5.10425 3.02075 4.16675 4.16659 4.16675H10.4166L12.4999 6.25008H20.8333C21.9791 6.25008 22.9166 7.18758 22.9166 8.33341ZM19.7916 11.9792L17.1874 9.37508H13.5416V17.7084H19.7916V11.9792Z" fill="currentColor"/>
    </svg>
  );
};

export default SnippetFolderIcon;
