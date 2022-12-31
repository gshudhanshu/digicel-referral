import { getReferrals } from '../utils/actions.js'
import { useRouter } from 'next/router'
import Head from 'next/head'

import classes from '../styles/Leaderboard.module.scss'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Stack,
  HStack,
  VStack,
  Image,
  Select,
  Input,
  Button,
  Link,
  Heading,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import axios from 'axios'

function leaderboard({ referrals }) {
  return (
    <>
      <Head>
        <title>REFERRAL CAMPAIGN 2023</title>
        <meta name='description' content='Select your country' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        minHeight='100vh'
        bgGradient='linear(to-tr, #f5402a, #9801ff)'
        justifyContent='center'
        alignItems='center'
        display='flex'
        flexDirection='column'
        gap={'30px'}
        padding={'10%'}
        className={classes.leaderboard}
      >
        <Box
          textAlign={'center'}
          color='white'
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
          alignItems={'center'}
        >
          <Image
            src='/digicel-plus-logo-white.svg'
            alt='digicel plus logo'
            width={{ base: '10em', sm: '12em', lg: '12em' }}
          />
          <Heading as={'h1'} variant='1'>
            Referral Campaign 2023
          </Heading>
          <Heading as='h3' variant='4' letterSpacing={'0.1em'}>
            LEADERBOARD AS AT {new Date().toDateString()}
          </Heading>
        </Box>
        <Box className={classes.search_result}>
          <Box display={'flex'} gap={'10px'}>
            <Input
              className={classes.search_input}
              placeholder='Name/Phone No.'
              size='md'
            />
            <Button
              className={classes.search_button}
              colorScheme='white'
              variant='solid'
            >
              Search
            </Button>
          </Box>
          <Text textAlign={'center'}>Showing result 1 to 25 of total 1000</Text>
        </Box>
        <Box width='100%'>
          <VStack
            // spacing={4}
            // align='stretch'
            className={classes.leaderboard_search_result}
          >
            {referrals.map((referral, index) => (
              <div
                key={referral.id}
                className={`${classes.hunters_container}
                   ${
                     referral.denseRankReach === 1
                       ? classes.gold
                       : referral.denseRankReach === 2
                       ? classes.silver
                       : referral.denseRankReach === 3
                       ? classes.bronze
                       : ''
                   }`}
              >
                <div className={classes.rank}>{referral.denseRankReach}</div>
                <div className={classes.emoji_name_phone_eggs}>
                  <div className={classes.emoji}>
                    <Image
                      src={`/asset/emoji${referral.denseRankReach % 7}.svg`}
                      alt='digicel-fun-emoji'
                    />
                    <span></span>
                  </div>
                  <div className={classes.text_content}>
                    <p className={classes.name_phone}>
                      {referral.first_name} {referral.last_name}{' '}
                      {referral.mobile}
                    </p>
                    <p className={classes.eggs}>{referral.reach} Refs</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <Box h='40px' bg='white' padding={'10px'} borderRadius={'10em'}>
              R. Scantlebury (xxx-4068)
            </Box>
            <Box h='40px' bg='white'>
              2
            </Box>
            <Box h='40px' bg='white'>
              3
            </Box> */}
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  const countryCode = context.params.countryCode
  const referrals = JSON.parse(JSON.stringify(await getReferrals(countryCode)))
  return {
    props: { referrals },
  }
}

export default leaderboard
