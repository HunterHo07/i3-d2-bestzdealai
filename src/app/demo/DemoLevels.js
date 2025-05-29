'use client';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DemoLevels = ({ levels, currentLevel, onLevelChange }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {levels.map((level) => (
        <Card 
          key={level.id}
          variant={currentLevel === level.id ? 'neon' : 'glass'}
          className={`p-6 cursor-pointer transition-all duration-300 ${
            currentLevel === level.id ? 'scale-105 border-2 border-cyan-500' : 'hover:scale-102'
          }`}
          onClick={() => onLevelChange(level.id)}
          glow={currentLevel === level.id}
        >
          <div className="text-center">
            {/* Level Badge */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
              currentLevel === level.id 
                ? 'bg-cyan-500 text-white' 
                : 'bg-gray-700 text-gray-300'
            }`}>
              <span className="text-xl font-bold">{level.id}</span>
            </div>

            {/* Level Title */}
            <h3 className="text-xl font-bold text-white mb-2">
              {level.title}
            </h3>

            {/* Level Description */}
            <p className="text-gray-400 text-sm mb-4">
              {level.description}
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              {level.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    currentLevel === level.id ? 'bg-cyan-400' : 'bg-gray-500'
                  }`} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <Button 
              variant={currentLevel === level.id ? 'primary' : 'ghost'}
              size="sm"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                onLevelChange(level.id);
              }}
            >
              {currentLevel === level.id ? 'Active Level' : 'Try This Level'}
            </Button>

            {/* Current Level Indicator */}
            {currentLevel === level.id && (
              <div className="mt-4 text-xs text-cyan-400 font-medium">
                ← Currently Active
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DemoLevels;
