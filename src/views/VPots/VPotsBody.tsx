import React from 'react'
import { Flex, Text, Button } from 'crox-new-uikit'
import Countdown, { zeroPad } from 'react-countdown';
import { Icon } from '@iconify/react';
import { useMediaQuery } from '@mui/material'
import Fire from './animation/Fire'
import PiggyBank from './animation/PiggyBank';

const VPotsBody = () => {
    const ismobile = useMediaQuery("(max-width: 600px)")
    const renderer = ({ hours, minutes, seconds, days }) => {
        return <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    };
    const Grandrenderer = ({ hours, minutes, seconds, days }) => {
        return (
            <Flex alignItems='center'>
                <Text fontSize={ismobile ? '20px' : '24px'} mr={!ismobile ? '25px' : '5px'} mt='-30px' color='white' bold>in</Text>
                <Flex flexDirection='column' alignItems='center' mr={!ismobile ? '25px' : '5px'}>
                    <Text fontSize={ismobile ? '30px' : '36px'} className='counter' bold>{zeroPad(days)}</Text>
                    <Text fontSize={ismobile ? '20px' : '24px'} color='white' bold>Days</Text>
                </Flex>
                <Text fontSize={ismobile ? '20px' : '24px'} mr={!ismobile ? '25px' : '5px'} mt='-30px' color='white' bold>:</Text>
                <Flex flexDirection='column' alignItems='center' mr={!ismobile ? '25px' : '5px'}>
                    <Text fontSize={ismobile ? '30px' : '36px'} className='counter' bold>{zeroPad(hours)}</Text>
                    <Text fontSize={ismobile ? '20px' : '24px'} color='white' bold>Hours</Text>
                </Flex>
                <Text fontSize={ismobile ? '20px' : '24px'} mr={!ismobile ? '25px' : '5px'} mt='-30px' color='white' bold>:</Text>
                <Flex flexDirection='column' alignItems='center' mr={!ismobile ? '25px' : '5px'}>
                    <Text fontSize={ismobile ? '30px' : '36px'} className='counter' bold>{zeroPad(minutes)}</Text>
                    <Text fontSize={ismobile ? '20px' : '24px'} color='white' bold>Mins</Text>
                </Flex>
                <Text fontSize={ismobile ? '20px' : '24px'} mr={!ismobile ? '25px' : '5px'} mt='-30px' color='white' bold>:</Text>
                <Flex flexDirection='column' alignItems='center'>
                    <Text fontSize={ismobile ? '30px' : '36px'} className='counter' bold>{zeroPad(seconds)}</Text>
                    <Text fontSize={ismobile ? '20px' : '24px'} color='white' bold>Secs</Text>
                </Flex>
            </Flex>
        )
    };
    return (
        <Flex className='vpotsbody' justifyContent='center' flexDirection={ismobile ? 'column' : 'row'} alignItems='center'>
            <Flex flexDirection='column' mr={!ismobile && '100px'}>
                <Flex className='vpotsbody__card' alignItems='center' justifyContent='space-between'>
                    <Flex flexDirection='column' mr={!ismobile && '50px'}>
                        <Flex alignItems='flex-end'>
                            <Fire />
                            <Text fontSize={ismobile ? '23px' : '25px'} color='white' bold>HOT VAULT</Text>
                        </Flex>
                        <Flex flexDirection='column' alignItems='center'>
                            <Text fontSize={ismobile ? '20px' : '22px'} color='white' style={{ fontWeight: '500' }} mt='5px'>CAKE <span style={{ color: 'yellow' }}>54.87%</span> APY</Text>
                            <Icon icon="akar-icons:plus" />
                            <Text fontSize={ismobile ? '20px' : '22px'} color='white' style={{ fontWeight: '500' }} mt='5px'><span style={{ color: 'yellow' }}>$2000</span> Fee Rewards</Text>
                            <Text fontSize={ismobile ? '14px' : '16px'} color='white' style={{ fontWeight: '500' }} mt='-5px'>in CAKE across 50 players</Text>
                        </Flex>
                    </Flex>
                    <img alt='baker' src='/images/vpots/baker.png' className='vpotsbody__card__img' />
                </Flex>
                <Flex className='vpotsbody__card' alignItems='center' flexDirection='column' mt={20}>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Flex flexDirection='column' mr={!ismobile && '50px'}>
                            <Flex alignItems='flex-end'>
                                <Fire />
                                <Text fontSize={ismobile ? '23px' : '25px'} color='white' bold>HOT POT</Text>
                            </Flex>
                            <Flex flexDirection='column' alignItems='center'>
                                <Text fontSize={ismobile ? '22px' : '24px'} color='white' style={{ fontWeight: '500' }} mt='5px'><span style={{ color: 'yellow' }}>$2000</span> Prize Pool</Text>
                                <Text fontSize={ismobile ? '27px' : '30px'} color='yellow' bold><Countdown date={1647365562000} renderer={renderer} /></Text>
                            </Flex>
                        </Flex>
                        <PiggyBank />
                    </Flex>
                    <Button className='vpotsbody__card__btn' mt={10}>Win Cake</Button>
                </Flex>
            </Flex>
            <Flex className='vpotsbody__grand' flexDirection='column' alignItems='center' mt={ismobile && 20}>
                <Text fontSize={ismobile ? '32px' : '36px'} color='yellow' mb={45} bold>GRAND POOL</Text>
                <Countdown date={1648495562000} renderer={Grandrenderer} />
                <Flex flexDirection='column' justifyContent='flex-start' alignItems='flex-start' mt={45}>
                    <Flex>
                        {/* <Reward /> */}
                        <Text fontSize='20px' color='#fdcc1f' bold>Rewards</Text>
                    </Flex>
                    <Flex className='vpotsbody__grand__img'>
                        <img alt='grandImg' src='/images/farms/crox.svg' style={ismobile ? { width: '50px', marginRight: '-10px' } : { width: '50px', marginRight: '15px' }} />
                        <img alt='grandImg' src='/images/farms/crox.svg' style={ismobile ? { width: '50px', marginRight: '-10px' } : { width: '50px', marginRight: '15px' }} />
                        <img alt='grandImg' src='/images/farms/crox.svg' style={ismobile ? { width: '50px', marginRight: '-10px' } : { width: '50px', marginRight: '15px' }} />
                        <img alt='grandImg' src='/images/farms/crox.svg' style={ismobile ? { width: '50px', marginRight: '-10px' } : { width: '50px', marginRight: '15px' }} />
                        <img alt='grandImg' src='/images/farms/crox.svg' style={ismobile ? { width: '50px', marginRight: '-10px' } : { width: '50px', marginRight: '15px' }} />
                        <img alt='grandImg' src='/images/farms/crox.svg' style={ismobile ? { width: '50px', marginRight: '-10px' } : { width: '50px', marginRight: '15px' }} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default VPotsBody