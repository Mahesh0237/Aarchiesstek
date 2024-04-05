import { Card, Container, Stack, Text } from '@mantine/core'
import React from 'react'

function Copyrightwrapper() {
    return (

        <Container py={30} size={1350}>
            <Card withBorder >
                <Card.Section inheritPadding py={10}>
                    <Text  fw={600} ta="center" style={{fontSize:"25px", color:"blue"}}>Copyright Information</Text>
                </Card.Section>
                <Card.Section withBorder inheritPadding py={10}>    
                    <Stack>
                       <Text size = "lg" fw={700}>NO PERMISSION WILL BE GRANTED FOR THE FOLLOWING INFORMATION ON THIS WEBSITE:</Text>
                        <Text ta="justify" size='md'>The Permission to use/copy the documents specified above does not extend to the design or layout of the aarchiesstek.com website or any other Aarchiesstek owned, operated, licensed or controlled site. Elements of Aarchiesstek's website are protected by trade dress, trademark, unfair competition, and other laws and may not be copied or imitated in whole or in part. DISCLAIMER: The documents and graphics on this website could include technical inaccuracies or typographical errors. Changes are periodically done to the information herein. Aarchiesstek may make improvements and/or changes herein at any time Aarchiesstek makes no representations about the accuracy of the information contained in the documents and graphics on this website for any purpose. Aarchiesstek hereby disclaims all warranties and conditions with regard to this information, including all implied warranties and conditions of merchantability, fitness for any particular purpose, title and non-infringement. In no event shall Aarchiesstek be liable for any kind of damage resulting from any cause or reason, arising out of or in connection with the use or performance of information available from this website.</Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Container>
    )
}

export default Copyrightwrapper