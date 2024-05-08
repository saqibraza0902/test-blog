import CommonLayout from "@/layout";
import DashboardLayout from "@/layout/newblog";
import WithAuthLayout from "@/layout/withAuthLayout";
import React from "react";

const Dashboard = () => {
  const content = (
    <WithAuthLayout>
      <DashboardLayout />
    </WithAuthLayout>
  );
  return content;
};
export default Dashboard;
