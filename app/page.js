import Enquirytickets from '@/Components/enquirytickets'
import Enquirydetails from '@/Components/enquirydetails'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white">
      {/* <Enquirytickets /> */}
      <Enquirydetails />
    </main>
  )
}
