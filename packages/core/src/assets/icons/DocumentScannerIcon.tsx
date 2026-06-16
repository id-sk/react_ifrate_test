import React from 'react';

export interface DocumentScannerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DocumentScannerIcon = ({ size, ...props }: DocumentScannerIconProps) => {
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
      
<path d="M7.29159 3.12508H4.16659V6.25008H2.08325V1.04175H7.29159V3.12508ZM22.9166 6.25008V1.04175H17.7083V3.12508H20.8333V6.25008H22.9166ZM7.29159 21.8751H4.16659V18.7501H2.08325V23.9584H7.29159V21.8751ZM20.8333 18.7501V21.8751H17.7083V23.9584H22.9166V18.7501H20.8333ZM19.7916 18.7501C19.7916 19.8959 18.8541 20.8334 17.7083 20.8334H7.29159C6.14575 20.8334 5.20825 19.8959 5.20825 18.7501V6.25008C5.20825 5.10425 6.14575 4.16675 7.29159 4.16675H17.7083C18.8541 4.16675 19.7916 5.10425 19.7916 6.25008V18.7501ZM15.6249 8.33341H9.37492V10.4167H15.6249V8.33341ZM15.6249 11.4584H9.37492V13.5417H15.6249V11.4584ZM15.6249 14.5834H9.37492V16.6667H15.6249V14.5834Z" fill="currentColor"/>
    </svg>
  );
};

export default DocumentScannerIcon;
