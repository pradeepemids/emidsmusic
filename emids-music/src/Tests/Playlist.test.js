import React from "react";
import Playlist from "../Playlist/Playlist/Playlist";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; // Make sure to import this line
import { render, screen, fireEvent } from "@testing-library/react";

describe("Playlist Component", () => {
  it("renders PlaylistTable component", () => {
    render(
      <BrowserRouter>
        {" "}
        <Playlist />{" "}
      </BrowserRouter>
    );

    expect(screen.getByText("PlayLists")).toBeInTheDocument();
  });
});

// test("should validate dashboard load", () => {
//   render(<Playlist />);
//   expect(screen.getByText("Trending Songs")).toBeInTheDocument;
// });
