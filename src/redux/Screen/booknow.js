import React from "react";
import Navbar from "./navbar";
import { Box } from "@mui/material";

const Booknow = () => {
  const inputs = [
    {
      id: 1,
      name: "Starting Location",
      type: "text",
      placeholder: "Provide a starting location",
      label: "Starting Location",
      required: true,
    },
    {
      id: 2,
      name: "Ending location",
      type: "text",
      placeholder: "Provide a ending location",
      label: "Ending Location",
      required: true,
    },
    {
      id: 3,
      name: "cost",
      type: "number",
      placeholder: "Booking Cost",
      label: "Cost",
      required: false,
    },
    {
      id: 4,
      name: "Confirmation",
      type: "text",
      placeholder: "Confirmation",
      label: "Confirmation",
      Confirmation: {
        Pending: false,
        Approved: false,
        Rejected: false,
      },
    },
    {
      id: 5,
      name: "Cancelation",
      type: "text",
      placeholder: "Cancelation Policy",
      label: "Cancelation Policy",
      required: false,
    },
    {
      id: 6,
      name: "DateofBooking",
      type: "text",
      placeholder: "Date of Booking",
      label: "Date of Booking",
      required: false,
    },
    {
      id: 7,
      name: "Rent booking Starting Time",
      type: "text",
      placeholder: "Rent booking Starting Time",
      label: "Rent booking Starting Time",
      required: false,
    },
    {
      id: 8,
      name: "Rent Booking Ending time.",
      type: "text",
      placeholder: "Rent Booking Ending time.",
      label: "Rent Booking Ending time.",
      required: false,
    },
    {
      id: 9,
      name: "userId",
      type: "text",
      placeholder: "User ID",
      label: "User ID",
      required: true,
    },
  ];
  return (
    <div>
      <Navbar />
      <h1>Booknow</h1>
      <h1>Booknow</h1>
      <h1>Booknow</h1>
      <p>
        a. All Car details. b. Starting location c. Ending location d. Cost e.
        Confirmation i. Pending ii. Approved iii. Rejected f. Cancelation Policy
        g. DateofBooking h. Rent booking Starting Time i. Rent Booking Ending
        time. j. userId
      </p>
      <div>
        <form>
          <Box>
            <input placeholder="Provide a starting location" />
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Booknow;
