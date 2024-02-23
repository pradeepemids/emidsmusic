import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import UserProfile from "../UserProfile/UserProfile";
import ApiManager from "../Shared/ApiManager";

test('should validate user profile load', () => {
    const testEntry = {
        "username": "testuser",
        "email": "test@emids.com",
        "password": "Test1234"
      };
    ApiManager.registerUser(testEntry);
    ApiManager.validateCredentials(testEntry);
    const activeUser = {
      email: testEntry.email,
      isActive: true
    }
    const currentUser = activeUser.email;
    localStorage.setItem('currentUser', currentUser);    
    render(<UserProfile/>);
    expect(screen.getByText('Profile Settings')).toBeInTheDocument;
});