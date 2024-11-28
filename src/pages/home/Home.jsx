import React from 'react';
import HeroSection from '../../components/hero-section/HeroSection';
import GetInvolved from '../../components/features-section/FeaturesSection2';
import ActivitiesSection from '../../components/activities-section/ActivitiesSection';
import SoccerActivities from '../../components/activities-section/SoccerActivities';
import BadmintonActivities from '../../components/activities-section/BadmintonActivities';

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <FeaturesSection /> */}
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