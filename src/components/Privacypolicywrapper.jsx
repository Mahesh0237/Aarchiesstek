import { BackgroundImage, Card, Center, Container, Stack, Text } from '@mantine/core'
import React from 'react'
function Privacypolicywrapper() {
  return (
    <>
      <Container size={1350} py={30} >
        <Card withBorder >
          <Card.Section inheritPadding py={10}>
            <Text style={{fontSize:"25px", color:"rgb(0 82 255)"}} fw={600} ta="center">Privacy Policy</Text>
          </Card.Section>
          <Card.Section withBorder inheritPadding py={10}>
            <Stack>
              <Text  ta="justify">
              Aarchiesstek acknowledges the paramount importance of maintaining complete confidentiality. We treat any personal information and/or proprietary business material disclosed to us with utmost discretion. All information provided by our prospective clients is strictly confidential and accessed only on a need-to-know basis.
              </Text>
              <Text  ta="justify">We take measures to protect this information, ensuring that it is kept secure and used solely by our trained staff for the purpose of the work you have engaged our office to perform. Your email address will not be used for any other purpose without your consent, and we will not disclose it to any third party. Rest assured that your information is never utilized for marketing, solicitation, or sold to anyone for such purposes.</Text>
              <Text  ta="justify">Our website incorporates security measures to safeguard against the loss, misuse, and alteration of information under our control. We employ encryption for all personal and financial data, making every effort to prevent unauthorized access as the information travels over the Internet. While we are committed to protecting your information, we cannot guarantee the absolute security of any data transmitted to us.</Text>
              <Text  ta="justify">The website may provide links to third-party websites and access to content, products, and services offered by third parties, including users, advertisers, affiliates, and sponsors. Please note that Aarchiesstek is not responsible for the availability of such third-party websites or the content they provide. We encourage users to review the privacy policies and terms of use posted on these websites before engaging with them. Aarchiesstek assumes no liability for any loss or damage incurred by users in their interactions with third parties.</Text>
              <Text  ta="justify">Our Privacy Policy and Terms and Conditions are subject to change. We advise clients to regularly check our website for any recent updates. The current Privacy Policy applies to all information we have about you and your account, unless otherwise stated.</Text>
            </Stack>
          </Card.Section>
          <Card.Section inheritPadding p={10}>
            <Text style={{fontSize:"25px", color:"rgb(0 82 255)"}} fw={600} ta="center">Mobile Apps</Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p={10}>
            <Stack>
              <Text  ta="justify">When you install our Applications, we will request the following permissions:</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Location access:</Text> This allows users to share their location in order to display nearby Aarchiesstek Centres/Institutes. If users grant permission to share their location, nearby Centres/Institutes will be shown; otherwise, the default view will be displayed.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Storage access:</Text> We require access to the device's storage to enable users to store Test Sheets, Answer Sheets, and Performance Reports for viewing their test analysis.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Device Camera access:</Text> This permission is necessary to obtain the user's profile image for display on the Profile page, user listings on the website analytics, or capturing Subjective Test Sheets, which are then shared with tutors for evaluation.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Device Microphone access:</Text> This permission is used to record audio for Speaking Tests.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Identity access:</Text> We request access to auto-fill the Gmail account on the device, expediting the user sign-up process.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Photos/Media/Files access:</Text> This permission allows users to select a profile picture from their device's gallery.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>SMS access:</Text> This permission facilitates auto-filling of OTP through SMS, ensuring a swift sign-up process.</Text>
              <Text  ta="justify"><Text component='span' fw={600}>Device ID & Call Information access:</Text> We require access to the Device ID of the user's device to identify and address device-specific bugs, thereby enhancing user experience.</Text>
              <Text  ta="justify">For further details, please feel free to contact one of our experts or email us at  <Text component='a' href='#' c="blue">info@aarchiesstek.com</Text>. Our representatives will respond to your inquiry promptly.</Text>
            </Stack>
          </Card.Section>
        </Card>
      </Container>
    </>
  )
}

export default Privacypolicywrapper