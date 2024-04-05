import { Button, Card, Checkbox, Grid, LoadingOverlay, NumberInput, Text, TextInput, Textarea } from '@mantine/core'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { notifications } from '@mantine/notifications'
function Contactusform() {
    const [loadingEffect, setLoadingEffect] = useState(false)
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const updateName = (e) => {
        setName(e.currentTarget.value)
        setNameError('')
    }
    const [companyName, setCompanyName] = useState('')
    const [companyNameError, setCompanyNameError] = useState('')
    const updateCompanyName = (e) => {
        setCompanyName(e.currentTarget.value)
        setCompanyNameError('')
    }

    const [jobTitle, setJobTitle] = useState('')
    const [jobTitleError, setJobTitleError] = useState('')
    const updateJobTitle = (e) => {
        setJobTitle(e.currentTarget.value)
        setJobTitleError('')
    }
    const [businessMail, setBusinessMail] = useState('')
    const [businessMailError, setBusinessMailError] = useState('')
    const updateBusinessMail = (e) => {
        setBusinessMail(e.currentTarget.value)
        setBusinessMailError('')
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setphoneNumberError] = useState('')
    const updatePhoneNumber = (value) => {
        setPhoneNumber(value)
        setphoneNumberError('')
    }
    const [countryRegion, setCountryRegion] = useState('')
    const [coountryRegionError, setCountryregionError] = useState('')
    const updateCountryregion = (e) => {
        setCountryRegion(e.currentTarget.value)
        setCountryregionError('')
    }
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')
    const updateMessage = (e) => {
        setMessage(e.currentTarget.value)
        setMessageError('')
    }
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        setLoadingEffect(true)
        if (name === '') {
            setNameError('enter full name')
            setLoadingEffect(false)
            return false
        }
        if (companyName === '') {
            setCompanyNameError('enter company name')
            setLoadingEffect(false)
            return false
        }
        if (jobTitle === '') {
            setJobTitleError('enter job title')
            setLoadingEffect(false)
            return false
        }
        if (businessMail === '') {
            setBusinessMailError('enter the business mail')
            setLoadingEffect(false)
            return false
        }
        if (phoneNumber === '') {
            setphoneNumberError('enter the phone Number')
            setLoadingEffect(false)
            return false
        }
        if (countryRegion === '') {
            setCountryregionError('enter the country region')
            setLoadingEffect(false)
            return false
        }
        if (message === '') {
            setMessageError('enter the message')
            setLoadingEffect(false)
            return false
        }
        emailjs
            .sendForm('service_lj6x18k', 'template_rf4km7o', form.current, {
                publicKey: 'Tom4f8mTZZsG-vfcN',
            })
            .then(
                () => {
                    setLoadingEffect(false)
                    console.log('SUCCESS!')
                    form.current.reset()
                    notifications.show({
                        title: 'Sucess',
                        message: 'ThankYou we have received your message',
                        color: 'green'
                    })
                    setName('')
                    setCompanyName('')
                    setJobTitle('')
                    setBusinessMail('')
                    setPhoneNumber('')
                    setCountryRegion('')
                    setMessage('')

                },
                (error) => {
                    setLoadingEffect(false)
                    console.log('FAILED...', error.text)
                    notifications.show({
                        title: 'Error',
                        message: error.text,
                        color: 'red'
                    })
                },
            )
    }
    return (
        <div className='container'>
            <div className="intro2">
                <h2 className="mb-0">Connect with us</h2>
                <Text py={20}>
                    We work with technology organizations of all sizes, from small startups to established enterprises across the globe.
                    If you need emerging technology expertise to help solve a problem and would like to discuss
                    how Aarchiesstek or any of our subsidiaries can work with you, please provide your contact details,
                    and we will reach out to you within one business day.
                </Text>
            </div>
            <Card withBorder my={20}>
                <form ref={form} onSubmit={sendEmail}>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <TextInput
                                label="Full Name"
                                placeholder='enter full name'
                                withAsterisk
                                size="md"
                                name="full_name"
                                value={name}
                                error={nameError}
                                onChange={updateName}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <TextInput
                                label="Company Name"
                                placeholder='enter company name'
                                withAsterisk
                                size="md"
                                name='company_name'
                                value={companyName}
                                error={companyNameError}
                                onChange={updateCompanyName}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <TextInput
                                label="Job Title"
                                placeholder='enter Job title'
                                withAsterisk
                                size="md"
                                name='job_title'
                                value={jobTitle}
                                error={jobTitleError}
                                onChange={updateJobTitle}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <TextInput
                                label="Business Mail"
                                placeholder='Business mail'
                                withAsterisk
                                size="md"
                                name='business_mail'
                                value={businessMail}
                                error={businessMailError}
                                onChange={updateBusinessMail}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <NumberInput
                                label="Phone Number"
                                placeholder='xxxxxxxxxx'
                                withAsterisk
                                size="md"
                                name='phone_number'
                                hideControls
                                value={phoneNumber}
                                error={phoneNumberError}
                                onChange={updatePhoneNumber}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <TextInput
                                label="Country Region"
                                placeholder='country '
                                withAsterisk
                                size="md"
                                name='country_region'
                                value={countryRegion}
                                error={coountryRegionError}
                                onChange={updateCountryregion}
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Textarea
                                label="Describe your requirement"
                                placeholder="Message"
                                withAsterisk
                                size="md"
                                name='message'
                                value={message}
                                error={messageError}
                                onChange={updateMessage}
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Checkbox
                                defaultChecked
                                label={
                                    <Text size='md' component='a' href='/privacypolicy' >
                                        I agree to receive other communications from Aarchiesstek.
                                    </Text>
                                }
                            />
                        </Grid.Col>
                        <Grid.Col span={12} className='mt-3'>
                            <Button size="lg" onClick={sendEmail} fullWidth>Submit</Button>
                        </Grid.Col>
                    </Grid>
                </form>
                <LoadingOverlay
                    visible={loadingEffect}
                    zIndex={1000}
                    overlayProps={{ radius: "sm", blur: 2 }}
                />
            </Card>
        </div>
    )
}

export default Contactusform