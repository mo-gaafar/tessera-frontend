import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicInfo from '../pages/BasicInfo/BasicInfo';
import { BrowserRouter } from 'react-router-dom';
import { Details } from '../pages/BasicInfo/BasicInfoSecondPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe ('basicinfo', () => {})