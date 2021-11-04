import React, { useEffect } from "react";

interface INoScrollProps {
    className: string;
    children: React.ReactNode;
}

const NoScroll = (props: INoScrollProps) => {
    useEffect(() => {
        document.getElementsByTagName("body")[0].classList.add("no-scroll");

        return () => {
            document.getElementsByTagName("body")[0].classList.remove("no-scroll");
        };
    }, []);

    const { children, className } = props;
    return className ? <div className={className}>{children}</div> : <>{children}</>;
};

export default NoScroll;
