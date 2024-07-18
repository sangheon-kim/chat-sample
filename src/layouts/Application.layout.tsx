import React from "react";

type ApplicationLayoutProps = React.PropsWithChildren<{}>;
const ApplicationLayout = (props: ApplicationLayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default ApplicationLayout;
