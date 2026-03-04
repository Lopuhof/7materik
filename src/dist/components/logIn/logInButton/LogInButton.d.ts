import { type MouseEventHandler } from 'react';
import './logInButton.sass';
type LogInButtonProps = {
    className: string;
    type: "submit" | "reset" | "button";
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    buttonText: string;
};
declare const LogInButton: (props: LogInButtonProps) => import("react/jsx-runtime").JSX.Element;
export default LogInButton;
//# sourceMappingURL=LogInButton.d.ts.map