import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import "./quote.css";

const QuoteComponent = ({ quote, author, avatarImage, profession, index }) => {
  return (
    <Paper
      id="quote"
      elevation={24}
      className={index == 1 ? "quote-rigth" : "quote-left"}
    >
      <div style={{ textAlign: "center" }}>
        <svg
          className="quote-svg"
          aria-hidden="true"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <span className="quote-text">
        <span className="quotation-mark">{'"'}</span> {quote}{" "}
        <span className="quotation-mark">{'"'}</span>
      </span>
      <div className="center" style={{ marginTop: "20px" }}>
        <Avatar
          alt="avatar quote"
          src={avatarImage}
          sx={{ width: 55, height: 55 }}
          style={{ marginRight: "20px" }}
        />
        <span className="quote-author">
          {author} | <span className="quote-profession">{profession}</span>
        </span>
      </div>
    </Paper>
  );
};

export default QuoteComponent;
