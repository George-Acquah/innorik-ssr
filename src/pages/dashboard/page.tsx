import { InformationCards, Announcements, FinanceChart, TeamBarChart, CountChart } from "@/components";
import EventCalendar from "@/components/shared/eventCalendar";
import { entityData } from "@/services";

const DashboardPage = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {/* Right */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* DashboardPage Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          {entityData.map((entity, idx) => (
            <InformationCards key={idx} entity={entity} />
          ))}
        </div>
        {/* Analytics */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <TeamBarChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Left */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default DashboardPage;