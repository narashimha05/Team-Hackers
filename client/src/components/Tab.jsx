"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import { Sponsors } from './Sponsors';
import { Designer } from './Designer';
import { Communitypartner } from './Communitypartner';

const TAB_DATA = [
  {
    title: "Communitypartner",
    id: "Communitypartner",
    thing: <Communitypartner />,
  },
  {
    title: "Sponsors",
    id: "Sponsors",
    thing: <Sponsors />,
  },
  {
    title: "Designer",
    id: "Designer",
    thing: <Designer />,
  },
];

const Tab = () => {
  const [tab, setTab] = useState("Sponsors"); // Initial tab state matches one of the ids
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section id='services' className='bg-white'>
      <div className='flex flex-wrap justify-center md:justify-between mt-10 md:px-12 gap-4 md:gap-15'>
        <TabButton
          selectTab={() => handleTabChange('Sponsors')}
          active={tab === 'Sponsors'}>
          Sponsors
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('Communitypartner')}
          active={tab === 'Communitypartner'}>
          Community Partner
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('Designer')}
          active={tab === 'Designer'}>
          Designer
        </TabButton>
      </div>
      <div className='mt-8'>
        {selectedTab ? selectedTab.thing : null}
      </div>
    </section>
  );
}

export default Tab;
