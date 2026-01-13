import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import ContainerLayout from "@/layouts/ContainerLayout";

interface HeroBannerProps {
  // Background
  backgroundImage?:  string | StaticImageData;
  backgroundAlt?: string;
  backgroundClassName?: string;
  backgroundQuality?: number;
  backgroundPriority?: boolean;
  
  // Content
  title?: string | React.ReactNode;
  titleClassName?: string;
  subtitle?: string | React.ReactNode;
  subtitleClassName?: string;
  
  // Buttons
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonVariant?: "primary" | "secondary";
  secondaryButtonVariant?: "primary" | "secondary";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  
  // Layout
  height?: string;
  paddingX?: string;
  maxWidth?: string;
  contentAlignment?: "left" | "center" | "right";
  
  // Customization
  customContent?: React.ReactNode;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  // Background
  backgroundImage,
  backgroundAlt,
  backgroundClassName,
  backgroundQuality,
  backgroundPriority,
  
  // Content
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  
  // Buttons
  primaryButtonText,
  secondaryButtonText,
  primaryButtonVariant = "primary",
  secondaryButtonVariant = "secondary",
  onPrimaryClick,
  onSecondaryClick,
  
  // Layout
  height = "h-[860px]",
  paddingX = "",
  maxWidth = "max-w-5xl",
  contentAlignment = "left",
  
  // Customization
  customContent,
  overlay = false,
  overlayColor = "black",
  overlayOpacity = 0.3,
}) => {
  const contentAlignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <section className={`relative ${height} w-full bg-hero-bg overflow-hidden`}>
      {/* Background Image */}
      
      <div className="absolute inset-0">
        
        <Image
          src={backgroundImage || "/hero-banner.jpg"}
          alt={backgroundAlt || "Hero background image"}
          fill
          className={backgroundClassName || "object-cover scale-110"}
          priority={backgroundPriority || true}
          quality={backgroundQuality || 90}
        />
        
        {/* Optional Overlay */}
        {overlay && (
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundColor: overlayColor, 
              opacity: overlayOpacity 
            }}
          />
        )}
      </div>

      {/* Content */}
     <ContainerLayout>
       <div className={`relative ${height} flex items-end pb-28`}>
        <div className={`${paddingX} w-full`}>
          <div className={`${maxWidth} ${contentAlignmentClasses[contentAlignment]}`}>
            {/* Custom Content or Default Content */}
            {customContent ? (
              customContent
            ) : (
              <>
                <h1 className={titleClassName}>
                  {title}
                </h1>
                
                <p className={subtitleClassName}>
                  {subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant={primaryButtonVariant} 
                    onClick={onPrimaryClick}
                  >
                    {primaryButtonText}
                  </Button>
                  <Button 
                    variant={secondaryButtonVariant} 
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonText}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
     </ContainerLayout>
    </section>
  );
};

export default HeroBanner;