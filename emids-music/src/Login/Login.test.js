import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import Login from "./Login";
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

test('should show error message for wrong credentials', () => {
    render(<BrowserRouter> <Login /> </BrowserRouter>);
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByTestId('login-btn'));
    expect(screen.getByText('Username or Password is wrong')).toBeInTheDocument;
});