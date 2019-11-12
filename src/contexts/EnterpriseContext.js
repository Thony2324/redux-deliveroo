import React from "react";

//  { isEnterprise, setIsEnterprise }
export const EnterpriseContext = React.createContext(null);

export const EnterpriseProvider = ({ children }) => {
  const [isEnterprise, setIsEnterprise] = React.useState(false);

  return (
    <EnterpriseContext.Provider value={{ isEnterprise, setIsEnterprise }}>
      {children}
    </EnterpriseContext.Provider>
  );
};

export const useIsEnterprise = () => {
  const enterpriseCtx = React.useContext(EnterpriseContext);
  if (enterpriseCtx === null) {
    throw new Error("EnterpriseProvider is missing !");
  }
  return enterpriseCtx;
};
