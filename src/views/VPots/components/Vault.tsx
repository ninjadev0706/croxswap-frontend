import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Text, Button } from "crox-new-uikit";
import ReactTooltip from 'react-tooltip';
import { BsPatchQuestion } from "react-icons/bs";
import ExpandableSectionButton from "components/ExpandableSectionButton";

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? "100%" : "0px")};
  overflow: hidden;
`;

const Vault = () => {
    const [showExpandableSection, setShowExpandableSection] = useState(false);
    return (
        <Flex className='vpotsfooter__borderCard'>
            <Text className='vpotsfooter__borderCard__badge' style={{ letterSpacing: '1px' }} fontSize='18px' bold>CAKE VAULT</Text>
            <Flex flexDirection='column' className="vpotsfooter__borderCard__body">
                <Flex justifyContent='space-between'>
                    <Flex flexDirection='column' alignItems='center'>
                        <Text style={{ letterSpacing: '1px' }} fontSize="25px" color='white' bold><span style={{ color: 'yellow' }}>300</span> Players</Text>
                        <Text style={{ letterSpacing: '1px' }} fontSize="15px" color='white' mt='-10px'>in the pool</Text>
                        <Text style={{ letterSpacing: '1px' }} fontSize="20px" color='white'>Auto-Compound</Text>
                        <Flex alignItems='center' mt='-10px' style={{ position: 'relative' }}>
                            <Text style={{ letterSpacing: '1px' }} fontSize="25px" color='white' mr='3px' bold><span style={{ color: 'yellow' }}>35.25%</span> APY</Text>
                            <BsPatchQuestion style={{ fontSize: '20px' }} data-tip data-for='tip4' />
                            <ReactTooltip id='tip4' aria-haspopup='true' backgroundColor='#1377bf' className="tooltip" >
                                <Text fontSize="14px" color="white">This vault auto-compounds your CAKE to acheive maximum APY</Text>
                            </ReactTooltip>
                        </Flex>
                        <Text style={{ letterSpacing: '1px' }} fontSize="15px" color='white' mt='-10px'>uses belt.fi</Text>
                    </Flex>
                    <img alt='baker' src='/images/vpots/bakerblue.png' className='vpotsfooter__borderCard__img' />
                </Flex>
                <Flex alignItems='center' justifyContent='center' mr='12px' style={{ position: 'relative' }}>
                    <Text fontSize="20px" color='white' mr='3px'>Fee Distributed:</Text>
                    <Text fontSize="25px" color='white' mr='3px' bold><span style={{ color: 'yellow' }}>500</span> CAKE</Text>
                    <BsPatchQuestion style={{ fontSize: '20px' }} data-tip data-for='tip2' />
                    <ReactTooltip id='tip2' aria-haspopup='true' backgroundColor='#1377bf' className="tooltip" >
                        <Text fontSize="14px" color="white">3% of the deposit fee is distributed among all players in the pool proportional to their staked amount.</Text>
                        <Text fontSize="14px" color="yellow">The longer you stay and the more you stake, higher the rewards.</Text>
                    </ReactTooltip>
                </Flex>
                <Flex alignItems='center' justifyContent='center' mr='12px' mt='-10px' style={{ position: 'relative' }}>
                    <Text fontSize="20px" color='white' mr='3px'>Deposit Fee:</Text>
                    <Text fontSize="25px" color='yellow' mr='3px' bold>5%</Text>
                    <BsPatchQuestion style={{ fontSize: '20px' }} data-tip data-for='tip3' />
                    <ReactTooltip id='tip3' aria-haspopup='true' backgroundColor='#1377bf' className="tooltip" >
                        <Text bold color="white">Deposit Fee Split (5%)</Text>
                        <Text fontSize="14px" color="white" mt='5px'>3%: Rewards to staked players</Text>
                        <Text fontSize="14px" color="white">1%: Jackpot Pool</Text>
                        <Text fontSize="14px" color="white">1%: CROX Treasury</Text>
                    </ReactTooltip>
                </Flex>
                <Flex alignItems='center' flexDirection='column' mr='12px' mt='-10px'>
                    <Button className='vpotsfooter__borderCard__body__btn' mt={10}>Win Cake</Button>
                    <Text style={{ letterSpacing: '1px' }} fontSize="15px" color='white'>No minimum deposit</Text>
                </Flex>
                <Flex flexDirection='column' mt='10px' p='10px' pt='5px' style={{ borderTop: '1px solid #0e48de', borderTopStyle: 'dotted' }}>
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

export default Vault;