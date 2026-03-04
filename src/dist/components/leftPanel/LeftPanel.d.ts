import React from 'react';
import './leftPanel.sass';
type LeftPanelProps = {
    onClick?: () => void;
    openModalWindow: () => void;
    modal?: boolean;
    setModal?: React.Dispatch<React.SetStateAction<boolean>>;
    closeModalWindow?: () => void;
};
declare function LeftPanel(props: LeftPanelProps): import("react/jsx-runtime").JSX.Element;
export default LeftPanel;
//# sourceMappingURL=LeftPanel.d.ts.map