import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoSchool } from 'react-icons/io5';
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic'

const Timeline = () => {
  const { theme } = useTheme();
  const [themeStatus, setThemeStatus] = useState<any | null>(null);


  useEffect(() => {
    setThemeStatus(theme);
  }, [theme])

  return (
    <div className="w-[70%]">
      <VerticalTimeline lineColor="#e9ecef">

        <VerticalTimelineElement
          id="vertical-timeline"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          contentArrowStyle={{ borderRight: '#22223b' }}

          className="vertical-timeline-element--education"
          date="2021 - now"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm">Capgemini</h4>
          <p>
            React, Typescript, C#, Sharepoint Framework, Adaptive Cards
            Extensions, Specflow, Xamarin.Android
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          id="vertical-timeline"
          className="vertical-timeline-element--education"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          date="2020 - 2021"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Technical and IT Technology Education</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm">Erasmus exchange</h4>
          <p>
            Universit?? degli Studi di Padova
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          id="vertical-timeline"
          className="vertical-timeline-element--education"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          date="2018 - 2021"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Technical and IT Technology Education</h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-sm">Bachelor Degree</h4>
          <p>
            Pedagogical University of Krakow
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
