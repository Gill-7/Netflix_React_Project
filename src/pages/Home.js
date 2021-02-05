import React from 'react'
import { FaqsContainer } from '../container/faqs'
import { Feature, OptForm } from '../components'
import { JumbotronContainer } from '../container/jumbotron'
import { FooterContainer } from '../container/Footer'
import { HeaderContainer } from '../container/Header' 

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch any anywhere. Cancel at any time.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder='Email Address' />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break></OptForm.Break>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
