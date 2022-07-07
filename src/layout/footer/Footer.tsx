import React from 'react';

import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-blackst pt-4 pb-8 dark:bg-gray-500 xl:pt-8 ">
      <div className="mx-auto max-w-screen-lg px-4 text-gray-400 dark:text-gray-300 sm:px-6 md:px-8 ">
        <ul className="flex flex-wrap  justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-2/6">
            <div className="mr-5 w-64 text-left">
              <img className="mb-4" src="assets/images/logo.png" alt="Logo" />
              <h2 className="mb-4 text-white ">
                Inscris-toi à notre newsletter
              </h2>
              <ul>
                <li className="mb-4">
                  <form className="flex w-3/4 max-w-sm flex-col space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0">
                    <div className=" relative ">
                      <input
                        type="text"
                        id='"form-subscribe-Subscribe'
                        className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-blackst py-2 px-4 text-base text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Je m'abonne"
                      />
                    </div>
                  </form>
                </li>
                <li className="mb-4 transition-colors duration-200">
                  <p className="text-sm">
                    En fournissant votre e-mail, vous acceptez les conditions
                    d&apos;utilisation et la politique de confidentialité. Vous
                    pourrez vous désinscrire par la suite.
                  </p>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <p className="text-sm">
                    &#169; 2022 Sergio Tacchini&#174;, Inc.
                  </p>
                </li>
                <li className="mb-4 transition-colors duration-200 ">
                  <p className="text-sm">
                    la politique de confidentialité. / les conditions
                    d&apos;utilisation / Paramètres de cookies
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/6">
            <div className="m-5 text-left ">
              <h2 className="mb-4 text-base text-white">Contactez-nous</h2>
              <ul>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/6">
            <div className="m-5 text-left">
              <h2 className="mb-4 text-base text-white">Service client</h2>
              <ul>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Aide et FAQ</a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Expéditions & livraison</a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Retours</a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Suivi de commande</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/6">
            <div className="m-5 text-left">
              <h2 className="mb-4 text-base text-white">
                A propos de Sergio Tacchini
              </h2>
              <ul>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Notre histoire</a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">For the record</a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Réductions étudiant</a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/6">
            <div className="m-5 text-left">
              <h2 className="mb-4 text-base text-white">Réseaux sociaux</h2>
              <ul>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#" className="inline-flex items-center p-1 px-1">
                    <BsFacebook />
                    <p className="px-4">Facebook</p>
                  </a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#" className="inline-flex items-center p-1 px-1">
                    <BsTwitter />
                    <p className="px-6">Twitter</p>
                  </a>
                </li>
                <li className="mb-4 text-sm transition-colors duration-200 hover:text-gray-500 dark:hover:text-white">
                  <a href="#" className="inline-flex items-center p-1 px-1">
                    <BsInstagram />
                    <p className="px-4">Instagram</p>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
