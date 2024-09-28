import React from 'react'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsContent from '../components/NewsContent'

export default function MainPage() {
  return (
    <MainLayout>
        <Header />
        <NewsContent />
        <Footer />
    </MainLayout>
  )
}
