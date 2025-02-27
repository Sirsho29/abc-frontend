import React from "react";
import MainHeader from "@/app/_containers/MainHeader";

import SavedQustions from "../_components/SavedQustions";
const page = () => {
  return (
    <MainHeader name="Saved Questions">
      <SavedQustions />
      <SavedQustions />
      <SavedQustions />
    </MainHeader>
  );
};

export default page;
