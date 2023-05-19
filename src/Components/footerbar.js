import React from "react";
import { Box } from "@mui/material";

const Footerbar = () => {
  return (
    <div className="p-5">
      <div className="bg-dark align-center rounded">
        <Box>
          <h5 className="p-3 text-center text-white">
            All rights reserved. Rently 2023 | Car Rental Service - Powered by
            Admin
          </h5>
        </Box>
      </div>
    </div>
  );
};

export default Footerbar;
