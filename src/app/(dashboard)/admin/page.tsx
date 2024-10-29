import Announcements from "@/components/Announcements";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import UserCard from "@/components/UserCard";
import Chart2 from "@/components/Chart2"; // Make sure to import Chart2

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Gas Consumption" data_number={1234} changes={5} />
          <UserCard type="Gas Use Intensity" data_number={987} changes={-3} />
          <UserCard type="Electric Supply" data_number={4567} changes={8} />
          <UserCard type="Water Consumption" data_number={789} changes={-2} />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* CHART 2 */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <Chart2 />
          </div>
        </div>
        {/* USER CARDS REPLACEMENT */}
        <div className="flex gap-4 justify-between flex-wrap mt-8">
          <UserCard type="Electric Consumption" data_number={1234} changes={5} />
          <UserCard type="Electric Use Intensity" data_number={987} changes={-3} />
          <UserCard type="Water Use Intensity" data_number={789} changes={-2} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
