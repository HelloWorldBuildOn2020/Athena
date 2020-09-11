import React from "react";
import { SubTitle } from "./Text";

export const Container = (props) => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: '100vh', margin: '16px 16px' }}
    >
      <SubTitle>{props.subTitle}</SubTitle>
      {props.content}
    </div>
  );
};