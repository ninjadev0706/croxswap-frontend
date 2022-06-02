/* eslint-disable */
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import {
  Text,
  BaseLayout,
  useMatchBreakpoints,
  Flex
} from "crox-uikit";
import useI18n from "hooks/useI18n";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Icon } from '@iconify/react';
import Page from "components/layout/Page";
import CakeStats from "./components/CakeStats";
import InvestorCard from "./components/InvestorCard";
import TwitterCard from "./components/TwitterCard";
import PoolBannerCard from "./components/PoolBannerCard";
import FourWayCard from "./components/FourWayCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  getAPYAndTVLOfDualFarm,
  getAPYAndTVLOfNGPool,
} from "utils/defi";
import {
  usePriceCakeBusd,
  usePriceBnbBusd,
  useDualFarms,
} from "../../state/hooks";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation, Autoplay]);

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  // margin-bottom: 32px;
  padding-top: 40px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 40px;
    padding-top: 0;
  }
`;

const Cards = styled(BaseLayout)`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 30px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  justify-content: stretch;
  margin-bottom: 48px;

  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    opacity: 0.5 !important;
    font-size: 20px !important;
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
  marginright: 20px;
  marginbottom: 20px;

  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    opacity: 0.5 !important;
    font-size: 20px !important;
  }
`;

const Twitter = styled.div`
  width: 48% !important;
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background: #2c2d3a;
  padding: 20px;
  border-radius: 10px;
`

const FourWayCardsWrapper = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 10px;
  padding: 24px;
  background-color: #2c2d3a;
  margin-bottom: 30px;
  margin-top: 10px;
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    opacity: 0.5 !important;
    font-size: 20px !important;
  }
`;

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const history = useHistory();
  const TranslateString = useI18n();
  const location = useLocation();
  const { isXl, isLg, isMd, isSm, isXs } = useMatchBreakpoints();
  const dualfarms = useDualFarms();
  const ngpools = useDualFarms(true);
  const cakePrice = usePriceCakeBusd();
  const bnbPrice = usePriceBnbBusd();

  const maxAPRForDualFarm = useMemo(() => {
    let apys = dualfarms
      .filter((it) => (it as any).active)
      .map((farm) => {
        const { apy1, apy2 } = getAPYAndTVLOfDualFarm(farm, {
          cakePrice,
          bnbPrice,
        });
        return Number(apy1.plus(apy2).times(100).toFixed(0));
      });
    return Math.max(...apys);
  }, [dualfarms, cakePrice, bnbPrice]);

  const maxAPRForNGPool = useMemo(() => {
    let apys = ngpools
      .filter((it) => (it as any).active)
      .map((farm) => {
        const { apy1, apy2 } = getAPYAndTVLOfNGPool(farm, {
          cakePrice,
          bnbPrice,
        });
        return Number(apy1.times(100).toFixed(0));
      });
    return Math.max(...apys);
  }, [ngpools, cakePrice, bnbPrice]);

  return (
    <Page>
      <Hero>
        <Text fontSize="16px" color="textSubtle">
          A multichain next-generation dual farming and staking protocol
        </Text>
      </Hero>

      {!isMd && !isSm && !isXs ? (
        <StyledCards>
          <div
            style={{
              width: "60%",
              marginRight: "20px",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Swiper
              navigation={true}
              loop={true}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              style={{ height: "100%" }}
            >
              {/* <SwiperSlide style={{ height: "258px" }}>
                <img
                  src="/mbaby_crox_banner.png"
                  alt="metababy-presale"
                  style={{
                    borderRadius: "20px",
                    display: "block",
                    height: "100%",
                    margin: "auto",
                  }}
                  onClick={() =>
                    window.open("https://themetababy.io", "_blank")
                  }
                />
              </SwiperSlide> */}
              <SwiperSlide style={{ height: "258px" }}>
                <img
                  src="/bridge_banner.png"
                  alt="bridge"
                  style={{
                    borderRadius: "20px",
                    display: "block",
                    height: "100%",
                    margin: "auto",
                  }}
                  onClick={() =>
                    window.open("https://bridge.croxswap.com/")
                  }
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "258px" }}>
                <img
                  src="/refer_banner.png"
                  alt="heco farms"
                  style={{
                    borderRadius: "20px",
                    display: "block",
                    height: "100%",
                    margin: "auto",
                  }}
                  onClick={() =>
                    window.open("https://heco.croxswap.com/hecofarms")
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <CakeStats />
        </StyledCards>
      ) : (
        <>
          <CakeStats />
          <SwiperContainer>
            <Swiper
              navigation={true}
              loop={true}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {/* <SwiperSlide>
                <img
                  src="/mbaby_crox_banner.png"
                  alt="metbaby_presale"
                  style={{
                    borderRadius: "20px",
                    display: "block",
                    margin: "auto",
                  }}
                  onClick={() =>
                    window.open("https://themetababy.io", "_blank")
                  }
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <img
                  src="/bridge_banner.png"
                  alt="bridge"
                  style={{
                    borderRadius: "20px",
                    display: "block",
                    margin: "auto",
                  }}
                  onClick={() =>
                    window.open("https://bridge.croxswap.com/")
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/refer_banner.png"
                  alt="heco farms"
                  style={{
                    borderRadius: "20px",
                    display: "block",
                    margin: "auto",
                  }}
                  onClick={() =>
                    window.open("https://heco.croxswap.com/hecofarms")
                  }
                />
              </SwiperSlide>
            </Swiper>
          </SwiperContainer>
        </>
      )}

      {!isMobile ? (
        <FourWayCardsWrapper>
          <Flex alignItems='center' style={{ backgroundColor: '#3b3c4e', width: '450px', padding: '3px 10px', borderRadius: '5px' }} justifyContent='center'>
            <Icon icon="si-glyph:arrow-three-way-1" />
            <Text ml='5px' fontSize="17px" color="white" bold>4 WAYS TO MAKE PASSIVE INCOME FROM CROXSWAP</Text>
          </Flex>
          <Flex mt='20px' justifyContent='space-between' alignItems='flex-end'>
            <FourWayCard
              number="1"
              desc="Provide Liquidity & Earn a Share of"
              percent="0.5"
              type="Trade Fees"
              buttonText="Add Liquidity"
              onClick={() =>
                window.open(
                  "https://exchange.croxswap.com/#/pool",
                  "_blank"
                )
              }
            />
            <FourWayCard
              number="2"
              desc="FARM with LP Tokens & Earn Multiple Tokens. Up To"
              percent={maxAPRForDualFarm.toLocaleString()}
              type="APR"
              buttonText="FARM & Earn"
              onClick={() => history.push("/dualfarms")}
            />
            <FourWayCard
              number="3"
              desc="STAKE CROX & Earn Other Tokens. Up To"
              percent={maxAPRForNGPool.toLocaleString()}
              type="APR"
              buttonText="STAKE CROX"
              onClick={() => history.push("/pools/nextgen")}
            />
            <FourWayCard
              number="4"
              desc="Refer Friends & Earn"
              percent="5"
              type="from their earnings"
              buttonText="Refer Now"
              onClick={() =>
                window.open("https://referral.croxswap.com/")
              }
            />
          </Flex>
        </FourWayCardsWrapper>
      ) : (
        <FourWayCardsWrapper>
          <Flex alignItems='flex-start' style={{ backgroundColor: '#3b3c4e', padding: '3px 10px', borderRadius: '5px' }} justifyContent='space-between' mb='20px'>
            <Icon icon="si-glyph:arrow-three-way-1" style={{ fontSize: '30px' }} />
            <Text ml='15px' fontSize="17px" color="white" bold>4 WAYS TO MAKE PASSIVE INCOME FROM CROXSWAP</Text>
          </Flex>
          <Swiper
            navigation={true}
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <FourWayCard
                number="1"
                desc="Provide Liquidity & Earn a Share of"
                percent="0.5"
                type="Trade Fees"
                buttonText="Add Liquidity"
                onClick={() =>
                  window.open(
                    "https://exchange.croxswap.com/#/pool",
                    "_blank"
                  )
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <FourWayCard
                number="2"
                desc="FARM with LP Tokens & Earn Multiple Tokens. Up To"
                percent={maxAPRForDualFarm.toLocaleString()}
                type="APR"
                buttonText="FARM & Earn"
                onClick={() => history.push("/dualfarms")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FourWayCard
                number="3"
                desc="STAKE CROX & Earn Other Tokens. Up To"
                percent={maxAPRForNGPool.toLocaleString()}
                type="APR"
                buttonText="STAKE CROX"
                onClick={() => history.push("/pools/nextgen")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FourWayCard
                number="4"
                desc="Refer Friends & Earn"
                percent="5"
                type="from their earnings"
                buttonText="Refer Now"
                onClick={() =>
                  window.open("https://referral.croxswap.com/")
                }
              />
            </SwiperSlide>
          </Swiper>
        </FourWayCardsWrapper>
      )}

      <div>
        {!isMd && !isSm && !isXs ? (
          <>
            <Cards>
              <div style={{ width: "50%" }}>
                <InvestorCard />
              </div>
              <Twitter>
                <TwitterCard />
              </Twitter>
            </Cards>
            <PoolBannerCard />
          </>
        ) : (
          <>
            <div style={{ marginBottom: "10px" }}>
              <InvestorCard />
            </div>
            <TwitterCard />
            <PoolBannerCard />
          </>
        )}
      </div>
    </Page>
  );
};

export default Home;
