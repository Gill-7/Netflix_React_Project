import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer displayFooter={false}>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href='#'>FAQs</Footer.Link>
                    <Footer.Link href='#'>Investor Relations</Footer.Link>
                    <Footer.Link href='#'>Ways to Watch</Footer.Link>
                    <Footer.Link href='#'>Coporate Information</Footer.Link>
                    <Footer.Link href='#'>Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Help Center</Footer.Link>
                    <Footer.Link href='#'>Jobs</Footer.Link>
                    <Footer.Link href='#'>Terms of Use</Footer.Link>
                    <Footer.Link href='#'>Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Account</Footer.Link>
                    <Footer.Link href='#'>Reddem gift cards</Footer.Link>
                    <Footer.Link href='#'>Privacy</Footer.Link>
                    <Footer.Link href='#'>Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Media Center</Footer.Link>
                    <Footer.Link href='#'>Buy gift cards</Footer.Link>
                    <Footer.Link href='#'>Cookies Preferences</Footer.Link>
                    <Footer.Link href='#'>Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Canada</Footer.Text>
        </Footer>
    )
}