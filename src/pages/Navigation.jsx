import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 w-3/4 rounded-md bg-orange-200 mx-auto p-4 text-gray-700">
        <li>
          <Link
            to="/test"
            className="text-blue-800 text-2xl mr-3 font-pacifico"
          >
            Test
          </Link>
        </li>

        <li>
          <Link
            to="/frame"
            className="text-green-800 text-2xl mr-3 font-pacifico"
          >
            Frame
          </Link>
        </li>

        <li>
          <Link to="container">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Container
            </p>
          </Link>
        </li>

        <li>
          <Link to="Modal">
            <p className="text-green-800 text-2xl mr-3 font-mulish">Modal</p>
          </Link>
        </li>

        <li>
          <Link to="rme">
            <p className="text-green-800 text-2xl mr-3 font-mulish">Modal</p>
          </Link>
        </li>

        <li>
          <Link to="accoridionMenu">
            <p className="text-green-800 text-2xl mr-3 font-mulish">Acc Menu</p>
          </Link>
        </li>

        <li>
          <Link to="acc2">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Acc Menu 2
            </p>
          </Link>
        </li>

        <li>
          <Link to="acc4">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Acc Menu 4
            </p>
          </Link>
        </li>

        <li>
          <Link to="MobileNavBar">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Mob Nav Bar
            </p>
          </Link>
        </li>

        <li>
          <Link to="CWMNB">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              CWMNB
            </p>
          </Link>
        </li>


        
        <li>
          <Link to="register">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Register
            </p>
          </Link>
        </li>

        <li>
          <Link to="tvcard">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              TV Card
            </p>
          </Link>
        </li>

        <li>
          <Link to="Auto">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Auto
            </p>
          </Link>
        </li>

        <li>
          <Link to="Layout">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Layout
            </p>
          </Link>
        </li>

        <li>
          <Link to="SolarContainer">
            <p className="text-green-800 text-2xl mr-3 font-mulish">
              Solar Container
            </p>
          </Link>
        </li>


      </ul>
    </div>
  );
}

export default Navigation