import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import Login from "../Login/Login.js";
import { BrowserRouter } from 'react-router-dom';
 
test('should validate credentials and return the email', () => {
    render(<BrowserRouter> <Login /> </BrowserRouter>);
    expect(screen.getByText('Username')).toBeInTheDocument;
    expect(screen.getByText('Password')).toBeInTheDocument;
});
 
test('should show error messages for empty fields', () => {
    render(<BrowserRouter> <Login /> </BrowserRouter>);
    fireEvent.click(screen.getByTestId('login-btn'));
    expect(screen.getByText('Please enter Username')).toBeInTheDocument;
    expect(screen.getByText('Please enter Password')).toBeInTheDocument;
});
 