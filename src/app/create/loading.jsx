"use client"
import React from 'react'
import { Flex, Loader } from '@aws-amplify/ui-react';

const loading = () => {
  return (
    <Flex alignItems="center">
      <Loader size="large" />
    </Flex>  
    )
}

export default loading