import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import Dashboard from "./Dashboard";
 
test('should validate dashboard load', () => {
    render(<Dashboard/>);
    expect(screen.getByText('Trending Songs')).toBeInTheDocument;
});
 
test("check if search button click triggers search function", () => {
    const handleOnSubmitMock = jest.fn();
    render(<Dashboard/>);
    screen.getByRole("search", { name: "search-form" }).onsubmit = handleOnSubmitMock;

    // Search button click
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    // Expectations for search submission
    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
