/* eslint-disable */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Text, Flex } from "crox-new-uikit";
import { useMatchBreakpoints } from "crox-uikit";
import styled from "styled-components";
import useTheme from "hooks/useTheme";
import { GiThumbUp, GiNewShoot } from 'react-icons/gi'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  getAPYAndTVLOfDualFarm,
} from "utils/defi";
import {
  usePriceCakeBusd,
  usePriceBnbBusd,
  useDualFarms,
} from "../../../state/hooks";
import "./TopFarm.scss";

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

const TopFarm = styled.div`
  text-align: center;
  width: 85%;
  margin: auto;
`;

const Col = styled.div`
  // width: 25%;
  margin-right: 0px;
`;

const Content = styled.div`
  display: block;
  width: 60%;
  text-align: center;
`;

const EarnTag = styled.div`
  background: #2c2d3a;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid #3b3c4e;
`

const SymbolText = styled(Text)`
  border-bottom: 2px solid #3b3c4e;
  color: white;
`

const StyledCakeStats = styled(Card)`
  border: 2px solid #3b3c4e;
  background: #2c2d3a;
  margin: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    opacity: 0.5 !important;
    font-size: 20px !important;
  }
`;

export interface FarmsProps {
  tokenMode?: boolean;
}

const TwitterCard = () => {
  const history = useHistory();
  const dualfarms = useDualFarms();
  const cakePrice = usePriceCakeBusd();
  const bnbPrice = usePriceBnbBusd();
  const { isMd, isSm, isXs } = useMatchBreakpoints();
  const { isDark } = useTheme()

  const activeDualFarms = dualfarms
    .filter((it) => (it as any).active)
    .map((farm) => {
      let pidInAbs = Math.abs(farm.pid);
      let { apy1, apy2, totalValue } = getAPYAndTVLOfDualFarm(farm, {
        cakePrice,
        bnbPrice,
      });
      if (farm.quoteTokenSymbol === 'BNB') {
        totalValue = bnbPrice.times(farm.lpTotalInQuoteToken);
      }
      return { ...farm, apy: apy1.plus(apy2), totalValue, pidInAbs };
    });
  const goToDualFarm = () => {
    history.push('/dualfarms');
  }

  return (
    <Flex flex="auto" flexDirection="column" justifyContent="center">
      <div className="twitter">
        <div className="twitter__price-tag" style={{ top: "0px", left: "0px" }}>
          <GiThumbUp />
          <p className="twitter__price-tag-price">VAULTS & JACKPOTS</p>
        </div>
      </div>
      <StyledCakeStats>
        <CardBody p="30px" className="card-body">
          <Text fontSize="2em" className="comming" bold>Coming soon</Text>
        </CardBody>
      </StyledCakeStats>
    </Flex>
  );
};

export default TwitterCard;
