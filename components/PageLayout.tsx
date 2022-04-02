
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import ContentContainer from './ContentContainer'
export default function PageLayout({children}:{children:any}) {
  return (
    <>
      <AppHeader></AppHeader>
      <main>
        <ContentContainer>
          {children}
        </ContentContainer>
      </main>
      <AppFooter></AppFooter>
    </>
  )
}