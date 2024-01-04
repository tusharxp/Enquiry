import Enquirydetails from "@/app/enquirydetails/enquirydetails";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white">
      <Enquirydetails
        ticketNmbr={"36650"}
        departure={"CCU"}
        destination={"BOM"}
        bookingDate={"24 Dec, 22"}
        deportDate={"24 Dec, 22"}
        arrival={"24 Dec, 22"}
        passengers={"2"}
      />
    </div>
  );
}
