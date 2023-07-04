import React from "react";
import { blackTheme } from "../../theme";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab, theme }) {
  theme = blackTheme;
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.text,
          backgroundColor: theme.body,
          border: `solid 0px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.orange, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.text, theme.body)}
      >
        {text}
      </a>
    </div>
  );
}
