import React from 'react';

export interface ThunderstormIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThunderstormIcon = ({ size, ...props }: ThunderstormIconProps) => {
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
      
<path d="M18.6666 6.27067C18.177 3.31234 15.5937 1.0415 12.4999 1.0415C10.2291 1.0415 8.15617 2.27067 7.06242 4.229C4.26034 4.59359 2.08325 7.02067 2.08325 9.89567C2.08325 13.0519 4.65617 15.6248 7.81242 15.6248H18.2291C20.8124 15.6248 22.9166 13.5207 22.9166 10.9373C22.9166 8.49984 21.052 6.48942 18.6666 6.27067Z" fill="currentColor"/>
<path d="M15.4166 16.6665L12.3958 20.1248L14.4791 21.1665L12.0312 23.9582H14.7916L17.8124 20.4998L15.7291 19.4582L18.177 16.6665H15.4166Z" fill="currentColor"/>
<path d="M9.16659 16.6665L6.14575 20.1248L8.22909 21.1665L5.78117 23.9582H8.54159L11.5624 20.4998L9.47909 19.4582L11.927 16.6665H9.16659Z" fill="currentColor"/>
    </svg>
  );
};

export default ThunderstormIcon;
