import { useRouter } from 'next/router'
import Head from 'next/head'

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
  Link,
  Heading,
} from '@chakra-ui/react'

function leaderboard() {
  const router = useRouter()
  const { countryCode } = router.query
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Select your country' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        height='100vh'
        bgGradient='linear(to-tr, #f5402a, #9801ff)'
        justifyContent='center'
        alignItems='center'
        display='flex'
      >
        <Box
          textAlign={'center'}
          color='white'
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
        >
          <Image
            src='/digicel-plus-logo-white.svg'
            alt='digicel plus logo'
            width={''}
          />
          <Heading as={'h1'} fontSize='4xl'>
            Referral Campaign 2023
          </Heading>
          <Heading as='h3' size='md' textTransform={'uppercase'}>
            LEADERBOARD AS AT {new Date().toDateString()}
          </Heading>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </>
  )
}

export default leaderboard
