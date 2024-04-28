import React from "react";
import Card from "./card";
function App() {
  const data = [
    {
      plan: "Free",
      price: 0,
      user: "Single User",
      isUser: true,
      storage: "5GB Storage",
      isStorage: true,
      publicprojects: "Unlimited Public Projects",
      isPublicprojects: true,
      access: "Community Access",
      isAccess: true,
      privateprojects: "Unlimited Private Projects",
      isPrivateprojects: false,
      support: "Dedicated Phone Support",
      isSupport: false,
      subdomain: "Free Subdomain",
      isSubdomain: false,
      reports: "Monthly Status Reports",
      isReports: false,
    },
    {
      plan: "Plus",
      price: 9,
      user: "5 Users",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicprojects: "Unlimited Public Projects",
      isPublicprojects: true,
      access: "Community Access",
      isAccess: true,
      privateprojects: "Unlimited Private Projects",
      isPrivateprojects: true,
      support: "Dedicated Phone Support",
      isSupport: true,
      subdomain: "Free Subdomain",
      isSubdomain: true,
      reports: "Monthly Status Reports",
      isReports: false,
    },
    {
      plan: "Pro",
      price: 49,
      user: "Users",
      isUser: true,
      storage: "150GB Storage",
      isStorage: true,
      publicprojects: "Unlimited Public Projects",
      isPublicprojects: true,
      access: "Community Access",
      isAccess: true,
      privateprojects: "Unlimited Private Projects",
      isPrivateprojects: true,
      support: "Dedicated Phone Support",
      isSupport: true,
      subdomain: "Free Subdomain",
      isSubdomain: true,
      reports: "Monthly Status Reports",
      isReports: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5 vh-100">
        <div className="container">
          <div className="row">
            {data.map((e, i) => {
              return <Card details={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
