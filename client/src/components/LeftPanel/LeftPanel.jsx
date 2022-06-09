import React from "react";
import { Formik, Form, Field } from "formik";
import { setTimeUpdate } from "../../redux/dataReducer";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import s from "./LeftPanel.module.css";

const LeftPanel = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.leftPanel}>
      <h5>Please select time period for updates of Tickers</h5>
      <Formik
        initialValues={{ time: "" }}
        onSubmit={(value) => {
          let timeUpdate = Number(value.time);
          dispatch(setTimeUpdate(timeUpdate));
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <div>
                <label>
                  <Field type="radio" name="time" value="10000" />
                  10 seconds
                </label>
              </div>
              <div>
                <label>
                  <Field type="radio" name="time" value="15000" />
                  15 seconds
                </label>
              </div>
              <div>
                <label>
                  <Field type="radio" name="time" value="20000" />
                  20 seconds
                </label>
              </div>
              <div>
                <label>
                  <Field type="radio" name="time" value="25000" />
                  25 seconds
                </label>
              </div>
              <div>
                <label>
                  <Field type="radio" name="time" value="30000" />
                  30 seconds
                </label>
              </div>
              <Button type={"submit"}>Apply</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LeftPanel;
