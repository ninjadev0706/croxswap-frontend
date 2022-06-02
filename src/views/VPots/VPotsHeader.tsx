import React from 'react'
import { Flex, Text } from 'crox-new-uikit'
import { useMediaQuery } from '@mui/material'

const VPotsHeader = () => {
    const ismobile = useMediaQuery("(max-width: 600px)")
    return (
        <Flex className='vpotsheader' justifyContent='center' flexDirection='column' alignItems='center'>
            <Text color='white' fontSize='30px' bold>VPOTS</Text>
            <Text color='white' fontSize={ismobile ? '20px' : '28px'} style={{ fontWeight: '500' }}>Auto Compounding Vaults + Jackpots</Text>
        </Flex>
    )
}

export default VPotsHeader