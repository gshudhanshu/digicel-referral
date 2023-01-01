import superjson from 'superjson'
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
import SuperJSON from 'superjson'

function leaderboard({ referrals }) {
  // return <></>
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
          <Text textAlign={'center'}>
            Showing result {referrals.pagingCounter} to{' '}
            {referrals.page * referrals.limit} of total {referrals.totalDocs}
          </Text>
        </Box>
        <Box width='100%'>
          <VStack className={classes.leaderboard_search_result}>
            {referrals.docs.map((referral, index) => (
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
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  const countryCode = context.params.countryCode
  const referrals = superjson.parse(
    superjson.stringify(await getReferrals(countryCode))
  )
  // const referrals = await getReferrals(countryCode)
  console.log(referrals)
  return {
    props: { referrals },
  }
}

export default leaderboard
