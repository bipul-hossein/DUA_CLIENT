import React from 'react';
// import { LucideIcon } from 'lucide-react'; // Adjust the import as needed

export default function FeatureCard({ icon: Icon, title, description, iconColor }) {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <div className={`w-16 h-16 rounded-full ${iconColor} flex items-center justify-center mb-4`}>
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
