import { useState } from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ImageIcon from "@mui/icons-material/Image";
import DatePickercomp from "./DatePickercomp";
import Select from "./Select";
import CompanySelect from "./CompanySelect";
import { useDispatch,useSelector } from "react-redux";
import {DateSelection} from "./post"
import { CircularProgress } from "@mui/material";

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
  const dispatch=useDispatch();
  const [value,setValue]=useState([]);  
  const check=useSelector((state) => state.posts);
  function f1(e)
  {
     console.log("hi");
     e.preventDefault();

     let start=document.getElementById("start").value;
     let end=document.getElementById("end").value;
     let p=start+" "+end;
    dispatch(DateSelection({date:p}));
    localStorage.setItem("pts","1");
  }
  if(localStorage.getItem("pts")==="1")
  {
       setValue(check);
       localStorage.removeItem("pts");
  }
  console.log(value);
  return (
  <div class=" py-8 md:py-10  mx-auto w-full overflow-x-auto ">
      <div class="w-full sm:mx-auto lg:max-w-full">
        <div class="space-y-4 w-full h-full ">
          
          <Item title="Past Prescription">
            <div className="flex flex-wrap md:flex-nowrap py-5">
            <div className="py-3 md:pr-5 md:py-0">
            <div>
<div date-rangepicker="" class="flex items-center">
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input id="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Start date (DD/MM/YYYY)"/>
  </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input id="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="End date  (DD/MM/YYYY)"/>
</div>
</div>
</div>
            </div>
            
            <div class="text-center">
        <button
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          type="button"
          onClick={f1} 
        >
          SHOW
        </button>
      </div>
          </div>
           {value.length==0?<CircularProgress></CircularProgress>: <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="md:py-3 md:px-6 py-2 ">
                    <ImageIcon />
                  </th>
                  <th scope="col" class="md:py-3 md:px-6 py-2 px-3">
                    items ID
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
              {value.map((product) => ( <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th 
                    scope="row"
                    class="md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap cursor-pointer  dark:text-white"
                  >
                    <AttachmentIcon />
                  </th>
       
                  <td class="md:py-4 md:px-6 py-2 px-3">{Math.floor((Math.random() * 100000) + 1)}</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">{product.dat.substring(11)}</td>
                  <td class="md:py-4 md:px-6 py-2 px-3">{product.reimbersement}</td>
                </tr>
              ))}
              </tbody>
            </table>}
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
          {/* <Item title="Total Reimburcement">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            adipisci.
          </Item> */}
        </div>
      </div>
    </div>
        ) ;
};
