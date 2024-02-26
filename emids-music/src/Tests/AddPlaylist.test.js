import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Make sure to import this line
import AddPlaylist from "../Playlist/AddPlaylist.jsx";

test("should validate credentials and return the email", () => {
  render(
    <BrowserRouter>
      {" "}
      <AddPlaylist />{" "}
    </BrowserRouter>
  );
  expect(screen.getByText("Add Playlist")).toBeInTheDocument();
});

test("should show error messages for empty fields", () => {
  render(
    <BrowserRouter>
      {" "}
      <AddPlaylist />{" "}
    </BrowserRouter>
  );
  fireEvent.click(screen.getByTestId("addPlaylist-btn"));
});
