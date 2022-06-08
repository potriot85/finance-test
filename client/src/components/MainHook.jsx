import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/dataReducer";
import Main from "./Main";

const MainHook = () => {
  const data = useSelector((state) => state.dataPage.data);
  const timeUpdate = useSelector((state) => state.dataPage.timeUpdate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(timeUpdate));
  }, [timeUpdate]);

  return (
    <>
      <Main data={data} />
    </>
  );
};

export default MainHook;
