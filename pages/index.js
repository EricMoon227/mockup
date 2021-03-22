import { MainLayout } from '../components/Layout'
import { SendBox } from '../components/SendBox'
import {SaleProgress} from '../components/SaleProgress'
import {GetNotify} from '../components/GetNotify'
export default function Home() {
  return (
    <MainLayout>
      <GetNotify></GetNotify>
    </MainLayout>
  )
}
