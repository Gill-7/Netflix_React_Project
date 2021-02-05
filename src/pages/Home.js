import React from 'react'
import { FaqsContainer } from '../container/faqs'
import { JumbotronContainer } from '../container/jumbotron'
import { FooterContainer } from '../container/Footer'

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
