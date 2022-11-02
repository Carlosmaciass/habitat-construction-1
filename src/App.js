import iconPSE from "./assets/img/pse.png";
import imgHabitat1 from "./assets/img/habitat1.png";
import imgHabitat2 from "./assets/img/habitat2.png";
import imgHabitat3 from "./assets/img/habitat3.png";
import imgHabitat4 from "./assets/img/habitat4.png";
import iconCredibanco from "./assets/img/credibanco.png";
import logo from "./assets/img/logo-habitat.svg";
import './App.css';
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <div className="flex min-h-[100vh] flex-col md:flex-row">
        <div className="w-full md:w-2/4 bg-[#87b484]">
          <div className="h-full flex justify-center container2 flex-col">
            <div className="container2 pt-[5%] flex justify-between items-center">
              <img src={logo} alt="logo" className="max-w-[140px] md:max-w-[200px]" />

              <div className="flex gap-[10%]">
                <motion.a
                  href="https://www.instagram.com/habitatadultomayor/"
                  target="_blank"
                  whileHover={{ scale: [null, 1.09, 1.1], rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <SocialIcon
                    network="instagram"
                    bgColor="#fff"
                    style={{ height: 45, width: 45 }}
                  />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/HabitatAdultoMayor/"
                  target="_blank"
                  whileHover={{ scale: [null, 1.09, 1.1], rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <SocialIcon
                    network="facebook"
                    bgColor="#fff"
                    style={{ height: 45, width: 45 }}
                  />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/channel/UClvZhJj80PCXbwxwdTwKjjg/featured"
                  target="_blank"
                  whileHover={{ scale: [null, 1.09, 1.1], rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <SocialIcon
                    network="youtube"
                    bgColor="#fff"
                    style={{ height: 45, width: 45 }}
                  />
                </motion.a>
              </div>
            </div>
            <h1 className="text-[27px] md:text-[40px] font-bold text-white text-center pb-[15%] pt-[20%] leading-tight">
              Estamos actualizando nuestro sitio web para una mejor experiencia
            </h1>
            <h2 className="text-center text-white font-bold text-[25px] md:text-[30px] pb-[5%]">
              Paga tus facturas aquí
            </h2>
            <div className="w-full flex gap-[5%] pb-[15%]">
              <motion.a
                href=""
                className="bg-white w-[50%] rounded-[30px] py-[5%]"
                whileHover={{ scale: [null, 1.09, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={iconPSE}
                  alt="icon-pse"
                  className="max-w-[90px] md:max-w-[150px] rounded-[20px] m-auto"
                />
              </motion.a>
              <motion.a
                href=""
                className="bg-white w-[50%] flex rounded-[30px]"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.09 }}
              >
                <img
                  src={iconCredibanco}
                  alt="icon-credibanco"
                  className="m-auto max-w-[140px] md:max-w-[200px] "
                />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/4 grid grid-cols-2 min-h-[400px] md:min-h-[100vh]">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHabitat1})` }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHabitat2})` }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHabitat3})` }}
          ></div>
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHabitat4})` }}
          ></div>
        </div>
      </div>

      {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
    </div>
  );
}

export default App;
