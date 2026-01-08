import HeroBanner from "@/components/reuseable/heroBanner";

// Example usage of the reusable HeroBanner component
export default function ExamplePage() {
  return (
    <div>
      {/* Basic usage with minimal props - will use defaults for height, padding, etc. */}
      <HeroBanner
        backgroundImage="/hero-banner.jpg"
        backgroundAlt="Hero background"
        title="Your Title Here"
        subtitle="Your subtitle text here"
        primaryButtonText="Primary Action"
        secondaryButtonText="Secondary Action"
      />
      
      {/* Customized hero banner with full customization */}
      <HeroBanner
        backgroundImage="/custom-hero-image.jpg"
        backgroundAlt="Custom hero background"
        backgroundClassName="object-cover scale-100"
        backgroundQuality={80}
        title="Custom Title"
        titleClassName="text-5xl font-bold text-white"
        subtitle="Custom subtitle text with your own styling"
        subtitleClassName="text-lg text-gray-200"
        primaryButtonText="Custom Primary"
        secondaryButtonText="Custom Secondary"
        primaryButtonVariant="secondary"
        secondaryButtonVariant="primary"
        height="h-[700px]"
        paddingX="px-8 lg:px-16"
        maxWidth="max-w-4xl"
        contentAlignment="center"
        overlay={true}
        overlayColor="rgba(0, 0, 0, 0.6)"
        overlayOpacity={0.4}
      />
      
      {/* Hero banner with completely custom content */}
      <HeroBanner
        backgroundImage="/another-image.jpg"
        customContent={
          <div className="text-center">
            <h1 className="text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
              Your Custom Heading
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Your custom paragraph text goes here. This completely replaces
              the default title and subtitle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Custom Button 1
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Custom Button 2
              </button>
            </div>
          </div>
        }
        height="h-[500px]"
        contentAlignment="center"
        overlay={true}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
    </div>
  );
}