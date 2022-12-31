import Head from 'next/head'
import NextLink from 'next/link'

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
} from '@chakra-ui/react'

const countryList = [
  { country: 'Anguilla', code: 'ai' },
  { country: 'Antigua and Barbuda', code: 'ag' },
  { country: 'Dominica', code: 'dm' },
  { country: 'Grenada', code: 'gd' },
  { country: 'Montserrat', code: 'ms' },
  { country: 'St. Kitts and Nevis', code: 'kn' },
  { country: 'St. Lucia', code: 'lc' },
  { country: 'St. Vincent and The Grenadines', code: 'vc' },
]

export default function Home() {
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
        <Card
          p={10}
          backgroundColor='#fff'
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
        >
          <VStack>
            <Image
              width='10rem'
              src='/digicel-plus-logo.svg'
              alt='digicel plus logo'
            />
            <Text
              fontSize='3xl'
              fontWeight='bold'
              py={'10px'}
              color={'#161f60'}
            >
              Select your country
            </Text>
            <HStack spacing='10'>
              <VStack align='left' spacing='4'>
                {countryList.map((country) => (
                  <Link
                    key={country.code}
                    as={NextLink}
                    href={`/${country.code}`}
                    display='flex'
                    gap='10px'
                    fontWeight='500'
                    color={'#161f60'}
                  >
                    <Image
                      src={`/${country.code}.png`}
                      width='24px'
                      height='28px'
                      alt={`${country.country}`}
                    />
                    {country.country}
                  </Link>
                ))}
              </VStack>
            </HStack>
          </VStack>
        </Card>
      </Box>
    </>
  )
}
