import { Avatar, Box, Flex, Text, } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Tiago Andrade</Text>
          <Text color="gray.300" fontSize="small">
            myemail@domain
              </Text>
        </Box>
      )}

      <Avatar size="md" name="Tiago Andrade" src="https://github.com/tiagooandrade.png" />
    </Flex>
  )
}