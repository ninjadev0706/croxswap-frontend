import React from "react";
import { Flex } from "crox-new-uikit";
import VPotsHeader from './VPotsHeader';
import VPotsBody from './VPotsBody';
import VPotsFooter from './VPotsFooter';
import './vpots.scss'

const VPots = () => {
    return (
        <Flex justifyContent='center' flexDirection='column' alignItems='center'>
            <VPotsHeader />
            <VPotsBody />
            <VPotsFooter />
        </Flex>
    )
}

export default VPots