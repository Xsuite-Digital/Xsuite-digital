import React from "react";
import { Icon } from '@iconify/react';
import WorkProcessStep from "./WorkProcessStep";

const WorkProcess = () => {
  const steps = [
    {
      icon: <Icon icon='mdi:file-document' className="w-8 h-8" />, // Pass the icon as JSX
      title: "Briefing",
      description: "Gathering requirements to understand your needs.",
    },
    {
      icon: <Icon icon='mdi:lightbulb' className="w-8 h-8" />, // Pass the icon as JSX
      title: "Idea Generating",
      description: "Brainstorming innovative strategies for your project.",
    },
    {
      icon: <Icon icon='mdi:target' className="w-8 h-8" />, // Pass the icon as JSX
      title: "Processing",
      description: "Implementing solutions with precision and care.",
    },
    {
      icon: <Icon icon='mdi:check-circle' className="w-8 h-8" />, // Pass the icon as JSX
      title: "Finishing",
      description: "Final review and delivery of the project.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between mt-12">
          <h1 className="text-4xl lg:block flex items-center justify-center font-bold mb-4 md:mb-0">
            Our Work Process
          </h1>
          <p className="text-gray-600 flex justify-start items-center text-center max-w-md">
            Discover a spectrum of cutting-edge digital marketing services
            tailored to elevate your online presence, drive engagement.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-8 md:space-y-0">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <WorkProcessStep {...step} />
            {index < steps.length - 1 && (
              <div className="border-l-2 border-dashed border-black w-20 mx-auto hidden md:block" />
            )}
            {index < steps.length - 1 && (
              <div className="border-l-2 border-dashed border-black h-12 mx-auto block md:hidden" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
