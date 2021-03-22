import { MainLayout } from '../components/Layout'
import { SendBox } from '../components/SendBox'
import { AboutBox } from '../components/AboutBox'
import {SaleProgress} from '../components/SaleProgress'
export default function Home() {
  return (
    <MainLayout>
      <SaleProgress></SaleProgress>
    </MainLayout>
  )
}
