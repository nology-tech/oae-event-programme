import React from "react";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem"

const Schedule = () => {


    return (
        <div className="schedule">
            <ScheduleItem header="Welome" isImg="false" />
            <ScheduleItem header="header" subHeader="subheader" description="lorem ipsum whatever"/>
            <ScheduleItem header="header" subHeader="subheader" description="lorem ipsum whatever"/>
        </div>
    )
}

export default Schedule;