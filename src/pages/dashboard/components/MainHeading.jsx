import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../redux/slices/DashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.dashboard.count);
  return (
    <div>
      <h1 className="invisible">Dashboard</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Click</button>
    </div>
  );
};

export default Dashboard;
