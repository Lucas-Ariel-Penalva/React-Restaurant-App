import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-indigo-300">
      <Navigation />
      <main className="min-h-screen">
        <div className="m-6 sm:m-8 lg:m-10 text-lg md:text-xl text-gray-800">
          <p>
            This site was made with{" "}
            <a
              href="https://reactjs.org/"
              className="font-bold text-cyan-700 text-xl lg:text-2xl hover:text-cyan-500"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-bold text-blue-700 text-xl lg:text-2xl hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind
            </a>
            ,{" "}
            <a
              href="https://sweetalert2.github.io/"
              className="font-bold text-red-700 text-xl lg:text-2xl hover:text-red-500"
              target="_blank"
              rel="noreferrer"
            >
              Sweet Alerts
            </a>{" "}
            and{" "}
            <a
              href="https://spoonacular.com/food-api"
              className="font-bold text-green-700 text-xl lg:text-2xl hover:text-green-500"
              target="_blank"
              rel="noreferrer"
            >
              Spoonacular's API
            </a>
            . It uses local storage to imitate the functionality of a database
            and React-Router to create protected routes for users that have
            registered.
          </p>
          <br />
          <p>
            This is a take-home project I built according to what was requested
            to me. I had a limited amount of time, which impacted the clarity of the code, but all the desired functionality was achieved.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
