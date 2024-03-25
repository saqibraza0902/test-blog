import CommonLayout from "@/layout";
import DashboardLayout from "@/layout/newblog";
import React from "react";

const Dashboard = () => {
  const content = (
    <CommonLayout>
      <DashboardLayout />
    </CommonLayout>
  );
  return content;
};
export default Dashboard;
