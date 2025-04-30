
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  action?: string;
}

const FeatureCard = ({ title, description, icon: Icon, color, action }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-100 rounded-md h-32 flex items-center justify-center text-gray-400">
          Feature Visualization
        </div>
      </CardContent>
      <CardFooter>
        {action && (
          <Button variant="ghost" className="text-aryn-blue hover:text-aryn-blue-light hover:bg-blue-50">
            {action} →
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
