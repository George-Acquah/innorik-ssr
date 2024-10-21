import { Button, Typography } from "@/components";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex gap-4 flex-col min-h-screen justify-center items-center">
      <Typography variant="h4">Welcome to Proj Dashbard</Typography>
      <div className="flex flex-col gap-8 justify-center items-center">
        <Typography variant="span">
          Click on the button below to go to the dashboard
        </Typography>
        <NavLink to={"/dashboard"} className={''}>
          <Button variant="default" size="sm" className="px-8">
            Dashboard
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
