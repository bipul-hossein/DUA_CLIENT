import React from 'react';
import HeroSection from '../../components/hero-section/HeroSection';
import FeaturesSection from '../../components/features-section/FeaturesSection';
import GetInvolved from '../../components/features-section/FeaturesSection2';
import ActivitiesSection from '../../components/activities-section/ActivitiesSection';
import ProgramsSection from '../../components/programs-section/ProgramsSection';
import PeopleOpinionSection from '../../components/people-comments/PeopleOpinionSection';
import SoccerActivities from '../../components/activities-section/SoccerActivities';
import FootballActivities from '../../components/activities-section/FootballActivities';

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <FeaturesSection /> */}
            <GetInvolved />
            <ActivitiesSection />
            <FootballActivities />
            <SoccerActivities />
            {/* <ProgramsSection /> */}
            {/* <PeopleOpinionSection /> */}
        </div>
    );
};

export default Home;