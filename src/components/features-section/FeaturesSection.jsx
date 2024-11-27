import { Heart, Wallet, Target, Users } from 'lucide-react';
import FeatureCard from './FeatureCard'; // Ensure the path is correct

export default function FeaturesSection() {
    const features = [
        {
            icon: Heart,
            title: "Become Volunteer",
            description: "Become a volunteer if you are motivated & ready to support people and the community.",
            iconColor: "bg-red-400"
        },
        {
            icon: Wallet,
            title: "Quick Donate",
            description: "The simplest and quickest way to make a donation, so you can support people in need.",
            iconColor: "bg-blue-400"
        },
        {
            icon: Target,
            title: "Our Mission",
            description: "We are dedicated to uplift the needy and/or underprivileged community to become self-sufficient.",
            iconColor: "bg-green-400"
        },
        {
            icon: Users,
            title: "Our Program",
            description: "Our objective is to alleviate poverty & hunger by uplifting humanity one family at a time.",
            iconColor: "bg-pink-400"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}
