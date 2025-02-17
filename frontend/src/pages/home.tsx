import { Link } from "react-router-dom";
import {
  BrainIcon,
  GithubIcon,
  LightbulbIcon,
  LinkedinIcon,
  ShareIcon,
  TwitterIcon,
} from "lucide-react";
import { Spotlight } from "../components/ui/Spotlight";
import { ReactElement } from "react";

const socialLinks: { url: string; icon: ReactElement }[] = [
  {
    url: "https://x.com/shuklaji_10",
    icon: (
      <TwitterIcon className="h-6 w-6 transition-all duration-300 ease-in-out hover:text-mediumslateblue" />
    ),
  },
  {
    url: "https://www.linkedin.com/in/ashutoshshukla10/",
    icon: (
      <LinkedinIcon className="h-6 w-6 transition-all duration-300 ease-in-out hover:text-mediumslateblue" />
    ),
  },
  {
    url: "https://github.com/code-it-vro",
    icon: (
      <GithubIcon className="h-6 w-6 transition-all duration-300 ease-in-out hover:text-mediumslateblue" />
    ),
  },
];

const Home = () => {
  return (
    <div className="container mx-auto w-full min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <div className="min-h-screen w-full bg-gradient-to-b from-seasalt to-gray-100 flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="black"
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <BrainIcon className="h-24 w-24 text-mediumslateblue" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-noto-serif text-oxfordblue">
            ThinkSync - Where Ideas Connect
          </h1>
          <p className="text-sm md:text-2xl mb-8 text-battleshipgray max-w-2xl mx-auto font-playpen-sans">
            Effortlessly manage your thoughts, tasks, and inspirations in one
            centralized hub. Think smarter, live simpler.
          </p>
          <p className="text-sm md:text-2xl mb-8 text-oxfordblue max-w-2xl mx-auto font-playpen-sans">
            Sign up to effortlessly organize your ideas and access them anytime,
            anywhere, free from{" "}
            <span className="font-semibold text-mediumslateblue ">emails </span>
            chaos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="/authenticate"
              className="bg-mediumslateblue text-seasalt px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out flex items-center justify-center"
            >
              <LightbulbIcon className="mr-2 h-5 w-5" />
              Start Syncing
            </Link>
            <Link
              to="/all-shared-links"
              className="bg-seasalt text-mediumslateblue px-8 py-3 rounded-full text-lg font-semibold border-2 border-mediumslateblue hover:bg-mediumslateblue hover:text-seasalt transition duration-300 ease-in-out flex items-center justify-center"
            >
              <ShareIcon className="mr-2 h-5 w-5" />
              Discover Collaborative Spaces
            </Link>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="bg-gray-100 flex flex-col justify-center items-center p-4 gap-4">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <Link key={index} to={link.url} target="_blank">
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-battleshipgray">
          &copy; {new Date().getFullYear()} Your Second Brain. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
