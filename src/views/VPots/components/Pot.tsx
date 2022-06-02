import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "crox-new-uikit";
import ReactTooltip from 'react-tooltip';
import { BsPatchQuestion } from "react-icons/bs";
import ExpandableSectionButton from "components/ExpandableSectionButton";
import PiggyBank from "../animation/PiggyBank";

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? "100%" : "0px")};
  overflow: hidden;
`;

const Pot = () => {
    const [showExpandableSection, setShowExpandableSection] = useState(false);
    return (
        <Flex className='vpotsfooter__borderCard orangeCard'>
            <Text className='vpotsfooter__borderCard__badge orangeBadge' style={{ letterSpacing: '1px' }} fontSize='18px' bold>CAKE POT</Text>
            <Flex flexDirection='column' className="vpotsfooter__borderCard__body">
                <Flex justifyContent='space-between'>
                    <Flex flexDirection='column' alignItems='center'>
                        <Text style={{ letterSpacing: '1px' }} fontSize="25px" color='white' bold><span style={{ color: 'yellow' }}>300</span> Players</Text>
                        <Text style={{ letterSpacing: '1px' }} fontSize="15px" color='white' mt='-10px'>in the pool</Text>
                        <Text style={{ letterSpacing: '1px' }} fontSize="20px" color='white'>Auto-Compound</Text>
                        <Flex alignItems='center' mt='-10px'>
                            <Text style={{ letterSpacing: '1px' }} fontSize="25px" color='white' mr='3px' bold><span style={{ color: 'yellow' }}>35.25%</span> APY</Text>
                            <BsPatchQuestion style={{ fontSize: '20px' }} data-tip data-for='tip1' />
                            <ReactTooltip id='tip1' aria-haspopup='true' backgroundColor='#1377bf' className="tooltip" >
                                <Text bold color="white">Prize Split</Text>
                                <Text fontSize="14px" color="white" mt='5px'>70%: One Winner</Text>
                                <Text fontSize="14px" color="white">20%: Distributed to all Players</Text>
                                <Text fontSize="14px" color="white">10%: Monthly Grand Pool</Text>
                            </ReactTooltip>
                        </Flex>
                        <Text style={{ letterSpacing: '1px' }} fontSize="15px" color='white' mt='-10px'>uses belt.fi</Text>
                    </Flex>
                    <PiggyBank />
                </Flex>
                <Flex alignItems='center' flexDirection='column' mr='12px' mt='-10px'>
                    <Button className='vpotsfooter__borderCard__body__btn' mt={10}>Win Cake</Button>
                    <Text style={{ letterSpacing: '1px' }} fontSize="15px" color='white'>No minimum deposit</Text>
                </Flex>
                <Flex flexDirection='column' mt='10px' p='10px' pt='5px' style={{ borderTop: '1px solid #ec366e', borderTopStyle: 'dotted' }}>
                    <Flex alignItems='center' justifyContent='space-between' style={{ cursor: 'pointer' }} onClick={() => setShowExpandableSection(!showExpandableSection)}>
                        <Flex>
                            <Text fontSize="18px" color='white' mr='3px' bold>My CAKE Earnings: </Text>
                            <Text fontSize="18px" color='white' mr='3px' bold><span style={{ color: 'yellow' }}>400</span> CAKE</Text>
                        </Flex>
                        <ExpandableSectionButton
                            onClick={() => setShowExpandableSection(!showExpandableSection)}
                            expanded={showExpandableSection}
                        />
                    </Flex>
                    <ExpandingWrapper expanded={showExpandableSection}>
                        <Flex>
                            <Text mr='3px'>Auto-Compound Rewards:</Text>
                            <Text><span style={{ color: 'yellow' }}>200</span> CAKE</Text>
                        </Flex>
                        <Flex>
                            <Text mr='3px'>Fee Rewards:</Text>
                            <Text><span style={{ color: 'yellow' }}>200</span> CAKE</Text>
                        </Flex>
                    </ExpandingWrapper>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Pot;