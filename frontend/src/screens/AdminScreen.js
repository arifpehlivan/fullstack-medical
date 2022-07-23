import React from 'react'
import Booking from '../components/Booking'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Patients from '../components/Patients'
import Slider from '../components/Slider'

function AdminScreen() {
    return (
        <div>
            <Header />
            <Slider />
            <Content />
            <Patients />
            <Booking />
            <Footer />
        </div>
    )
}

export default AdminScreen