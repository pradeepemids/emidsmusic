import React from "react";
import Register from "../Login/Register.js";
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Make sure to import this line
 
 
test('should validate credentials and return the email', () => {
    render(<BrowserRouter> <Register /> </BrowserRouter>);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Confirm Password')).toBeInTheDocument();
});
 
test('should show error messages for empty fields', () => {
    render(<BrowserRouter> <Register /> </BrowserRouter>);
    fireEvent.click(screen.getByTestId('register-btn'));
    expect(screen.getByText('Please enter Username')).toBeInTheDocument();
    expect(screen.getByText('Please enter Email')).toBeInTheDocument();
    expect(screen.getByText('Please enter Password')).toBeInTheDocument();
});
 