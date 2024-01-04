import Enquirytickets from '@/Components/enquirytickets'
import Enquirydetails from '@/Components/enquirydetails'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white">
      {/* <Enquirytickets /> */}
      <Enquirydetails ticketNmbr={'36650'} departure={'CCU'} destination={'BOM'} bookingDate={'24 Dec, 22'} deportDate={'24 Dec, 22'} arrival={'24 Dec, 22'} passengers={'2'}/>
    </main>
  )
}
