import { useState } from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ImageIcon from "@mui/icons-material/Image";
import DatePickercomp from "./DatePickercomp";
import Select from "./Select";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const AccodianData = () => {
  return (
    <div class=" py-8 md:py-10  mx-auto w-full overflow-x-auto ">
      <div class="w-full sm:mx-auto lg:max-w-full">
        <div class="space-y-4 w-full ">
          
          <Item title="Past Prescription">
            <div className="flex flex-wrap md:flex-nowrap py-5">
            <div className="py-5 md:pr-5 md:py-0">
              <DatePickercomp />
            </div>
            <Select />
          </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="md:py-3 md:px-6 py-2 ">
                    <ImageIcon />
                  </th>
                  <th scope="col" class="md:py-3 md:px-6 py-2 px-3">
                    items
                  </th>
                  <th scope="col" class="md:py-3 md:px-6 py-2 px-3">
                    Date
                  </th>
                  <th scope="col" class="md:py-3 md:px-6 py-2">
                    Reimbursement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
                  <td class="md:py-4 md:px-6 py-2 px-3">8</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">01/01/22</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">2999</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
                  <td class="md:py-4 md:px-6  py-2 px-3">10</td>
                  <td class="md:py-4 md:px-6  py-2 px-3">01/01/22</td>
                  <td class="md:py-4 md:px-6  py-2 px-3">1999</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
                  <td class="md:py-4 md:px-6 py-2 px-3">3</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">01/01/22</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">99</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
                  <td class="md:py-4 md:px-6 py-2 px-3">6</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">01/01/22</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">179</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
                  <td class="md:py-4 md:px-6 py-2 px-3">4</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">01/01/22</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">699</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
                  <td class="md:py-4 md:px-6 py-2 px-3">6</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">01/01/22</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">3999</td>
                </tr>
              </tbody>
            </table>
            <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </Item>
          <Item title="Total Reimburcement">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            adipisci.
          </Item>
        </div>
      </div>
    </div>
  );
};
