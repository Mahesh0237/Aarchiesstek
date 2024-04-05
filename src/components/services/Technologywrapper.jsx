import { Card, Tabs, Text } from '@mantine/core'
import React, { useState } from 'react'
import Deveopswrapper from './parts/Deveopswrapper'
import Javafullstackwrapper from './parts/Javafullstackwrapper'
import DataEngineerwrapper from './parts/DataEngineerwrapper'
import Networkservices from './parts/Networkservices'
import Qualityanalyst from './parts/Qualityanalyst'
import Businessanalyst from './parts/Businessanalyst'
function Technologywrapper() {
  return (
    <Card withBorder p={15} mb={50}>
      <Tabs defaultValue="Devops" color="rgba(20, 20, 20, 1)" variant="pills" radius="xl">
        <Card.Section withBorder inheritPadding py={10}>
          <Tabs.List>
            <Tabs.Tab value="Devops" >
              <Text fw={600} >Devops</Text>
            </Tabs.Tab>
            <Tabs.Tab value="javafullstack" >
              <Text fw={600}>Java Fullstack</Text>
            </Tabs.Tab>
            <Tabs.Tab value="Dataenginneer" >
              <Text fw={600}>Data Engineer</Text>
            </Tabs.Tab>
            <Tabs.Tab value="Networking" >
              <Text fw={600}>Networking</Text>
            </Tabs.Tab>
            {/* <Tabs.Tab value="salesforce" >
              <Text fw={600}>Salesforce</Text>
            </Tabs.Tab> */}
            <Tabs.Tab value="QA" >
              <Text fw={600}>Quality Analyst</Text>
            </Tabs.Tab>
            <Tabs.Tab value="BA" >
              <Text fw={600}>Business Analyst</Text>
            </Tabs.Tab>
          </Tabs.List>
        </Card.Section>
        <Card.Section withBorder inheritPadding py={10}>
          <Tabs.Panel value="Devops">
            <Deveopswrapper />
          </Tabs.Panel>

          <Tabs.Panel value="javafullstack">
            <Javafullstackwrapper/>
          </Tabs.Panel>

          <Tabs.Panel value="Dataenginneer">
            <DataEngineerwrapper/>
          </Tabs.Panel>
          <Tabs.Panel value="Networking">
            <Networkservices/>
          </Tabs.Panel>
          {/* <Tabs.Panel value="salesforce">
            salesforce 
          </Tabs.Panel> */}
          <Tabs.Panel value="QA">
            <Qualityanalyst/>
          </Tabs.Panel>
          <Tabs.Panel value="BA">
            <Businessanalyst/>
          </Tabs.Panel>
        </Card.Section>
      </Tabs>
    </Card>
  )
}

export default Technologywrapper