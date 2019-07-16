import {MDXProvider} from '@mdx-js/react'
import {
  BaseStyles,
  Box,
  Flex,
  Link,
  StyledOcticon,
  theme,
} from '@primer/components'
import {Pencil} from '@primer/octicons-react'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Blockquote from './blockquote'
import Code from './code'
import Head from './head'
import DescriptionList from './description-list'
import Header from './header'
import {H1, H2, H3, H4, H5, H6} from './heading'
import HorizontalRule from './horizontal-rule'
import Image from './image'
import InlineCode from './inline-code'
import List from './list'
import Paragraph from './paragraph'
import Sidebar from './sidebar'
import Table from './table'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  img: Image,
  p: Paragraph,
  hr: HorizontalRule,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: List,
  ol: List.withComponent('ol'),
  dl: DescriptionList,
}

function Layout({children, pageContext}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <Head title={pageContext.frontmatter.title} />
          <Flex flexDirection="column" minHeight="100vh">
            <Header />
            <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
              <Flex minWidth={240}>
                <Sidebar />
              </Flex>
              <Box width="100%" maxWidth={960} p={5} mx="auto">
                <H1>{pageContext.frontmatter.title}</H1>
                {children}
                <Box my={6}>
                  <Link href={pageContext.editUrl}>
                    <StyledOcticon icon={Pencil} mr={2} />
                    Edit this page on GitHub
                  </Link>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </BaseStyles>
      </ThemeProvider>
    </MDXProvider>
  )
}

export default Layout
