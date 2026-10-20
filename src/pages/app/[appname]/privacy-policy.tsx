import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { AppLegalLayout } from '../../../components/AppLegalLayout'
import { AppDocData, getAppDoc, getAppStaticPathsParams } from '../../../lib/apps'

interface PrivacyPolicyPageProps {
  docData: AppDocData
}

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = ({ docData }) => {
  return <AppLegalLayout docData={docData} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAppStaticPathsParams().map((param) => ({
    params: { appname: param.appname },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PrivacyPolicyPageProps> = async (context) => {
  const rawAppName = (context.params?.appname as string) || ''
  const docData = getAppDoc(rawAppName, 'privacy-policy')

  return {
    props: {
      docData,
    },
  }
}

export default PrivacyPolicyPage
