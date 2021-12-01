import React from "react";
import { AuthenticatedUserProvider } from "./navigation/AuthenticatedUserProvider";
import RootNavigator from "./navigation/RootNavigator";

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
