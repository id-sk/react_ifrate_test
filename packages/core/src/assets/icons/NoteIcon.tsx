import React from 'react';

export interface NoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoteIcon = ({ size, ...props }: NoteIconProps) => {
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
      
<path d="M22.9166 10.4166L16.6666 4.16663H4.16659C3.02075 4.16663 2.08325 5.10413 2.08325 6.24996V18.7604C2.08325 19.9062 3.02075 20.8333 4.16659 20.8333L20.8333 20.8229C21.9791 20.8229 22.9166 19.8958 22.9166 18.75V10.4166ZM15.6249 5.72913L21.3541 11.4583H15.6249V5.72913Z" fill="currentColor"/>
    </svg>
  );
};

export default NoteIcon;
