import React from 'react';
import GetInvolved from '../../components/features-section/FeaturesSection';
import ActivitiesSection from '../../components/activities-section/ActivitiesSection';
import SoccerActivities from '../../components/activities-section/SoccerActivities';
import BadmintonActivities from '../../components/activities-section/BadmintonActivities';
import HeroSectionForMd from '../../components/hero-section/HeroSectionForMd';
import HeroSectionForMobile from '../../components/hero-section/HeroSectionForMobile';

const Home = () => {
    return (
        <div>
            <HeroSectionForMd />
            <HeroSectionForMobile />
            <GetInvolved />
            <ActivitiesSection />
            <BadmintonActivities />
            <SoccerActivities />
            {/* <ProgramsSection /> */}
            {/* <PeopleOpinionSection /> */}
        </div>
    );
};

export default Home;