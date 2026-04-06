import { services } from "../../data/site-data";
import { ServiceCard } from "./service-card";

export function ServiceList() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.title} title={service.title} description={service.description} />
      ))}
    </div>
  );
}
