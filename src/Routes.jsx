import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './context/publicRoute'
import ProtectedRoute from './context/protectedRoute'
import SignInScreen from './pages/signin'
import HomeScreen from './pages/home'

export default function RoutesComponent() {
    return (
        <>
            <BrowserRouter future={{ v7_relativeSplatPath: true }}>
                <Routes>                    
                    <Route element={<PublicRoute />}>
                        <Route path="/" element={<SignInScreen />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/home" element={<HomeScreen />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
