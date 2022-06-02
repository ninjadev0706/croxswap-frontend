import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CountUp } from "use-count-up";
import { Flex, Text } from 'crox-new-uikit'
import Countdown, { zeroPad } from 'react-countdown';
import { useMediaQuery } from '@mui/material'
import Vault from './components/Vault';
import Pot from './components/Pot';
import Switch from './components/Switch';
import Select from './components/Select';
import SelectOrange from './components/SelectOrange';
import RightArrow from './animation/RightArrow';
import DownArrow from './animation/DownArrow';

const VPotsBody = () => {
    const ismobile = useMediaQuery("(max-width: 600px)")
    const renderer = ({ hours, minutes, seconds, days }) => {
        return <span>{zeroPad(days)}d:{zeroPad(hours)}h:{zeroPad(minutes)}m:{zeroPad(seconds)}s</span>;
    };

    const [croxstats, SetCroxstats] = useState([])
    useEffect(() => {
        const getCroxStats = async () => {
            const res = await axios.get(`https://salty-crag-05146.herokuapp.com/record/get`)
            SetCroxstats(((res as any).data)[0])
        };
        getCroxStats()
    }, []);
    const hecotvl = Number(croxstats['hecotvl'])
    const bnbtvl = Number(croxstats['bnbtvl'])

    return (
        <Flex flexDirection='column' className='vpotsfooter' alignItems='center'>
            <Flex flexDirection={ismobile ? 'column' : 'row'}>
                <Flex flexDirection='column' alignItems='center'>
                    <Flex flexDirection='column' className='vpotsfooter__card' alignItems='center' mr={!ismobile && 145}>
                        <Text fontSize='18px' color='white' bold>TotalPlayers</Text>
                        <Text fontSize='18px' color='white' bold>500</Text>
                        <Text fontSize='15px' color='white'>Across all Vaults and Pots</Text>
                    </Flex>
                    {!ismobile && <Switch />}
                </Flex>
                <Flex flexDirection='column' alignItems='center'>
                    <Flex flexDirection='column' className='vpotsfooter__card' alignItems='center' mr={!ismobile && 145}>
                        <Text fontSize='18px' color='white' bold>Total Value Locked</Text>
                        <Text fontSize='18px' color='white' bold>$<CountUp isCounting start={0} end={(bnbtvl === null || hecotvl === null) ? 0 : (bnbtvl + hecotvl)} thousandsSeparator=',' decimalPlaces={2} /></Text>
                        <Text fontSize='15px' color='white'>Across all Vaults and Pots</Text>
                    </Flex>
                    {!ismobile && <Select options={[
                        {
                            label: 'All Token',
                            value: 'all'
                        }
                    ]} />}
                </Flex>
                <Flex flexDirection='column' alignItems='center'>
                    <Flex flexDirection='column' className='vpotsfooter__cardTotal' alignItems='center'>
                        <Flex justifyContent='space-between'>
                            <Flex flexDirection='column' alignItems='center' mr={40}>
                                <Text fontSize='18px' color='white' bold>Total Won</Text>
                                <Text fontSize='18px' color='white' mt='2px' bold>$500,895.44</Text>
                            </Flex>
                            <Flex flexDirection='column' alignItems='center'>
                                <Text fontSize='18px' color='white' bold>Current Prizes</Text>
                                <Text fontSize='18px' color='white' mt='2px' bold>$55,987.00</Text>
                            </Flex>
                        </Flex>
                        <Text fontSize='15px' color='white'>Across all Vaults and Pots</Text>
                    </Flex>
                    {!ismobile && <SelectOrange options={[
                        {
                            label: 'Prize',
                            value: 'prize'
                        },
                        {
                            label: 'APY',
                            value: 'apy'
                        },
                        {
                            label: 'Next Draw',
                            value: 'nextdraw'
                        }
                    ]} />}
                </Flex>
            </Flex>
            {ismobile && (
                <Flex flexDirection='column' alignItems='center'>
                    <Switch />
                    <Flex alignItems='center'>
                        <Select options={[
                            {
                                label: 'All Token',
                                value: 'all'
                            }
                        ]} />
                        <SelectOrange options={[
                            {
                                label: 'Prize',
                                value: 'prize'
                            },
                            {
                                label: 'APY',
                                value: 'apy'
                            },
                            {
                                label: 'Next Draw',
                                value: 'nextdraw'
                            }
                        ]} />
                    </Flex>
                </Flex>
            )}
            <Flex mt={20} alignItems='center' flexDirection={ismobile ? "column" : "row"}>
                {ismobile && (
                    <Flex flexDirection='column' alignItems='center' className='vpotsfooter__middle'>
                        <Text fontSize={ismobile ? '27px' : '20px'} bold>POT opens in</Text>
                        <Text fontSize={ismobile ? '27px' : '20px'} color='yellow' bold><Countdown date={1647365562000} renderer={renderer} /></Text>
                    </Flex>
                )}
                <Vault />
                <Flex flexDirection='column' alignItems='center' className='vpotsfooter__middle'>
                    {!ismobile && (
                        <>
                            <Text fontSize='20px' bold>POT opens in</Text>
                            <Text fontSize='20px' color='yellow' bold><Countdown date={1647365562000} renderer={renderer} /></Text>
                        </>
                    )}
                    <Flex mt={!ismobile && 20}>
                        {ismobile ? <DownArrow /> : <RightArrow />}
                    </Flex>
                </Flex>
                <Pot />
            </Flex>
        </Flex>
    )
}

export default VPotsBody