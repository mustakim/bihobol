import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { AppLegalLayout } from '../../../components/AppLegalLayout'
import { AppDocData, getAppDoc, getAppStaticPathsParams } from '../../../lib/apps'

interface TermsPageProps {
  docData: AppDocData
}

const TermsPage: NextPage<TermsPageProps> = ({ docData }) => {
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

export const getStaticProps: GetStaticProps<TermsPageProps> = async (context) => {
  const rawAppName = (context.params?.appname as string) || ''
  const docData = getAppDoc(rawAppName, 'terms')

  return {
    props: {
      docData,
    },
  }
}

export default TermsPage
